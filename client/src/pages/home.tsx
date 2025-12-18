import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Users, Heart, Lightbulb, Calendar, Mail, MapPin, ArrowRight } from "lucide-react";
import logoUrl from "@assets/WhatsApp_Image_2025-12-16_at_20.08.07-removebg-preview_1766030566270.png";

const nationalChapters = [
  {
    country: "Nepal",
    flag: "🇳🇵",
    name: "Nepal Science Navigators",
    description: "Leading science outreach initiatives in Nepal, fostering scientific curiosity and making STEM education accessible to underrepresented communities across the Himalayan region."
  },
  {
    country: "Vietnam",
    flag: "🇻🇳",
    name: "Vietnam Science Navigators",
    description: "Promoting scientific literacy and innovation throughout Vietnam, connecting students and researchers while championing inclusive science communication."
  },
  {
    country: "Myanmar",
    flag: "🇲🇲",
    name: "Myanmar Science Navigators",
    description: "Advancing science education and outreach in Myanmar, building bridges between academic institutions and local communities through engaging programs."
  },
  {
    country: "Thailand",
    flag: "🇹🇭",
    name: "Thailand Science Navigators",
    description: "Driving science engagement across Thailand with a focus on accessibility, student leadership, and collaborative international research initiatives."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="GSN Logo" className="h-12 w-12 object-contain" data-testid="img-logo" />
              <div>
                <h1 className="text-xl font-bold tracking-tight" data-testid="text-site-title">Global Science Navigators</h1>
                <p className="text-xs text-muted-foreground">Navigating Science Beyond Borders</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-about">About</a>
              <a href="#chapters" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-chapters">Chapters</a>
              <a href="#events" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-events">Events</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-contact">Contact</a>
              <Button size="sm" data-testid="button-join">Join GSN</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5 -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6" variant="secondary" data-testid="badge-mission">
            <Globe className="w-3 h-3 mr-1" />
            International Science Outreach
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 gradient-text" data-testid="text-hero-title">
            Navigating Science
            <br />
            Beyond Borders
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-hero-description">
            Making science accessible, inclusive, and engaging for everyone across Nepal, Vietnam, Myanmar, and Thailand through student-led international collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" data-testid="button-learn-more">
              Learn More <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" data-testid="button-our-chapters">Our Chapters</Button>
          </div>
        </div>
      </section>

      {/* Featured Event Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary/90 to-chart-2 text-primary-foreground" id="featured-event">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <Badge className="mb-3 bg-white/20 text-white border-white/30" data-testid="badge-featured">
                <Calendar className="w-3 h-3 mr-1" />
                Featured Event
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" data-testid="text-event-title">
                Nobel Prize Podcast with Takaaki Kajita
              </h2>
              <p className="text-lg opacity-90 mb-4" data-testid="text-event-description">
                Join us for an exclusive conversation with Nobel Laureate Takaaki Kajita on groundbreaking discoveries in particle physics.
              </p>
              <div className="flex items-center gap-4 text-sm opacity-90">
                <div className="flex items-center gap-2" data-testid="text-event-date">
                  <Calendar className="w-4 h-4" />
                  March 24, 2025
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Button size="lg" variant="secondary" className="whitespace-nowrap" data-testid="button-register-event">
                Register Now
              </Button>
              <Button size="lg" variant="outline" className="whitespace-nowrap bg-transparent text-white border-white/30 hover:bg-white/10" data-testid="button-learn-more-event">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About GSN */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-about-title">About Global Science Navigators</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-subtitle">
              A student-led international network dedicated to making science accessible and inspiring the next generation of innovators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 border-2 hover:border-primary/50 transition-all hover:shadow-lg" data-testid="card-value-outreach">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Science Communication</h3>
              <p className="text-muted-foreground">
                Breaking down complex scientific concepts into engaging, accessible content that sparks curiosity and understanding.
              </p>
            </Card>

            <Card className="p-8 border-2 hover:border-primary/50 transition-all hover:shadow-lg" data-testid="card-value-inclusion">
              <div className="w-14 h-14 rounded-xl bg-chart-2/10 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-chart-2" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusion & Accessibility</h3>
              <p className="text-muted-foreground">
                Ensuring science reaches underrepresented communities and diverse audiences, regardless of background or resources.
              </p>
            </Card>

            <Card className="p-8 border-2 hover:border-primary/50 transition-all hover:shadow-lg" data-testid="card-value-collaboration">
              <div className="w-14 h-14 rounded-xl bg-chart-3/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-chart-3" />
              </div>
              <h3 className="text-xl font-bold mb-3">International Collaboration</h3>
              <p className="text-muted-foreground">
                Connecting students, researchers, and science enthusiasts across borders to share knowledge and perspectives.
              </p>
            </Card>
          </div>

          <Card className="p-8 sm:p-12 bg-gradient-to-br from-accent/30 to-primary/5 border-2" data-testid="card-mission">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Global Science Navigators (GSN) operates as a unified international network with national chapters across four countries. Each chapter works autonomously while contributing to our shared vision of democratizing science education.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Through public outreach programs, engaging workshops, and collaborative research initiatives, we're building a global community that celebrates scientific discovery and makes STEM education accessible to all.
            </p>
          </Card>
        </div>
      </section>

      {/* National Chapters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" id="chapters">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-chapters-title">Our National Chapters</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-chapters-subtitle">
              Four countries, one mission—united in making science accessible and engaging across Southeast and South Asia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {nationalChapters.map((chapter, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all border-2 hover:border-primary/30" data-testid={`card-chapter-${chapter.country.toLowerCase()}`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl" data-testid={`flag-${chapter.country.toLowerCase()}`}>{chapter.flag}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1" data-testid={`text-chapter-name-${chapter.country.toLowerCase()}`}>
                      {chapter.name}
                    </h3>
                    <Badge variant="secondary" className="mb-3" data-testid={`badge-country-${chapter.country.toLowerCase()}`}>
                      <MapPin className="w-3 h-3 mr-1" />
                      {chapter.country}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6" data-testid={`text-chapter-description-${chapter.country.toLowerCase()}`}>
                  {chapter.description}
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" data-testid={`button-view-team-${chapter.country.toLowerCase()}`}>
                    View Team
                  </Button>
                  <Button variant="outline" size="sm" data-testid={`button-activities-${chapter.country.toLowerCase()}`}>
                    Local Activities
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="events">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-events-title">Events & Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-events-subtitle">
              Join us for engaging talks, workshops, and outreach programs that bring science to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 border-2 bg-gradient-to-br from-primary/5 to-transparent" data-testid="card-event-podcast">
              <Badge className="mb-4" data-testid="badge-upcoming">Upcoming</Badge>
              <h3 className="text-2xl font-bold mb-3">Nobel Prize Podcast Series</h3>
              <p className="text-muted-foreground mb-4">
                Exclusive conversations with Nobel Laureates, starting with Takaaki Kajita on March 24th. A unique opportunity to hear directly from pioneers in physics.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Calendar className="w-4 h-4" />
                <span>March 24, 2025</span>
              </div>
              <Button data-testid="button-register-podcast">Register for Podcast</Button>
            </Card>

            <Card className="p-8 border-2" data-testid="card-event-workshops">
              <Badge variant="secondary" className="mb-4" data-testid="badge-ongoing">Ongoing</Badge>
              <h3 className="text-2xl font-bold mb-3">Science Outreach Workshops</h3>
              <p className="text-muted-foreground mb-6">
                Interactive workshops bringing hands-on science experiences to schools and communities across all four countries.
              </p>
              <Button variant="outline" data-testid="button-explore-workshops">Explore Workshops</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Inclusion & Outreach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" id="inclusion">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-inclusion-title">Inclusion & Outreach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-inclusion-subtitle">
              Science is for everyone. We're committed to breaking down barriers and creating opportunities for all.
            </p>
          </div>

          <Card className="p-8 sm:p-12" data-testid="card-inclusion-mission">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Reaching underrepresented and marginalized communities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Student-led initiatives driven by local leadership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Accessible science communication in multiple languages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Free resources and programs for schools and communities</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold">Empowering the next generation of scientists, researchers, and innovators</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact / Join Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-contact-title">Get Involved</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-subtitle">
              Whether you're a student, educator, or science enthusiast—there's a place for you in GSN.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8" data-testid="card-contact-form">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input placeholder="Your name" data-testid="input-name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" data-testid="input-email" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea placeholder="Tell us how you'd like to get involved..." rows={4} data-testid="textarea-message" />
                </div>
                <Button className="w-full" data-testid="button-submit-contact">Send Message</Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent" data-testid="card-join">
                <h3 className="text-2xl font-bold mb-4">Join GSN</h3>
                <p className="text-muted-foreground mb-6">
                  Become part of our international community and help make science accessible to everyone.
                </p>
                <Button size="lg" className="w-full mb-4" data-testid="button-join-now">Join Now</Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>info@globalsciencenavigators.org</span>
                </div>
              </Card>

              <Card className="p-8" data-testid="card-social">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" data-testid="button-social-twitter">Twitter</Button>
                  <Button variant="outline" size="sm" data-testid="button-social-facebook">Facebook</Button>
                  <Button variant="outline" size="sm" data-testid="button-social-linkedin">LinkedIn</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logoUrl} alt="GSN Logo" className="h-8 w-8 object-contain" />
                <span className="font-bold">GSN</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Navigating Science Beyond Borders
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">About</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors">Mission</a></li>
                <li><a href="#about" className="hover:text-foreground transition-colors">Values</a></li>
                <li><a href="#chapters" className="hover:text-foreground transition-colors">Chapters</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Programs</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#events" className="hover:text-foreground transition-colors">Events</a></li>
                <li><a href="#events" className="hover:text-foreground transition-colors">Workshops</a></li>
                <li><a href="#events" className="hover:text-foreground transition-colors">Podcasts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Join Us</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Social Media</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Global Science Navigators. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
