import type { FooterLogoProps } from '@/lib/types/footer';
import Image from 'next/image';
import Link from 'next/link';
import { FOOTER_STYLES } from '@/lib/constants/footer';

export const FooterLogo: React.FC<FooterLogoProps> = ({
  src,
  alt,
  width = 48,
  height = 48,
}) => {
  return (
    <div className={FOOTER_STYLES.navigation.logoWrapper}>
      <Link href="/" aria-label={`${alt} - Go to homepage`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-12 w-auto"
        />
      </Link>
    </div>
  );
};
