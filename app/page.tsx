import Image from "next/image";
import {Inter} from "@next/font/google";
import Script from "next/script";
import Talents from "../components/Talents";

const inter = Inter({subsets: ["latin"]});

//Main
export default function Home() {
	return (
		<main className="px-16 pb-32">
			{/* <Image
				className="relative -z-10 opacity-30"
				src="/conan.jpg"
				alt="Conan"
				fill={true}
			/> */}

			<div className="flex items-center justify-center py-16">
				<h1 className="text-5xl text-red-800">
					Witaj w aplikacji do tworzenia postaci do gry RPG CONAN !
				</h1>
			</div>

			<div>
				{/* @ts-expect-error Server Component */}
				<Talents search="" />
			</div>
		</main>
	);
}

//Helper fucntions
function tooltip(talent: string, talentDescription: string) {
	return (
		<div className="max-w-lg mx-auto">
			<button
				data-tooltip-target={talent}
				data-tooltip-placement="right"
				type="button"
				className=""
			>
				{talent}
			</button>
			<div
				id={talent}
				role="tooltip"
				className="absolute z-10 invisible inline-block max-w-xs px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 bg-neutral-800 tooltip"
				data-popper-reference-hidden=""
				data-popper-escaped=""
				data-popper-placement="right"
				style={{
					position: "absolute",
					inset: "0px auto auto 0px",
					margin: "0px",
					transform: "translate3d(1162px, 1620px, 0px);",
				}}
			>
				{talentDescription}
			</div>
		</div>
	);
}
