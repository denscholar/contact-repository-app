import Delete from '@material-ui/icons/Delete'
import AccountCircle from '@material-ui/icons/AccountCircle'
import './ContactCard.css';

const ContactCard = (props) => {
    const {name, email, id } = props.contact;

  return (
    <div className="list-container">
                <AccountCircle style={{fontSize: '30px'}} />
                <div className="detail">
                     <p className="title">{name}</p>
                    <p className="email">{email}</p>
                </div>                
                <Delete onClick={() => props.clickHandler(id)} style={{color: 'red', cursor: 'pointer'}}/>
            </div>
  )
}

export default ContactCard