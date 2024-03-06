"use client"
import {motion} from "framer-motion";

const AboutPage = () => {
    return (
        <motion.div
            className="h-full"
            initial={{y: "-200vh"}}
            animate={{y: "0%"}}
            transition={{duration: 1}}>
            <div className=''>
                {/*TEXT CONTAINER*/}
                <div className="">
                    {/*/!*TEXT CONTAINER - className is defined here bc we dont want the same for SVG*/}
                    <div
                        className="px-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
                        {/*BIOGRAPHY CONTAINER*/}
                        <div className="flex flex-col gap-12 justify-center">
                            <h1>BIOGRAPHY</h1>
                            <p className="text-xl">
                                I am a multidisciplinary designer and developer with a passion for
                                creating digital experiences that are both beautiful and functional. I have a strong
                                foundation in design and development, and I am always looking to expand my skillset and
                                learn new technologies. I am a creative thinker and problem solver who is always looking for
                                new challenges and opportunities to grow. I am passionate about creating digital
                                experiences that are both beautiful and functional, and I am always looking to expand my
                                skillset and learn new technologies.
                            </p>
                            <span style={{fontStyle: "italic"}}>
                                Per aspera ad astra - Through hardships to the stars
                            </span>
                        </div>
                        {/*SKILLS CONTAINER*/}
                        <div className="">SKILLS</div>
                        {/*EXPERIENCE CONTAINER*/}
                        <div className="">EXPERIENCE</div>
                    </div>
                    {/*SVG CONTAINER*/}
                    <div className="hidden"></div>
                </div>
            </div>
        </motion.div>
    )
}
export default AboutPage