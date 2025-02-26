import plantsGrow from "../assets/plants-grow.webp";
import playstore from "../assets/google-play.png";
import appstore from "../assets/app-store.png";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import PaymentIcons from "./PaymentIcons";

const accordionData = [
  {
    title: "About Us",
    content: (
      <ul className="pl-2 flex flex-col gap-2">
        <li>Our Story</li>
        <li>Careers</li>
        <li>Contact Us</li>
        <li>Locate Stores</li>
        <li>Own Grown</li>
        <li>Garden Services & Maintenance</li>
      </ul>
    ),
  },
  {
    title: "Customer Care",
    content: (
      <ul className="pl-2 flex flex-col gap-2">
        <li>Take The Plant Quiz</li>
        <li>Track Order</li>
        <li>Shipping Policy</li>
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
        <li>FAQs</li>
        <li>Terms of Service</li>
        <li>Refund Policy</li>
      </ul>
    ),
  },
  {
    title: "Offers & Rewards",
    content: (
      <ul className="pl-2 flex flex-col gap-2">
        <li>Plant Parent Rewards Club</li>
        <li>Ugaoo Coupons</li>
      </ul>
    ),
  },
  {
    title: "Get In Touch",
    content: (
      <div className="space-y-2  flex flex-col gap-2 underline">
        <p>
          WhatsApp us at: <strong>7090970909</strong>
        </p>
        <p>
          Call: <strong>+91-9129912991</strong>
        </p>
        <p>
          Email: <strong>support@ugaoo.com</strong>
        </p>
      </div>
    ),
  },
  {
    title: "Sign up for our newsletter",
    content: (
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Enter Email Address"
          className="w-full border-b py-2 px-4"
        />
        <p className="pt-2">
          For plant care tips, our featured plant of the week, exclusive offers
          and discounts
        </p>

        <div className="flex flex-col gap-6 text-black py-2">
          <h1 className="tracking-widest">FOLLOW US</h1>
          <div className="flex items-center justify-between">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
            <Youtube />
          </div>
        </div>
      </div>
    ),
  },
];

const Footer = () => {
  return (
    <div>
      <div className="bg-primary-dark flex gap-4 items-center text-sm justify-center py-3">
        <div className="flex items-center">
          <img src={plantsGrow} alt="plants-grow" />
          <p className="text-whtie font-semibold text-sm">Plants Grow People</p>
        </div>
        <div className="flex items-center">
          <img src={plantsGrow} alt="plants-grow" />
          <p className="text-whtie font-semibold text-sm">Plants Grow People</p>
        </div>
        <div></div>
      </div>

      <div>
        <ul className="flex items-center gap-x-2 gap-y-1 py-6 underline text-black flex-wrap text-sm justify-center font-light">
          <li>Mumbai</li>
          <li>Pune</li>
          <li>Delhi</li>
          <li>Bangalore</li>
          <li>Hyderabad</li>
          <li>Chennai</li>
          <li>Kolkata</li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold text-black text-center text-sm">
          DOWNLOAD APP!
        </h2>
        <div className="flex gap-2 justify-center py-4">
          <img src={playstore} alt="playstore" className="h-8" />
          <img src={appstore} alt="appstore" className="h-8" />
        </div>
      </div>

      <Accordion />

      {/* Payment */}

      <PaymentIcons />

      <p className="text-center py-2">
        <small class="text-sm text-black">
          © 2025,{" "}
          <a href="/" title="">
            Ugaoo
          </a>
          . All rights reserved.
        </small>
      </p>
    </div>
  );
};

const Accordion = () => {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  console.log(openSections);
  return (
    <div className="w-full max-w-md mx-auto text-black list-none border-y font-light">
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <div
            className="flex justify-between items-center"
            onClick={() => toggleSection(index)}
          >
            <div className="block text-left p-3">{item.title}</div>
            {openSections.includes(index) ? <ChevronUp /> : <ChevronDown />}
          </div>

          {openSections.includes(index) && (
            <div className="p-3 bg-white">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Footer;
