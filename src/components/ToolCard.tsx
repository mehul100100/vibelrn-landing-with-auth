import { cn } from "@/lib/utils";

interface ToolCardProps {
  name: string;
  bgColor: string;
  logoColor: string;
  image?: string;
}

const ToolCard = ({ name, bgColor, logoColor, image }: ToolCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer group",
        "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]",
        "h-[280px]"
      )}
      style={{ backgroundColor: bgColor }}
    >
      {/* Card Content - Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div
            className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold"
            style={{ backgroundColor: logoColor }}
          >
            {name.charAt(0)}
          </div>
          <h3 className="text-2xl font-semibold text-foreground/90">{name}</h3>
        </div>
      </div>

      {/* Overlay gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default ToolCard;