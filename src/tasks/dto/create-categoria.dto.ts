import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriaDto {
  @ApiProperty({
    example: 'Trabajo',
    description: 'Nombre de la categoría',
  })
  nombre: string;
}