import { motion } from "motion/react";

import React, { useState } from "react";

const Navbar = () => {
	const navItems = [
		{
			title: "Home",
			href: "/",
		},
		{
			title: "About",
			href: "/about",
		},
		{
			title: "Services",
			href: "/services",
		},
		{
			title: "Portfolio",
			href: "/portfolio",
		},
		{
			title: "Blog",
			href: "/blog",
		},
		{
			title: "Contact",
			href: "/contact",
		},
	];

	const [hovered, setHovered] = useState(null);

	return (
		<div className=' py40 relative top-0 w-full  bg-gray-100'>
			<nav className=' max-w-2xl mx-auto bg-white rounded-full px-2 py-1 flex'>
				{navItems.map((item, idx) => (
					<div
						onMouseEnter={() => setHovered(idx)}
						onMouseLeave={() => setHovered(null)}
						key={item?.title}
						className=' w-full group cursor-pointer  relative text-center py-3 text-xs text-neutral-500'
					>
						<span className=' relative group-hover:text-neutral-100 text-neutral-500 z-20 '>
							{item?.title}
						</span>

						{hovered === idx && (
							<motion.div
								layoutId='hover'
								className=' absolute inset-0 rounded-full w-full h-full bg-green-700'
							></motion.div>
						)}
					</div>
				))}
			</nav>
		</div>
	);
};

export default Navbar;
