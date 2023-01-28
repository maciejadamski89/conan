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
			<table className="min-w-full overflow-hidden text-left text-white table-auto text-md">
				<thead>
					<tr className="border border-neutral-700 bg-neutral-600 ">
						<th className="px-6 py-3 whitespace-nowrap">Talent</th>
						<th className="px-6 py-3 whitespace-nowrap">
							Pula talentu
						</th>
						<th className="px-6 py-3 whitespace-nowrap">
							Opis talentu
						</th>
						<th className="px-6 py-3 whitespace-nowrap">Punkty</th>
					</tr>
				</thead>
				<tbody>
					{filtredTalents.map((talent) => {
						return (
							<tr
								key={talent.id}
								className="border border-neutral-700 hover:bg-neutral-800"
							>
								<td className="px-6 py-3 min-w-[15%]">
									{talent.name}
								</td>
								<td className="px-6 py-3 min-w-[12%] whitespace-nowrap">
									{talent.pot}
								</td>
								<td className="px-6 py-3">
									{talent.description}
								</td>
								<td className="px-6 py-3 whitespace-nowrap">
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
