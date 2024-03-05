// // // // // "use client"
// // // // // import {motion} from "framer-motion";
// // // // //
// // // // // const TestPage = () => {
// // // // //     return (
// // // // //         <div className="h-full flex items-center justify-center">
// // // // //             <motion.div className="w-96 h-96 bg-black rounded"
// // // // //                         initial={{x: -100}}
// // // // //                         animate={{x: 100}}
// // // // //             ></motion.div>
// // // // //         </div>
// // // // //     )
// // // // // }
// // // // //
// // // // // "use client"
// // // // // import { motion } from 'framer-motion';
// // // // // import { useRef, useEffect } from 'react';
// // // // // import { gsap } from 'gsap';
// // // // //
// // // // // const TestPage = () => {
// // // // //     const boxRef = useRef(null);
// // // // //
// // // // //     useEffect(() => {
// // // // //         gsap.to(boxRef.current, {
// // // // //             x: 500, // Change to a more noticeable value
// // // // //             duration: 1, // Shorten for quicker feedback
// // // // //             repeat: -1, // Continuous repeat
// // // // //             yoyo: true, // Return to start for a back-and-forth animation
// // // // //             ease: 'power1.inOut',
// // // // //         });
// // // // //     }, []);
// // // // //
// // // // //     return (
// // // // //         <div className="h-full flex items-center justify-center">
// // // // //             <motion.div className="w-96 h-96 bg-black rounded" ref={boxRef}></motion.div>
// // // // //         </div>
// // // // //     );
// // // // // };
// // // // //
// // // // // export default TestPage;
// // // // "use client"
// // // // import { useRef, useEffect } from 'react';
// // // // import { gsap } from 'gsap';
// // // //
// // // // const TestPage = () => {
// // // //     const boxRef = useRef(null);
// // // //     const trailRef = useRef(null);
// // // //
// // // //     useEffect(() => {
// // // //         // Animate the block
// // // //         const blockTimeline = gsap.timeline({
// // // //             repeat: -1, // Repeat the animation indefinitely
// // // //             yoyo: true, // Go back to the original state before repeating
// // // //             repeatDelay: 2, // Wait for half a second before starting the animation again
// // // //         });
// // // //
// // // //         blockTimeline.to(boxRef.current, {
// // // //             x: "100%",
// // // //             duration: 3,
// // // //             ease: 'power2.inOut',
// // // //         });
// // // //
// // // //         // Animate the trail with a slightly longer duration and a delay to simulate catching up
// // // //         const trailTimeline = gsap.timeline({
// // // //             repeat: -1,
// // // //             yoyo: true,
// // // //             repeatDelay: 2.2, // Ensure this matches the block's repeatDelay for synchronized reversal
// // // //         });
// // // //
// // // //         trailTimeline.to(trailRef.current, {
// // // //             x: "100%",
// // // //             duration: 3.1, // Slightly longer than the block's duration to simulate the catching up
// // // //             opacity: 0, // Fades out the trail
// // // //             delay: 0.1, // Start slightly after the block starts moving
// // // //             ease: 'power2.inOut',
// // // //         });
// // // //     }, []);
// // // //
// // // //     return (
// // // //         <div className="h-full flex items-center justify-center">
// // // //             <div ref={boxRef} className="w-96 h-96 bg-black rounded"></div>
// // // //             <div ref={trailRef} className="w-96 h-96 bg-gradient-to-r from-transparent to-black rounded absolute"></div>
// // // //         </div>
// // // //     );
// // // // };
// // // //
// // // // export default TestPage;
// // //
// // // "use client"
// // // import {useRef, useEffect, useState} from 'react';
// // // import {gsap} from 'gsap';
// // //
// // // const TestPage = () => {
// // //     const boxRef = useRef(null);
// // //     const trailRef = useRef(null);
// // //     const [isPaused, setIsPaused] = useState(false);
// // //
// // //     useEffect(() => {
// // //         const togglePause = () => {
// // //             setIsPaused(!isPaused)
// // //         }
// // //
// // //         const startAnimations = () => {
// // //             // Animate the block
// // //             const blockTimeline = gsap.timeline();
// // //
// // //             blockTimeline.to(boxRef.current, {
// // //                 x: "100%",
// // //                 duration: 2,
// // //                 ease: 'power2.inOut',
// // //                 repeat: -1,
// // //                 yoyo: true,
// // //                 paused: true, // Start paused to allow the trail to catch up
// // //                 OnComplete: isPaused ? true : togglePause(),
// // //             });
// // //
// // //             // Animate the trail with a slight delay to simulate catching up
// // //             gsap.to(trailRef.current, {
// // //                 x: "100%",
// // //                 duration: 2.9, // Slightly longer than the block's animation to simulate catching up
// // //                 opacity: 0.2, // Fades out the trail
// // //                 delay: 0.1, // Starts just after the block
// // //                 ease: 'power2.inOut',
// // //                 repeat: -1,
// // //                 yoyo: true, // Reverses the animation
// // //                 // Once the trail completes, reset and restart the animations
// // //             });
// // //         };
// // //
// // //         // Start the initial animation
// // //         startAnimations();
// // //     }, []);
// // //
// // //     return (
// // //         <div className="h-full flex items-center justify-center">
// // //             <div ref={boxRef} className="w-96 h-96 bg-black rounded"></div>
// // //             <div ref={trailRef} className="w-96 h-96 bg-gradient-to-r from-transparent to-black rounded absolute"></div>
// // //         </div>
// // //     );
// // // };
// // //
// // // export default TestPage;
// //
"use client"
import {useRef, useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {gsap} from 'gsap';

const TestPage = () => {
    const boxRef = useRef(null);
    const trailRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const startAnimations = () => {
            // Animate the block
            const blockTimeline = gsap.timeline({
                paused: true, // Start paused to allow the trail to catch up
            });

            const blockAnimation = blockTimeline.to(boxRef.current, {
                x: "100%",
                duration: 2.05,
                ease: 'power2.inOut',
                repeat: -1,
                yoyo: true,
                onUpdate: () => {
                    // Correctly use the progress() method on the animation instance
                    if (blockAnimation.progress() >= 1 && !isPaused) {
                        togglePause();
                    }
                },
            });

            // Animate the trail with a slight delay to simulate catching up
            gsap.to(trailRef.current, {
                x: "100%",
                duration: 2.1, // Slightly longer than the block's animation to simulate catching up
                opacity: 0.2, // Fades out the trail
                ease: 'power2.inOut',
                repeat: -1,
                yoyo: true, // Reverses the animation
                onComplete: () => {
                    // Once the trail completes, reset and restart the animations
                    // restartAnimation();
                }
            });

            // Start the block animation
            blockTimeline.play();
        };

        // const restartAnimation = () => {
        //     // Reset positions without animation
        //     gsap.set([boxRef.current, trailRef.current], {x: 0, opacity: 1});
        //
        //     // Delay before restarting the animation to simulate a waiting period
        //     gsap.delayedCall(0.5, startAnimations);
        // };

        const togglePause = () => {

            // setIsPaused(!blockTimeline.to(boxRef).paused);
        }

        // Start the initial animation
        startAnimations();
    }, []);

    return (
        <motion.div
            className="h-full"
            initial={{y: "-200vh"}}
            animate={{y: "0%"}}
            transition={{duration: 1}}>
            <div className="h-full flex items-center justify-center">
                <div ref={boxRef} className="w-96 h-96 bg-black rounded"></div>
                <div ref={trailRef}
                     className="w-96 h-96 bg-gradient-to-r from-transparent to-black rounded absolute"></div>
            </div>
        </motion.div>
    );
};

