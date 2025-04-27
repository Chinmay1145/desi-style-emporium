
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById, getRelatedProducts, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Heart,
  Minus,
  Plus,
  Check,
  ArrowLeft,
  Star,
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import ProductGrid from "@/components/products/ProductGrid";
import { Product } from "@/data/products";

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (productId) {
      const foundProduct = getProductById(productId);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(0);
        setQuantity(1);
        
        // Set default selected color and size if available
        if (foundProduct.colors && foundProduct.colors.length > 0) {
          setSelectedColor(foundProduct.colors[0]);
        } else {
          setSelectedColor(null);
        }
        
        if (foundProduct.sizes && foundProduct.sizes.length > 0) {
          setSelectedSize(foundProduct.sizes[0]);
        } else {
          setSelectedSize(null);
        }
        
        // Get related products
        const related = getRelatedProducts(foundProduct);
        setRelatedProducts(related);
      }
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/products">
            <Button>Return to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const discountPercentage = product.discountedPrice
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
    : 0;

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <div className="mb-8">
        <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
      </div>

      {/* Product Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg border">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 border rounded overflow-hidden ${
                    selectedImage === index
                      ? "ring-2 ring-primary"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          {product.bestseller && (
            <Badge className="mb-2">Bestseller</Badge>
          )}
          {product.new && (
            <Badge variant="secondary" className="mb-2">New Arrival</Badge>
          )}

          <h1 className="text-3xl font-serif font-bold mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              ({product.numReviews} reviews)
            </span>
          </div>

          <div className="mb-6">
            <div className="flex items-center">
              {product.discountedPrice ? (
                <>
                  <span className="text-2xl font-bold text-primary">
                    {formatPrice(product.discountedPrice)}
                  </span>
                  <span className="ml-2 text-lg text-muted-foreground line-through">
                    {formatPrice(product.price)}
                  </span>
                  <Badge variant="destructive" className="ml-2">
                    Save {discountPercentage}%
                  </Badge>
                </>
              ) : (
                <span className="text-2xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Inclusive of all taxes
            </p>
          </div>

          <div className="mb-6">
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Color:</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`px-3 py-1 border rounded-md ${
                      selectedColor === color
                        ? "ring-2 ring-primary"
                        : "hover:border-primary"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                    {selectedColor === color && (
                      <Check className="ml-1 inline h-4 w-4" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Size:</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-3 py-1 border rounded-md ${
                      selectedSize === size
                        ? "ring-2 ring-primary"
                        : "hover:border-primary"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                    {selectedSize === size && (
                      <Check className="ml-1 inline h-4 w-4" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-3">Quantity:</h3>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-6 w-8 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(1)}
                disabled={quantity >= product.stock}
              >
                <Plus className="h-4 w-4" />
              </Button>
              <span className="ml-4 text-sm text-muted-foreground">
                {product.stock} units available
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              className="flex-1 sm:flex-none"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button variant="outline" className="flex-1 sm:flex-none">
              <Heart className="mr-2 h-4 w-4" />
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs: Description, Specs, Reviews */}
      <Tabs defaultValue="description" className="mb-16">
        <TabsList className="mb-8">
          <TabsTrigger value="description">Description</TabsTrigger>
          {product.specifications && (
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
          )}
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="text-muted-foreground">
          <p>{product.description}</p>
          <p className="mt-4">
            Experience premium quality with our carefully selected products.
            Each item in our collection represents the perfect blend of style,
            functionality, and craftsmanship.
          </p>
          <p className="mt-4">
            Our {product.name} is designed to provide an exceptional experience
            with attention to detail and quality materials.
          </p>
        </TabsContent>
        {product.specifications && (
          <TabsContent value="specifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="border-b pb-2">
                  <span className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}: </span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        )}
        <TabsContent value="reviews">
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="flex mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-medium">
                {product.rating.toFixed(1)} out of 5
              </span>
            </div>
            <p className="text-muted-foreground">Based on {product.numReviews} reviews</p>
            
            {/* Simplified review display */}
            <div className="space-y-6 mt-8">
              <div className="border-b pb-4">
                <div className="flex items-center mb-2">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">1 month ago</span>
                </div>
                <h4 className="font-medium">Exceeds expectations</h4>
                <p className="text-muted-foreground mt-2">
                  I'm extremely satisfied with this purchase. The quality is outstanding and the design is elegant.
                </p>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex items-center mb-2">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">3 months ago</span>
                </div>
                <h4 className="font-medium">Great value for money</h4>
                <p className="text-muted-foreground mt-2">
                  Very good product for the price. Delivery was quick and the packaging was excellent.
                </p>
              </div>
              
              <Button variant="outline">Load More Reviews</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-semibold mb-6">You May Also Like</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </div>
  );
}
