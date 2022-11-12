import {useState} from 'react'

interface IMassage {
    massage:{
        from:string,
        massage:string
    }
}

const Massage = ({massage}:IMassage) => {
  return(
    <>
        <div className={massage.from==='client'?'flex justify-end':'flex justify-start'}>
            <div className={massage.from==='client'?'flex m-3 bg-slate-500 rounded-3xl max-w-lg p-2 ':'flex m-3 bg-amber-500 rounded-3xl max-w-lg p-2 '}>
                <p className='pr-2'>{massage.massage}</p>
                <p className='font-light text-sm'>{new Date().getHours() + ":" + new Date().getMinutes()}</p>
            </div>
        </div>
    </>
  )
}

export default Massage;