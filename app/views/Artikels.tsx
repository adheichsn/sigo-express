import React from 'react';
import Image from 'next/image';

function Artikels() {
    const articles = [
        {
            title: 'The Evolution of Logistics',
            description: 'Cargo refers to goods or merchandise that is transported from one place to another, typically by air, sea, or land.',
            image: '/sigo/home.png',
            link: '#',
        },
        {
            title: 'Supply Chain Optimization',
            description: 'Cargo refers to goods or merchandise that is transported from one place to another, typically by air, sea, or land.',
            image: '/sigo/about.png',
            link: '#',
        },
        {
            title: 'Technology and Innovation',
            description: 'Cargo refers to goods or merchandise that is transported from one place to another, typically by air, sea, or land.',
            image: '/sigo/kirim.png',
            link: '#',
        },
    ];

    return (
        <div className="bg-grey py-16">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex justify-start items-center mb-4">
                    <Image
                        src="/logo/artikel.svg"
                        alt="Artikel Icon"
                        width={20}
                        height={17}
                        className="mr-2"
                    />
                    <h3 className="text-orange-500 text-lg font-semibold">Artikel</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={article.image}
                                alt={article.title}
                                width={500}
                                height={300}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                                <p className="text-gray-600 mb-4">{article.description}</p>
                                <a href={article.link} className="text-green-500 font-semibold">
                                    Read More ...
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Artikels;
