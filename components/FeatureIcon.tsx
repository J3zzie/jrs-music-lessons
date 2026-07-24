import {
  HeartIcon,
  PersonIcon,
  PinIcon,
  StarIcon,
  UsersIcon,
} from "@/components/icons/ui";

export default function FeatureIcon({
  name,
  size = 20,
}: {
  name: string;
  size?: number;
}) {
  switch (name) {
    case "star":
      return <StarIcon size={size} />;
    case "users":
      return <UsersIcon size={size} />;
    case "person":
      return <PersonIcon size={size} />;
    case "heart":
      return <HeartIcon size={size} />;
    case "pin":
      return <PinIcon size={size} />;
    default:
      return null;
  }
}
