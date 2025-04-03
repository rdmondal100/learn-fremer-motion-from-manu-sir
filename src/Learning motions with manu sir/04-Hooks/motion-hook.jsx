import {
	useMotionTemplate,
	useMotionValueEvent,
	useScroll,
	useSpring,
	useTransform,
} from "motion/react";
import React, { useRef, useState } from "react";
import { FaRocket, FaCogs, FaShieldAlt } from "react-icons/fa";
import { motion } from "motion/react";

const MotionHook = () => {
	const features = [
		{
			icon: <FaRocket size={24} className=' h-8 w-8 text-neutral-200' />,
			title: "Fast Performance",
			description:
				"Experience blazing fast speeds with our optimized system.",
			content: (
				<div className='feature-content '>
					<img
						src='https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='Performance Image'
						className=' rounded-md  '
					/>
				</div>
			),
		},
		{
			icon: <FaCogs size={24} className=' h-8 w-8 text-neutral-200' />,
			title: "Easy Customization",
			description: "Modify settings and preferences with ease.",
			content: (
				<div className='feature-content'>
					<img
						src='https://images.unsplash.com/photo-1599454100789-b211e369bd04?q=80&w=1006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='Customization Image'
						className=' rounded-md  '
					/>
				</div>
			),
		},
		{
			icon: (
				<FaShieldAlt size={24} className=' h-8 w-8 text-neutral-200' />
			),
			title: "Secure & Reliable",
			description: "Your data is safe with us, encrypted and protected.",
			content: (
				<div className='feature-content'>
					<img
						src='https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='Security Image'
						className=' rounded-md  '
					/>
				</div>
			),
		},
	];

	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		ref: containerRef,
		offset: ["start end", " end start"],
	});
	const backgroundColors = ["#38040e", "#006d77", "#132a13"];
	const [background, setBackground] = useState(backgroundColors[0]);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		const finalValue = Math.floor(latest * backgroundColors?.length);
		setBackground(backgroundColors[finalValue]);
	});

	return (
		<>
			<motion.div
				ref={containerRef}
				animate={{
					background,
				}}
				className=' flex min-h-screen items-center justify-center bg-neutral-900'
			>
				<div className='flex flex-col gap-20 max-w-4xl mx-auto p-4'>
					{features.map((item) => (
						<Card key={item?.title} item={item} />
					))}
				</div>
			</motion.div>
		</>
	);
};

export default MotionHook;

const Card = ({ item }) => {
	const cardRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: cardRef,
		offset: ["start end", "end start"],
	});

	const translateContent = useSpring(
		useTransform(scrollYProgress, [0, 1], [200, -150]),
		{
			stiffness: 100,
			damping: 30,
			mass: 1,
		}
	);
	const opacityContent = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		[0, 1, 0]
	);
	const blur = useTransform(scrollYProgress, [0.6, 1], [0, 10]);
	const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

	return (
		<div
			ref={cardRef}
			className=' grid grid-cols-2 gap-20  items-center py-40'
		>
			<motion.div
				style={{
					filter: useMotionTemplate`blur(${blur}px)`,
					scale,
				}}
				className=' flex flex-col gap-5'
			>
				{item?.icon}
				<h2 className=' text-4xl font-bold text-white'>
					{item?.title}
				</h2>
				<p className=' text-lg text-neutral-400'>{item?.description}</p>
			</motion.div>

			<motion.div
				initial={{
					y: 0,
				}}
				style={{
					y: translateContent,
					opacity: opacityContent,
				}}
			>
				{item?.content}
			</motion.div>
		</div>
	);
};
