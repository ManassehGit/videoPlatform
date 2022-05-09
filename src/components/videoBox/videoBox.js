import { useState} from "react";
import './videoBox.css'
import { LoremIpsum } from 'react-lorem-ipsum';
// import Button from '../header/TopButtons';
import Button2 from '../Buttons/Button_circular';
import {RWebShare} from 'react-web-share';

const VideoBox = () => {
  
  const [url, setUrl] = useState("Vids/Sample3.mp4");

  return (
    <div className='rectangle d-flex'>
      <div className='but order-1 order-sm-1'>
      <div  onClick={()=>{
        if(url !== "Vids/Sample1.mp4"){
          if(url === "Vids/Sample2.mp4"){
            setUrl("Vids/Sample1.mp4")
          }else{
            setUrl("Vids/Sample2.mp4")
          }
        }
      }}> 
        <Button2 
        name = "Prev"
        /> 
        </div>
      </div>

        <div className='rec1 order-3 order-md-2'>
              <h2 className='title'>The Video Title</h2>
              <div className=''>
              <video controls width="100%" key={url}>
              <source src={url} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
              </video>
              </div>
              <div className='rec1_down'>
                <h4 style={{marginLeft:"10px"}}>
                <RWebShare
                  data={{
                    text: "Like humans, flamingos make friends for life",
                    url: "https://on.natgeo.com/2zHaNup",
                    title: "Flamingos",
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  <button className="btn btn-outline-dark">Share 🔗</button>
                </RWebShare>
                </h4>
                
              </div>
        </div>

        <div className='rec2 order-4 order-md-3'>
              <h4 className='desc'>Video Description</h4>
              <div className='paragraph'>
               <LoremIpsum p={1} />
              </div>
        </div>
        <div className='but order-2 order-md-4'>
        <div  onClick={()=>{
        if(url !== "Vids/Sample3.mp4"){
          if(url === "Vids/Sample2.mp4"){
            setUrl("Vids/Sample3.mp4")
          }else{
            setUrl("Vids/Sample2.mp4")
          }
        }
      }}> 
        <Button2
        name = "Next"
        />
        </div>
        </div>
    </div>
    
  )
}

export default VideoBox