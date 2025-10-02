export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

export type NavLinksProps = {
  items: NavItem[];
};

export type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
};
