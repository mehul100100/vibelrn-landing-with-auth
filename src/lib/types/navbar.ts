export interface NavItem {
    label: string;
    href: string;
    active?: boolean;
  }
  
  export interface NavLinksProps {
    items: NavItem[];
  }
  
  export interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    items: NavItem[];
  }
  