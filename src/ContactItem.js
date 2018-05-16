import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class ContactItem extends React.Component{

deleteContact = (value) => {
  axios.delete (`/contact/${value}`)
}

render () {
  const item = this.props.item
  return   <div style={{border : "3px solid grey "}}>
      <h1> Contact Name :{item.name} </h1>
      <h1> Contact Phone :{item.tel}</h1>
      <h1> Contact Email : {item.email}</h1>


      <Link to={`/modify_Contact/${item._id}`}>
      <input type="button" value="modifier" />
      </Link>



      <input type="button" value="supprimer" onClick={()=>this.deleteContact(item._id)} />
    </div>
  }
}

export default ContactItem
