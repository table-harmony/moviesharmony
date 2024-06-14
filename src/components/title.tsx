import { cn } from "@/lib/utils";

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
}

export function Title({ title, subtitle, className }: TitleProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="mb-2 text-xs font-semibold uppercase text-primary">
        {title}
      </span>
      <span className="max-w-lg text-xl font-bold md:text-4xl">{subtitle}</span>
    </div>
  );
}
