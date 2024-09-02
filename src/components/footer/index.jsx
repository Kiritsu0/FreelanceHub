import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaAndroid,
  FaApple,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-5 mx-2 rounded-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-around items-start md:items-center">
          <div className="flex flex-col gap-3">
            <a href="#about" className="hover:text-gray-300 hover:underline">
              About
            </a>
            <a href="#services" className="hover:text-gray-300 hover:underline">
              Feedback
            </a>
            <a href="#contact" className="hover:text-gray-300 hover:underline">
              Community
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#about" className="hover:text-gray-300 hover:underline">
              Trust, Safety & Security
            </a>
            <a href="#services" className="hover:text-gray-300 hover:underline">
              Help & Support
            </a>
            <a href="#contact" className="hover:text-gray-300 hover:underline">
              FreelanceHub Foundation
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#about" className="hover:text-gray-300 hover:underline">
              Terms of Service
            </a>
            <a href="#services" className="hover:text-gray-300 hover:underline">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-gray-300 hover:underline">
              Cookie Settings
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#about" className="hover:text-gray-300 hover:underline">
              Accessibility
            </a>
            <a href="#services" className="hover:text-gray-300 hover:underline">
              Desktop App
            </a>
            <a href="#contact" className="hover:text-gray-300 hover:underline">
              Enterprise Solutions
            </a>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:gap-0 gap-10 justify-between mt-5 text-3xl">
          <div className="flex gap-3">
            <h2 className="font-semibold text-lg">Follow Us</h2>
            <FaFacebookF className="border border-white rounded-full p-1 cursor-pointer hover:bg-gray-400" />
            <FaLinkedinIn className="border border-white rounded-full p-1 cursor-pointer hover:bg-gray-400" />
            <FaTwitter className="border border-white rounded-full p-1 cursor-pointer hover:bg-gray-400" />
            <FaYoutube className="border border-white rounded-full p-1 cursor-pointer hover:bg-gray-400" />
            <FaInstagram className="border border-white rounded-full p-1 cursor-pointer hover:bg-gray-400" />
          </div>
          <div className="flex gap-3">
            <h2 className="font-semibold text-lg">Mobile App</h2>
            <FaApple className="border border-white rounded-full p-1 cursor-pointer hover:bg-gray-400" />
            <FaAndroid className="border border-white rounded-full p-1 cursor-pointer hover:bg-gray-400" />
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} FreelanceHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
