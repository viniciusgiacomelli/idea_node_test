import { HttpException, Injectable } from "@nestjs/common";
import { AuthResponseDto } from "./domain/entities/auth.response.dto";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { compareSync as bcryptCompareSync } from "bcrypt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
  private jwtExpiration: number;
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.jwtExpiration = this.configService.get("JWT_EXPIRES_IN");
  }
  login(email: string, password: string): AuthResponseDto {
    const user = this.usersService.findByEmail(email);
    if (!user) {
      throw new HttpException("User not found", 404);
    }
    if (!bcryptCompareSync(password, user.password)) {
      throw new HttpException("Invalid credentials", 401);
    }
    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
      expires_in: this.jwtExpiration,
    };
  }
}
