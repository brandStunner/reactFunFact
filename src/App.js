import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const[darkMode, setDarkMode] = useState(true)
  function toggleDarkmode(){
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className="app-container">
     <Navbar darkMode={darkMode} toggleDarkmode={toggleDarkmode}/>
     <Main darkMode={darkMode}/>
     <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;
