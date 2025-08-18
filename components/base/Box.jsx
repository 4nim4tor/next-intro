import { boxData } from "@/data/boxData";

export const Box = ({ text }) => {
	return (
		<>
			<div className="border-8 text-3xl text-orange-200 p-8 text-center border-orange-300">
				{text}
			</div>
		</>
	);
};

export const MappedBoxes = () => {
	return (
		<>
			{boxData.map((box, index) => (
				<Box key={box + index} text={box} />
			))}
		</>
	);
};
