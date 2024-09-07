import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthResponseDto } from "./domain/entities/auth.response.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post("login")
  login(
    @Body("email") email: string,
    @Body("password") password: string,
  ): AuthResponseDto {
    return this.authService.login(email, password);
  }
}
