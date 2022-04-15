import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Body from './components/body/body';

function App() {
  return (
    <div className="App">
      <Header 
      button1="Log In"
      button2= "Sign Up"/>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
