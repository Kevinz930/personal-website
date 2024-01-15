import './App.css';
import Background from './components/Background/Background.js'
import Main from './pages/Home/Home.js'
import Carousel from './components/Carousel/Carousel.js'

function App() {
  return (
    <div className='App'>
      <main>  
        <Carousel pages={["Home", "About", "Portfolio", "Contact"]}/>
      </main>
      <Background />
    </div>
  );
}

export default App;