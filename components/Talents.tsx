import {createClient} from "@supabase/supabase-js";
import TalentPoints from "./TalentPoints";

//Main
export default async function Talents() {
	const talents = await getTalents();
	return (
		<table className="text-xl text-white">
			<thead>
				<tr className="border border-neutral-700 bg-neutral-600 ">
					<td className="p-5">Talent</td>
					<td className="p-6">Pula talentu</td>
					<td className="p-5">Opis talentu</td>
					<td className="p-5">Punkty</td>
				</tr>
			</thead>
			<tbody>
				{talents.map((talent) => {
					return (
						<tr
							key={talent.id}
							className="border border-neutral-700 hover:bg-neutral-800"
						>
							<td className="p-5">{talent.name}</td>
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
	);
}

//Helper functions
async function getTalents() {
	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
	const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
	const supabaseAdmin = createClient(supabaseUrl, supabaseKey);

	const {data, error} = await supabaseAdmin
		.from("talents")
		.select()
		.order("name");

	if (error) {
		throw new Error(`GET DATA FROM SUPABASE ERROR: ${error}`);
	}

	return data;
}
