"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const Header = () => {
	const currentUrl = usePathname();

	useEffect(() => {
		console.log(currentUrl);
	}, [currentUrl]);
	return (
		<header className="bg-slate-500 h-20 text-x1 flex justify-end items-center px-16 gap-6 text-white">
			<button className="text-orange-400">
				<Link
					href="/"
					className={`${currentUrl === "/" && "underline"} underline-offset-2`}
				>
					Home
				</Link>
			</button>
			<Link href="/subpage">Sub page</Link>
			<Link href="/deeppage">Deep page</Link>
		</header>
	);
};
