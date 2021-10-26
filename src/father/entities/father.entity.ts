import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Father {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: 'name', type: 'varchar', length: 50 })
    name: string;
}
