import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" aria-label="Go to Silicon Academy homepage">
      <div className="flex items-center h-10">
        <Image
          src="/logo.png"
          alt="Silicon Academy Logo"
          width={90}
          height={90}
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
