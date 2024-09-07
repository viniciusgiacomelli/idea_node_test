import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { Item_dto } from './domain/entities/dto/item_dto';
import { TodoService } from "./todo.service";
import { FiltersDto } from "./domain/entities/dto/filters.dto";

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

  @Get()
  findAll(@Query() filters: FiltersDto): Item_dto[] {
    return this.todoService.findAll(filters);
  }

  @Put("/:id")
  update(@Param("id") id: string, @Body() item: Item_dto) {
    return this.todoService.update(id, item);
  }

  @Delete("/:id")
  delete(@Param("id") id: string) {
    return this.todoService.delete(id);
  }
}
