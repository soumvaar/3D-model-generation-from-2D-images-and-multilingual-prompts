import { useState } from "react";
import "./ThreeD_ModelGeneration.css";
import "@google/model-viewer/dist/model-viewer";
import { FaDownload } from 'react-icons/fa';

const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";
const targetUrl = "https://api.replicate.com/v1/predictions";
const apiToken3d = import.meta.env.APITOKEN;
const apiTokenImgGen=import.meta.env.APITOKEN;
const apiTokenHindi=import.meta.env.APITOKEN;


function isAlphabetic(str) {
  const result = [...str]
      .every(char => (char >= 'a' && char <= 'z') 
                  || (char >= 'A' && char <= 'Z'));
  console.log(result);
  return result;
}

function isValidURL(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i'
  );
  return pattern.test(str);
}

// <-----------------------------Translate text--------------------------------->
async function translatePrompt(prompt, setModelLink) {
  const data = JSON.stringify({
    version: "668a4fec05a887143e5fe8d45df25ec4c794dd43169b9a11562309b2d45873b0",
    input:
    {
        input_text:prompt,
        task_name: "T2TT (Text to Text translation)",
        input_audio: "https://replicate.delivery/pbxt/JWSAJpKxUszI0scNYatExIXZX2rJ78UBilGXCTq4Ct9BDwTA/sample_input_2.mp3",
        input_text_language: "Hindi",
        max_input_audio_length: 60,
        target_language_text_only: "English",
        target_language_with_speech: "English"
    }
  });

  try {
    const response = await fetch(`${corsProxyUrl}${targetUrl}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiTokenHindi}`,
        "Content-Type": "application/json",
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const output = await response.json();
    const predictionUrl = output.urls.get;
    const predictionid = output.id;
    console.log(predictionUrl);
    console.log(predictionid);

    const checkPredictionStatus = async () => {
      const predictionResponse = await fetch(`${corsProxyUrl}${targetUrl}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${apiTokenHindi}`,
        }
      });

      if (!predictionResponse.ok) {
        throw new Error(`HTTP error! status: ${predictionResponse.status}`);
      }

      const predictionOutput = await predictionResponse.json();
      const selectedItem = predictionOutput.results.find(item => item.id === predictionid);
      const predictionStatus = selectedItem.status;

      if (predictionStatus === "succeeded") 
        {
          const translated = selectedItem.output.text_output; // Assuming the 3D model link is the third item in the output array
          GenerateImage(translated, setModelLink);
      }
      else if (predictionStatus === "failed") {
        console.error("Prediction failed");
      }
      else{
        await new Promise((resolve) => setTimeout(resolve, 10000));
        checkPredictionStatus();
      }
    }

    checkPredictionStatus();

  } catch (error) {
    console.error(error);
  }
}



// <-----------------------------Generate 3D model---------------------------------->

async function Generate(path, setModelLink) {
  const input = { image_path: path };
  const data = JSON.stringify({
    version: "e353a25cc764e0edb0aa9033df0bf4b82318dcda6d0a0cd9f2aace90566068ac",
    input,
  });

  try {
    const response = await fetch(`${corsProxyUrl}${targetUrl}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiToken3d}`,
        "Content-Type": "application/json",
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const output = await response.json();
    const predictionUrl = output.urls.get;
    const predictionid = output.id;
    console.log(predictionUrl);
    console.log(predictionid);

    const checkPredictionStatus = async () => {
      const predictionResponse = await fetch(`${corsProxyUrl}${targetUrl}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${apiToken3d}`,
        }
      });

      if (!predictionResponse.ok) {
        throw new Error(`HTTP error! status: ${predictionResponse.status}`);
      }

      const predictionOutput = await predictionResponse.json();
      const selectedItem = predictionOutput.results.find(item => item.id === predictionid);
      const predictionStatus = selectedItem.status;

      if (predictionStatus === "succeeded") {
        const modelLink = selectedItem.output[2]; // Assuming the 3D model link is the third item in the output array
        setModelLink(modelLink);
        console.log(modelLink);
      }
      else if (predictionStatus === "failed") {
        console.error("Prediction failed");
      }
      else{
        await new Promise((resolve) => setTimeout(resolve, 10000));
        checkPredictionStatus();
      }
    }

    checkPredictionStatus();

  } catch (error) {
    console.error(error);
  }
}


