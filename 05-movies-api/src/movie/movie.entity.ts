import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  // @PrimaryGeneratedColumn()
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  score: number;
}
