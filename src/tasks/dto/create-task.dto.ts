import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Implementar autenticación',
    description: 'Título de la tarea',
  })
  titulo: string;

  @ApiProperty({
    example: 'Integrar JWT en la API',
    description: 'Descripción detallada de la tarea',
    required: false,
  })
  descripcion?: string;

  @ApiProperty({
    example: 1,
    description: 'ID del usuario propietario de la tarea',
  })
  userId: number;

  @ApiProperty({
    example: 1,
    description: 'ID de la categoría de la tarea',
  })
  categoriaId: number;
}