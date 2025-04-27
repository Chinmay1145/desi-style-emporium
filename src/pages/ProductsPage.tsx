
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductGrid from "@/components/products/ProductGrid";
import ProductFilters from "@/components/products/ProductFilters";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { allProducts, Product } from "@/data/products";
import { SlidersHorizontal, X } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<any>({
    priceRange: [0, 200000],
    categories: [],
    ratings: []
  });

  const minPrice = 0;
  const maxPrice = 120000;

  useEffect(() => {
    // Set unique categories from all products
    const allCategories = [...new Set(allProducts.map(p => p.category))];
    setCategories(allCategories);

    // Get products based on search params
    let filteredProducts;
    const filterParam = searchParams.get("filter");
    if (filterParam === "bestseller") {
      filteredProducts = allProducts.filter(p => p.bestseller);
    } else if (filterParam === "new") {
      filteredProducts = allProducts.filter(p => p.new);
    } else if (filterParam === "featured") {
      filteredProducts = allProducts.filter(p => p.featured);
    } else {
      filteredProducts = [...allProducts];
    }

    setProducts(filteredProducts);
    setFilteredProducts(filteredProducts);
    
    // Initialize price range based on actual products
    if (filteredProducts.length > 0) {
      const prices = filteredProducts.map(p => p.price);
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      setActiveFilters(prev => ({...prev, priceRange: [min, max]}));
    }
  }, [searchParams]);

  const handleSortChange = (value: string) => {
    setSortOption(value);
    
    // Sort the products
    const sorted = [...filteredProducts];
    switch (value) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - no sorting needed
        break;
    }
    
    setFilteredProducts(sorted);
  };

  const applyFilters = (filters: any) => {
    setActiveFilters(filters);
    
    let filtered = [...products];
    
    // Filter by price range
    if (filters.priceRange) {
      filtered = filtered.filter(
        p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
      );
    }
    
    // Filter by categories
    if (filters.categories && filters.categories.length > 0) {
      filtered = filtered.filter(p => filters.categories.includes(p.category));
    }
    
    // Filter by ratings
    if (filters.ratings && filters.ratings.length > 0) {
      filtered = filtered.filter(p => {
        const productRating = Math.floor(p.rating);
        return filters.ratings.some((r: number) => productRating >= r);
      });
    }
    
    setFilteredProducts(filtered);
    
    // Re-apply sort if a sort option is selected
    if (sortOption !== "featured") {
      handleSortChange(sortOption);
    }
  };

  const resetFilters = () => {
    setActiveFilters({
      priceRange: [minPrice, maxPrice],
      categories: [],
      ratings: []
    });
    setFilteredProducts(products);
  };

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold mb-2">All Products</h1>
        <p className="text-muted-foreground">
          Discover our collection of premium products.
        </p>
      </div>

      {/* Filters and Sorting */}
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          {/* Mobile Filter Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Narrow down your product search
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6">
                <ProductFilters
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  categories={categories}
                  onFilterChange={applyFilters}
                  onReset={resetFilters}
                />
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Filter Toggle */}
          <Button
            variant="outline"
            className="hidden md:flex"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? (
              <>
                <X className="h-4 w-4 mr-2" />
                Hide Filters
              </>
            ) : (
              <>
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Show Filters
              </>
            )}
          </Button>

          <p className="text-sm text-muted-foreground">
            Showing {filteredProducts.length} products
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm mr-2">Sort by:</span>
          <Select value={sortOption} onValueChange={handleSortChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Featured" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="name-asc">Name: A to Z</SelectItem>
              <SelectItem value="name-desc">Name: Z to A</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Content Grid */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar Filters - Desktop */}
        {showFilters && (
          <div className="hidden md:block w-64 mr-8 flex-shrink-0">
            <ProductFilters
              minPrice={minPrice}
              maxPrice={maxPrice}
              categories={categories}
              onFilterChange={applyFilters}
              onReset={resetFilters}
            />
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Try changing your filters or search terms.
              </p>
              <Button onClick={resetFilters}>Reset Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
