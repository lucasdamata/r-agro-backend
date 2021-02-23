import express  from 'express'
import {getRepository} from 'typeorm'

import './database/connection'

const app = express()
app.use(express.json())

app.post('/forms', (request, response)=>{

  const {
    
	 os,

   time_initial,
 
   time_final,
 
   date,
 
   location,
 
   name_machine,
 
   implement_machine,
 
   operator,
 
   input,
 
   amoun

  } = request.body
  response.json({message: 'Hello World'})
})

app.listen(3333)