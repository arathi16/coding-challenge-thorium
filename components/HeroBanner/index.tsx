import Image from "next/image";
import React from "react";

function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="details">
        <h1>
          To bringing people <i>together</i>.
        </h1>
        <p className="mt-16 mb-32">
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`}
        </p>
        <button>PORTFOLIO</button>
      </div>
      <div className="images">
        <Image
          className="image-1"
          src="/background-1.jpeg"
          height={320}
          width={480}
          alt="Backgrond Image 1"
        />
        <div />
        <Image
          className="image-2"
          src="/background-2.jpeg"
          height={320}
          width={250}
          alt="Backgrond Image 2"
        />
      </div>
    </div>
  );
}

export default HeroBanner;
