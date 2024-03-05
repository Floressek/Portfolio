"use client"
import React from 'react'
import {motion, useAnimation} from 'framer-motion'

const PortfolioPage = () => {
    return (
        <motion.div
            className="h-full"
            initial={{y: "-200vh"}}
            animate={{y: "0%"}}
            transition={{duration: 1}}>
        <div className=''>Portfolio Page</div>
            </motion.div>
    )
}
// export default PortfolioPage
// // Define BouncingBall as its own component
// const BouncingBall = () => {
//     const controls = useAnimation();
//
//     const handleDragEnd = (_, info) => {
//         controls.start({
//             y: [info.point.y, 300],
//             x: info.point.x,
//             scale: [1, 1.1, 1],
//             transition: {
//                 y: {
//                     yoyo: Infinity,
//                     duration: 0.4,
//                     ease: "easeOut"
//                 },
//                 x: {
//                     type: "spring",
//                     stiffness: 50,
//                     damping: 10
//                 },
//                 scale: {
//                     duration: 0.2
//                 }
//             }
//         });
//     };
//
//     return (
//         <div style={{
//             width: '100vw',
//             height: '100vh',
//             backgroundColor: 'blue',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center'
//         }}>
//             <motion.div
//                 drag
//                 onDragEnd={handleDragEnd}
//                 dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
//                 animate={controls}
//                 initial={{ borderRadius: '50%', width: 50, height: 50, backgroundColor: 'black' }}
//             />
//         </div>
//     );
// };
//
// // PortfolioPage component using BouncingBall
// const PortfolioPage = () => {
//     return (
//         <div>
//             <div>Portfolio Page</div>
//             <BouncingBall />
//         </div>
//     );
// };
//
export default PortfolioPage;
