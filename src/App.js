import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Body from './components/body/body';
import Form from './components/Form/form';
// import Login from './components/Form/Login';
// import HeaderC from './components/header/headerCentre';
// import Signin from './components/Form/Signin'
// import Upload from './components/Form/upload'
// import Home from './pages/Home';


function App() {
  return (
    <Router>

      <div className="App">
        <Route path='/'>
          <Header
            button1="Log In"
            button2="Sign Up" />
        </Route>
        <Routes>
          <Route exact path='/'>
            <Body />
          </Route>
          <Route path='/form'>
            <Form />
          </Route>
        </Routes>
        <Route>
          <Footer />
        </Route>

      </div>
    </Router>
  );
}

export default App;

// vziakwwy - public
// 63878da4-6eb0-42a6-b8eb-f9b3833bcc81 -
    // "build": "cd platform && npm install && npm run build",
    // "server": "nodemon server.js",
    // "platform": "npm start --prefix platform",
    // "dev": "concurrently \"npm run server\" \"npm run platform\""