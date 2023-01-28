import { Filme } from '../../filmes/entities/filme.entity';

import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', type: 'varchar', length: 100 })
  nome: string;

  @ManyToMany(() => Filme, (filme) => filme.categorias)
  filmes: Filme[];
}
