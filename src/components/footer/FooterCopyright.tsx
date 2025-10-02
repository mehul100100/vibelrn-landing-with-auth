import { FOOTER_STYLES } from "@/lib/constants/footer";
import type { FooterCopyrightProps } from "@/lib/types/footer";

export const FooterCopyright: React.FC<FooterCopyrightProps> = ({
  companyName,
  year = new Date().getFullYear(),
}) => {
  return (
    <div className={FOOTER_STYLES.copyright.wrapper}>
      <p className={FOOTER_STYLES.copyright.text}>
        © {year} {companyName} All rights reserved.
      </p>
    </div>
  );
};