export default TestPage;


// "use client"
// import {useRef, useEffect, useState} from 'react';
// import {gsap} from 'gsap';
//
// const TestPage = () => {
//     const boxRef = useRef(null);
//     const trailRef = useRef(null);
//     const [isPaused, setIsPaused] = useState(false);
//
//     useEffect(() => {
//         const startAnimations = () => {
//             // Create a timeline
//             const tl = gsap.timeline({
//                 // onComplete: restartAnimation // Restart animations after the timeline completes
//             });
//
//
//             // Add the block animation to the timeline, starting after the trail animation
//             tl.to(boxRef.current, {
//                 x: "100%",
//                 duration: 2,
//                 ease: 'power2.inOut',
//                 repeat: -1,
//                 yoyo: true,
//                 // onUpdate: () => {
//                 //     // Pause the block animation when it arrives
//                 //     if (!isPaused && tl.progress() >= 1) {
//                 //         togglePause();
//                 //     }
//
//             });
//
//             // Add the trail animation to the timeline
//             tl.to(trailRef.current, {
//                 x: "100%",
//                 duration: 2.2, // Slightly longer than the block's animation to simulate catching up
//                 opacity: 0.2, // Fades out the trail
//                 ease: 'power2.inOut',
//                 repeat: -1,
//                 yoyo: true, // Reverses the animation
//
//             });
//
//
//             // Start the timeline
//             tl.play();
//         };
//
//         const restartAnimation = () => {
//             // Reset positions without animation
//             gsap.set([boxRef.current, trailRef.current], {x: 0, opacity: 1});
//         };
//
//         const togglePause = () => {
//             setIsPaused(!isPaused)
//         }
//
//         // Start the initial animation
//         startAnimations();
//     }, []);
//
//     return (
//         <div className="h-full flex items-center justify-center">
//             <div ref={boxRef} className="w-96 h-96 bg-black rounded"></div>
//             <div ref={trailRef} className="w-96 h-96 bg-gradient-to-r from-transparent to-black rounded absolute"></div>
//         </div>
//     );
// };
//
// export default TestPage;


