
import './App.css';
import DisplayCard from './components/DisplayCard';
import SearchBar from './components/SearchBar';



function App() {
  

  return (
    <>
      <div className='box__layout'>
        <SearchBar></SearchBar>
        <br />
        <DisplayCard></DisplayCard>
      </div>
    </>
  )
}

export default App
