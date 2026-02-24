import { ConflictException, Injectable } from "@nestjs/common";
import { UserRepository } from "DB/Models/User/user.repository";
import { SignUpDTO } from "./dto";
import { hash, sendEmail } from "./common";
import { randomInt } from "crypto";

@Injectable()
export class AuthService {
    constructor(private readonly userRepository:UserRepository){
    }
    //signup
    async signUpService(signupDTO:SignUpDTO){
    //get data
    const { name , email , password} =signupDTO
    //check existence 
    const userExistence = await this.userRepository.findByEmail(email)
    if(userExistence){
    throw new ConflictException("user already exist ")
    }
    //otp
    const otp = randomInt(100000, 999999);
    const userCreated = this.userRepository.create({
        name ,
        email,
        password:hash(password)
    })
    //send email 
    await sendEmail({to :email , from : process.env.USER_EMAIL , subject :"Confirm Email" , html:`<p>your OTP is ${otp}</p>`})
    return userCreated
    }
}