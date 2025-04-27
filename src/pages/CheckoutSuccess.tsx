
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, ArrowRight } from "lucide-react";

export default function CheckoutSuccess() {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  // Generate a random order number
  const orderNumber = "DSE" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="container mx-auto px-4 py-16 fade-in">
      <div className="max-w-lg mx-auto text-center">
        <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-serif font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-lg mb-6">
          Your order has been placed successfully.
        </p>
        <div className="bg-card rounded-lg border p-6 mb-8 text-left">
          <h2 className="text-xl font-medium mb-4">Order Details</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Order Number:</span>
              <span className="font-medium">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Payment Method:</span>
              <span>Credit Card</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping Method:</span>
              <span>Standard Delivery</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-8">
          <Package className="h-5 w-5 mr-2 text-muted-foreground" />
          <p className="text-muted-foreground">
            You will receive a confirmation email with your order details.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="outline">Return to Home</Button>
          </Link>
          <Link to="/products">
            <Button>
              Continue Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
