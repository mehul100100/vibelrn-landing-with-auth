import type { FooterLogoProps } from '@/lib/types/footer';
import Image from 'next/image';
import Link from 'next/link';

export const FooterLogo: React.FC<FooterLogoProps> = ({
  src,
  alt,
}) => {
  return (
    <Link href="/" aria-label={`${alt} - Go to homepage`}>
      <div className="relative flex w-[100px] h-[100px]">
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </Link>
  );
};
