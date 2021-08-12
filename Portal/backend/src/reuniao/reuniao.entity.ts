import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Reuniao {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  descricao: string

  @Column()
  datainicio: Date

  @Column()
  localreuniao: string

  @Column()
  numeroreuniaoconjunta: string
}
