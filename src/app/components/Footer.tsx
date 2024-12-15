"use client"
import Link from 'next/link'

const Footer = () => {
  return (
 <section className="pt-7 bg-black">
    <p className="text-center text-[14px] text-gray-400 sm:text-[16px] md:text-[18px] lg:text-[20px]">
        Copyright © 2003 - 2024 PakWheels - All Rights Reserved. Urooj Saeed
    </p>
    <Link href="https://www.linkedin.com/in/urooj-saeed-b748a5304">
        <p className="text-center font-bold text-[14px] text-gray-400 hover:text-white sm:text-[16px] md:text-[18px] lg:text-[20px]">
            Made by Urooj Saeed
        </p>
    </Link>
</section>
  );
}

export default Footer;

