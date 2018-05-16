import React from 'react'
import {Route} from 'react-router-dom'
import Contacts from './Contact'
import AddContact from './AddContact'
import ModifyContact from './ModifyContact'



 class Routes extends React.Component {
   render () {
     return <div>
     <Route exact path = "/Contacts" component = {Contacts} />
     <Route exact path = "/add_Contact" component = {AddContact} />
     <Route exact path = "/modify_Contact/:id" render={(props) => <ModifyContact id={props}/> } />
     {/*render au lieu de component car modify_Contact prend ID comme props////pour récuperer l'ID il faut le passer en props nommer id*/}
     </div>
   }
 }

 export default Routes
