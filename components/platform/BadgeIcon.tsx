import { Bitcoin, Flame, Rocket, Shield, Star } from "lucide-react";

const map = {
  bitcoin: Bitcoin,
  shield: Shield,
  rocket: Rocket,
  star: Star,
  flame: Flame,
} as const;

export function BadgeIcon({
  icon,
  size = 20,
  className,
}: {
  icon: keyof typeof map;
  size?: number;
  className?: string;
}) {
  const Icon = map[icon];
  return <Icon size={size} className={className} />;
}
