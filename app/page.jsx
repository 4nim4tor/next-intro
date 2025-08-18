import { ScreenSection } from "@/components/base/ScreenSection";
import { BoxSection } from "@/index/BoxSection";

export default function HomePage() {
	return (
		<>
			<ScreenSection className="bg-amber-500">
				<h1 className="text-7xl">Main Page</h1>
			</ScreenSection>
			<BoxSection />
		</>
	);
}
