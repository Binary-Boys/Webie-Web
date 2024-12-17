import React from 'react';
import { ExternalLink, Code, Smartphone, Brain, Shield } from 'lucide-react';

const projects = [
  {
    title: 'Web Development',
    icon: Code,
    description: 'Modern web applications built with React, Next.js, and other cutting-edge technologies.',
    tech: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    description: 'Cross-platform mobile applications that deliver exceptional user experiences.',
    tech: ['React Native', 'Flutter', 'iOS', 'Android'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'AI Solutions',
    icon: Brain,
    description: 'Intelligent systems powered by machine learning and artificial intelligence.',
    tech: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    description: 'Robust security solutions to protect your digital assets and infrastructure.',
    tech: ['Penetration Testing', 'Security Audits', 'Encryption', 'Authentication'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const ProjectCard = ({ project }) => {
  const Icon = project.icon;
  
  return (
    <div className="group relative bg-[#202020] rounded-lg shadow-xl overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-2xl border border-[#EEAF08]/20">
      <div className="relative h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#202020]/60 group-hover:bg-[#202020]/40 transition-colors"></div>
        <Icon className="absolute top-4 right-4 h-6 w-6 text-[#EEAF08]" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-sm bg-[#EEAF08]/10 text-[#EEAF08] rounded-full border border-[#EEAF08]/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#202020] to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#EEAF08] text-[#202020] rounded-md hover:bg-[#EEAF08]/90 transition-colors">
          View Details
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#202020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Our <span className="text-[#EEAF08]">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our diverse portfolio of innovative solutions across various technology domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;