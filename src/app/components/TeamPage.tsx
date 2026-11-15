import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TeamPage() {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Clinical Psychologist',
      specialties: 'Anxiety, Depression, Trauma',
      image: 'https://images.unsplash.com/photo-1758273241078-8eec353836be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwc2Vzc2lvbiUyMGNvdW5zZWxpbmd8ZW58MXx8fHwxNzY2NDMyMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Johnson has over 15 years of experience helping individuals overcome anxiety, depression, and trauma. She uses evidence-based approaches including CBT and EMDR to support her clients in achieving lasting change.',
    },
    {
      name: 'Michael Chen, MSW',
      title: 'Registered Social Worker',
      specialties: 'Couples Therapy, Relationships',
      image: 'https://images.unsplash.com/photo-1700168333952-3d44a3f427af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0aGVyYXBpc3QlMjBvZmZpY2V8ZW58MXx8fHwxNzY2MzExNDI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Michael specializes in helping couples strengthen their relationships through improved communication and emotional connection. His warm, non-judgmental approach creates a safe space for partners to explore and heal.',
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Licensed Psychologist',
      specialties: 'Teen & Adolescent Therapy',
      image: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBzdXBwb3J0fGVufDF8fHx8MTc2NjQyMDQ2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Rodriguez is passionate about working with teens and young adults. She understands the unique challenges of adolescence and helps young people build resilience, confidence, and healthy coping strategies.',
    },
    {
      name: 'James Thompson, LMFT',
      title: 'Marriage & Family Therapist',
      specialties: 'Family Therapy, Parenting',
      image: 'https://images.unsplash.com/photo-1631962758485-3fd6ab86e14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwcGVhY2VmdWwlMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2NjQzMjExMnww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'James brings 12 years of experience in family systems therapy. He helps families improve communication, resolve conflicts, and create healthier dynamics that benefit every family member.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-secondary py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-semibold mb-6">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our experienced, licensed therapists are here to support your mental health journey with compassion and expertise.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-80 relative">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-8 space-y-4">
                  <div>
                    <h2 className="text-2xl">{member.name}</h2>
                    <p className="text-primary">{member.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">Specializes in: {member.specialties}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="py-12 text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold">Find the Right Therapist for You</h2>
              <p className="text-lg max-w-2xl mx-auto opacity-90">
                Schedule a free consultation and we'll help you connect with the therapist who best fits your needs.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
