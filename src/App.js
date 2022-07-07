//import logo from './logo.svg';
import './App.css';
import './Footer/Footer';
import Footer from './Footer/Footer';
import HeroTitle from './HeroTitle/HeroTitle';
import WelcomeUser from './WelcomeUser/WelcomeUser';
import StopWatch from './StopWatch/StopWatch';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <h1>My react app</h1>
      <HeroTitle/>Joe
      <WelcomeUser username="Vladimir" notification="3"/>
      <Footer/>
      <StopWatch></StopWatch> 
      <Login></Login>
    </div>
  );
}

export default App;
