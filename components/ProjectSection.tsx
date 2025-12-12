import React, { useRef, useEffect, useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectSectionProps {
  project: Project;
  index: number;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ project, index }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const Icon = project.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Use different layout based on index (even/odd) for visual variety
  const isEven = index % 2 === 0;

  return (
    <section 
      id={project.id}
      ref={sectionRef}
      className={`relative h-screen w-full snap-section flex items-center justify-center overflow-hidden ${project.theme.bgGradient}`}
    >
      <div className={`max-w-7xl mx-auto px-6 w-full h-full flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center gap-12 md:gap-20`}>
        
        {/* Content Side */}
        <div className={`flex-1 flex flex-col justify-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
           <div className="mb-4">
             {Icon && (
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg backdrop-blur-sm ${project.theme.textColor === 'text-white' ? 'bg-white/20 text-white' : 'bg-white text-black'}`}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>
             )}
             <span className={`inline-block py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${project.theme.textColor === 'text-white' ? 'border-white/30 text-white' : 'border-black/10 text-gray-500'}`}>
               {project.tags[0]}
             </span>
           </div>
           
           <h2 className={`text-5xl md:text-7xl font-bold tracking-tight mb-6 ${project.theme.textColor}`}>
             {project.name}
           </h2>
           
           <h3 className={`text-2xl md:text-3xl font-medium mb-6 ${project.theme.accentColor} opacity-90`}>
             {project.description}
           </h3>
           
           <p className={`text-lg md:text-xl leading-relaxed max-w-xl mb-10 ${project.theme.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
             {project.longDescription}
           </p>

           <div className="flex items-center gap-6">
              <a
                href={project.website || project.link}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center px-8 py-3 rounded-full text-base font-semibold transition-all hover:scale-105 shadow-lg ${project.theme.textColor === 'text-white' ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800'}`}
              >
                {project.website ? 'Visit Website' : 'View on Gitee'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              {project.stats && (
                <div className={`flex flex-col ${project.theme.textColor === 'text-white' ? 'text-white' : 'text-black'}`}>
                   <span className="text-xs opacity-60 uppercase tracking-wider">{project.stats.label}</span>
                   <span className="text-xl font-bold">{project.stats.value}</span>
                </div>
              )}
           </div>
        </div>

        {/* Visual Side */}
        <div className={`flex-1 flex items-center justify-center w-full transition-all duration-1000 delay-200 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className={`relative w-full aspect-square max-w-[500px] rounded-[3rem] shadow-2xl overflow-hidden flex items-center justify-center ${project.theme.textColor === 'text-white' ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-white border border-gray-100'}`}>
                {/* Abstract visualization */}
                {Icon && <Icon className={`w-48 h-48 md:w-64 md:h-64 opacity-20 ${project.theme.textColor === 'text-white' ? 'text-white' : 'text-black'}`} />}
                
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 pointer-events-none"></div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;