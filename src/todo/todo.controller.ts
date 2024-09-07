import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { Item_dto } from "./domain/entities/dto/item_dto";
import { TodoService } from "./todo.service";

@Controller("todo")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post()
  create(@Body() item: Item_dto) {
    this.todoService.create(item);
  }
  @Get("/:id")
  findById(@Param("id") id: string) {
    return this.todoService.findById(id);
  }

  @Put("/:id")
  update(@Param("id") id: string, @Body() item: Item_dto) {
    return this.todoService.update(id, item);
  }
}
