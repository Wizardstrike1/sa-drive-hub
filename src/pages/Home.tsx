import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, Car, Shield, Award, Users, Clock, CheckCircle } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Teen License Program",
      description: "Comprehensive behind-the-wheel training for teen drivers with certified instructors.",
      link: "/teen-license",
    },
    {
      icon: Car,
      title: "Driving Lessons",
      description: "Individual driving lessons tailored to your skill level and learning pace.",
      link: "/driving-lessons",
    },
    {
      icon: Shield,
      title: "Driver Improvement",
      description: "Online driver improvement courses to enhance your driving skills and reduce points.",
      link: "/driver-improvement",
    },
  ];

  const features = [
    { icon: Award, text: "DMV Certified Instructors" },
    { icon: Users, text: "Personalized Training" },
    { icon: Clock, text: "Flexible Scheduling" },
    { icon: CheckCircle, text: "High Pass Rate" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Learn to Drive with Confidence
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Professional driving instruction for teens and adults in Loudoun County, Virginia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                  Register Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <feature.icon className="w-10 h-10 text-primary mb-2" />
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quality driving education programs designed to meet your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-elevation hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={service.link}>
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose SA Driving School?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Experienced Instructors</h3>
                    <p className="text-muted-foreground">DMV certified instructors with years of teaching experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Proven Track Record</h3>
                    <p className="text-muted-foreground">High success rate with students passing their road tests</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">Convenient lesson times that work with your schedule</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Comprehensive Training</h3>
                    <p className="text-muted-foreground">From basics to advanced skills, we cover it all</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground shadow-strong">
              <h3 className="text-3xl font-bold mb-4">Ready to Start?</h3>
              <p className="text-lg mb-6 opacity-95">
                Join hundreds of satisfied students who have learned to drive safely with SA Driving School.
              </p>
              <Link to="/register">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                  Register Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">High Schools We Serve</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
            We've proudly provided driving instruction to students from top schools across Loudoun County
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground">
            <span className="px-4 py-2 bg-secondary rounded-lg">Rock Ridge HS</span>
            <span className="px-4 py-2 bg-secondary rounded-lg">Independence HS</span>
            <span className="px-4 py-2 bg-secondary rounded-lg">Briar Woods HS</span>
            <span className="px-4 py-2 bg-secondary rounded-lg">Stone Bridge HS</span>
            <span className="px-4 py-2 bg-secondary rounded-lg">Broad Run HS</span>
            <span className="px-4 py-2 bg-secondary rounded-lg">Riverside HS</span>
            <span className="px-4 py-2 bg-secondary rounded-lg">Heritage HS</span>
            <span className="px-4 py-2 bg-secondary rounded-lg">Potomac Falls HS</span>
            <span className="px-4 py-2 bg-secondary rounded-lg">Dominion HS</span>
            <span className="px-4 py-2 bg-secondary rounded-lg">Freedom HS</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
