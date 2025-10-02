import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" aria-label="Go to Silicon Academy homepage">
      <div className="relative h-10 w-32">
        <Image
          src="/logo.png"
          alt="Silicon Academy Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
