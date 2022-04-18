import {useState} from 'react'
import Body from '../components/body/body'
import Header from '../components/header/header'
import VideoBox from '../components/videoBox/videoBox'
import VideoCard from '../components/videoCard/videoCard'
import Footer from '../components/footer/footer'

const Home = () => {

const [route, setRoute] = useState(0);


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
}]

const ya = () =>{
route = route+1;

}

  return (
    <div className="App">
    {(() => {
      switch (route) {
        case 0:
          return <Header onClick={ya} />
        case 1:
          return <Footer onClick={ya} />
        case 2:
          return <Body onClick={ya} />
        case 3:
          return <VideoBox onClick={ya} />
        default:
          return null
      }
    })()}

  </div>
  )
}

export default Home