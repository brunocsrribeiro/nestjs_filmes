import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from './entities/filme.entity';

@Injectable()
export class FilmesService {
  constructor(
    @InjectRepository(Filme) private readonly repository: Repository<Filme>,
  ) {}

  create(createFilmeDto: CreateFilmeDto): Promise<Filme> {
    const filme = this.repository.create(createFilmeDto);

    return this.repository.save(filme);
  }

  findAll(): Promise<Filme[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<Filme> {
    return this.repository.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updateFilmeDto: UpdateFilmeDto): Promise<Filme> {
    const filme = await this.repository.preload({
      id: id,
      ...updateFilmeDto,
    });
    if (!filme) {
      throw new NotFoundException(`Filme ${id} not found`);
    }
    return this.repository.save(filme);
  }

  async remove(id: string) {
    const filme = await this.findOne(id);
    return this.repository.remove(filme);
  }
}
