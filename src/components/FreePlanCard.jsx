import { useState, useEffect } from "react";
import "./FreePlanCard.css";

function FreePlanCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isExtended, setIsExtended] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const timeoutId = setTimeout(() => {
        setIsExtended(true);
      }, 300);

      return () => clearTimeout(timeoutId);
    } else {
      setIsExtended(false);
    }
  }, [isHovered]);

  return (
    <div
      className={`FreePlan ${isExtended ? "extended" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="cardContent">
      <span id="PlanHeading">
        <h4>FREE</h4>
        <p>Access basic features for free</p>
      </span>

      <span id="PriceContent">
        <p id="DollarSignPos">&#36;</p>
        <h1 id="PriceToBePaid">0</h1>
      </span>
      <span id="PlanParagraphs">
        <p>&#10004; Generate upto three 3-D models from 2-D images or text </p>
        <p>&#10004; Generate upto 5 multi-view images from 2-D images or text</p>
        <p>&#10004; Upto 5 Downloads in a month</p>
      </span>
      </div>
    </div>
  );
}

export default FreePlanCard;
