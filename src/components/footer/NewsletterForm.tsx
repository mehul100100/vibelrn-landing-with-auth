"use client";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FOOTER_STYLES, FOOTER_CONTENT } from "@/lib/constants/footer";
import type { NewsletterFormProps } from "@/lib/types/footer";
const hello = false

export const NewsletterForm: React.FC<NewsletterFormProps> = () => {
    return (
      <div className={FOOTER_STYLES.newsletter.wrapper}>
        <div className={FOOTER_STYLES.newsletter.content.wrapper}>
          <h3 className={FOOTER_STYLES.newsletter.content.heading}>
            {FOOTER_CONTENT.newsletter.heading}
          </h3>
          <p className={FOOTER_STYLES.newsletter.content.description}>
            {FOOTER_CONTENT.newsletter.description}
          </p>
        </div>
  
        <div className={FOOTER_STYLES.newsletter.form.wrapper}>
          <form
            className={FOOTER_STYLES.newsletter.form.container}
            noValidate
          >
            <div className={FOOTER_STYLES.newsletter.form.fieldGroup}>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder={FOOTER_CONTENT.newsletter.emailPlaceholder}
                className={FOOTER_STYLES.newsletter.form.input}
                aria-required="true"
                aria-describedby="newsletter-privacy"
              />
              <Button
                variant="dark"
                size="default"
                className={FOOTER_STYLES.newsletter.form.button}
                type="button"
                aria-label={`${FOOTER_CONTENT.newsletter.submitButton} to newsletter`}
              >
                {FOOTER_CONTENT.newsletter.submitButton}
              </Button>
            </div>
  
            <div
              id="newsletter-privacy"
              className={FOOTER_STYLES.newsletter.form.privacy}
            >
              <Info
                className={FOOTER_STYLES.newsletter.form.icon}
                aria-hidden="true"
              />
              <span>
                {FOOTER_CONTENT.newsletter.privacyNotice}{" "}
                <Link
                  href={FOOTER_CONTENT.newsletter.privacyLinkUrl}
                  className={FOOTER_STYLES.newsletter.form.link}
                >
                  {FOOTER_CONTENT.newsletter.privacyLinkText}
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  };