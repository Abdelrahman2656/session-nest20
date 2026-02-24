import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserRepository } from "DB/Models/User/user.repository";
import { userModule } from "DB/Models/User/user.models";

@Module({
    imports:[userModule],
    controllers:[AuthController],
    providers:[AuthService, UserRepository]
})
export class AuthModule {

}