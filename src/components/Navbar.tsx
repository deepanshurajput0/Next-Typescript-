'use client';

import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [toggle, setToggle] = useState(true);

    return (
        <div className="flex justify-between px-4 p-4 bg-black drop-shadow-[0_2px_2px_rgba(255,255,255,0.25)] text-white">
            <div className="text-[20px] font-semibold">
                Tech Xverse
            </div>
            <div className=" md:hidden" onClick={() => setToggle(!toggle)}>
                {toggle ? <HiOutlineMenuAlt1 size={25} /> : <RxCross2 size={25} />}
            </div>

           {
            !toggle ?  <ul className=" absolute top-24 bg-black w-full text-center space-y-14 pb-10 ">
            <li>
             <Link href={'/'} >Home</Link>
            </li>
            <li>
             <Link href={'/'} >About</Link>
            </li>
            <li>
             <Link href={'/'} >Contact</Link>
            </li>
            <li>
             <Link href={'/'} >Services</Link>
            </li>
        </ul> : ''
           }
        </div>
    );
}
