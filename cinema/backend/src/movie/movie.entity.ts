import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  summary: string

  @Column()
  duration: number

  @Column()
  rating: number
}
