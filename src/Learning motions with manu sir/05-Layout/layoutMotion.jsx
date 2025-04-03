import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const useOutsideClick = (callbaack) => {
	const currentRef = useRef(null);
	useEffect(() => {
		const handleClick = (event) => {
			console.log(currentRef);

			if (
				currentRef.current &&
				!currentRef.current.contains(event.target)
			) {
				console.log("Callback");
				callbaack();
			}
		};

		document.addEventListener("mousedown", handleClick);

		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, [callbaack]);

	return currentRef;
};

const LayoutMotion = () => {
	const [currentCard, setCurrentCard] = useState(null);
	const ref = useOutsideClick(() => setCurrentCard(null));
	const cards = [
		{
			title: "Innovative Design",
			description:
				"Explore the future of design with our modern solutions.",
			imgSrc: "https://images.unsplash.com/photo-1741718234361-ebb40aac7533?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			ctaText: "Play",
			ctaLink: "https://example.com/design",
			content: () => (
				<p className=' text-[10px] text-neutral-500'>
					Our innovative design approach integrates modern aesthetics
					with cutting-edge technology to bring you unparalleled user
					experiences. We believe every design should be a unique
					blend of functionality and style, creating interfaces that
					are both visually stunning and highly intuitive.
				</p>
			),
		},
		{
			title: "Creative Development",
			description:
				"Building creative solutions that inspire and drive growth.",
			imgSrc: "https://images.unsplash.com/photo-1742878012844-51c0c68e743c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			ctaText: "Play",
			ctaLink: "https://example.com/development",
			content: () => (
				<p className=' text-[10px] text-neutral-500'>
					We leverage the latest technologies to build creative,
					scalable, and robust development solutions tailored to your
					business needs. Our process ensures seamless performance and
					an exceptional user experience through thoughtful
					architecture and meticulous attention to detail.
					We leverage the latest technologies to build creative,
					scalable, and robust development solutions tailored to your
					business needs. Our process ensures seamless performance and
					an exceptional user experience through thoughtful
					architecture and meticulous attention to detail.
				</p>
			),
		},
		{
			title: "Digital Marketing",
			description:
				"Boost your online presence with targeted digital marketing strategies.",
			imgSrc: "https://images.unsplash.com/photo-1742581659446-6260fc707e7d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			ctaText: "Play",
			ctaLink: "https://example.com/marketing",
			content: () => (
				<p className=' text-[10px] text-neutral-500'>
					Our digital marketing services are designed to enhance your
					brand's visibility and engagement through innovative,
					data-driven strategies. We combine creative storytelling
					with analytical insights to craft campaigns that resonate
					with your audience and deliver measurable results.
				</p>
			),
		},
	];

	return (
		<div className=' py-10 bg-gray-100 min-h-screen relative'>
			{currentCard && (
				<motion.div
                initial = {{
                    opacity: 0,

                }}
                animate = {{
                    opacity: 1
                }}
					className=' fixed z-10 h-full w-full inset-0 bg-black/50 
            backdrop-blur-sm'
				></motion.div>
			)}
			{currentCard && (
				<motion.div
					layoutId={`card-${currentCard?.title}`}
					ref={ref}
					className=' fixed bg-white inset-0 m-auto z-20 h-[500px] w-80 rounded-2xl border border-neutral-200 p-4 flex flex-col gap-3  '
				>
					<motion.img
						layoutId={`card-img-${currentCard?.title}`}
						src={currentCard.imgSrc}
						alt={currentCard.title}
						className=' h-60 aspect-square rounded-lg'
					/>
					<div className='flex flex-col justify-between items-start overflow-hidden '>
						<div className='flex items-start justify-between py-4  w-full gap-2'>
							<div className=' flex flex-col items-start gap-2'>
								<motion.h2
									layoutId={`card-title-${currentCard?.title}`}
									className=' font-bold text-xs tracking-tight text-black'
								>
									{currentCard?.title}
								</motion.h2>
								<motion.p
									layoutId={`card-desc-${currentCard?.title}`}
									className='text-[10px] text-neutral-500'
								>
									{currentCard?.description}
								</motion.p>
							</div>

							<motion.div
								layoutId={`card-cta-${currentCard?.title}`}
								className=' px-2 py-1 bg-green-500 rounded-full text-white  text-xs '
							>
								{currentCard?.ctaText}
							</motion.div>
						</div>

						<motion.div
                        initial = {{
                            filter: "blur(10px)",
                            opacity: 0
                        }}

                        animate = {{
                            filter: "blur(0px)",
                            opacity: 1
                        }}
                        transition={{
                            delay: .3,
                        }}
                        className=' h-40 overflow-auto pb-14 [mask-image:linear-gradient(to_top,transparent_20%,black_80%)]   '>
							{currentCard.content()}
						</motion.div>
					</div>
				</motion.div>
			)}
			<div className=' max-w-lg mx-auto flex flex-col gap-10'>
				{cards?.map((card) => (
					<motion.button
						layoutId={`card-${card?.title}`}
						onClick={() => setCurrentCard(card)}
						className=' p-4 rounded-lg flex justify-between items-center bg-white border border-neutral-200'
						key={card?.title}
					>
						<div className='flex gap-4 items-center'>
							<motion.img
								layoutId={`card-img-${card?.title}`}
								src={card?.imgSrc}
								alt=''
								className=' h-14 aspect-square rounded-md'
							/>
							<div className=' flex flex-col items-start gap-2'>
								<motion.h2
									layoutId={`card-title-${card?.title}`}
									className=' font-bold text-xs tracking-tight text-black'
								>
									{card?.title}
								</motion.h2>
								<motion.h2
									layoutId={`card-dsc-${card?.title}`}
									className='text-[10px] text-neutral-500'
								>
									{card?.description}
								</motion.h2>
							</div>
						</div>
						<motion.div
							layoutId={`card-cta-${card?.title}`}
							className=' flex justify-center items-center bg-green-500  text-white  text-xs h-auto px-4 py-2 rounded-full '
						>
							{card?.ctaText}
						</motion.div>
					</motion.button>
				))}
			</div>
		</div>
	);
};

export default LayoutMotion;
