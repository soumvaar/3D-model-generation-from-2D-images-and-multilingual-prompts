// import React from 'react'
import "./Gallery.css";
import pig from "../assets/pig.gif";
import amongus from "../assets/amongus.gif";
import fish from "../assets/fish.gif";
import laptop from "../assets/laptop.gif";
import penguin from "../assets/penguin.gif";
import ring from "../assets/ring.gif";
import sofa from "../assets/sofa.gif";
import trophy from "../assets/trophy.gif";
import Galleryslider from "../components/Galleryslider.jsx";

const Gallery = () => {
  return (
    <>
      <div className="Slider">
        <Galleryslider />
      </div>
      <div className="TextTo3DHeading">
        <h2>Text to 3-D model generation</h2>
      </div>

      <div className="TextTo3DContentMainDiv">
        <div className="TextTo3DContent">
          <div className="TextTo3DElement1">
            <img
              src={pig}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement2">
            <img
              src={amongus}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement3">
            <img
              src={fish}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement4">
            <img
              src={laptop}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement5">
            <img
              src={penguin}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement6">
            <img
              src={ring}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement7">
            <img
              src={sofa}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement8">
            <img
              src={trophy}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement9">
            <img
              src={amongus}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>

      <div className="ImageTo3DHeading">
        <h2>Image to 3-D model generation</h2>
      </div>

      <div className="ImageTo3DContentMainDiv">
        <div className="ImageTo3DContent">
          <div className="ImageTo3DContentEle1">
            <img src={sofa} alt="img1" style={{ width: "18vw", height: "36vh", borderRadius: "10px" }}/>
            <img src={sofa} alt="img12" style={{ width: "18vw", height: "36vh", borderRadius: "10px" }}/>
          </div>
          <div className="ImageTo3DContentEle2">
            <img src={trophy} alt="img2" style={{ width: "18vw", height: "36vh", borderRadius: "10px" }}/>
            <img src={trophy} alt="img22" style={{ width: "18vw", height: "36vh", borderRadius: "10px" }}/>
          </div>
          <div className="ImageTo3DContentEle3">
            <img src={sofa} alt="img3" style={{ width: "18vw", height: "36vh", borderRadius: "10px" }}/>
            <img src={sofa} alt="img33" style={{ width: "18vw", height: "36vh", borderRadius: "10px" }}/>
          </div>
          <div className="ImageTo3DContentEle4">
            <img src={trophy} alt="img4" style={{ width: "18vw", height: "36vh", borderRadius: "10px" }}/>
            <img src={trophy} alt="img44" style={{ width: "18vw", height: "36vh", borderRadius: "10px" }}/>
          </div>
          <div className="ImageTo3DContentEle5">
            <img src={sofa} alt="img5" style={{ width: "18vw", height: "36vh", borderRadius: "10px" }}/>
            <img src={sofa} alt="img55" style={{ width: "18vw", height: "36vh", borderRadius: "10px" }}/>
          </div>
          <div className="ImageTo3DContentEle6">
            <img src={trophy} alt="img6" style={{ width: "18vw", height: "36vh", borderRadius: "10px" }}/>
            <img src={trophy} alt="img66" style={{ width: "18vw", height: "36vh", borderRadius: "10px" }}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
