
import './App.css';

import SearchBar from './components/SearchBar';
//import TitleBar from './components/TitleBar';



function App() {
  

  return (
    <>
       
      <div className='box__layout'>
      <div className='box__title'>
        <h1>PlanetStat</h1>
        <p>
          This application provides a fact sheet containing basic geophysical data sorted 
          by planet. This information is authored by NASA Official Dr. David R. Williams and it
          was last updated Feb 11, 2023. You can choose which Planet to display on the selection
          wheel below. 
        </p>
      </div>
      <br />
        <SearchBar></SearchBar>
        
        <br />
        
      </div>
    </>
  )
}

export default App
