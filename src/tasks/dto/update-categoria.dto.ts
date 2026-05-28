import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCategoriaDto } from './create-categoria.dto';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {
  @ApiProperty({
    example: 'Trabajo actualizado',
    description: 'Nombre actualizado de la categoría',
    required: false,
  })
  nombre?: string;
}