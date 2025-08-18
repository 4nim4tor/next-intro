import { MappedBoxes } from "@/components/base/Box";

export const BoxSection = () => {
	return (
		<>
			<section className="h-screen flex flex-col gap-12 justify-center items-center bg-amber-700">
				<h2 className="text-7xl">Main Page section 2</h2>
				<div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 grid-row-2 gap-12">
					<MappedBoxes />
				</div>
			</section>
		</>
	);
};
