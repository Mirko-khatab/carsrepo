import { useEffect, useState } from "react";
import { imagesData, tabs } from "../constant/product";
import Image from "next/image";
import SkeletonLoader from "./skelton";

export default function Products() {
    const [selectedTab, setSelectedTab] = useState(tabs[0].label);
    const [filteredImages, setFilteredImages] = useState<{ id: number; src: string; category: string; }[]>([]);
    const [loading, setLoading] = useState(true);
    type filteredImages = { id: number; src: string; category: string; }[];
    useEffect(() => {
        setLoading(true);
        const filtered:filteredImages = imagesData.filter(image => image.category === selectedTab);
        setTimeout(() => {
            setFilteredImages(filtered);
            setLoading(false);
        }, 1000); // Simulating loading time
    }, [selectedTab]);

    return (
        <section className="products  container  section" id="products">
            <h2 className="section__title section__title-gradient products__line">
                Find Your Favorite Cars
            </h2>
            <div className="text-sm font-medium text-center flex text-gray-500 border-b border-gray-200 dark:text-gray-400 lg:mx-48">
                <ul className="flex flex-wrap -mb-px">
                    {tabs.map(tab => (
                        <li key={tab.id} className="me-2">
                            <button
                                className={`inline-block p-4 border-b-2 ${selectedTab === tab.label
                                    ? 'text-[#C16824] border-[#C16824]'
                                        : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                                    }`}
                                onClick={() => setSelectedTab(tab.label)}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="products__container container grid">
                {loading ? (
                    filteredImages.map(()=> <SkeletonLoader />)
                ) : (
                    filteredImages.map(image => (
                        <Image
                            key={image.id}
                            src={image.src}
                            alt={image.category}
                            width={300}
                            height={200}
                            className="sponsor__img"
                        />
                    ))
                )}
            </div>
        </section>
    );
}
