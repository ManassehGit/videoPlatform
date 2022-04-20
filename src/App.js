import './App.css';
// import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Body from './components/body/body';
// import Form from './components/Form/form';
// import Login from './components/Form/Login';
// import HeaderC from './components/header/headerCentre';
// import Signin from './components/Form/Signin'
// import Upload from './components/Form/upload'
// import Home from './pages/Home';


function App() {
  return (
      
      <div className='App'>  
        <Header button1="Log In" button2="Sign Up"/>
        <Body />
        <Footer />
      </div>

  );
}

export default App;

// vziakwwy - public
// 63878da4-6eb0-42a6-b8eb-f9b3833bcc81 -
    // "build": "cd platform && npm install && npm run build",
    // "server": "nodemon server.js",
    // "platform": "npm start --prefix platform",
    // "dev": "concurrently \"npm run server\" \"npm run platform\""