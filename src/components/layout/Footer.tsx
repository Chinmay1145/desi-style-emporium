
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary mt-16">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Desi Style Emporium</h3>
            <p className="text-muted-foreground mb-6">
              Premium Western outfits and accessories for the modern Indian consumer.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/western-outfits" className="text-muted-foreground hover:text-primary transition-colors">
                  Western Outfits
                </Link>
              </li>
              <li>
                <Link to="/category/shoes" className="text-muted-foreground hover:text-primary transition-colors">
                  Shoes
                </Link>
              </li>
              <li>
                <Link to="/category/watches" className="text-muted-foreground hover:text-primary transition-colors">
                  Luxury Watches
                </Link>
              </li>
              <li>
                <Link to="/category/headphones" className="text-muted-foreground hover:text-primary transition-colors">
                  Headphones & Earbuds
                </Link>
              </li>
              <li>
                <Link to="/category/smartphones" className="text-muted-foreground hover:text-primary transition-colors">
                  Smartphones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Fashion Street, Delhi, India - 110001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  contact@desistyleemporium.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
          <p>
            &copy; {year} Desi Style Emporium. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
