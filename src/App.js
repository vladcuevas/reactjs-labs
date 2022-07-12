//import logo from './logo.svg';
import './App.css';
import './Footer/Footer';
import Footer from './Footer/Footer';
import HeroTitle from './HeroTitle/HeroTitle';
import WelcomeUser from './WelcomeUser/WelcomeUser';
import StopWatch from './StopWatch/StopWatch';
import Login from './Login/Login';
import Clock from './Clock/Clock/Clock';
import Counter from './Counter/Counter';

function App() {
  return (
    <>
    <div className="App">
      <Clock></Clock>
      <h1>My react app</h1>
      <HeroTitle/>Joe
      <WelcomeUser username="Vladimir" notification="3"/>
      <WelcomeUser/>
      <Footer/>
      <StopWatch></StopWatch> 
      <Login></Login>
      Counter:
      <Counter enabled={true}></Counter>
      <Counter enabled={false}></Counter>
    </div>
    </>
  );
}

export default App;
