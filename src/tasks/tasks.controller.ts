import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@ApiTags('tareas')
@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Post()
    @ApiOperation({ summary: 'Crear una nueva tarea', description: 'Crea una nueva tarea asignada a un usuario y categoría específica' })
    @ApiResponse({ status: 201, description: 'Tarea creada exitosamente', type: Task })
    @ApiResponse({ status: 400, description: 'Datos de entrada inválidos' })
    async create(@Body() body: CreateTaskDto): Promise<Task> {
        return this.tasksService.createTask(body.titulo, body.userId, body.categoriaId, body.descripcion);
    }

    @Get()
    @ApiOperation({ summary: 'Obtener todas las tareas', description: 'Retorna una lista completa de todas las tareas del sistema' })
    @ApiResponse({ status: 200, description: 'Lista de tareas obtenida exitosamente', type: [Task] })
    async findAll(): Promise<Task[]> {
        return this.tasksService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener una tarea por ID', description: 'Obtiene los detalles de una tarea específica' })
    @ApiParam({ name: 'id', description: 'ID único de la tarea', type: 'number', example: 1 })
    @ApiResponse({ status: 200, description: 'Tarea encontrada', type: Task })
    @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
    async findById(@Param('id') id: string): Promise<Task> {
        return this.tasksService.findById(+id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar una tarea', description: 'Actualiza los datos de una tarea existente' })
    @ApiParam({ name: 'id', description: 'ID único de la tarea', type: 'number', example: 1 })
    @ApiResponse({ status: 200, description: 'Tarea actualizada exitosamente', type: Task })
    @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
    @ApiResponse({ status: 400, description: 'Datos de actualización inválidos' })
    async update(@Param('id') id: string, @Body() body: UpdateTaskDto): Promise<Task> {
        return this.tasksService.updateTask(+id, body);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar una tarea', description: 'Elimina una tarea del sistema de forma permanente' })
    @ApiParam({ name: 'id', description: 'ID único de la tarea', type: 'number', example: 1 })
    @ApiResponse({ status: 200, description: 'Tarea eliminada exitosamente' })
    @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
    async delete(@Param('id') id: string): Promise<void> {
        return this.tasksService.deleteTask(+id);
    }
}