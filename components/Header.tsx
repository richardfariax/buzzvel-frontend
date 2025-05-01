"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-2xl font-bold text-neutral-900">
            <Image
              src="/assets/logo.svg"
              alt="hero-image"
              width={350}
              height={70}
              className="w-full h-full object-cover"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-900">
            <Link href="#">Products</Link>
            <Link href="#">Solutions</Link>
            <Link href="#">Pricing</Link>
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm font-medium text-neutral-900">
            Log In
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold border border-neutral-900 text-neutral-900 rounded-md px-5 py-2 hover:bg-neutral-100 transition"
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </header>
  );
}
