import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CategoriasService } from './categorias.service';
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@ApiTags('categorias')
@Controller('categorias')
export class CategoriasController {
    constructor(private readonly categoriasService: CategoriasService) { }

    @Post()
    @ApiOperation({ summary: 'Crear una nueva categoría', description: 'Crea una nueva categoría para clasificar tareas' })
    @ApiResponse({ status: 201, description: 'Categoría creada exitosamente', type: Categoria })
    @ApiResponse({ status: 400, description: 'Datos de entrada inválidos' })
    async create(@Body() data: CreateCategoriaDto): Promise<Categoria> {
        return this.categoriasService.createCategoria(data.nombre);
    }

    @Get()
    @ApiOperation({ summary: 'Obtener todas las categorías', description: 'Retorna una lista completa de todas las categorías' })
    @ApiResponse({ status: 200, description: 'Lista de categorías obtenida exitosamente', type: [Categoria] })
    async findAll(): Promise<Categoria[]> {
        return this.categoriasService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener una categoría por ID', description: 'Obtiene los detalles de una categoría específica' })
    @ApiParam({ name: 'id', description: 'ID único de la categoría', type: 'number', example: 1 })
    @ApiResponse({ status: 200, description: 'Categoría encontrada', type: Categoria })
    @ApiResponse({ status: 404, description: 'Categoría no encontrada' })
    async findById(@Param('id') id: string): Promise<Categoria> {
        return this.categoriasService.findById(+id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar una categoría', description: 'Actualiza los datos de una categoría existente' })
    @ApiParam({ name: 'id', description: 'ID único de la categoría', type: 'number', example: 1 })
    @ApiResponse({ status: 200, description: 'Categoría actualizada exitosamente', type: Categoria })
    @ApiResponse({ status: 404, description: 'Categoría no encontrada' })
    @ApiResponse({ status: 400, description: 'Datos de actualización inválidos' })
    async update(@Param('id') id: string, @Body() data: UpdateCategoriaDto): Promise<Categoria> {
        return this.categoriasService.updateCategoria(+id, data);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar una categoría', description: 'Elimina una categoría del sistema de forma permanente' })
    @ApiParam({ name: 'id', description: 'ID único de la categoría', type: 'number', example: 1 })
    @ApiResponse({ status: 200, description: 'Categoría eliminada exitosamente' })
    @ApiResponse({ status: 404, description: 'Categoría no encontrada' })
    async delete(@Param('id') id: string): Promise<void> {
        return this.categoriasService.deleteCategoria(+id);
    }
}