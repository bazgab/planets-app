
import { useState } from 'react'
import './SearchBar.css'

export default function SearchBar() {
  const [selected, setSelected] = useState('Jupiter')
  const handleChange = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
  }

  return (
    <>
    <div className='box__search'>
        <select value={selected} onChange={(e) => handleChange(e)}>
            <option>Jupiter</option>
            <option>Saturn</option>
            <option>Uranus</option>
            <option>Neptune</option>
            <option>Earth</option>
            <option>Mars</option>
            <option>Venus</option>

        </select>
        {selected == 'Jupiter'? <SearchBar />: ''}
        {selected == 'Saturn'? <SearchBar />: ''}
        {selected == 'Uranus'? <SearchBar />: ''}
        {selected == 'Neptune'? <SearchBar />: ''}
        {selected == 'Earth'? <SearchBar />: ''}
        {selected == 'Mars'? <SearchBar />: ''}
        {selected == 'Venus'? <SearchBar />: ''}
        

    </div>
      
    </>
  )
}



