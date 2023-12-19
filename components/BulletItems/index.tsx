import React from "react";
import Bullet from "./Bullet";

function BulletItems() {
  return (
    <div className="flex flex-row flex-evenly bullet-items-container">
      <Bullet
        src="/bottol.svg"
        alt="Customers"
        label="Customers"
        description="See our portfolio"
      />
      <Bullet
        src="/gift-box.svg"
        alt="Suppliers"
        label="Suppliers"
        description="Work with us"
      />
      <Bullet
        src="/gears.svg"
        alt="Team"
        label="Team"
        description="Sign in or apply"
      />
    </div>
  );
}

export default BulletItems;
