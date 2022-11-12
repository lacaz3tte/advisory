import {useState, useEffect} from 'react'
import Autentification from './components/Autentification';
import History from './components/History';
import Input from './components/Input';
import Messages from './components/Messages';

const App = () => {

  const [toggleAutorisation,setToggleAutorisation] = useState(true)

  const toggle = () => {
    setToggleAutorisation(!toggleAutorisation)
  }
  
  const [jwtToken,setJwtToken] = useState('')

  const updateToken = (text:string) => {
    setJwtToken(text)
  }

  const [id,setId] = useState(0)

  useEffect(()=>{console.log('ID:'+id);
  },[id])

  const updateId = (id:number) => {
    setId(id)
  }

  const [messages,setMessages] = useState<Array<string>>([])

  const addMessage = (mess:string) => {
    setMessages([...messages,mess])
  }

  

  const [showHistory,setShowHitory] = useState(false)

  const toggleHistory = () => {
    setShowHitory(!showHistory)
  }

  return(
    <div className='absolute left-1/3 right-1/3 top-4 bottom-4 rounded-xl bg-slate-300'>
      {toggleAutorisation 
      ?
      <Autentification update={updateToken} jwt={jwtToken} updateId={updateId} toggle={toggle}></Autentification> 
      :
      <>
        <Messages messages={messages}></Messages>
        <Input jwt={jwtToken} id={id} addMessage={addMessage} toggleHistory={toggleHistory}></Input>
        {
          showHistory&&<History id={id} jwt={jwtToken}></History>
        }
      </>
      }
    </div>
  )
}

export default App;
