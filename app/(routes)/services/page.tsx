import TransitionPage from "@/components/transition-page";
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { servicesData } from '@/data';
import ServiceCard from '@/components/ServiceCard';

const ServicesPage = () => {
  console.log('servicesData:', servicesData);

  return (
    <>
      <TransitionPage />

      <div className="min-h-screen  text-white mt-12">
        <section className="container px-6 pt-8 pb-20 mx-auto text-center md:pt-10">
          <h1 className="text-5xl md:text-7xl mb-6 animate-float">
            Mis <span className="text-cyan-500 font-bold">servicios.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Ofrezco servicios especializados en diseño web frontend, enfocados en la creación de sitios web 
            como también cualquier solución de diseño especialmente material publicitario para impulsar tu marca.
          </p>
          <ChevronDown className="w-8 h-8 mx-auto text-cyan-400 animate-bounce" />
        </section>

        <section className="container mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
