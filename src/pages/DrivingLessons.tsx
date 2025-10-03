import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Car, Clock, MapPin, Award, CheckCircle, DollarSign } from "lucide-react";

const DrivingLessons = () => {
  const packages = [
    {
      title: "Single Lesson",
      price: "$60",
      duration: "1 Hour",
      description: "Perfect for a quick refresher or specific skill practice",
      features: [
        "1 hour of instruction",
        "Pick-up and drop-off included",
        "Flexible scheduling",
        "Personalized attention",
      ],
    },
    {
      title: "5-Lesson Package",
      price: "$275",
      duration: "5 Hours",
      description: "Best value for building confidence and improving skills",
      features: [
        "5 hours of instruction",
        "Save $25 compared to single lessons",
        "Track progress over multiple sessions",
        "Priority scheduling",
      ],
      popular: true,
    },
    {
      title: "10-Lesson Package",
      price: "$500",
      duration: "10 Hours",
      description: "Comprehensive training for new or nervous drivers",
      features: [
        "10 hours of instruction",
        "Save $100 compared to single lessons",
        "Extensive skill development",
        "Road test preparation included",
      ],
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Certified Instructors",
      description: "Learn from DMV certified professionals with years of teaching experience",
    },
    {
      icon: Car,
      title: "Modern Vehicles",
      description: "Train in safe, well-maintained vehicles equipped with dual controls",
    },
    {
      icon: MapPin,
      title: "Convenient Locations",
      description: "We pick you up and drop you off at your preferred location",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book lessons at times that work best for your schedule",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Individual Driving Lessons</h1>
            <p className="text-xl opacity-95">
              Personalized one-on-one instruction tailored to your skill level and learning pace
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Our Lessons</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="shadow-elevation">
                  <CardHeader>
                    <benefit.icon className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Lesson Packages</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`shadow-elevation relative ${
                    pkg.popular ? "border-2 border-accent shadow-strong" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-2">{pkg.title}</CardTitle>
                    <div className="flex items-center justify-center gap-2 text-4xl font-bold text-primary mb-2">
                      <DollarSign className="w-8 h-8" />
                      <span>{pkg.price.replace("$", "")}</span>
                    </div>
                    <div className="text-muted-foreground font-medium mb-4">{pkg.duration}</div>
                    <CardDescription className="text-base">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/register">
                      <Button
                        className={`w-full ${pkg.popular ? "bg-gradient-accent" : ""}`}
                        variant={pkg.popular ? "default" : "outline"}
                      >
                        Book Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What to Expect</h2>
            <div className="space-y-6">
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle>First Lesson Assessment</CardTitle>
                  <CardDescription className="text-base">
                    Your instructor will evaluate your current skill level and identify areas for improvement
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle>Personalized Instruction</CardTitle>
                  <CardDescription className="text-base">
                    Each lesson is tailored to your specific needs, focusing on the skills you need to develop
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle>Progressive Learning</CardTitle>
                  <CardDescription className="text-base">
                    We build skills gradually, from basic maneuvers to complex driving situations
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle>Real-World Experience</CardTitle>
                  <CardDescription className="text-base">
                    Practice in various traffic conditions, road types, and weather scenarios
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Covered */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Skills We Cover</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Basic vehicle control and handling",
                "Parking (parallel, angle, perpendicular)",
                "Highway and interstate driving",
                "City and residential driving",
                "Defensive driving techniques",
                "Lane changes and merging",
                "Intersection navigation",
                "Night and adverse weather driving",
                "Emergency maneuvers",
                "Road test preparation",
              ].map((skill, index) => (
                <div key={index} className="flex items-start space-x-3 bg-background p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Driving Journey?</h2>
            <p className="text-xl mb-8 opacity-95">
              Book your first lesson today and experience professional driving instruction
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Book Lessons
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  Ask Questions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrivingLessons;
