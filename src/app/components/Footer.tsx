import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border/50 mt-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 left-0 w-48 h-48 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl">Talk Therapy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional online therapy for individuals and couples across Canada, supporting emotional well-being and healthier relationships.
            </p>
          </div>

          <div>
            <h3 className="mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/individual" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Individual Therapy
                </Link>
              </li>
              <li>
                <Link to="/services/couples" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Couples Therapy
                </Link>
              </li>
              <li>
                <Link to="/services/retreat" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Couples Retreat
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">+ 1 (587) 200-1219</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">richard.mercier@talk-therapy.ca</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">Serving all of Canada</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Talk Therapy Canada. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}