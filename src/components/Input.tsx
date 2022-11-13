import {useEffect, useState} from 'react'
import { paperClip, send } from './svg';

interface IData{
  jwt:string
  id:number
  addMessage:(str:string)=>void
  toggleHistory:()=>void
  toggleUserData:()=>void
}

const Input = ({jwt,addMessage,toggleHistory,toggleUserData,id}:IData) => {

  const [text,setText] = useState('')

  const sendMassage = async() => {
    addMessage(text)
    setText('')
    await fetch('https://hack.invest-open.ru/message/send', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+ jwt
            },
            body:JSON.stringify({
              message:{
                dialogId: id,
                text: text,
                messageType: "TEXT",
              }
            }),
            method:'POST',
            redirect:'follow',
            
          })
          .then(res=>res.text())
          .then(res=>console.log(JSON.parse(res)))
  }

  return(
    <div className='absolute bottom-0 right-0 left-0 '>
      <div className='flex justify-between items-center h-14 m-3 bg-slate-100 rounded-xl '>
          <button className='m-5 hover:text-slate-800'>{paperClip}</button>
          <input type='text' value={text} onChange={(text)=>{setText(text.target.value)}}  
              className='w-full p-2 bg-white placeholder-stone-900 rounded-xl focus:outline-none' placeholder='Введите сообщение...'></input>
          <button className='m-5 hover:text-slate-800' onClick={()=>{sendMassage()}}>{send}</button>
      </div>
      <div className='flex m-3'>
          <button className='bg-sky-400 w-1/2 p-1 m-1 rounded-3xl text-white ' onClick={()=>{toggleHistory()}}>
            История сообщений
          </button>
          <button className='bg-sky-400 w-1/2 p-1 m-1 rounded-3xl text-white ' onClick={()=>{toggleUserData()}}>
            Данные пользователя
          </button>
      </div>
    </div>
  )
}

export default Input;
