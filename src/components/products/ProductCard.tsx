
import { Link } from "react-router-dom";
import { Product, formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const discountPercentage = product.discountedPrice
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
    : 0;

  return (
    <div className="group product-card rounded-lg border bg-card overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image object-cover w-full h-full"
        />
        {product.discountedPrice && (
          <Badge className="absolute top-2 right-2 bg-destructive">-{discountPercentage}%</Badge>
        )}
        {product.bestseller && (
          <Badge className="absolute top-2 left-2 bg-primary">Bestseller</Badge>
        )}
        {product.new && (
          <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">New</Badge>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link to={`/product/${product.id}`}>
            <Button variant="secondary" className="mx-2">
              View Details
            </Button>
          </Link>
          <Button
            variant="default"
            className="mx-2"
            onClick={() => addToCart(product, 1)}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-lg mb-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-muted-foreground ml-1">
              ({product.numReviews})
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="product-price">
            {product.discountedPrice ? (
              <div className="flex items-center">
                <span className="text-primary font-semibold">
                  {formatPrice(product.discountedPrice)}
                </span>
                <span className="text-muted-foreground line-through text-sm ml-2">
                  {formatPrice(product.price)}
                </span>
              </div>
            ) : (
              <span className="text-primary font-semibold">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
