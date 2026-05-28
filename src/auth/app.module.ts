import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Task } from '../tasks/task.entity';
import { Categoria } from '../tasks/categoria.entity';
import { UsersModule } from '../users/users.module';
import { TasksModule } from '../tasks/tasks.module';
import { AuthModule } from './auth.module';

require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ?? 'localhost',
      port: Number(process.env.DB_PORT ?? 5432),
      username: process.env.DB_USER ?? 'postgres',
      password: process.env.DB_PASS ?? '123',
      database: process.env.DB_NAME ?? 'apicurso',
      entities: [User, Task, Categoria],
      synchronize: process.env.SYNCHRONIZE !== 'false',
    }),
    UsersModule,
    TasksModule,
    AuthModule,
  ],
})
export class AppModule { }
