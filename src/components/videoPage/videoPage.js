import Header from '../header/header';
import VideoBox from '../videoBox/videoBox';
import Footer from '../footer/footer';
import { auth } from '../../firebase-config';

const VideoPage = () => {
  
  return (
    <div>
        <Header button1="Upload Video" button2="Sign Out" user={auth.currentUser} loggedIn={true}/>
        <VideoBox />
        <Footer />
    </div>
  )
}

export default VideoPage;