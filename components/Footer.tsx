import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="snap-section min-h-[20vh] flex flex-col justify-center items-center bg-gray-50 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-base text-gray-400 mb-2">
          &copy; {new Date().getFullYear()} Yomahub. All rights reserved.
        </p>
        <p className="text-sm text-gray-400">
          <a href="http://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
            备案号：沪ICP备18012955号-1
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;