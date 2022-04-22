import './videoBox.css'
import { LoremIpsum } from 'react-lorem-ipsum';
// import Button from '../header/TopButtons';
import Button2 from '../Buttons/Button_circular';
import Reactplayer from 'react-player';

const VideoBox = () => {
  const url = "sample.mp4";
  return (
    <div className='rectangle'>
      <div className='but'>
      <Button2
        name = "Prev"
        /> 
      </div>

        <div className='rec1'>
              <h2 className='title'>The Video Title</h2>
              <div className=''>
              <video controls width="100%">
              <source src={url} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
              </video>
              </div>
              <div className='rec1_down'>
                <h4 style={{marginLeft:"10px"}}>
                <button type="button" class="btn btn-outline-dark">Share Video</button>        
                </h4>
                
              </div>
        </div>

        <div className='rec2'>
              <h4 className='desc'>Video Description</h4>
              <div className='paragraph'>
               <LoremIpsum p={2} />
              </div>
        </div>
        <div className='but'>
        <Button2
        name = "Next"
        />
        </div>
    </div>
    
  )
}

export default VideoBox