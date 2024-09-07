import { Body, Controller, Post } from "@nestjs/common";
import { Item_dto } from "./domain/entities/dto/item_dto";
import { TodoService } from "./todo.service";

@Controller("todo")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post()
  create(@Body() item: Item_dto) {
    this.todoService.create(item);
  }
}
