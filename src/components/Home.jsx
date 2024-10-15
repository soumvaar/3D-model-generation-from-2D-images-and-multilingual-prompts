// import React from 'react'
import "./Home.css";
import Cube3DFeatures from "./Cube3DFeatures";
import FreePlanCard from "./FreePlanCard";

import ProPlanCard from "./ProPlanCard";
// import { BrowserRouter as Link} from 'react-router-dom';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <main>
        <div className="transformingMainDiv">
          <div className="transforming ">
            <div className="transformingTXT ">
              <h1>Transforming 2-D into 3-D</h1>
            </div>
            <div className="transformingBTNS">
             

<div className="orangeBTN">
            <Link to="/3-D Model Generation"><button>Get Started Now</button></Link>
          </div>

          <div className="whiteBTN">
            <Link to="/about"><button>Learn More &rarr;</button></Link>
          </div>
            </div>
          </div>
        </div>
      </main>

      <section>
        <div className="OurFeatures">
          <div className="FeatureHeading">
            <h6>Features</h6>
            <h1>Our Features</h1>
          </div>
          <div className="features">
            <div className="FeaturesSVG">
              <Cube3DFeatures />
            </div>
            <div className="FeatureContent">
              <h3>3-D Model Generation</h3>
              <p>
              Transform 2D images or text prompts into stunning 3D models with just a click
              </p>
            </div>
          </div>
          <div className="features">
            <div className="FeaturesSVG">
              <Cube3DFeatures />
            </div>
            <div className="FeatureContent">
              <h3>Multi-View Image Generation</h3>
              <p>
              Generate multiple perspectives from a 2D image or prompt, perfect for detailed visualization
              </p>
            </div>
          </div>
          <div className="features">
            <div className="FeaturesSVG">
              <Cube3DFeatures />
            </div>
            <div className="FeatureContent">
              <h3>Downlaod & Export</h3>
              <p>
              Easily download and export your creations in various formats, ready for use
              </p>
            </div>
          </div>
          <div className="features">
            <div className="FeaturesSVG">
              <Cube3DFeatures />
            </div>
            <div className="FeatureContent">
              <h3>Multilingual Support</h3>
              <p>
              Input prompts in multiple languages and let our tool do the rest—effortless global accessibility
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ChooseYourPlansMainDiv">
          <div className="ChooseYourPLans">
            <div className="ChooseYourPlansHeading">
              <h3>Pricing</h3>
              <h1>Choose Your PLan</h1>
            </div>
            <div className="planCards">
            <FreePlanCard />
            <ProPlanCard />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="LearnMoreVCMainDiv">
          <div className="LearnMoreVC">
            <div className="VCContentHeading">
              <h1>Revolutionize Your Visual Content</h1>
            </div>

            <div className="VCContentBTN orangeBTN">
            <Link to="/about"><button>Learn More</button></Link>
            </div>
            
          </div>
        </div>
      </section>

      <article>
        <div className="CommonQuestions">
          <div className="CQtitle">FAQ</div>
          <div className="CommonQue">
            <p>Common</p>
            <p>questions</p>
            <p id="CQsubtitle">
              Here are some of the most common questions that we get.
            </p>
          </div>

          <div className="CQquestion que1">
            <p>Can I convert 2-D images into 3-D models on your website?</p>
            <p id="CQanswer">
              Yes, absolutely! Our platform allows you to effortlessly convert
              2-D images into stunning 3-D models.
            </p>
          </div>

          <div className="CQquestion que2">
            <p>
              How quickly can I generate multi-view images from my 2-D photos?
            </p>
            <p id="CQanswer">
              With our platform, you can generate dynamic multi-view images in
              just a few seconds, adding depth and perspective to your visuals
              instantly
            </p>
          </div>

          <div className="CQquestion que3">
            <p>
              Do I have control over the rendering styles for my 3-D models?
            </p>
            <p id="CQanswer">
              Yes, you have full control! Customize rendering styles to achieve
              your desired look, whether you prefer photorealistic or stylized
              renders
            </p>
          </div>

          <div className="CQquestion que4">
            <p>
              Is it easy to integrate my projects with other design software?
            </p>
            <p id="CQanswer">
              Absolutely! Our platform offers seamless integration with popular
              design software, making collaboration and workflow integration a
              breeze.
            </p>
          </div>

          <div className="CQquestion que5">
            <p>Can I export my creations easily from your platform?</p>
            <p id="CQanswer">
              Yes, exporting your creations is a breeze! Our platform supports
              various file formats for smooth and hassle-free export, ensuring
              compatibility with your preferred design software and platforms.
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Home;
