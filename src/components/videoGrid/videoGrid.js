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
            "src": "Images/Sun.png",
            "name": "sun1",
            "hOffset": 250,
            "vOffset": 250,
            "data": "center"
        },
        "text": {
            "data": "Click Here",
            "size": 36,
            "style": "bold",
            "name": "text1",
            "hOffset": 250,
            "vOffset": 100,
            "alignment": "center",
            "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
        },
        "test": {
            "data": "Click Here",
            "size": 36,
            "style": "bold",
            "name": "text1",
            "hOffset": 250,
            "vOffset": 100,
            "alignment": "center",
            "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
        },
        "pen": {
            "data": "Click Here",
            "size": 36,
            "style": "bold",
            "name": "text1",
            "hOffset": 250,
            "vOffset": 100,
            "alignment": "center",
            "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
        },
        "net": {
            "data": "Click Here",
            "size": 36,
            "style": "bold",
            "name": "text1",
            "hOffset": 250,
            "vOffset": 100,
            "alignment": "center",
            "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
        }
    }); 

    // setColumnStyle({gridTemplateColumns: `repeat(${gridChoice}, 1fr)`});
    setGridElements(Object.keys(videos).map((item, index) => <VideoCard key={index} title={videos[item].name} description={videos[item].data} />));
        
    }, [ videos])


  return (
    <div className="gridStyle">
        {gridElements}
    </div>
  )
}

export default VideoGrid;