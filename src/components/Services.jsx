import React from "react";
import Cards from "./Card/Cards";
import Data from "./Card/Data";
import image1 from "./Card/s1.png";
import image2 from "./Card/s2.png";
import image3 from "./Card/s3.png";

function Services() {
  return (
    <div className="service" id="service-section">
      <div className="service-heading">
        <h1>Services</h1>
        <p>I love working with these Services</p>
      </div>
      <div className="b-container">
        <Cards
          stype={Data[0].stype}
          simage={image1}
          sdescription={Data[0].sdescription}
        />

        <Cards
          stype={Data[1].stype}
          simage={image2}
          sdescription={Data[1].sdescription}
        />

        <Cards
          stype={Data[2].stype}
          simage={image3}
          sdescription={Data[2].sdescription}
        />
      </div>
    </div>
  );
}

export default Services;
