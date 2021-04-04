import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('permisions')
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
