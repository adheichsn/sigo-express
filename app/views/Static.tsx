"use client"
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Statistics() {
    const { ref: pelangganRef, inView: pelangganVisible } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: pengirimanRef, inView: pengirimanVisible } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: titikLayananRef, inView: titikLayananVisible } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div className="bg-black text-white py-10">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                <div ref={pelangganRef} className="flex flex-col items-center">
                    <h3 className="text-5xl sm:text-7xl md:text-8xl font-bold">
                        {pelangganVisible && <CountUp end={1000} duration={3} />}
                        <span className='text-orange-500'>+</span>
                    </h3>
                    <p className='text-orange-500 text-lg sm:text-xl mt-2'>Pelanggan</p>
                </div>
                <div ref={pengirimanRef} className="flex flex-col items-center">
                    <h3 className="text-5xl sm:text-7xl md:text-8xl font-bold">
                        {pengirimanVisible && <CountUp end={100} duration={4} suffix="K" />}
                    </h3>
                    <p className='text-orange-500 text-lg sm:text-xl mt-2'>Pengiriman</p>
                </div>
                <div ref={titikLayananRef} className="flex flex-col items-center">
                    <h3 className="text-5xl sm:text-7xl md:text-8xl font-bold">
                        {titikLayananVisible && <CountUp end={34} duration={5} />}
                        <span className='text-orange-500'>+</span>
                    </h3>
                    <p className='text-orange-500 text-lg sm:text-xl mt-2'>Titik Layanan Seindonesia</p>
                </div>
            </div>
        </div>
    );
}

export default Statistics;
