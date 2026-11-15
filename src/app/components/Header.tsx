import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
              <span className="text-xl text-foreground">Talk Therapy</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`text-sm transition-colors hover:text-foreground ${
                  isActive('/') ? 'text-foreground' : 'text-foreground/70'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm transition-colors hover:text-foreground ${
                  isActive('/about') ? 'text-foreground' : 'text-foreground/70'
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`text-sm transition-colors hover:text-foreground ${
                  isActive('/services') ? 'text-foreground' : 'text-foreground/70'
                }`}
              >
                Services
              </Link>
              <Link
                to="/blog"
                className={`text-sm transition-colors hover:text-foreground ${
                  isActive('/blog') ? 'text-foreground' : 'text-foreground/70'
                }`}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className={`text-sm transition-colors hover:text-foreground ${
                  isActive('/contact') ? 'text-foreground' : 'text-foreground/70'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-20 left-0 right-0 bottom-0 bg-background z-40 md:hidden animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col p-6 space-y-2">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`px-6 py-4 text-lg rounded-2xl transition-colors ${
                  isActive('/') 
                    ? 'bg-primary/10 text-foreground' 
                    : 'text-foreground/80 hover:bg-secondary/50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className={`px-6 py-4 text-lg rounded-2xl transition-colors ${
                  isActive('/about') 
                    ? 'bg-primary/10 text-foreground' 
                    : 'text-foreground/80 hover:bg-secondary/50'
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={closeMobileMenu}
                className={`px-6 py-4 text-lg rounded-2xl transition-colors ${
                  isActive('/services') 
                    ? 'bg-primary/10 text-foreground' 
                    : 'text-foreground/80 hover:bg-secondary/50'
                }`}
              >
                Services
              </Link>
              <Link
                to="/services/individual"
                onClick={closeMobileMenu}
                className={`px-6 py-4 text-base rounded-2xl transition-colors ml-4 ${
                  isActive('/services/individual') 
                    ? 'bg-primary/10 text-foreground' 
                    : 'text-foreground/70 hover:bg-secondary/50'
                }`}
              >
                Individual Therapy
              </Link>
              <Link
                to="/services/couples"
                onClick={closeMobileMenu}
                className={`px-6 py-4 text-base rounded-2xl transition-colors ml-4 ${
                  isActive('/services/couples') 
                    ? 'bg-primary/10 text-foreground' 
                    : 'text-foreground/70 hover:bg-secondary/50'
                }`}
              >
                Couples Therapy
              </Link>
              <Link
                to="/blog"
                onClick={closeMobileMenu}
                className={`px-6 py-4 text-lg rounded-2xl transition-colors ${
                  isActive('/blog')
                    ? 'bg-primary/10 text-foreground'
                    : 'text-foreground/80 hover:bg-secondary/50'
                }`}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={`px-6 py-4 text-lg rounded-2xl transition-colors ${
                  isActive('/contact')
                    ? 'bg-primary/10 text-foreground'
                    : 'text-foreground/80 hover:bg-secondary/50'
                }`}
              >
                Contact
              </Link>

              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="w-full rounded-full text-base"
                  asChild
                >
                  <Link to="/contact" onClick={closeMobileMenu}>
                    Schedule Consultation
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}