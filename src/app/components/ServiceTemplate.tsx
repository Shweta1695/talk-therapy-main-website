import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';

interface ServiceTemplateProps {
  title: string;
  subtitle: string;
  heroImage: string;
  whatItHelps: string[];
  whoItsFor: string[];
  benefits: string[];
  description: string;
}

export function ServiceTemplate({
  title,
  subtitle,
  heroImage,
  whatItHelps,
  whoItsFor,
  benefits,
  description,
}: ServiceTemplateProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 text-primary opacity-20" viewBox="0 0 200 200" fill="currentColor">
            <path d="M100,20 Q150,40 160,90 Q170,140 140,170 L120,150 Q145,125 138,85 Q131,45 100,35 Z" />
            <path d="M100,20 Q90,50 95,90 Q100,130 120,150 L105,165 Q80,135 78,90 Q76,45 100,20 Z" />
          </svg>
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-accent/20"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-secondary/50"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-semibold">{title}</h1>
              <p className="text-xl text-muted-foreground">{subtitle}</p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                  asChild
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-foreground/20 hover:bg-foreground/5 rounded-full px-8"
                  asChild
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4">
                <div className="relative rounded-[2.5rem] overflow-hidden h-96 lg:h-[500px]">
                  <ImageWithFallback src={heroImage} alt={title} className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Decorative Circles */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-primary/30"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-accent/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
          <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/30 via-background to-accent/10 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-primary/10"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 rounded-full bg-accent/10"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* What It Helps With */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl mb-6">What It Helps With</h3>
              <ul className="space-y-3">
                {whatItHelps.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who It's For */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl mb-6">Who It's For</h3>
              <ul className="space-y-3">
                {whoItsFor.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl mb-6">Key Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-white">Ready to Begin Your Journey?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Schedule your free 60-minute consultation today and take the first step toward positive change.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="rounded-full px-8"
                  asChild
                >
                  <Link to="/contact">Schedule Free Consultation</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8"
                  asChild
                >
                  <Link to="/about">About My Practice</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
