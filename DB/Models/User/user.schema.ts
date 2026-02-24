import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

//class schema 
@Schema({timestamps:true})
export class User {
    @Prop({type:String , required:true})
    name:string 
    @Prop({type :String , unique:true})
    email:string
    @Prop({type: String})
    password:string
}
//schema
export const userSchema = SchemaFactory.createForClass(User)
// user type
export type TUser = User & Document