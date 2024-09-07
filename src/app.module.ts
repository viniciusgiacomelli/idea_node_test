import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TaskController } from './task/task.controller';
import { TodoController } from './todo/todo.controller';

@Module({
  imports: [],
  controllers: [AppController, TaskController, TodoController],
  providers: [AppService],
})
export class AppModule {}
