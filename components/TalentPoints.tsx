"use client";
import React from "react";
import {useState} from "react";

//Main
export default function TalentPoints() {
	const maxTalentPoints = 40;
	const [totalTalentPoints, setTotalTalentPoints] = useState(maxTalentPoints);
	const [talentPoints, setTalentPoints] = useState(0);

	function increment() {
		setTalentPoints(talentPoints + 1);
		setTotalTalentPoints(totalTalentPoints - 1);
	}

	function decrement() {
		setTalentPoints(talentPoints - 1);
		setTotalTalentPoints(totalTalentPoints + 1);
	}

	return (
		<div className="flex items-center justify-center">
			<button
				className="mr-2 text-4xl text-white"
				onClick={() => {
					talentPoints > 0 && totalTalentPoints < 40
						? decrement()
						: null;
				}}
			>
				{minusIcon()}
			</button>

			<p className="text-xl text-white">{talentPoints}</p>

			<button
				className="ml-2 text-4xl text-white"
				onClick={() => {
					talentPoints < 5 && totalTalentPoints > 0
						? increment()
						: null;
				}}
			>
				{plusIcon()}
			</button>
		</div>
	);
}

//Helper functions
function plusIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 4.5v15m7.5-7.5h-15"
			/>
		</svg>
	);
}

function minusIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M19.5 12h-15"
			/>
		</svg>
	);
}
