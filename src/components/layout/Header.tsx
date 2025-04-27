
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, User, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export default function Header() {
  const { cartItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const categories = [
    { name: "Western Outfits", path: "/category/western-outfits" },
    { name: "Shoes", path: "/category/shoes" },
    { name: "Watches", path: "/category/watches" },
    { name: "Headphones", path: "/category/headphones" },
    { name: "Smartphones", path: "/category/smartphones" },
    { name: "Accessories", path: "/category/accessories" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-serif text-xl font-bold">
                Desi Style Emporium
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search size={20} />
            </Button>
            <ThemeToggle />
            <Link to="/account">
              <Button variant="ghost" size="icon">
                <User size={20} />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 bg-background md:hidden transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="container mx-auto p-6 space-y-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="block py-3 text-lg font-medium border-b last:border-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Search Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-start pt-24 px-4 transition-opacity duration-300",
          searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto max-w-2xl">
          <div className="relative">
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full h-12 pl-4 pr-10 rounded-md border border-input bg-transparent text-lg"
              autoFocus={searchOpen}
            />
            <Button
              className="absolute right-1 top-1"
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(false)}
            >
              <X size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