// <-----------------------------Generate Image---------------------------------->

async function GenerateImage(imagetext, setModelLink) 
{
  console.log("Generating image using the Tanslated prompt", imagetext);
  const input = { prompt: imagetext};
  const data = JSON.stringify({
    version: "7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc",
    input,
  });

  try {
    const response = await fetch(`${corsProxyUrl}${targetUrl}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiTokenImgGen}`,
        "Content-Type": "application/json",
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const output = await response.json();
    const predictionUrl = output.urls.get;
    const predictionid = output.id;
    console.log(predictionUrl);
    console.log(predictionid);

    const checkPredictionStatus = async () => {
      const predictionResponse = await fetch(`${corsProxyUrl}${targetUrl}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${apiTokenImgGen}`,
        }
      });

      if (!predictionResponse.ok) {
        throw new Error(`HTTP error! status: ${predictionResponse.status}`);
      }

      const predictionOutput = await predictionResponse.json();
      const selectedItem = predictionOutput.results.find(item => item.id === predictionid);
      const predictionStatus = selectedItem.status;

      if (predictionStatus === "succeeded") {
        const imagelink = selectedItem.output[0]; // Assuming the 3D model link is the third item in the output array
        Generate(imagelink, setModelLink);
      }
      else if (predictionStatus === "failed") {
        console.error("Prediction failed");
      }
      else{
        await new Promise((resolve) => setTimeout(resolve, 5000));
        checkPredictionStatus();
      }
    }

    checkPredictionStatus();

  } catch (error) {
    console.error(error);
  }
}

const ThreeD_ModelGeneration = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("text");
  const [modelLink, setModelLink] = useState("https://replicate.delivery/pbxt/4AokPMo5MPrgI1wIuj8Fcae4Rf6CpEixlm102eCcJShwCAolA/tmprdu7bxpx.glb");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleGenerate = () => {
    
    if(inputType == "text")
      {
        if(isValidURL(inputValue))
          alert("Please enter Text");
        else
    {
      if(isAlphabetic(inputValue))
      GenerateImage(inputValue,setModelLink);
      else
      translatePrompt(inputValue,setModelLink);
      console.log("Generating using prompt for:", inputValue);
    }
      }
    else
    {
      if(!isValidURL(inputValue))
        alert("Please enter URL");
      else
      {Generate(inputValue,setModelLink);
        console.log("Generating using Link for:", inputValue);
      }
    }
    
  };

  const handleButtonClick = (type) => {
    setInputType(type);
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="topPart">
      <div className="ThreeDModelHeading">
          <p>3D Model Generator</p>
        </div>
        <div className="RadioButtonPos">
          <div className="RadiobuttonMainDiv">
            <button
              className={`RadioButton ${inputType === "text" ? "active" : ""}`}
              onClick={() => handleButtonClick("text")}
            >
              Text
            </button>
            <button
              className={`RadioButton ${inputType === "image" ? "active" : ""}`}
              onClick={() => handleButtonClick("image")}
            >
              Image
            </button>
          </div>
        </div>
        </div>
        <div className="ThreeDInputPos">
          
          <div className="ThreeDinput-container">
            <textarea
              value={inputValue}
              onChange={handleInputChange}
              placeholder={inputType === "text" ? "Enter Your Text Here!" : "Enter Your Image Here!"}
              className="ThreeDinput-field"
              rows="4"
              wrap="soft"
              style={{ resize: "none", minHeight: "30px" }}
            />
            <button
              onClick={handleGenerate}
              className="ThreeDgenerate-button"
            >
              Generate 3D Model
            </button>
          </div>
        </div>
      <div className="sizedBox"></div>
      </div>
      <div className="right-section">
      <a href={modelLink} className="download-button">
    <FaDownload style={{color:'black'}}/>
  </a>
        {modelLink && (
          <model-viewer
            src={modelLink}
            alt="A 3D model"
            style={{ width: "800px", height: "600px" }}
            auto-rotate
            camera-controls
          ></model-viewer>
        )}
      </div>
    </div>
  );
};

export default ThreeD_ModelGeneration;
