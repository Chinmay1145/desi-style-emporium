
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/products/ProductGrid";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { allProducts, getFeaturedProducts, getBestsellerProducts, getNewArrivals } from "@/data/products";

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [bestsellers, setBestsellers] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  
  useEffect(() => {
    // Set featured products
    setFeaturedProducts(getFeaturedProducts().slice(0, 4));
    // Set bestsellers
    setBestsellers(getBestsellerProducts().slice(0, 8));
    // Set new arrivals
    setNewArrivals(getNewArrivals().slice(0, 4));
  }, []);

  const categories = [
    {
      name: "Western Outfits",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
      path: "/category/western-outfits",
    },
    {
      name: "Luxury Watches",
      image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0",
      path: "/category/watches",
    },
    {
      name: "Premium Headphones",
      image: "https://images.unsplash.com/photo-1545127398-14699f92334b",
      path: "/category/headphones",
    },
    {
      name: "Smartphones",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
      path: "/category/smartphones",
    },
  ];
  
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1614252369475-531eba835eb1"
            alt="Luxury Fashion"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-20 mx-auto px-4">
          <div className="max-w-lg">
            <h1 className="text-white text-4xl md:text-5xl font-serif font-bold mb-4">
              Premium Western Fashion & Accessories
            </h1>
            <p className="text-white/90 text-lg mb-8">
              Discover curated collections of luxury items at Desi Style Emporium.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="font-medium">
                  Shop Now
                </Button>
              </Link>
              <Link to="/category/western-outfits">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  Explore Collections
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-semibold mb-8 text-center">Shop By Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link to={category.path} key={category.name}>
                <div className="relative h-60 rounded-lg overflow-hidden group">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <h3 className="text-white text-xl font-medium">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <h2 className="text-3xl font-serif font-semibold">Featured Products</h2>
            <Link to="/products">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="bg-primary/10 rounded-xl py-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Special Offer</h3>
              <p className="text-lg mb-6">Get 20% off on all premium headphones this week.</p>
              <Link to="/category/headphones">
                <Button>Shop Now</Button>
              </Link>
            </div>
            <img
              src="https://images.unsplash.com/photo-1545127398-14699f92334b"
              alt="Headphones Promotion"
              className="w-full md:w-1/3 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Bestsellers Carousel */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <h2 className="text-3xl font-serif font-semibold">Bestsellers</h2>
            <Link to="/products?filter=bestseller">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              {bestsellers.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-2">
                    <ProductGrid products={[product]} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <h2 className="text-3xl font-serif font-semibold">New Arrivals</h2>
            <Link to="/products?filter=new">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <ProductGrid products={newArrivals} />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-4">Join Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive updates on new products, special offers, and styling tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-input bg-background"
              />
              <Button className="whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
