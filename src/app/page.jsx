"use client"
import Image from "next/image";
import styles from './globals.css';
import {motion} from "framer-motion";

const Homepage = () => {
    return (
        <motion.div
            className="h-full"
            initial={{y: "-200vh"}}
            animate={{y: "0%"}}
            transition={{duration: 1}}>
            <div className='h-full flex flex-col px-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
                {/*IMAGE CONTAINER*/}
                {/*TODO: Add a rounded image of a programmer*/}
                <div
                    className={`${styles.roundedImage} h-1/2 rounded-lg lg:h-full lg:w-1/2 lg:mr-8 relative overflow-hidden`}>
                    <Image src="/programmer.png" priority={true} alt="/programmer-fin.png" fill
                           className='object-contain roundedImage'
                        // objectFit="contain"
                    />
                </div>
                {/*TEXT CONTAINER*/}
                <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 text-center items-center justify-center'>
                    {/*TITLE*/}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold">
                        Digital Craftsmanship: A Journey Through Design & Development</h1>
                    {/*DESCRIPTION*/}
                    <p className="md:text-2xl">Welcome to Digital Craftsmanship: A Journey Through Design &
                        Development, a curated showcase of my multidisciplinary approach to digital creation. This
                        portfolio represents a careful selection of projects that not only demonstrate my skills :)</p>

                    {/*BUTTONS*/}
                    <div className='flex gap-4'>
                        <button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>View My Work</button>
                        <button className='p-4 rounded-lg ring-1 ring-black text-black'>Contact Me</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Homepage;

