import React, {useEffect, useState} from 'react';
import VideoCard from '../videoCard/videoCard';

const VideoGrid = () => {
    // const [gridChoice, setGridChoice] = useState(0);
    const [gridElements, setGridElements] = useState([]);
    // const [columnStyle, setColumnStyle] = useState({});
    const [videos, setVideos] = useState({});
    
    useEffect(() => {
        // setGridChoice(3);
        setVideos({
        "image": { 
            "img": "Thumbs/Sample1.png",
            "name": "Brain Tumor Detection",
            "hOffset": 250,
            "vOffset": 250,
            "data": "Exploring the use of technology in modern day medicine"
        },
        "text": {
            "img": "Thumbs/Sample2.png",
            "data": "Fundamentals of Git & Github. Get to know the basics",
            "size": 36,
            "style": "bold",
            "name": "Git & GitHub",
            "hOffset": 250,
            "vOffset": 100,
            "alignment": "center",
            "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
        },
        "test": {
            "img": "Thumbs/Sample3.png",
            "data": "Recursion made easy. A lesson on data structures and algorithms.",
            "size": 36,
            "style": "bold",
            "name": "Recursion",
            "hOffset": 250,
            "vOffset": 100,
            "alignment": "center",
            "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
        }
    }); 

    // setColumnStyle({gridTemplateColumns: `repeat(${gridChoice}, 1fr)`});
    setGridElements(Object.keys(videos).map((item, index) => <VideoCard key={index} id={videos[item].name} title={videos[item].name} description={videos[item].data} source={videos[item].img} />));
        
    }, [ videos])


  return (
    <div className="gridStyle">
        {gridElements}
    </div>
  )
}

export default VideoGrid;