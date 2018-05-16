import React from 'react'
import axios from 'axios'

class AddContact extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      name:"",
      tel:"",
      email:""
    }
  }

  handleState = e => {
    this.setState ({
      [e.target.name] : e.target.value
    })
  }

  addContact = (value) => {
    axios.post('/contacts',{...value}) ///value represente req.value en back-end
  }

  render () {
     return <div class ClassName= "add-contact-container">
              <h1>Add Contact Page</h1>
              <form style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <label>Contact Name </label>
                <input name="name" onChange={this.handleState}/>

                <label>Contact Telephone </label>
                <input name="telephone" onChange={this.handleState}/>

                <label>Contact Email </label>
                <input name="email" onChange={this.handleState}/>

                 <input type="button" value="add contact" style={{margin:"8px"}} onClick={()=>this.addContact(this.state)} />

{/* appel fonction puisque la méthode AddContact prend en paramètre une valeur (value)*/}




              </form>

      </div>

  }
}

export default AddContact
