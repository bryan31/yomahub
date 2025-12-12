import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="snap-section min-h-[50vh] flex flex-col justify-center items-center bg-gray-50 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Ready to Build?</h2>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Join the Dromara open source community and contribute to the future of software development.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
            <a href="https://gitee.com/dromara" className="text-gray-400 hover:text-black transition-colors font-medium">Dromara Org</a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors font-medium">Terms</a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors font-medium">Privacy</a>
        </div>
        
        <p className="text-base text-gray-400">
          &copy; {new Date().getFullYear()} Yomahub. All rights reserved. 
        </p>
      </div>
    </footer>
  );
};

export default Footer;