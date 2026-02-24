import { IsEmail,  IsNotEmpty,  IsString, IsStrongPassword, MinLength } from 'class-validator';

export class SignUpDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;
  @IsEmail()
  email:string
  @IsStrongPassword()
  password:string
}
