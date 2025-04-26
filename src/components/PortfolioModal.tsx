
import { X } from "lucide-react";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    fullDescription?: string;
    technologies?: string[];
    link?: string;
  };
}

const PortfolioModal = ({ isOpen, onClose, project }: PortfolioModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-11/12 max-w-3xl max-h-[90vh] overflow-y-auto glass rounded-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/10 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <h3 className="text-2xl font-display text-white mb-4">{project.title}</h3>
          
          <p className="text-white/70 mb-6">{project.fullDescription || project.description}</p>
          
          {project.technologies && (
            <div className="mb-6">
              <h4 className="text-white font-display mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-white/70 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-mono text-sm uppercase tracking-wider rounded-md hover:bg-orange-600 transition-all"
            >
              Visit Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
