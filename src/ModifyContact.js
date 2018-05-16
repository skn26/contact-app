import React from 'react'
import axios from 'axios'

class ModifyContact extends React.Component {
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

  componentDidMount = () => {
    axios.get(`/contact/${this.props.id.match.params.id}`).then(
      res=> this.setState ({
        name: res.data.name,
        tel: res.data.tel,
        email: res.data.email
      })
  )
}

updateContact = (value) => {
  axios.put (`/contact/${this.props.id.match.params.id}`, {...value})
}

  render () {
    // console.log(this.props.id.match.params.id) pour récuperer l'ID
     return <div className= "add-contact-container">
              <h1>Modify Contact Page</h1>
              <form style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <label>Contact Name </label>
                <input name="name" onChange={this.handleState} value={this.state.name}/>

                <label>Contact Telephone </label>
                <input name="telephone" onChange={this.handleState} value={this.state.tel}/>

                <label>Contact Email </label>
                <input name="email" onChange={this.handleState} value={this.state.email}/>

                 <input type="button" value="Modify contact" style={{margin:"8px"}} onClick={()=>this.updateContact(this.state)} />






              </form>

      </div>
/* appel fonction puisque la méthode AddContact prend en paramètre une valeur (value)*/

  }
}

export default ModifyContact
