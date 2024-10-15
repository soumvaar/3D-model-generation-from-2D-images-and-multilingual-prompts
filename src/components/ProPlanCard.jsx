import  { useState, useEffect } from 'react';
import './ProPlanCard.css'; // Import your CSS file

function ProPlanCard() {
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
      className={`ProPlan ${isExtended ? 'extended' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='cardContent'>
      <span id="PlanHeading">
        <h4>PREMIUM</h4>
        <p>Access premium features for the low price of</p>
      </span>

      <span id="PriceContent">
        <p id="DollarSignPos">&#36;</p>
        <h1 id="PriceToBePaid">2.99</h1>
      </span>
      <span id="PlanParagraphs">
        <p>&#10004; Generate unlimited number of 3-D models from 2-D images or text </p>
        <p>&#10004; Generate unlimited multi-view images from 2-D images or text</p>
        <p>&#10004; Unlimited downloads</p>
        <p>&#10004; Gain the access to tweak the hyperparameters of the model</p>
      </span>
      </div>
    </div>
  );
}

export default ProPlanCard;
