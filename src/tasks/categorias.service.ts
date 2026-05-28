import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriasService {
    constructor(
        @InjectRepository(Categoria)
        private readonly categoriasRepository: Repository<Categoria>,
    ) { }

    async createCategoria(nombre: string): Promise<Categoria> {
        const categoria = this.categoriasRepository.create({ nombre });
        return this.categoriasRepository.save(categoria);
    }

    async findAll(): Promise<Categoria[]> {
        return this.categoriasRepository.find({ relations: ['tareas'] });
    }

    async findById(id: number): Promise<Categoria> {
        const categoria = await this.categoriasRepository.findOne({ where: { id }, relations: ['tareas'] });
        if (!categoria) {
            throw new NotFoundException(`Categoría con ID ${id} no encontrada`);
        }
        return categoria;
    }

    async updateCategoria(id: number, data: Partial<Categoria>): Promise<Categoria> {
        const categoria = await this.findById(id);
        Object.assign(categoria, data);
        return this.categoriasRepository.save(categoria);
    }

    async deleteCategoria(id: number): Promise<void> {
        const result = await this.categoriasRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Categoría con ID ${id} no encontrada`);
        }
    }
}