import Header from '../header/header';
import VideoBox from '../videoBox/videoBox';
import Footer from '../footer/footer';
import { auth } from '../../firebase-config';

const VideoPage = () => {
  console.log("Auth CUser", auth.currentUser);
  return (
    <div>
        <Header button1="Upload Video" button2="Sign Out" user={{email: "Kojo@gmail.com"}} loggedIn={true}/>
        <VideoBox />
        <Footer />
    </div>
  )
}

export default VideoPage;