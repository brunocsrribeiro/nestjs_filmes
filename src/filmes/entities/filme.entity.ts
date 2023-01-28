import { Categoria } from '../../categorias/entities/categoria.entity';

import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Filme {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'titulo', type: 'varchar', length: 100 })
  titulo: string;

  @Column({ name: 'sinopse', type: 'text', nullable: true })
  sinopse?: string;

  @Column({ name: 'duracao', type: 'int' })
  duracao: number;

  @Column({ name: 'lancamento', type: 'int' })
  lancamento: number;

  @ManyToMany(() => Categoria, (categoria) => categoria.filmes)
  @JoinTable()
  categorias: Categoria[];
}
