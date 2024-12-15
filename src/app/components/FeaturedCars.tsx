import Link from "next/link";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";
import CarsData from "@/app/CarsData/featured-car.json"
interface CarsData {
    id: number;
    title: string;
    price: string;
    image: string;
    reviews: string;
    link: string;
}

export default function FeaturedCars() {
    const featuredCars = CarsData.cars;
    return (
        <div>
            <main className="mt-16 bg-gray-100 w-full h-auto px-4 sm:px-8 md:px-16 lg:px-40 py-16">
                <div className="flex">
                    <h1 className="text-2xl">Featured New Cars</h1>
                    <Link href="/" className="ml-auto mt-2 text-[14px] text-blue-500">View All New Cars</Link>
                </div>
                <div className="pt-5 pb-1 border-b-[1px] border-b-gray-300">
                    <ul className="flex gap-5 md:gap-10">
                        <li>
                            <Link href="/popular" className="text-[18px] text-gray-700 hover:border-b-2 border-b-blue-800 pb-1.5 hover:font-semibold transition duration-300 ease-in-out">Popular</Link>
                        </li>
                        <li>
                            <Link href="/upcoming" className="text-[18px] text-gray-700 hover:border-b-2 border-b-blue-800 pb-1.5 hover:font-semibold transition duration-300 ease-in-out">Upcoming</Link>
                        </li>
                        <li>
                            <Link href="/newlyLaunched" className="text-[18px] text-gray-700 hover:border-b-2 border-b-blue-800 pb-1.5 hover:font-semibold transition duration-300 ease-in-out">Newly Launched</Link>
                        </li>
                    </ul>
                </div>
                <div className="mt-4 flex flex-wrap gap-5 justify-center">
                    {featuredCars.map((cars: CarsData) => (
                        <div key={cars.id} className="hover:shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <Link href={cars.link}>
                                <div className="flex flex-col items-center justify-center p-5 bg-white">
                                    <div className="h-[9rem]  w-full sm:overflow-hidden">
                                        <Image
                                            src={cars.image}
                                            alt={cars.title}
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <div className="mt-3 ">
                                        <p className="text-[16px] text-center text-blue-900 font-semibold">{cars.title}</p>
                                        <p className="text-center text-[14px] text-green-500">{cars.price}</p>
                                        <div className="flex mt-3">
                                            <RiStarSFill size={15} className="text-orange-500" />
                                            <RiStarSFill size={15} className="text-orange-500" />
                                            <RiStarSFill size={15} className="text-orange-500" />
                                            <RiStarSLine size={15} className="text-orange-500" />
                                            <RiStarSLine size={15} className="text-orange-500" />
                                            <p className="text-[12px] ml-2 text-blue-900">{cars.reviews}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

