"use client";

export default function SearchInput({
	setInputSearch,
}: {
	setInputSearch: React.Dispatch<React.SetStateAction<string>>;
}) {
	return (
		<div>
			<input
				className="w-full p-5 my-5 text-xl text-white border rounded bg-neutral-900 border-neutral-800 focus:outline-none focus-visible:outline-none"
				type="text"
				placeholder="Szukaj talentu"
				onChange={(event) => {
					const valueFromInputSearch = event.target.value;
					setInputSearch(valueFromInputSearch);
				}}
			/>
		</div>
	);
}
