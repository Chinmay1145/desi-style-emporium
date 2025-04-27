
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import {
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  ArrowRight,
  CreditCard,
  Package,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } =
    useCart();
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const handleQuantityChange = (productId: string, delta: number, currentQty: number) => {
    const newQuantity = currentQty + delta;
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handlePromoCodeApply = () => {
    if (promoCode.toUpperCase() === "WELCOME10") {
      setIsPromoApplied(true);
    }
  };

  const subtotal = getCartTotal();
  const discount = isPromoApplied ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal > 5000 ? 0 : 299;
  const total = subtotal - discount + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingCart className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
          <h1 className="text-2xl font-serif font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link to="/products">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <h1 className="text-3xl font-serif font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg border p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">
                Cart ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
              </h2>
              <Button variant="ghost" size="sm" onClick={clearCart}>
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cart
              </Button>
            </div>

            <div className="divide-y">
              {cartItems.map((item) => (
                <div key={item.product.id} className="py-6 flex flex-wrap md:flex-nowrap">
                  <div className="w-full md:w-28 h-28 rounded-md overflow-hidden mb-4 md:mb-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow md:ml-6 flex flex-col md:flex-row md:justify-between">
                    <div>
                      <Link
                        to={`/product/${item.product.id}`}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.product.category
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </p>
                      <div className="flex items-center mb-4 md:mb-0">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.product.id, -1, item.quantity)
                          }
                          className="text-muted-foreground hover:text-foreground p-1"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="mx-2 w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.product.id, 1, item.quantity)
                          }
                          className="text-muted-foreground hover:text-foreground p-1"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:flex-col md:items-end">
                      <div className="text-right">
                        <span className="font-medium">
                          {formatPrice(
                            (item.product.discountedPrice || item.product.price) *
                              item.quantity
                          )}
                        </span>
                        {item.product.discountedPrice && (
                          <div className="text-sm text-muted-foreground line-through">
                            {formatPrice(item.product.price * item.quantity)}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors mt-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between">
              <Link to="/products">
                <Button variant="outline">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-card rounded-lg border p-6 sticky top-24">
            <h2 className="text-xl font-medium mb-6">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              
              {isPromoApplied && (
                <div className="flex justify-between text-green-600">
                  <span>Discount (10%)</span>
                  <span>-{formatPrice(discount)}</span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>
                  {shipping === 0
                    ? "Free"
                    : formatPrice(shipping)}
                </span>
              </div>
              
              {/* Promo Code */}
              <div className="pt-3">
                <Label htmlFor="promo-code">Promo Code</Label>
                <div className="flex mt-2">
                  <Input
                    id="promo-code"
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="rounded-r-none"
                    disabled={isPromoApplied}
                  />
                  <Button
                    onClick={handlePromoCodeApply}
                    variant={isPromoApplied ? "secondary" : "default"}
                    className="rounded-l-none"
                    disabled={isPromoApplied || !promoCode}
                  >
                    {isPromoApplied ? "Applied" : "Apply"}
                  </Button>
                </div>
                {isPromoApplied && (
                  <p className="text-xs text-green-600 mt-1">
                    WELCOME10 applied successfully!
                  </p>
                )}
                {!isPromoApplied && promoCode && promoCode.toUpperCase() !== "WELCOME10" && (
                  <p className="text-xs text-red-500 mt-1">
                    Try WELCOME10 for 10% off
                  </p>
                )}
              </div>
              
              <Separator className="my-3" />
              
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Link to="/checkout">
                <Button className="w-full">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <CreditCard className="h-4 w-4 mr-2" />
                <span>Secure payment via All Major Credit Cards</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Package className="h-4 w-4 mr-2" />
                <span>Free shipping on orders above ₹5,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
