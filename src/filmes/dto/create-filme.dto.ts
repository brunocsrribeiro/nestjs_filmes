import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateFilmeDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  sinopse?: string;

  @IsInt()
  @IsNotEmpty()
  duracao: number;

  @IsInt()
  @IsNotEmpty()
  lancamento: number;
}
