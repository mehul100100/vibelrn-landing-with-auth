import { ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CLERK_CONFIG } from '@/lib/constants/navbar';

export const AuthSection: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Become Mentor Button */}
      <Button
        variant="mentorOutline"
        size="default"
        className="hidden rounded-full lg:flex"
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
        <Button
          variant="dark"
          size="default"
          className="rounded-full px-6"
          asChild
        >
          <Link href="/sign-up">Sign up</Link>
        </Button>
        {/* <div
          className="h-10 w-[101.69px] animate-pulse rounded-full bg-gray-200"
          aria-label="Loading authentication"
        /> */}
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
