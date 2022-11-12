import {useEffect, useState} from 'react'
import { paperClip, send } from './svg';

const Input = () => {

  const [text,setText] = useState('')

  useEffect(()=>{console.log(text);
  },[text])

  return(
    <div className='absolute flex justify-between items-center bottom-0 h-14 left-0 right-0 m-3 bg-slate-400 rounded-xl border border-gray-900 '>
        <button className='m-5 hover:text-slate-800'>{paperClip}</button>
        <input type='text' value={text} onChange={(text)=>{setText(text.target.value)}}  
            className='w-full p-2 border-gray-900 bg-transparent border placeholder-stone-900 rounded-xl focus:outline-none' placeholder='Введите сообщение...'></input>
        <button className='m-5 hover:text-slate-800'>{send}</button>
    </div>
  )
}

export default Input;
