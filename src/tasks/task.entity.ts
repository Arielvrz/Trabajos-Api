import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Categoria } from './categoria.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column({ nullable: true })
    descripcion: string;

    @Column({ default: false })
    completada: boolean;

    @CreateDateColumn()
    fechaCreacion: Date;

    @ManyToOne(() => User, (user) => user.tareas, { eager: true })
    user: User;

    @ManyToOne(() => Categoria, (categoria) => categoria.tareas, { eager: true })
    categoria: Categoria;
}
