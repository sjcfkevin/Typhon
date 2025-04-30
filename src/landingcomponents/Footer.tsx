
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-typhon-dark border-t border-white/10 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex align-items text-align">
          <div className="w-[50%]">
            <a href="#" className="items-center">
              <Image src="/logo.png" width={130} height={130} alt='Logo' />
            </a>
          </div>
          <div className="w-[50%]">
            <p className="mt-4 text-gray-400">
              AI-powered crypto intelligence platform revolutionizing blockchain investments through advanced analytics.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center container mx-auto px-4">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} TyphonLabs . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;