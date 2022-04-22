import './videoBox.css'
import { LoremIpsum } from 'react-lorem-ipsum';
// import Button from '../header/TopButtons';
import Button2 from '../Buttons/Button_circular';

const VideoBox = () => {
  const url = "sample.mp4";
  return (
    <div className='rectangle d-flex'>
      <div className='but order-1 order-sm-1'>
      <Button2
        name = "Prev"
        /> 
      </div>

        <div className='rec1 order-3 order-md-2'>
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

        <div className='rec2 order-4 order-md-3'>
              <h4 className='desc'>Video Description</h4>
              <div className='paragraph'>
               <LoremIpsum p={1} />
              </div>
        </div>
        <div className='but order-2 order-md-4'>
        <Button2
        name = "Next"
        />
        </div>
    </div>
    
  )
}

export default VideoBox