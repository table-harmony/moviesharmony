import { ModeToggle } from "@/components/mode-toggle";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="container relative z-10 flex flex-col py-8">
      <div className="mt-16 flex flex-col-reverse items-center border-t border-border pt-4 sm:mt-20 md:flex-row md:justify-between md:pt-8 lg:mt-24">
        <p className="mt-4 w-full text-balance text-left text-sm leading-loose text-muted-foreground md:mt-0">
          © Copyright @ 2024{" "}
          <span className="font-medium underline underline-offset-4">
            {siteConfig.name}.
          </span>{" "}
          All Rights Reserved.
        </p>
        <div className="flex w-full justify-start md:justify-end">
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
