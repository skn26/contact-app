import React from 'react'
import axios from 'axios'
import ContactItem from './ContactItem'

class Contacts extends React.Component {
  constructor (props){
    super (props)
    this.state={
      contacts:[]
    }
  }

componentDidMount() {
  axios.get('/contacts').then(
     res => {
       this.setState ({
         // name : res.data[0].name,
         // phone : res.data[0].tel,
         // email : res.data[0].email,
         contacts : res.data
       })
     }
  )
}

  render () {
    return <div ClassName= "contacts-container"  >
      <h1> this is the contact page </h1>

      <div style= {{display:"flex"}} />
      {
        this.state.contacts.map((el,i) =>{
        return <ContactItem item={el}/>


      })
      }


    </div>

      }
}

export default Contacts
