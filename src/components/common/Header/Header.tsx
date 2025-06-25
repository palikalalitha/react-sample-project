import { observer } from "mobx-react";
import React, { useState } from "react";
import Button from "../../system/Button/Button";
import * as styles from "./styles";

interface Props {
  className?: string;
}

const Header = (props: Props): React.ReactElement => {
  const { className = "" } = props;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Parents", href: "#parents" },
    { label: "Referrals", href: "#referrals" },
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
  ];

  const DropdownArrow = () => (
    <svg
      className={styles.dropdownArrowClassName}
      viewBox="0 0 12 8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 8L0 2L1.5 0.5L6 5L10.5 0.5L12 2L6 8Z" />
    </svg>
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.headerClassName} ${className}`.trim()}>
      {/* Logo Section */}
      <div className={styles.logoContainerClassName}>
        <div className="text-2xl font-poppins font-bold text-brand-purple">
          ABA Home Therapy
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.navigationClassName}>
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={styles.navLinkClassName}
          >
            <span className={styles.navLinkTextClassName}>{item.label}</span>
            <DropdownArrow />
          </a>
        ))}
      </nav>

      {/* Contact Information */}
      <div className={styles.contactInfoClassName}>
        <a href="tel:+17003481022" className={styles.phoneNumberClassName}>
          +1 700 348 1022
        </a>
      </div>

      {/* CTA Button */}
      <div className={styles.ctaButtonContainerClassName}>
        <Button
          variant="outline"
          size="medium"
          className="hidden sm:inline-flex"
        >
          get started
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={styles.mobileMenuButtonClassName}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className={styles.mobileMenuClassName}>
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.mobileNavLinkClassName}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="px-lg py-md border-t border-gray-100">
            <a
              href="tel:+17003481022"
              className="block text-lg font-poppins font-semibold text-brand-purple mb-md"
            >
              +1 700 348 1022
            </a>
            <Button variant="outline" size="medium" className="w-full">
              get started
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default observer(Header);
