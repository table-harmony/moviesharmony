import Link from "next/link";

import { siteConfig } from "@/config/site";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { PopcornIcon } from "lucide-react";
import { Button } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-14 items-center justify-between gap-2">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <PopcornIcon className="h-6 w-6" />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button>Login</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
}
