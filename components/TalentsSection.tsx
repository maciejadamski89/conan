"use client";
import React from "react";
import TalentsTable from "./TalentsTable";
import {useState} from "react";
import {TalentsSupabase} from "@/types";
import SearchInput from "./SearchInput";

export default function TalentsSection({
	talents,
}: {
	talents: TalentsSupabase[];
}) {
	const [inputSearch, setInputSearch] = useState("");
	const [totalTalentPointsToSpend, setTotalTalentPoiontsToSpend] =
		useState(35);

	const filtredTalents = talents.filter((talent) => {
		const talentName = talent.name.toLowerCase();
		return talentName.includes(inputSearch.toLowerCase());
	});

	return (
		<>
			<SearchInput setInputSearch={setInputSearch} />
			<h1 className="pb-5 text-xl font-bold text-left text-white">
				Liczba punktów do wydania: {totalTalentPointsToSpend}
			</h1>
			<TalentsTable
				filtredTalents={filtredTalents}
				totalTalentPointsToSpend={totalTalentPointsToSpend}
				setTotalTalentPointsToSpend={setTotalTalentPoiontsToSpend}
			/>
		</>
	);
}
