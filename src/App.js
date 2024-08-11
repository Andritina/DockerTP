import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero'
import Resume from './components/Resume';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Hero />
      <Header />
      <About />
      <Resume />
      <Services/>
    </div>
  );
}

export default App;
