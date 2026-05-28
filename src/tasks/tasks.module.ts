// src/tasks/tasks.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './task.entity';
import { User } from '../users/user.entity';
import { Categoria } from './categoria.entity';
import { UsersModule } from '../users/users.module';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Task, Categoria, User]),
        UsersModule,
    ],
    providers: [TasksService, CategoriasService],
    controllers: [TasksController, CategoriasController],
})
export class TasksModule {}
