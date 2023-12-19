"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);

  return (
    <header className="header pt-12 pb-12 pl-48 pr-48 flex flex-between">
      <Image src="/logo.svg" height={66} width={66} alt="App Logo" />
      <div className="flex flex-col flex-center">
        <div className="top-line flex flex-end item-center">
          <Image
            src="/social-icons.svg"
            height={20}
            width={90}
            alt="Social Icons"
          />
          <div className="flex item-center">
            <Image
              src="/caret-down.svg"
              height={11}
              width={11}
              alt="Caret Down"
              className="ml-48 mr-12"
            />
            Login
          </div>
          <div className="menu-icon" onClick={toggleMenu} />
        </div>
        <nav className={showMenu ? "show" : ""}>
          <Link href="/" className="nav-link active" aria-label="Home">
            Home
          </Link>
          <Link
            href="/portfolio"
            className="nav-link"
            aria-label="Our Portfolio"
          >
            Our Portfolio
          </Link>
          <Link href="/suppliers" className="nav-link" aria-label="Suppliers">
            Suppliers
          </Link>
          <Link href="/careers" className="nav-link" aria-label="Careers">
            Careers
          </Link>
          <Link href="/causes" className="nav-link" aria-label="Our Causes">
            Our Causes
          </Link>
          <Link href="/news" className="nav-link" aria-label="News">
            News
          </Link>
          <Link href="/about-us" className="nav-link" aria-label="About Us">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
