import Card from "../common/Card/Card";
import classes from './ListMessages.module.css';

export default function ListMessages(props) {
   return (
      <Card className={`${classes.messages}`}>
         <ul>
            {props.messages.map((message) => {
               return (
                  <li key={message.id}>
                     <h4><strong>Sender</strong>: {message.sender}</h4>
                     <p><strong>Message</strong>: {message.text}</p>
                  </li>
               )
            })
         }
         </ul>
      </Card>
   )
}