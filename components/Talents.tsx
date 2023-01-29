import {createClient} from "@supabase/supabase-js";
import {TalentsSupabase} from "@/types";
import TalentsSection from "./TalentsSection";

export default async function Talents() {
	const talents: TalentsSupabase[] = await getTalents();
	return <TalentsSection talents={talents} />;
}

async function getTalents() {
	const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
	const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
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
