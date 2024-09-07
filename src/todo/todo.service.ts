import { Injectable } from "@nestjs/common";
import { Item_dto } from "./domain/entities/dto/item_dto";

@Injectable()
export class TodoService {
  private items: Item_dto[] = [];

  create(todo_item: Item_dto) {
    this.items.push(todo_item);
    console.log(this.items);
  }
}
