import './videoBox.css'
import { LoremIpsum } from 'react-lorem-ipsum';
import Button from '../header/TopButtons';
import Button2 from '../Buttons/Button_circular';

const videoBox = () => {
  return (
    <div className='rectangle'>
      <div className='but'>
      <Button2
        name = "PREV"
        /> 
      </div>

        <div className='rec1'>
              <h2 className='title'>THE VIDEO TITLE</h2>
              <div className='vid'>

              </div>
              <div className='rec1_down'>
                <h4 style={{marginLeft:"10px"}}>
                  SHARE BUTTON        
                </h4>
                <h4 style={{marginLeft:"200px",marginRight:"10px"}}>
                  VIDEO CONTROLS
                </h4>
                <Button
                color="#f7941d" 
                />
                <Button
                color="#f7941d" 
                />
                <Button
                color="#f7941d" 
                />

              </div>
        </div>

        <div className='rec2'>
              <h4 className='desc'>VIDEO DESCRIPTION</h4>
              <div className='paragraph'>
               <LoremIpsum p={2} />
              </div>
        </div>
        <div className='but'>
        <Button2
        name = "NEXT"
        />
        </div>
    </div>
    
  )
}

export default videoBox