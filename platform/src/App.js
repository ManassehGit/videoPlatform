import './App.css';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Body from './components/body/body';
import Form from './components/Form/form';


function App() {
  return (
    <Router>

      <div className="App">
        <Header
          button1="Log In"
          button2="Sign Up" />

        <Switch>
          <Route exact path='/'>
            <Body />
          </Route>
          <Route path='/form'>
            <Form />
          </Route>
        </Switch>

        <Footer />
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