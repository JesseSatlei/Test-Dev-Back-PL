import { Child } from "src/child/entities/child.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Father {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: 'name', type: 'varchar', length: 50 })
    name: string;

    @OneToMany(() => Child, child => child.father)
    child: Child;
}
