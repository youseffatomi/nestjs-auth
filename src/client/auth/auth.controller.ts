import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register() {
    return this.authService.Register();
  }

  @Post('/login')
  login() {
    return this.authService.Login();
  }

  @Post('/forgetpassword')
  forgetPassword() {
    return this.authService.ForgetPassword();
  }
}
