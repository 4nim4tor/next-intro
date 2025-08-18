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
		<header className="bg-slate-400 h-20 text-x1 flex justify-end items-center px-16 gap-6 text-white">
			<Link
				href="/"
				className={`${
					currentUrl === "/" && "underline"
				} underline-offset-2 text-amber-400`}
			>
				Home
			</Link>
			<Link href="/subpage">Sub page</Link>
			<Link href="/deeppage">Deep page</Link>
			<Link href="/products">Products page</Link>
		</header>
	);
};
