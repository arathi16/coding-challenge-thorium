import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  label: string;
  description: string;
};

function Bullet({ src, alt, label, description }: Props) {
  return (
    <div className="details-bullet">
      <div className="image-container">
        <Image src={src} height={200} width={200} alt={alt} />
      </div>
      <div className="details-container">
        <h3>{label}</h3>
        <div className="description">
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
}

export default Bullet;
