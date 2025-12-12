import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const Icon = project.icon;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] border border-gray-100"
      style={{
        animation: `fadeInUp 0.8s ease-out forwards ${index * 0.1}s`,
        opacity: 0 // Start hidden for animation
      }}
    >
      {/* Background Gradient Blob */}
      <div className={`absolute top-0 right-0 w-64 h-64 opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 group-hover:opacity-10 transition-opacity duration-500 ${project.theme.bgGradient.replace('bg-gradient-to-br', 'bg-gradient-to-tl')}`}></div>

      <div className="flex items-start justify-between mb-6 relative z-10">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${project.theme.bgGradient} shadow-inner p-2`}>
          {project.logo ? (
            <img src={project.logo} alt={`${project.name} logo`} className="w-full h-full object-contain" />
          ) : (
            Icon && <Icon size={28} className={project.theme.accentColor} />
          )}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black text-white p-2 rounded-full">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>

      <div className="flex-1 relative z-10">
        <h3 className={`text-3xl font-extrabold tracking-tight mb-3 transition-colors ${project.theme.titleColor || 'text-gray-900'} group-hover:brightness-110`} style={{fontWeight: 700}}>
          {project.name}
        </h3>
        <p className={`text-base font-bold leading-relaxed mb-4 line-clamp-2 ${project.theme.accentColor}`} style={{fontWeight: 600}}>
          {project.description}
        </p>
        <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed font-medium" style={{fontWeight: 500}}>
            {project.longDescription}
        </p>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between relative z-10">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-100">
              {tag}
            </span>
          ))}
        </div>
        {project.stats && (
           <div className="text-right">
             <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">{project.stats.label}</div>
             <div className="text-sm font-bold text-gray-900">{project.stats.value}</div>
           </div>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;