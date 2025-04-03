import React, { useState } from "react";
import { SiGitea } from "react-icons/si";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineMessage } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";
import { TbView360Number } from "react-icons/tb";
import { TbCube3dSphere } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";
import { easeInOut } from "motion";

const Card = () => {
	const [open, setOpen] = useState(true);
	return (
		<>
			<AnimatePresence>
				{open && (
					<motion.div
						exit={{
							opacity: 0,
							scale: 0.98,
							filter: "blur(10px)",
						}}
						transition={{
							duration: 0.5,
							ease: "easeInOut",
						}}
						className=' w-72 min-h-[26rem] h-[28rem] rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-4 flex flex-col'
					>
						<h2 className=' font-bold text-[10px]'>
							Chai Ui Components
						</h2>
						<p className=' text-neutral-600 mt-2 text-[10px]'>
							A collection of beautiful UI components, let's get
							on with it.
						</p>
						<div className='flex items-center justify-center'>
							<button
								onClick={() => setOpen(false)}
								className=' flex items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1'
							>
								<SiGitea className=' text-xl' />
								ChaiUi
								<RxCross2 className=' text-lg text-neutral-400' />
							</button>
						</div>
						<div
							className='bg-gray-100 flex-1 mt-4 rounded-lg border 
    border-dashed border-neutral-200 relative'
						>
							{/* motion div  */}
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.98,
									filter: "blur(1px)",
								}}
								whileHover={{
									opacity: 1,
									scale: 1.05,
									filter: "blur(0px)",
								}}
								// transition={{
								//     duration: 0.3,
								//     ease:easeInOut
								// }}
								transition={{
									type: "spring",
									stiffness: 300,
									damping: 10,
									mass: 0.8,
								}}
								className=' absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200 border border-neutral-200 '
							>
								<div className=' flex gap-2 p-4'>
									<div className=' h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center'>
										<MdOutlineMessage className=' h-4 w-4 text-neutral-600' />
									</div>
									<div className='flex flex-col'>
										<p className='text-[8px] font-bold text-neutral-600'>
											ChaiUi UI Components
										</p>
										<p className=' text-neutral-400 text-[8px] mt-1'>
											A collection of UI components
										</p>
									</div>
								</div>

								<div className=' flex gap-2 p-4'>
									<div className=' h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center'>
										<Ri24HoursLine className=' h-4 w-4 text-neutral-600' />
									</div>
									<div className='flex flex-col'>
										<p className='text-[8px] font-bold text-neutral-600'>
											24 hours turnaround
										</p>
										<p className=' text-neutral-400 text-[8px] mt-1'>
											Super fast delivery at warp speed
										</p>
									</div>
								</div>

								<div className=' flex gap-2 p-4'>
									<div className=' h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center'>
										<TbView360Number className=' h-4 w-4 text-neutral-600' />
									</div>
									<div className='flex flex-col'>
										<p className='text-[8px] font-bold text-neutral-600'>
											360 days all around
										</p>
										<p className=' text-neutral-400 text-[8px] mt-1'>
											We are her to help you 24/7
										</p>
									</div>
								</div>

								<div className=' flex gap-2 p-4'>
									<div className=' h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center'>
										<TbCube3dSphere className=' h-4 w-4 text-neutral-600' />
									</div>
									<div className='flex flex-col'>
										<p className='text-[8px] font-bold text-neutral-600'>
											Some other components
										</p>
										<p className=' text-neutral-400 text-[8px] mt-1'>
											Here goes another subtitle
										</p>
									</div>
								</div>

								<div className=' flex gap-2 p-4 items-center justify-center'>
									<div className=' h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center'>
										<FaPlus className=' h-4 w-4 text-neutral-600' />
									</div>
									<div className='flex flex-col'>
										<p className=' text-neutral-400 text-[8px] mt-1'>
											Create Project
										</p>
									</div>
								</div>
							</motion.div>
							{/* motion div  */}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Card;
