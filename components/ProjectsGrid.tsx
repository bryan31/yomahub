import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const ProjectsGrid: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="relative min-h-screen w-full snap-section bg-gray-50 flex flex-col justify-center py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            生态全景
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
             极致性能，为架构而生
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)] flex-1">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;