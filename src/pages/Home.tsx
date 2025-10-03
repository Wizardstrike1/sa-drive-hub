import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, Car, Shield, Award, Users, Clock, CheckCircle } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Teen License Behind the Wheel",
      price: "$400",
      description: "7 Days course + road test. Teens under 18yrs only. 50min driving & 50min observation.",
      link: "/teen-license",
    },
    {
      icon: Award,
      title: "Adult License Waiver Course",
      price: "$400",
      description: "7 Days course + road test. Adults 18yrs or over. 50min driving & 50min observation.",
      link: "/adult-license",
    },
    {
      icon: Car,
      title: "Driving Lessons",
      description: "Comprehensive 1-on-1 training. Learn from the ground up. Individual lessons or driving packages.",
      link: "/driving-lessons",
    },
    {
      icon: Shield,
      title: "Online Driver Improvement",
      description: "Licensed by Virginia DMV. Earn 5 Safe Driver points. Learn online from home. Save money & time.",
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
      <section className="relative bg-gradient-hero text-white py-28 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              SA Driving School Inc
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold text-primary">
              Call or Text: 703-982-1400
            </p>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Welcome to SA Driving School Inc. Based in Ashburn, VA | Est: 2014
            </p>
            <p className="text-lg mb-10 opacity-90">
              Professional Behind the Wheel & Driving Lessons in Loudoun County
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-6 font-bold">
                  REGISTER Here!
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black text-xl px-12 py-6 font-bold">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quality driving education programs designed to meet your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-elevation hover:shadow-strong hover:border-primary transition-all duration-300 border-2">
                <CardHeader>
                  <service.icon className="w-16 h-16 text-primary mb-4" />
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  {service.price && (
                    <div className="text-2xl font-bold text-primary mb-2">{service.price}</div>
                  )}
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={service.link}>
                    <Button className="w-full bg-primary hover:bg-primary/90 font-bold">Learn More</Button>
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
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose SA Driving School?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Experienced Instructors</h3>
                    <p className="text-muted-foreground">DMV certified instructors with years of teaching experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Proven Track Record</h3>
                    <p className="text-muted-foreground">High success rate with students passing their road tests</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">Convenient lesson times that work with your schedule</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Comprehensive Training</h3>
                    <p className="text-muted-foreground">From basics to advanced skills, we cover it all</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-hero rounded-2xl p-8 text-white shadow-strong border-4 border-primary">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start?</h3>
              <p className="text-lg mb-6 opacity-95">
                Join hundreds of satisfied students who have learned to drive safely with SA Driving School.
              </p>
              <Link to="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full text-lg font-bold">
                  Register Today
                </Button>
              </Link>
              <p className="mt-4 text-center text-lg">
                Or Call: <a href="tel:703-982-1400" className="text-primary hover:underline font-bold">703-982-1400</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">High Schools We Have Taught Over the Years</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
            We've proudly provided driving instruction to students from top schools across Loudoun County
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="px-6 py-3 bg-muted text-foreground rounded-lg border-2 border-transparent hover:border-primary transition-colors">Rock Ridge HS</span>
            <span className="px-6 py-3 bg-muted text-foreground rounded-lg border-2 border-transparent hover:border-primary transition-colors">Independence HS</span>
            <span className="px-6 py-3 bg-muted text-foreground rounded-lg border-2 border-transparent hover:border-primary transition-colors">Briar Woods HS</span>
            <span className="px-6 py-3 bg-muted text-foreground rounded-lg border-2 border-transparent hover:border-primary transition-colors">Stone Bridge HS</span>
            <span className="px-6 py-3 bg-muted text-foreground rounded-lg border-2 border-transparent hover:border-primary transition-colors">Broad Run HS</span>
            <span className="px-6 py-3 bg-muted text-foreground rounded-lg border-2 border-transparent hover:border-primary transition-colors">Riverside HS</span>
            <span className="px-6 py-3 bg-muted text-foreground rounded-lg border-2 border-transparent hover:border-primary transition-colors">Heritage HS</span>
            <span className="px-6 py-3 bg-muted text-foreground rounded-lg border-2 border-transparent hover:border-primary transition-colors">Loudoun County HS</span>
            <span className="px-6 py-3 bg-muted text-foreground rounded-lg border-2 border-transparent hover:border-primary transition-colors">Potomac Falls HS</span>
            <span className="px-6 py-3 bg-muted text-foreground rounded-lg border-2 border-transparent hover:border-primary transition-colors">Dominion HS</span>
            <span className="px-6 py-3 bg-muted text-foreground rounded-lg border-2 border-transparent hover:border-primary transition-colors">Park View HS</span>
            <span className="px-6 py-3 bg-muted text-foreground rounded-lg border-2 border-transparent hover:border-primary transition-colors">Freedom HS</span>
            <span className="px-6 py-3 bg-muted text-foreground rounded-lg border-2 border-transparent hover:border-primary transition-colors">John Champe HS</span>
            <span className="px-6 py-3 bg-muted text-foreground rounded-lg border-2 border-transparent hover:border-primary transition-colors">Lightridge HS</span>
            <span className="px-6 py-3 bg-primary text-white rounded-lg font-bold">Plus more!</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
