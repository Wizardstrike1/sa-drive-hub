import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t-4 border-primary mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-primary">SA Driving School Inc</h3>
            <p className="text-sm opacity-90 mb-4">
              Based in Ashburn, VA | Est: 2014
            </p>
            <p className="text-sm opacity-90">
              Insured, Bonded, and Licensed by the Department of Motor Vehicles (DMV) of Commonwealth of Virginia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/register" className="opacity-90 hover:text-primary transition-colors">Register</Link></li>
              <li><Link to="/teen-license" className="opacity-90 hover:text-primary transition-colors">Teen License BTW</Link></li>
              <li><Link to="/adult-license" className="opacity-90 hover:text-primary transition-colors">Adult License Course</Link></li>
              <li><Link to="/driving-lessons" className="opacity-90 hover:text-primary transition-colors">Driving Lessons</Link></li>
              <li><Link to="/driver-improvement" className="opacity-90 hover:text-primary transition-colors">Driver Improvement</Link></li>
              <li><Link to="/payment" className="opacity-90 hover:text-primary transition-colors">Payment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href="tel:703-982-1400" className="opacity-90 hover:text-primary transition-colors">703-982-1400</a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:info@sadriving.com" className="opacity-90 hover:text-primary transition-colors">info@sadriving.com</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="opacity-90">Ashburn, VA</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Service Areas</h3>
            <p className="text-sm opacity-90">
              Providing Behind the Wheel & Driving Lessons in:
            </p>
            <p className="text-sm opacity-90 mt-2">
              Aldie | Ashburn | Brambleton | Broadlands | Lansdowne | Leesburg | Potomac Falls | South Riding | Sterling | and more
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} SA Driving School Inc. All rights reserved.</p>
          <p className="mt-2">Licensed by the DMV of Commonwealth of Virginia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
