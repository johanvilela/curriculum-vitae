import {
  Avatar as AvatarWrapper,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export function Avatar() {
  const imageURL = "https://avatars.githubusercontent.com/u/30961343?v=4";
  return (
    <AvatarWrapper className="h-24 w-24">
      <AvatarImage src={imageURL} />
      <AvatarFallback>JV</AvatarFallback>
    </AvatarWrapper>
  );
}
