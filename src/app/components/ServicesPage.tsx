import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import alarmIcon from "../../assets/alarm.png";
import alarmClockIcon from "../../assets/circular-alarm-clock-tool.png";
import elearningIcon from "../../assets/elearning.png";
import heartIcon from "../../assets/heart.png";
import ideaIcon from "../../assets/idea.png";
import runningIcon from "../../assets/running.png";
import shuttleIcon from "../../assets/shuttle.png";
import starIcon from "../../assets/star.png";
import sunIcon from "../../assets/sun.png";
import targetIcon from "../../assets/target.png";
import userIcon from "../../assets/user.png";


export function ServicesPage() {
  const services = [
    {
      title: 'Individual Therapy',
      description: 'In individual therapy, you will be met with curiosity, honesty, and compassion. Together, we will explore your inner emotional world and develop practical strategies for creating the life and relationships you want.',
      image: 'https://images.unsplash.com/photo-1758273241078-8eec353836be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwc2Vzc2lvbiUyMGNvdW5zZWxpbmd8ZW58MXx8fHwxNzY2NDMyMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/individual',
    },
    {
      title: 'Couples Therapy',
      description: 'A supportive space to repair communication, rebuild trust, and strengthen emotional connection. Learn to move beyond recurring conflicts and create a more secure and fulfilling partnership.',
      image: 'https://images.unsplash.com/photo-1763713512979-2537ffc28e3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGVzJTIwdGhlcmFweSUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2NjQzMjExM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/couples',
    },
    {
      title: 'Couples Retreat',
      description: 'Experiences inspired by Emotionally Focused Therapy to help partners step away from everyday pressures and focus more intentionally on their relationship.',
      image: 'https://images.unsplash.com/photo-1624448445915-97154f5e688c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB0b2dldGhlcm5lc3MlMjBoYXBwaW5lc3N8ZW58MXx8fHwxNzY2NDMyMTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/retreat',
    },
  ];

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

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-semibold mb-6">Our Therapy Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive mental health support tailored to your unique needs. Whether you're seeking individual growth, relationship support, or family healing, I'm here to help.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-80">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <h2 className="text-3xl">{service.title}</h2>
                    <p className="text-lg text-muted-foreground">{service.description}</p>
                    <Button variant="link" className="p-0 text-primary group/btn" asChild>
                      <Link to={service.link}>
                        Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Areas Section */}

      {/* <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/30 via-background to-accent/10 relative overflow-hidden"> */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-accent/10"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 rounded-full bg-primary/10"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-4">Specialty Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert support across a wide range of therapeutic areas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              //🏆🎯💊🩹🌿🔄🧠🚒
              { icon:(            
                      <img src={runningIcon} alt="Running" className="w-8 h-8 object-contain" />
                     ),
                    title: 'Sport Performance & Psychology', desc: 'Performance coaching for high-performance athletes.', bg: 'bg-circularCardBlue' },
              { icon: (<img src={shuttleIcon} alt="Rocket" className="w-8 h-8 object-contain" />), title: 'Self-Leadership & Peak Performance', desc: 'Take charge of your life and reach your maximum potential. Gain focus and direction.', bg: 'bg-circularCardRed' },
              { icon: (<img src={heartIcon} alt="Heart" className="w-8 h-8 object-contain" />), title: 'Chronic Health Conditions', desc: 'Support for ongoing medical conditions, including medically unexplained symptoms.', bg: 'bg-circularCardBlue' },
              { icon: ( <img src={alarmIcon} alt="Alarm" className="w-8 h-8 object-contain" />), title: 'Chronic Pain Management', desc: 'Developing a pain management program for those suffering from chronic conditions.', bg: 'bg-circularCardRed' },
              { icon: (<img src={sunIcon} alt="Sun" className="w-8 h-8 object-contain" />), title: 'Health & Well-being', desc: 'Psychology to achieve overall health, well-being, and increase your quality of life.', bg: 'bg-circularCardBlue' },
              { icon: (<img src={starIcon} alt="Star" className="w-8 h-8 object-contain" />), title: 'Injury and Surgery Recovery', desc: 'Including an innovative pre-surgery chronic pain prevention program.', bg: 'bg-circularCardRed' },
              { icon: (<img src={ideaIcon} alt="Idea" className="w-8 h-8 object-contain" />), title: 'Trauma Processing', desc: 'Learning how to process trauma, manage PTSD, and deal with specific fears/phobias.', bg: 'bg-circularCardBlue' },
              { icon: (<img src={userIcon} alt="User" className="w-8 h-8 object-contain" />), title: 'First Responders', desc: 'Counselling for trauma, critical incident support, stress management, and self-care.', bg: 'bg-circularCardRed' },
            ].map((area, i) => (
              <div key={i} className="text-center group">
                <div className={`w-20 h-20 rounded-full ${area.bg} shadow-lg flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{area.icon}</span>
                </div>
                <h3 className="text-lg font-medium mb-2 leading-snug">{area.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-white">Not Sure Which Service is Right for You?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Book a free consultation and I'll help you find the best therapeutic approach for your needs.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="rounded-full px-8"
                asChild
              >
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
