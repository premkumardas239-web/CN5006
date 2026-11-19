import { useState, useEffect } from "react"; 
import sunny from "./sunny.jpg"; 
import rainy from "./rainy.jpg"; 
import cloudy from "./cloudy.jpg"; 

function Weathermoodwidget({ pic: selectedEmoji }) { 
  const [image, setImage] = useState(sunny); 
  const [count, setCount] = useState(0); 
      const [message, setMessage] = useState("");
  

 
  useEffect(() => { 
    const emojiImages = { 
      sunny, 
      rainy, 
      cloudy, 
    }; 
 
    setImage(emojiImages[selectedEmoji] || sunny); 
  }, [selectedEmoji]); 
 
  const handleClick = () => { 
    setCount((prevCount) => prevCount + 1); 
    if (selectedEmoji === "sunny") {
            setMessage("I'm feeling happy!");
        } 
        else if (selectedEmoji === "rainy") {
            setMessage("I'm feeling sad.");
        } 
        else if (selectedEmoji === "cloudy") {
            setMessage("I'm disappointed.");
        }
  }; 
 
  return ( 
    <div className="App">  
      <p> 
        {selectedEmoji} 
        <button type="button" onClick={handleClick}> 
          {count} 
          <img src={image} alt={selectedEmoji} /> 
        </button> 
        <p>{message}</p>
      </p> 
 
  <p>&nbsp;</p> 
    </div> 
  ); 
} 
 
export default Weathermoodwidget; 