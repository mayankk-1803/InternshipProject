import React from "react";
import { Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sky-200 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-10">
          
          <div>
            <h2 className="text-lg font-semibold flex items-center space-x-2">
              <span>E-Comm</span>
            </h2>
            <p className="mt-3 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          
          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <p className="mb-3">Since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>
            <div className="flex space-x-3">
              <a href="#" className="text-sky-600 hover:text-sky-800">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-sky-600 hover:text-sky-800">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p>
              E-Comm , 4578
              <br />
              Marmora Road
            </p>
            <p className="mt-2">+1 (800) 234-5678</p>
          </div>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <h4 className="font-semibold mb-2">Information</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-sky-600">About Us</a></li>
              <li><a href="#" className="hover:text-sky-600">Information</a></li>
              <li><a href="#" className="hover:text-sky-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sky-600">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Service</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-sky-600">About Us</a></li>
              <li><a href="#" className="hover:text-sky-600">Information</a></li>
              <li><a href="#" className="hover:text-sky-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sky-600">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">My Account</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-sky-600">About Us</a></li>
              <li><a href="#" className="hover:text-sky-600">Information</a></li>
              <li><a href="#" className="hover:text-sky-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sky-600">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Our Offers</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-sky-600">About Us</a></li>
              <li><a href="#" className="hover:text-sky-600">Information</a></li>
              <li><a href="#" className="hover:text-sky-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sky-600">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        
        <div className="border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-600">
          <p>@ 2025 E-Comm. All Rights Reserved.</p>
          <div className="flex space-x-2 mt-3 md:mt-0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-3" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" className="h-3" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1920px-PayPal.svg.png" alt="PayPal" className="h-3" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-3" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
