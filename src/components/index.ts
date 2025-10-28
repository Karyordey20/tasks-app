import type { Request,Response} from "express";

export interface Task{
    title:string;
    description:string;
    completed:boolean;
}
const createTask = (req:Request,res:Response) =>{
   try {
     const Task:Task = req.body
     if(!Task.title || !Task.description){
         return res.status(400).json({message:"Title and Description are required"})
     }
     return res.status(201).json({message:"Task created successfully",task:Task})
   } catch (error:unknown) {
      if(error instanceof Error){
        return res.status(500).json({message:error.message})
      }
   }
   return
}

export {createTask};