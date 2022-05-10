import Header from '../header/header';
import VideoBox from '../videoBox/videoBox';
import Footer from '../footer/footer';
import { auth } from '../../firebase-config';
import { useSelector } from 'react-redux';

const VideoPage = () => {
  console.log("Auth CUser", auth.currentUser);


  const videoDetail = useSelector((state) => state.videos);
  console.log(videoDetail)

  return (
    <div>
        <Header button1="Upload Video" button2="Sign Out" user={{email: "Kojo@gmail.com"}} loggedIn={true}/>
        <VideoBox detail={videoDetail} />
        <Footer />
    </div>
  )
}

export default VideoPage;