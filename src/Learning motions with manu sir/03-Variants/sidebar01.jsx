import { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "motion/react";
const Sidebar01 = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const MenueItems = [
		{
			icon: <IoHomeOutline size={20} />,
			name: "Home",
		},
		{
			icon: <TbBrandGoogleAnalytics size={20} />,
			name: "Analytics",
		},
		{
			icon: <FaRegUser size={20} />,
			name: "User",
		},
		{
			icon: <IoSettingsOutline size={20} />,
			name: "Settings",
		},
	];

	const sidebarVariant = {
		open: {
			width: "16rem",
		},
		closed: {
			width: "4.5rem",
		},
	};

	const parentVariants = {
		open: {
			transition: {
				staggerChildren: 0.07,
				delayChildren: 0.2,
			},
		},
		closed: {
			transition: {
				staggerChildren: 0.05,
				delayChildren: -1,
			},
		},
	};

	const childVariants = {
		open: {
			opacity: 1,
			y: 0,
		},
		closed: {
			opacity: 0,
			y: -10,
		},
	};

	return (
		<motion.div
			initial={false}
			animate={isExpanded ? "open" : "closed"}
			transition={{
				duration: 0.3,
			}}
			className='flex border border-gray-50 '
		>
			{/* Sidebar */}
			<motion.div
				variants={sidebarVariant}
				className={`fixed top-0 left-0 h-full ${
					isExpanded ? "w-64" : "w-16"
				} bg-white text-gray-900 p-4 shadow-lg flex flex-col`}
			>
				{/* Toggle Button */}
				<div className=' relative flex justify-start items-center mt-3 p-2'>
					{isExpanded && (
						<motion.span
							variants={childVariants}
							className=' font-bold text-gray-800 text-xl '
						>
							Dashboard
						</motion.span>
					)}
					<button
						className=' absolute right-0 mb-4 p-1   text-gray-800 rounded-lg shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] self-center'
						onClick={() => setIsExpanded(!isExpanded)}
					>
						<MdChevronRight
							size={24}
							className={`${isExpanded && "rotate-180"}`}
						/>
					</button>
				</div>

				{/* Menu Items */}
				<motion.ul
					variants={parentVariants}
					className={`mt-10 space-y-4 flex flex-col ${
						isExpanded ? "items-start" : "items-center"
					}`}
				>
					{MenueItems.length &&
						MenueItems.map((item) => (
							<motion.li
								variants={childVariants}
								key={item?.name}
								className='flex w-full items-center space-x-2 hover:bg-gray-100 p-2 rounded cursor-pointer'
							>
								<span>{item?.icon}</span>
								{isExpanded && <span>{item?.name}</span>}
							</motion.li>
						))}
				</motion.ul>
			</motion.div>
		</motion.div>
	);
};

export default Sidebar01;
