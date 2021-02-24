import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import Form from '../models/Form'

export default {

  async index(request:Request, response:Response){
    const formRepository = getRepository(Form)

    const form = await formRepository.find()

    return response.json(form)
  },
  async show(request:Request, response:Response){
    const {id} = request.params

    const formRepository = getRepository(Form)

    const form = await formRepository.findOneOrFail(id)

    return response.json(form)
  },
  async delete(request:Request, response:Response){
    const {id} = request.params

    const formRepository = getRepository(Form)

    const form = await formRepository.delete(id)

    return response.json(form)
  },


  async create(request:Request, response:Response) {
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
      amount
   
     } = request.body
   
     const formRepository = getRepository(Form)
   
     const form = formRepository.create({
       os,
       time_initial,
       time_final,
       date,
       location,
       name_machine,
       implement_machine,
       operator,
       input,
       amount
     })
   
     await formRepository.save(form)
   
     response.status(201).json(form)
  }
}