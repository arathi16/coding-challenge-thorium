import Image from "next/image";
import React from "react";

function DetailsSection() {
  return (
    <div className="details-section">
      <div className="image-container">
        <Image
          src="/background-3.jpeg"
          height={480}
          width={480}
          alt="Background Image 3"
        />
      </div>
      <div className="details">
        <h2>
          Knowing the numbers is never <i>enough</i>.
        </h2>
        <p>
          {`It's about understanding the opportunities and challenges behind the
          numbers — and planning for a stronger future. What's the right product
          selection for your customers? Which tools and information could make
          your business even more successful? At Southern Glazer's, we tailor
          our services for each and every one of our customers. Because we know
          that when we come together, there's always something to celebrate.`}
        </p>
      </div>
    </div>
  );
}

export default DetailsSection;
