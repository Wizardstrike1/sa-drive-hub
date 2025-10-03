import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    studentCell: "",
    parentCell: "",
    dateOfBirth: "",
    address: "",
    highSchool: "",
    permitIssued: "",
    course: "",
    contactMethod: "",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "We'll contact you shortly to confirm your enrollment.",
    });
    // Reset form
    setFormData({
      studentName: "",
      email: "",
      studentCell: "",
      parentCell: "",
      dateOfBirth: "",
      address: "",
      highSchool: "",
      permitIssued: "",
      course: "",
      contactMethod: "",
      comments: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Register for a Course</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Register your information below, we will email you a start date confirmation within 24hrs.
            </p>
            <p className="text-sm text-muted-foreground">
              (Use this page to Register for a course. View course pages for additional information).
            </p>
          </div>

          <Card className="shadow-strong border-2">
            <CardHeader className="bg-gradient-hero text-white">
              <CardTitle className="text-2xl">Student Registration Form</CardTitle>
              <CardDescription className="text-white/90">
                Please provide accurate information for enrollment
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="studentName" className="text-base font-semibold">Student Name *</Label>
                  <Input
                    id="studentName"
                    required
                    value={formData.studentName}
                    onChange={(e) => handleChange("studentName", e.target.value)}
                    placeholder="Full Name"
                    className="text-base"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="student@example.com"
                      className="text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className="text-base font-semibold">Birthday *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                      className="text-base"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentCell" className="text-base font-semibold">Student Cell *</Label>
                    <Input
                      id="studentCell"
                      type="tel"
                      required
                      value={formData.studentCell}
                      onChange={(e) => handleChange("studentCell", e.target.value)}
                      placeholder="(555) 123-4567"
                      className="text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentCell" className="text-base font-semibold">Parent Cell</Label>
                    <Input
                      id="parentCell"
                      type="tel"
                      value={formData.parentCell}
                      onChange={(e) => handleChange("parentCell", e.target.value)}
                      placeholder="(555) 123-4567"
                      className="text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-base font-semibold">Address *</Label>
                  <Input
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    placeholder="Street Address, City, State, ZIP"
                    className="text-base"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="highSchool" className="text-base font-semibold">High School</Label>
                    <Input
                      id="highSchool"
                      value={formData.highSchool}
                      onChange={(e) => handleChange("highSchool", e.target.value)}
                      placeholder="Your High School"
                      className="text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="permitIssued" className="text-base font-semibold">Permit Issued</Label>
                    <Input
                      id="permitIssued"
                      type="date"
                      value={formData.permitIssued}
                      onChange={(e) => handleChange("permitIssued", e.target.value)}
                      className="text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course" className="text-base font-semibold">Select Course *</Label>
                  <Select required value={formData.course} onValueChange={(value) => handleChange("course", value)}>
                    <SelectTrigger className="text-base">
                      <SelectValue placeholder="* Select Below *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="teen-license-btw">Teen License BTW Course: $400</SelectItem>
                      <SelectItem value="adult-license-waiver">Adult License Waiver Course: $400</SelectItem>
                      <SelectItem value="teen-online-drivers-ed">Teen Online Drivers Ed: $175</SelectItem>
                      <SelectItem value="adult-online-drivers-ed">Adult Online Drivers Ed: $150</SelectItem>
                      <SelectItem value="feedback-lesson">Feedback Lesson: $100</SelectItem>
                      <SelectItem value="2-driving-lessons">2 Driving Lessons: $190</SelectItem>
                      <SelectItem value="3-driving-lessons">3 Driving Lessons: $270</SelectItem>
                      <SelectItem value="4-driving-lessons">4 Driving Lessons: $360</SelectItem>
                      <SelectItem value="5-driving-lessons">5 Driving Lessons: $450</SelectItem>
                      <SelectItem value="re-examination">Re-Examination Course: $400</SelectItem>
                      <SelectItem value="other">Comment on Other Service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactMethod" className="text-base font-semibold">Contact Method *</Label>
                  <Select required value={formData.contactMethod} onValueChange={(value) => handleChange("contactMethod", value)}>
                    <SelectTrigger className="text-base">
                      <SelectValue placeholder="* Select Below *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text-student">Text Message to Student Cell</SelectItem>
                      <SelectItem value="text-parent">Text Message to Parent Cell</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comments" className="text-base font-semibold">Comments / Requests</Label>
                  <Textarea
                    id="comments"
                    value={formData.comments}
                    onChange={(e) => handleChange("comments", e.target.value)}
                    placeholder="Any special requests or comments..."
                    rows={4}
                    className="text-base"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground">
                    <strong>Important:</strong> For any license course, you must have a drivers education certificate. 
                    High School DEC Card required for Teen License Behind the Wheel Course and Adult Waiver Course 
                    (obtained from the front office of your school).
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Appointment confirmations are sent out within 24hrs of your registration. 
                    If you do not confirm your appointment date, we will put the appointment on hold for the next availability.
                    <strong> Don't forget to check your junk/spam folder!</strong>
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg font-bold">
                  Submit Registration
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 space-y-4">
            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Review our Student Contract</h3>
                  <p className="text-muted-foreground mb-4">
                    Please review our terms and conditions before registering
                  </p>
                  <a 
                    href="https://sa-driving-school-inc.square.site/student-contract" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline font-semibold"
                  >
                    View Student Contract →
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-muted-foreground">
              <p>
                Thank you for registering with us. Please look for an email confirmation 
                (from: info@sadriving.com) within 24hrs.
              </p>
              <p className="mt-2">
                Questions? <a href="/contact" className="text-primary hover:underline font-semibold">Contact us</a> or 
                call/text <a href="tel:703-982-1400" className="text-primary hover:underline font-semibold">703-982-1400</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
