import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Laptop, Clock, Award, CheckCircle, DollarSign, BookOpen } from "lucide-react";

const DriverImprovement = () => {
  const benefits = [
    "Reduce demerit points on your driving record",
    "Potentially lower insurance premiums",
    "Refresh your driving knowledge and skills",
    "Court-ordered or voluntary enrollment accepted",
    "Certificate of completion provided",
  ];

  const features = [
    {
      icon: Laptop,
      title: "100% Online",
      description: "Complete the course from the comfort of your home at your own pace",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Study when it's convenient for you with 24/7 access to course materials",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Content",
      description: "State-approved curriculum covering all essential driving safety topics",
    },
    {
      icon: Award,
      title: "DMV Approved",
      description: "Meets all Virginia DMV requirements for driver improvement programs",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Online Driver Improvement</h1>
            <p className="text-xl opacity-95 mb-6">
              Convenient online course to improve your driving record and refresh your skills
            </p>
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg text-xl font-bold">
              <DollarSign className="w-6 h-6" />
              <span>Competitive Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Course Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-elevation">
                  <CardHeader>
                    <feature.icon className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Benefits of Driver Improvement</h2>
            <Card className="shadow-strong">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-elevation">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <CardTitle>Register Online</CardTitle>
                  <CardDescription>
                    Sign up for the course and create your account to get instant access
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center shadow-elevation">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <CardTitle>Complete Course</CardTitle>
                  <CardDescription>
                    Study at your own pace and complete all course modules and quizzes
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center shadow-elevation">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <CardTitle>Get Certificate</CardTitle>
                  <CardDescription>
                    Receive your completion certificate to submit to DMV or court
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle>Virginia Traffic Laws</CardTitle>
                  <CardDescription>
                    Comprehensive review of state traffic regulations and recent updates
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle>Defensive Driving</CardTitle>
                  <CardDescription>
                    Techniques to anticipate and respond to potential hazards on the road
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle>Safe Driving Practices</CardTitle>
                  <CardDescription>
                    Best practices for various driving conditions and scenarios
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle>Accident Prevention</CardTitle>
                  <CardDescription>
                    Strategies to minimize risk and maintain a clean driving record
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Improve Your Driving Record Today</h2>
            <p className="text-xl mb-8 opacity-95">
              Start your online driver improvement course and see results quickly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Enroll Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DriverImprovement;
