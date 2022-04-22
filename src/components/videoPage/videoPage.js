import Header from '../header/header';
import VideoBox from '../videoBox/videoBox';
import Footer from '../footer/footer';

const VideoPage = () => {
  
  return (
    <div>
        <Header button1="Upload Video" button2="Sign Out" user={{email: "Quofi@gmail.com"}} loggedIn={true}/>
        <VideoBox />
        <Footer />
    </div>
  )
}

export default VideoPage;