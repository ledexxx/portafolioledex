import React from 'react';
import { Code2, Palette, Terminal, Smartphone, MessageCircle } from 'lucide-react';
import type { Service } from '@/data';

interface ServiceCardProps {
    service: Service;
    index: number;
}

const WHATSAPP_URL =
    "https://wa.me/34624136170?text=Hola%20Leonel%2C%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto%20contigo%20%F0%9F%91%8B";

// Iconos Lucide
const lucideIcons: Record<string, JSX.Element> = {
    code:     <Code2    className="w-7 h-7 text-white" strokeWidth={1.5} />,
    palette:  <Palette  className="w-7 h-7 text-white" strokeWidth={1.5} />,
    terminal: <Terminal className="w-7 h-7 text-white" strokeWidth={1.5} />,
    android:  <Smartphone className="w-7 h-7 text-white" strokeWidth={1.5} />,
    // aliases por si el data trae las claves viejas
    "pen-tool": <Code2  className="w-7 h-7 text-white" strokeWidth={1.5} />,
};

const renderIcon = (icon: string) => {
    if (icon.startsWith("img:")) {
        return (
            <img
                src={icon.replace("img:", "")}
                alt=""
                width={28}
                height={28}
                loading="lazy"
                className="w-7 h-7"
            />
        );
    }
    return lucideIcons[icon] ?? <Code2 className="w-7 h-7 text-white" strokeWidth={1.5} />;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <div className="rounded-xl bg-gradient-to-b from-[#1A2238] to-[#0F172A] p-6 shadow-lg relative overflow-hidden flex flex-col">

            {/* Icono */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-14 h-14 rounded-lg flex items-center justify-center mb-6 shrink-0">
                {renderIcon(service.icon)}
            </div>

            {/* Título */}
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {service.title}
            </h3>

            {/* Descripción */}
            <p className="text-gray-300 mb-6">{service.description}</p>

            {/* Features — flex-1 empuja el botón al fondo */}
            <ul className="space-y-3 mb-8 flex-1">
                {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                        {feature}
                    </li>
                ))}
            </ul>

            {/* CTA WhatsApp */}
            <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    group flex items-center justify-center gap-2
                    w-full py-3 px-4 rounded-xl
                    bg-[#25D366] hover:bg-[#1ebe5d]
                    text-white font-semibold text-sm
                    shadow-[0_0_16px_rgba(37,211,102,0.25)]
                    hover:shadow-[0_0_28px_rgba(37,211,102,0.5)]
                    transition-all duration-300
                "
            >
                <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                Hablemos de tu proyecto
            </a>

            {/* Decoración fondo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full -mr-16 -mt-16 blur-3xl pointer-events-none" />
        </div>
    );
};

export default ServiceCard;