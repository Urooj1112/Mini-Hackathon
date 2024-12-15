import Image from "next/image"; // Make sure to import Image component
import Link from "next/link";

function hondaCity() {
    return (
        <div className="my-4 md:my-8 mx-4 md:mx-8 lg:mx-32 p-4 flex flex-col items-center">
      
            {/* Title Section */}
            <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl underline px-2 md:px-4">
                Honda City 2024 Price in Pakistan, Images, Reviews & Specs
            </h1>

            {/* Image Section */}
            <div className="flex justify-center w-full my-4 md:my-6">
                <Image 
                    src={"/images/hondaCity.png"}
                    alt="image"
                    width={400}
                    height={400}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" // Ensure responsive image size
                />
            </div>

            {/* Buttons Section */}
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center px-2 md:px-4">
                <button className="border-[#0032fc] border text-[#0032fc] px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-3 rounded-lg hover:bg-[#0032fc] hover:text-white text-sm sm:text-base md:text-lg">
                    Book a Test Drive
                </button>
                <button className="border-[#0032fc] border text-[#0032fc] px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-3 rounded-lg hover:bg-[#0032fc] hover:text-white text-sm sm:text-base md:text-lg">
                    Request Bank Finance
                </button>
                <button className="border-[#0032fc] border text-[#0032fc] px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-3 rounded-lg hover:bg-[#0032fc] hover:text-white text-sm sm:text-base md:text-lg">
                    Visit Place
                </button>
                <button className="border-[#0032fc] border text-[#0032fc] px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-3 rounded-lg hover:bg-[#0032fc] hover:text-white text-sm sm:text-base md:text-lg">
                    Car Inspection
                </button>
            </div>

            {/* Vehicle Description Section */}
            <div className="flex flex-col items-center py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-16 gap-4 sm:gap-6 md:gap-8">
                <h3 className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl">Vehicle Description</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center text-xs sm:text-sm md:text-base pt-5">
                    <p><span className="font-semibold">Number of Doors </span>4</p>
                    <p><span className="font-semibold">Engine </span>1800CC</p>
                    <p><span className="font-semibold">Condition </span>8.5 / 10</p>
                    <p><span className="font-semibold">Driven </span>9,500 KM</p>
                    <p><span className="font-semibold">Suspension Type </span>Soft Suspension</p>
                    <p><span className="font-semibold">Avg </span>13 KM per ltr</p>
                    <p><span className="font-semibold">Transmission </span>Automatic</p>
                    <p><span className="font-semibold">Fuel Type </span>High Octane</p>
                </div>
            </div>

            {/* Price and Payment Section */}
            <div className="flex flex-col justify-center items-center pb-10">
                <p className="text-[22px] sm:text-[24px] md:text-[26px] py-5 text-green-500">PKR 58,00,000</p>
                
                <Link href="/form">
                    <button className="border-[#0032fc] border text-[#0032fc] px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-3 rounded-lg mt-4 sm:mt-5 md:mt-6 hover:bg-[#0032fc] hover:text-white text-sm sm:text-base md:text-lg">
                        Make Payment
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default hondaCity;
