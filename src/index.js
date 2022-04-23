import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Form/Login';
// import Signin from './components/Form/Signin';
// import Upload from './components/Form/upload';
import AuthForm from './components/authForms/authform';

import VideoPage from './components/videoPage/videoPage';
import Gallery from './components/gallery/gallery';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route index element={<App/>} />
      <Route path='/index' element={<App/>} />
      <Route path="/login" element={<AuthForm loginState={true}/>} />
      <Route path="/signup" element={<AuthForm signupState={true}/>} />
      <Route path="/upload" element={<AuthForm uploadState={true}/>} />
      <Route path=":videoId" element={<VideoPage />} />
      <Route path="/gallery" element={<Gallery />} />
    

    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
