import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmesModule } from './filmes/filmes.module';
import { CategoriasModule } from './categorias/categorias.module';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [`${__dirname}**/entities/*.entity.{ts,js}`],
      synchronize: true,
    }),
    FilmesModule,
    CategoriasModule,
  ],
})
export class AppModule {}
