import './App.css';
// import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthForm from './components/authForms/authform';
import VideoPage from './components/videoPage/videoPage';
import Gallery from './components/gallery/gallery';
// import { useSelector } from 'react-redux';
import Home from './components/home/home';

 


function App() {
  // let isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  // console.log("Checkiiiiiinnnnnnggggg", isUserLoggedIn);
    

  return (
      
      // <div className='App'>  
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<AuthForm loginState={true}/>} />
      <Route path="signup" element={<AuthForm signupState={true}/>} />
      <Route path="upload" element={<AuthForm uploadState={true}/>} />
      
      <Route exact path="gallery" element={<Gallery/>} >
        <Route path=":videoId" element={<VideoPage />} />
      </Route>
      <Route path="resetPassword" element={<AuthForm resetPassword={true}/>} />
      
    </Routes>
  </Router>
      // </div>

  );
}

export default App;

// vziakwwy - public
// 63878da4-6eb0-42a6-b8eb-f9b3833bcc81 -
    // "build": "cd platform && npm install && npm run build",
    // "server": "nodemon server.js",
    // "platform": "npm start --prefix platform",
    // "dev": "concurrently \"npm run server\" \"npm run platform\""