import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Item_dto } from "./domain/entities/dto/item_dto";

@Injectable()
export class TodoService {
  private items: Item_dto[] = [];

  create(todo_item: Item_dto) {
    this.items.push(todo_item);
    console.log(this.items);
  }

  findById(id: string): Item_dto[] {
    const item = this.items.filter((item) => item.id === id);
    if (item.length > 0) {
      return item;
    } else {
      throw new HttpException("Item not found", HttpStatus.NOT_FOUND);
    }
  }

  update(id: string, todo_item: Item_dto): Item_dto {
    const index = this.items.findIndex((item) => item.id === id);
    if (index >= 0) {
      this.items[index] = todo_item;
      return this.items[index];
    } else {
      throw new HttpException("Item not found", HttpStatus.NOT_FOUND);
    }
  }
}
