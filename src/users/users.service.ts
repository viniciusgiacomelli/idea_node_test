import { Injectable } from "@nestjs/common";
import { UserDto } from "./domain/user.dto";
import { v4 as uuidv4 } from "uuid";
import { hashSync as bcryptHash } from "bcrypt";

@Injectable()
export class UsersService {
  private readonly users: UserDto[] = [
    {
      id: "1",
      name: "John Doe",
      email: "email@gmail.com",
      password: "password",
    },
  ];

  create(userDto: UserDto) {
    userDto.id = uuidv4();
    userDto.password = bcryptHash(userDto.password, 10);
    this.users.push(userDto);
    console.log(this.users);
  }
}
