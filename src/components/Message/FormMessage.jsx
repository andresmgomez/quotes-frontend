import { useState } from 'react';
import classes from './FormMessage.module.css'

export default function FormMessage(props) {
   const [typedSender, setTypedSender] =  useState('');
   const [typedMessage, setTypedMessage] = useState('');

   const submitForm = (event) => {
      event.preventDefault();
      props.onAddEvent(typedSender, typedMessage)
      setTypedSender('')
      setTypedMessage('')
   }

   return (
      <>
         <form className={`${classes.messageForm}`} onSubmit={submitForm}>
            <input 
               id="sender" 
               type="text"
               placeholder='Tell Us Who You Are' 
               value={typedSender} 
               onChange={(e) => setTypedSender(e.target.value)}
            ></input>
            <br />
            <textarea 
               name="message" 
               placeholder='What You Have In Your Mind...'
               cols='40'
					rows='10' 
               value={typedMessage} 
               onChange={(e) => setTypedMessage(e.target.value)}
            ></textarea>
            <br />
            <button 
               type="submit"
            >Add Message
            </button>
            <br />
         </form>
      </>
   )
}