import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({
    example: true,
    description: 'Estado de completación de la tarea',
    required: false,
  })
  completada?: boolean;
}