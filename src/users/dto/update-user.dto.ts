import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    example: 'Juan Pablo Pérez',
    description: 'Nombre actualizado del usuario',
    required: false,
  })
  nombre?: string;

  @ApiProperty({
    example: 'nuevo@example.com',
    description: 'Email actualizado del usuario',
    required: false,
  })
  email?: string;
}