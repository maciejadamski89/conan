"use client";
import TalentPoints from "./TalentPoints";
import {useState} from "react";

type TalentsSupabase = {
	id: number;
	name: string;
	pot: string;
	description: number;
};

export default function TalentsTable({talents}: {talents: TalentsSupabase[]}) {
	const [inputSearch, setInputSearch] = useState("");

	const filtredTalents = talents.filter((talent) => {
		const talentName = talent.name.toLowerCase();
		return talentName.includes(inputSearch.toLowerCase());
	});

	return (
		<>
			<div>
				<input
					className="w-full p-5 my-5 text-xl text-white border rounded bg-neutral-900 border-neutral-800 focus:outline-none focus-visible:outline-none"
					type="text"
					placeholder="Szukaj talentu"
					onChange={(event) => {
						setInputSearch(event.target.value);
					}}
				/>
			</div>
			<table className="w-full text-xl text-white">
				<thead>
					<tr className="border border-neutral-700 bg-neutral-600 ">
						<td className="p-5">Talent</td>
						<td className="p-5">Pula talentu</td>
						<td className="p-5">Opis talentu</td>
						<td className="p-5">Punkty</td>
					</tr>
				</thead>
				<tbody>
					{filtredTalents.map((talent) => {
						return (
							<tr
								key={talent.id}
								className="border border-neutral-700 hover:bg-neutral-800"
							>
								<td className="min-w-[10rem] p-5">
									{talent.name}
								</td>
								<td className="p-5">{talent.pot}</td>
								<td className="p-5">{talent.description}</td>
								<td className="p-5">
									<TalentPoints />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
