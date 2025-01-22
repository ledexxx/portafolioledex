import React from 'react';
import { PenTool, Palette, Code } from 'lucide-react';
import type { Service } from '@/data';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const icons = {
    'pen-tool': <PenTool className="w-8 h-8 text-white" />,
    'palette': <Palette className="w-8 h-8 text-white" />,
    'code': <Code className="w-8 h-8 text-white" />
  };

  return (
    <div className="rounded-xl bg-gradient-to-b from-[#1A2238] to-[#0F172A] p-6 shadow-lg relative overflow-hidden">
      {/* Icono con fondo */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
        {icons[service.icon as keyof typeof icons]}
      </div>

      {/* Título */}
      <h3 className="text-xl font-semibold text-cyan-400 mb-4">{service.title}</h3>

      {/* Descripción */}
      <p className="text-gray-300 mb-6">{service.description}</p>

      {/* Lista de características */}
      <ul className="space-y-3">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-gray-300">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            {feature}
          </li>
        ))}
      </ul>

    
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full -mr-16 -mt-16 blur-3xl" />
    </div>
  );
};

export default ServiceCard;
