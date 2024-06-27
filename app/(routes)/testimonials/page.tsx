"use client"

import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CoverParticles from '@/components/cover-particles';
import { dataTestimonials } from '@/data';
import TransitionPage from '@/components/transition-page';

const TestimonialsPage = () => {
    return (
        <>
            <TransitionPage />
        
            <div className='flex flex-col items-center justify-center h-lvh mt-20'>  {/* Añade margen superior */}
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Algunos comentarios
                    <span className="block font-bold text-secondary"> de mis clientes</span>
                </h1>
                <div className="flex items-center justify-center w-full">
                    <div className="w-full md:w-auto flex justify-center">
                        <Swiper
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 15
                                },
                            }}
                            freeMode={true}
                            pagination={{
                                clickable: true
                            }}
                            modules={[Pagination]}
                            className="h-[380px] md:h-[300px] w-full md:w-[550px]"
                        >
                            {dataTestimonials.map(({ id, name, description, imageUrl }) => (
                                <SwiperSlide key={id} className="flex flex-col items-center">
                                    <Image src={imageUrl} alt={name} width={100} height={100} className="rounded-full" />
                                    <h4 className='text-center mt-3'>{name}</h4>
                                    <div className="mt-2 text-center">
                                        {description}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="w-full h-full ">
                    <CoverParticles />
                </div>
            </div>
        </>
    );
}

export default TestimonialsPage;