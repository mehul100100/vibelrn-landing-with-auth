import { Button } from "@/components/ui/button";
import { ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { CLERK_CONFIG } from "@/lib/constants/navbar";

export const AuthSection: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Become Mentor Button */}
      <Button
        variant="mentorOutline"
        size="default"
        className="hidden lg:flex rounded-full"
        asChild
      >
        <Link href="/become-mentor" aria-label="Become a mentor">
          <span>Become Mentor</span>
          <Image
            src="/right_icon_dark.svg"
            alt=""
            width={16}
            height={16}
            aria-hidden="true"
          />
        </Link>
      </Button>

      {/* Clerk Loading State */}
      <ClerkLoading>
        <div
          className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"
          aria-label="Loading authentication"
        />
      </ClerkLoading>

      {/* Signed Out State */}
      <SignedOut>
        <Button
          variant="dark"
          size="default"
          className="rounded-full px-6"
          asChild
        >
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </SignedOut>

      {/* Signed In State */}
      <SignedIn>
        <UserButton
          afterSignOutUrl="/"
          appearance={CLERK_CONFIG.userButtonAppearance}
        />
      </SignedIn>
    </div>
  );
};
