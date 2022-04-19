import {useState} from 'react'
import './Home.css'
import Body from '../components/body/body'
import Header from '../components/header/header'
import VideoBox from '../components/videoBox/videoBox'
import VideoCard from '../components/videoCard/videoCard'
import Footer from '../components/footer/footer'
import Button from '../components/Buttons/Button'


const Home = () => {

const [route, setRoute] = useState(false);


const dummy_data = [{
    title: "Must Be",
    desc:"Song by JHus"
},{
    title: "Intentional",
    desc:"Song by Travis Greene"
},{
    title: "Love Yours",
    desc:"Song by J.Cole"
},{
    title: "Avengers",
    desc:"An MCU Classic"
},{
    title: "Home Alone",
    desc:"GTV's way of telling us its Christmas"
},{
  title: "Yawa Of The Day",
  desc:"Kwadwo Sheldon at it again"
}]

const changeToGallery = () =>{
  console.log("hi")
setRoute(true);
}

  return (
    <>

    <Header
    button1="LOGIN"
    button2="SIGN UP"
    />
    {route ? (
    <div className="cards">
          {dummy_data.map((data) => (
            <div>
              <VideoCard
                title={data.title}
                description={data.desc}
              />
            </div>
          ))}
        </div>
    ):(
      <div className='body'>
    
      <div onClick={() => changeToGallery(true)} >
        <Button
      name = "View Gallery" 
       size = "20px"
  />
  </div>
  </div>        
    )}
     <Footer />   
    </>    
  )
}

export default Home