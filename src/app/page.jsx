import Image from "next/image";
import styles from './globals.css';

const Homepage = () => {
    return <div className='h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
        {/*IMAGE CONTAINER*/}
        {/*TODO: Add a rounded image of a programmer*/}
        <div className={`${styles.roundedImage} h-1/2 rounded-lg relative overflow-hidden`}>
            <Image src="/programmer.png" alt="/programmer-fin.png" fill className='object-contain roundedImage' objectFit="contain"/>
        </div>
        {/*TEXT CONTAINER*/}
        <div className='h-1/2 flex flex-col gap-8 items-center justify-center'>
            {/*TITLE*/}
            <h1 className="text-4xl font-bold">Cooking Meth</h1>
            {/*DESCRIPTION*/}
            <p>Welcome to my humble guide on how to
                get rich fast by making methamphetamine :). </p>
            {/*BUTTONS*/}
            <div className='flex gap-4'>
                <button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>View My Work</button>
                <button className='p-4 rounded-lg ring-1 ring-black text-black'>Contact Me</button>
            </div>
        </div>
    </div>;
};

export default Homepage;

