import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/register", label: "Register" },
    { path: "/teen-license", label: "Teen License" },
    { path: "/adult-license", label: "Adult License" },
    { path: "/driver-improvement", label: "Online Driver Improvement" },
    { path: "/driving-lessons", label: "Driving Lessons" },
    { path: "/payment", label: "Payment" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-black border-b border-primary/20 sticky top-0 z-50 shadow-strong">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
              SA
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary leading-none">SA Driving School</span>
              <span className="text-xs text-muted-foreground">Inc.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  size="sm"
                  className="text-sm"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Call Button */}
          <div className="hidden lg:flex items-center space-x-2">
            <a href="tel:703-982-1400">
              <Button className="bg-primary hover:bg-primary/90 font-bold">
                <Phone className="w-4 h-4 mr-2" />
                703-982-1400
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <a href="tel:703-982-1400" className="block">
              <Button className="w-full bg-primary hover:bg-primary/90 mt-4 font-bold">
                <Phone className="w-4 h-4 mr-2" />
                703-982-1400
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
