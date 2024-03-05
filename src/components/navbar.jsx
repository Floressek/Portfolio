"use client"

import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";
import NavLink from "@/components/navLink";
import {motion} from "framer-motion";

const links = [
    {href: "/", label: "Home"},
    // {url: "/", title: "Home"},
    {href: "/about", label: "About"},
    {href: "/portfolio", label: "Portfolio"},
    {href: "/contact", label: "Contact"},
    {href: "/testAnimation", label: "A"},
];

const Navbar = () => {
    const [open, setOpen] = useState(false) // React hook to manage state, use client-side only


    const topVariance = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255, 255, 255)",
        }
    }

    const centerVariance = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        }
    }

    const bottomVariance = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255, 255, 255)",
        }
    }

    const listVariance = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
            // TRANSITION
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.13,
                type: "spring",
                stiffness: 150,
                damping: 20,
            }
        }
    }

    const listItemVariance = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        }
    }

    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            {/*LINKS*/}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link => (
                    // Use the key prop to avoid React warning
                    <NavLink link={link} key={link.label}/>
                    // <Link href={link.href} key={link.label}>{link.label}</Link>
                ))}
            </div>
            {/* LOGO */}
            {/*The logo gets adjusted only when the screen is larger than 768px */}
            <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
                <Link href="/"
                      className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-1">Simon</span>
                    <span
                        className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.Florek</span>
                </Link>
            </div>
            {/*SOCIAL*/}
            <div className="hidden md:flex gap-4 w-1/3">
                <Link href="https://github.com/Floressek">
                    <Image src="/github.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="#">
                    <Image src="/instagram.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="#">
                    <Image src="/facebook.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="https://www.linkedin.com/in/szymon-florek-33a968296/">
                    <Image src="/linkedin.png" alt="" width={24} height={24}/>
                </Link>
            </div>
            {/* RESPONSIVE MENU */}
            <div className='md:hidden'>
                {/*MENU BUTTON*/}
                {/*React hook to manage state, set state to opposite of current state*/}
                <button
                    className="w-10 h-8 flex flex-col justify-between z-50 relative"
                    onClick={(() => setOpen((prev) => !prev))}>
                    <motion.div variants={topVariance}
                                animate={open ? "opened" : "closed"}
                                className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                    <motion.div variants={centerVariance}
                                animate={open ? "opened" : "closed"}
                                className='w-10 h-1 bg-black rounded'></motion.div>
                    <motion.div variants={bottomVariance}
                                animate={open ? "opened" : "closed"}
                                className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                </button>
                {/*MENU LIST*/}
                {open && (
                    <motion.div
                        variants={listVariance}
                        initial="closed"
                        animate="opened"
                        className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl font-semibold z-40"> {/*z-40 to make sure it's on top of everything*/}
                        {links.map((link) => (

                            <motion.div className="" key={link.label} variants={listItemVariance}>
                                <Link href={link.href}>
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Navbar;