import React from "react";
import { easeInOut } from "motion";
const Content = () => {
	return <div className=" [perspective::1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-950 flex items-center justify-center"
    style={
        {
            backgroundImage: ` radial-gradient(circle at 0.1px 0.1px, rgba(6,182,212,0.2) 1px, transparent 0)`,
            backgroundSize: `8px 8px`,
            backgroundRepeat: 'repeat'
        }
    }
    >
        <motion.button
        initial = {
            {
                rotate:0,
                opacity: 0,
            }
        }
        whileHover={{
            rotateX: 25,
            rotateY: 10,
            y: -10,
            boxShadow: "0px 20px 50px rgba(249,115,22,0.5)"
        }}
        whileTap={{
            y: 0
        }}

        animate = {{
            opacity: 1,
            rotate:[10,-10,0]
        }}transition={{
            duration: 0.3,
            ease:easeInOut
        }}
        style={{
            translateZ: 100
        }}
        
        className= " group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
            <span className="group-hover:text-orange-500 transition-colors duration-300">Subscribe</span>
            <span className=" absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px w-3/4 mx-auto "></span>
            <span className=" opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto blur-sm h-[4px] w-full "></span>
        </motion.button>

    </div>
};

export default Content;
