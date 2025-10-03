import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, DollarSign, Car, CheckCircle, Users, Award, FileCheck } from "lucide-react";

const AdultLicense = () => {
  const requirements = [
    "Must be 18 years or older",
    "Valid learner's permit",
    "Driver education certificate required",
    "High School DEC Card (if applicable)",
  ];

  const features = [
    { icon: Clock, title: "7-Day Course", description: "Comprehensive 7-day training program including road test preparation" },
    { icon: Users, title: "50 Minutes Driving", description: "50 minutes of behind-the-wheel instruction per session" },
    { icon: Car, title: "50 Minutes Observation", description: "50 minutes observing other student drivers for peer learning" },
    { icon: Award, title: "Road Test Ready", description: "Includes preparation and scheduling for DMV road test" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Adult License Waiver Course</h1>
            <p className="text-xl md:text-2xl opacity-95 mb-8">
              Professional driving instruction for adults seeking their driver's license
            </p>
            <div className="inline-flex items-center gap-4 text-3xl md:text-4xl font-bold bg-primary text-white px-8 py-4 rounded-lg shadow-strong">
              <DollarSign className="w-10 h-10" />
              <span>$400</span>
            </div>
            <p className="mt-4 text-lg opacity-90">Adults 18yrs or over</p>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Course Overview</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-elevation border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 text-primary mb-2" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">What's Included</h2>
            <Card className="shadow-strong border-2">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">7 comprehensive behind-the-wheel training sessions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">50 minutes driving and 50 minutes observation per session</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">DMV certified instructors with proven track record</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Road test preparation and scheduling assistance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Observation time to learn from peer experiences</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Pick-up and drop-off at convenient locations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Completion certificate for DMV requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Requirements</h2>
            <Card className="shadow-elevation border-2">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-base font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-lg pt-1">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary shadow-strong">
              <CardHeader className="bg-primary text-white">
                <div className="flex items-center gap-3">
                  <FileCheck className="w-8 h-8" />
                  <CardTitle className="text-2xl">Important Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4 text-base">
                  <p>
                    <strong>Course Duration:</strong> 7 days of comprehensive training plus road test
                  </p>
                  <p>
                    <strong>Session Structure:</strong> Each session includes 50 minutes of hands-on driving instruction 
                    and 50 minutes of observation time to learn from other students
                  </p>
                  <p>
                    <strong>Certification Required:</strong> You must have completed a driver education classroom course 
                    to enroll in this behind-the-wheel program
                  </p>
                  <p>
                    <strong>Road Test:</strong> We help prepare you for and schedule your DMV road test
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-95">
              Enroll today and take the first step toward getting your driver's license
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 font-bold">
                  Register Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 font-bold">
                  Contact Us
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-lg">
              Call or Text: <a href="tel:703-982-1400" className="text-primary hover:underline font-bold">703-982-1400</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdultLicense;
