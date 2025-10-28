import mongoose, { Document } from "mongoose";
import { Model,Schema} from "mongoose";

export interface ITask extends Document{
    title:string;
    description:string;
    completed:boolean
    createdAt:Date;
    updatedAt:Date;
}
const TaskSchema:Schema<ITask> =new Schema<ITask>(
{       
    title:{type:String,required:true, toUpperCase:true, trim:true, maxlength:150,minlength:10},
    description:{type:String, required:true,trim:true,maxlength:200,minlength:10},
    completed:{type:Boolean, default:false}
},
{timestamps:true}
)

const TaskModel:Model<ITask> = mongoose.model<ITask>("Task",TaskSchema);

export default TaskModel;