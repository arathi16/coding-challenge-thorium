import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className="header pt-12 pb-12 pl-48 pr-48 flex flex-between">
      <Image src="/logo.svg" height={66} width={66} alt="App Logo" />
      <div>
        <div className="flex flex-end mb-12 mt-8">
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
        </div>
        <nav>
          <Link href="/" className="nav-link active">
            Home
          </Link>
          <Link href="/" className="nav-link">
            Our Portfolio
          </Link>
          <Link href="/" className="nav-link">
            Suppliers
          </Link>
          <Link href="/" className="nav-link">
            Careers
          </Link>
          <Link href="/" className="nav-link">
            Our Causes
          </Link>
          <Link href="/" className="nav-link">
            News
          </Link>
          <Link href="/" className="nav-link">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
