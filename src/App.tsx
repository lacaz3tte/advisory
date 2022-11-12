import {useState} from 'react'
import Input from './components/Input';
import Massages from './components/Massages';

const App = () => {
  return(
    <div className='absolute left-1/3 right-1/3 top-4 bottom-4 rounded-xl bg-slate-300'>
      <Massages></Massages>
      <Input></Input>
    </div>
  )
}

export default App;
