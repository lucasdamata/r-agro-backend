import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('forms')
export default class Form{
@PrimaryGeneratedColumn('increment')
  id:number;
@Column()
  os:string;
@Column()
  time_initial: string;
@Column()
  time_final: string;
@Column()
  date: string
@Column()
  location: string
@Column()
  name_machine: string
@Column()
  implement_machine:string
@Column()
  operator: string;
@Column()
  input: string
@Column()
  amount: number
}