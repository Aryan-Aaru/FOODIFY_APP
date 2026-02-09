import React from 'react';
import { Facebook, Twitter } from 'lucide-react';

const Footer = () => (
  <div className="mt-16 border-t border-gray-200 pt-10">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm">
      <div>
        <h4 className="font-bold text-gray-400 text-xs tracking-wider uppercase mb-4">About</h4>
        <ul className="space-y-3 text-gray-600">
          <li><a href="#" className="hover:text-red-500 transition">Company</a></li>
          <li><a href="#" className="hover:text-red-500 transition">Careers</a></li>
          <li><a href="#" className="hover:text-red-500 transition">News</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-gray-400 text-xs tracking-wider uppercase mb-4">Legal</h4>
        <ul className="space-y-3 text-gray-600">
          <li><a href="#" className="hover:text-red-500 transition">Privacy</a></li>
          <li><a href="#" className="hover:text-red-500 transition">Terms</a></li>
          <li><a href="#" className="hover:text-red-500 transition">Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-gray-400 text-xs tracking-wider uppercase mb-4">Help</h4>
        <ul className="space-y-3 text-gray-600">
          <li><a href="#" className="hover:text-red-500 transition">Support</a></li>
          <li><a href="#" className="hover:text-red-500 transition">FAQs</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-gray-400 text-xs tracking-wider uppercase mb-4">Social</h4>
        <div className="flex gap-4 text-gray-400">
          <a href="#" className="hover:text-blue-600 transition"><Facebook size={20} /></a>
          <a href="#" className="hover:text-blue-400 transition"><Twitter size={20} /></a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
