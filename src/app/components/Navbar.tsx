import Image from "next/image";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <header>
        <nav className="bg-black w-full h-auto px-4 sm:px-8 md:px-20 lg:px-40 flex flex-col gap-2">
          {/* Second Navbar */}
          <section className="flex pt-2 border-b-[1px] border-b-gray-400">
            <div className="mb-2">
              <Link href="/" className="flex">
                <IoIosPhonePortrait size={25} className="text-red-500" />
                <p className="text-[12px] mt-1 font-semibold text-gray-300">
                  Download App via SMS
                </p>
              </Link>
            </div>
            <div className="ml-auto">
              <ul className="flex gap-5 text-[12px] font-semibold">
                <li className="text-red-500 text-[14px]">
                  <Link href="/">ا ر د و</Link>
                </li>
                <li className="border-l-[1px] border-l-gray-400 pl-4 text-gray-300">
                  <Link href="/signUp">Sign Up</Link>
                </li>
                <li className="border-l-[1px] border-l-gray-400 pl-4 text-gray-300">
                  <Link href="/signIn">Sign In</Link>
                </li>
              </ul>
            </div>
          </section>

          {/* First Navbar */}
          <section className="flex flex-wrap items-center justify-between sm:gap-4 md:gap-8">
            <div className="mb-2">
              <Link href="/">
                <Image
                  src={`/images/logo.png`}
                  alt="logo"
                  width={140}
                  height={140}
                  className="overflow-hidden cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex ml-auto gap-7 items-center sm:gap-2 md:gap-6">
              <ul className="flex gap-8 text-[14px] text-gray-300 mt-4 font-semibold sm:text-[8px] md:text-[14px]">
                <li>
                  <Link href="/usedCars" className="flex hover:text-red-400">
                    Used Cars
                    <MdArrowDropDown size={15} />
                  </Link>
                </li>
                <li>
                  <Link href="/newCars" className="flex hover:text-red-400">
                    New Cars
                    <MdArrowDropDown size={15} />
                  </Link>
                </li>
                <li>
                  <Link href="/bikes" className="flex hover:text-red-400">
                    Bikes
                    <MdArrowDropDown size={15} />
                  </Link>
                </li>
                <li>
                  <Link href="/autoStore" className="flex hover:text-red-400">
                    AutoStore
                    <MdArrowDropDown size={15} />
                  </Link>
                </li>
                <li>
                  <Link href="/videos" className="hover:text-red-400">Videos</Link>
                </li>
                <li>
                  <Link href="/forums" className="hover:text-red-400">Forums</Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-red-400">Blog</Link>
                </li>
                <li>
                  <Link href="/" className="flex hover:text-red-400">
                    More
                    <MdArrowDropDown size={15} />
                  </Link>
                </li>
              </ul>
              <button
                type="submit"
                className="bg-red-600 px-5 py-[7px] mt-2 rounded text-[14px] text-center font-semibold text-gray-100 flex overflow-hidden sm:px-4 md:px-4"
              >
                Post an Ad
                <MdArrowDropDown size={15} />
              </button>
            </div>
          </section>
        </nav>
      </header>
    </div>
  );
}
