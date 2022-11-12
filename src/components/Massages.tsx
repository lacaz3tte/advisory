import {useState} from 'react'
import Massage from './Massage';

const Massages = () => {

    const massages = [{
        from:'client',
        massage:'Massage_1'
    },{
        from:'operator',
        massage:'Massage_2'
    },{
        from:'client',
        massage:'Massage_3'
    }]

  return(
    <>
        {massages.map(mas => {
            return <Massage massage={mas}></Massage>
        })}
    </>
  )
}

export default Massages;