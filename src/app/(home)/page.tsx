"use client";

import { siteConfig } from "@/config/site";
import { SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { ArrowRightIcon, ClapperboardIcon } from "lucide-react";

export default function HomePage() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="container flex flex-col items-center space-y-10 pt-12 md:pt-20 lg:px-20"
    >
      <h1 className="text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
        {siteConfig.name}
      </h1>
      <p className="max-w-2xl text-balance text-center text-sm text-muted-foreground sm:text-xl">
        {siteConfig.description}
      </p>
      <SignedOut>
        <SignInButton>
          <Button className="w-72">
            Get started <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Button className="w-72">
          <ClapperboardIcon className="mr-2 h-4 w-4" /> Our movies
        </Button>
      </SignedIn>
    </motion.div>
  );
}
