'use client';
import type { FormEvent } from 'react';
import type { HeroSearchBarProps } from '@/lib/types/hero';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { HERO_ANIMATIONS, SEARCH_BAR_STYLES } from '@/lib/constants/hero';

export const HeroSearchBar: React.FC<HeroSearchBarProps> = ({
  placeholder = 'Search Series, Tools...',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <motion.div
      className={SEARCH_BAR_STYLES.wrapper}
      variants={HERO_ANIMATIONS.searchBar}
    >
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Search for AI tools and series"
      >
        <div className={SEARCH_BAR_STYLES.container}>
          <div className={SEARCH_BAR_STYLES.iconWrapper} aria-hidden="true">
            <Search className="h-5 w-5 text-black" />
          </div>
          <label htmlFor="hero-search" className="sr-only">
            Search for AI tools and learning series
          </label>
          <input
            id="hero-search"
            placeholder={placeholder}
            className={SEARCH_BAR_STYLES.input}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            aria-label={placeholder}
            autoComplete="off"
          />
          <motion.button
            type="submit"
            className={SEARCH_BAR_STYLES.button}
            style={{
              boxShadow:
                '0 0 8px rgba(98, 190, 186, 0.6), 0 0 4px rgba(63, 126, 127, 0.4)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Submit search"
          >
            <div
              className={SEARCH_BAR_STYLES.buttonPattern}
              style={{
                backgroundImage:
                  'radial-gradient(circle at center, rgba(255,255,255,0.2) 1px, transparent 1px)',
                backgroundSize: '6px 6px',
                maskImage: 'linear-gradient(to right, transparent, black)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent, black)',
              }}
              aria-hidden="true"
            />
            <span className="relative">Search</span>
            <Image
              src="/right_icon.svg"
              alt=""
              width={16}
              height={16}
              className="relative"
              aria-hidden="true"
            />
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};
