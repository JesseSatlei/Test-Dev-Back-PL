import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Child {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: 'name', type: 'varchar', length: 50 })
    name: string;

    @Column()
    father_id: number;
}
