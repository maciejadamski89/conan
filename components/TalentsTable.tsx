"use client";
import TalentPoints from "./TalentPoints";
import {TalentsSupabase} from "@/types";

export default function TalentsTable({
	filtredTalents,
	totalTalentPointsToSpend,
	setTotalTalentPointsToSpend,
}: {
	filtredTalents: TalentsSupabase[];
	totalTalentPointsToSpend: number;
	setTotalTalentPointsToSpend: React.Dispatch<React.SetStateAction<number>>;
}) {
	return (
		<>
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
									<TalentPoints
										setTotalTalentPointsToSpend={
											setTotalTalentPointsToSpend
										}
										totalTalentPointsToSpend={
											totalTalentPointsToSpend
										}
									/>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
