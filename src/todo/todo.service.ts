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

  findAll(filters: { id: string; description: string }): Item_dto[] {
    const { id, description } = filters;
    if (id) {
      return this.items.filter((item) => item.id === id);
    } else if (description) {
      return this.items.filter((item) =>
        item.description.includes(description),
      );
    } else {
      return this.items;
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

  delete(id: string): Item_dto[] {
    const index = this.items.findIndex((item) => item.id === id);
    if (index >= 0) {
      this.items.splice(index, 1);
      return this.items;
    } else {
      throw new HttpException("Item not found", HttpStatus.NOT_FOUND);
    }
  }
}
