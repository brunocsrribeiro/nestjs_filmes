import { Filme } from '../../filmes/entities/filme.entity';

import { Column, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

export class Categoria {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', type: 'varchar', length: 100 })
  nome: string;

  @ManyToMany(() => Filme, (filme) => filme.categorias)
  filmes: Filme[];
}
