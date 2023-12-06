
import { useState } from 'react'
import './SearchBar.css'
import Jupiter from './Jupiter';
import Saturn from './Saturn';
import Uranus from './Uranus';
import Neptune from './Neptune';
import Earth from './Earth';
import Venus from './Venus';
import Mars from './Mars';
import Mercury from './Mercury';

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
            <option>Mercury</option>

        </select>
        {selected == 'Jupiter'? <Jupiter />: ''}
        {selected == 'Saturn'? <Saturn />: ''}
        {selected == 'Uranus'? <Uranus />: ''}
        {selected == 'Neptune'? <Neptune />: ''}
        {selected == 'Earth'? <Earth />: ''}
        {selected == 'Venus'? <Venus />: ''}
        {selected == 'Mars'? <Mars />: ''}
        {selected == 'Mercury'? <Mercury />: ''}
        
        

    </div>
      
    </>
  )
}



