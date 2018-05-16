const express = require ('express')
const {MongoClient , ObjectID} = require ('mongodb')
const bodyParser = require ('body-parser')
const assert = require ('assert') // handling errors

const app = express ()
app.use(bodyParser.json())

const mongo_url = "mongodb://localhost:27017"
const dataBase = "contact" //création d'une base de donnée nommer contact

MongoClient.connect (mongo_url, (err,client)=> {
  assert.equal(null,err,"data-base error")
  const db = client.db(dataBase)

//ajouter un  contact à la base de donnée
  app.post ('/contacts',(req,res)=>{
    let new_contact = req.body
    db.collection('friends').insertOne({...new_contact}, (err,data) => {
      if(err) {
        res.send ('can t add the new contact')
      }
      else {
        res.send ('contact added')
      }
    })
  })

// afficher tout les contacts de la base de donné sous format d'un tableau
  app.get('/contacts',(req,res)=>{
    db.collection('friends').find().toArray((err,data)=>{
      res.send(data)
    })
  })

  // afficher un contact de la base de donné selon son ID
app.get('/contact/:id',(req,res)=>{
  const id = ObjectID(req.params.id) //ObjectID pour mongoDB sache quel ID afficher
  db.collection('friends').findOne({_id:id},(err,data)=>{
    if(err) {
      res.send ('not found')
    } else {
      res.send(data)
    }
  })

})

//supprimer un contact
app.delete ('/contact/:id',(req,res)=>{
  const id = ObjectID(req.params.id)
  db.collection('friends').findOneAndDelete({_id:id},(err,data)=>{
    if(err) {
      res.send ('not found')
    } else {
      res.send('contact removed')
    }
  })
})

app.put ('/contact/:id',(req,res)=>{
  const id = ObjectID(req.params.id)
  const updatedInformation = req.body
  db.collection('friends').findOneAndUpdate({_id:id},{$set:{...updatedInformation}},(err,data)=>{
    if(err) {
      res.send ('not found')
    } else {
      res.send('contact updated')
    }
  })
})

})

app.listen (3001,(err) => {
  if(err) {
    console.log('server taye7 ')
  } else {
    console.log('server ye5dem mriguel')
  }
})
