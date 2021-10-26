import { Father } from "src/father/entities/father.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Child {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: 'name', type: 'varchar', length: 50 })
    name: string;

    @ManyToOne(type => Father, father => father.child, {
        onDelete: "CASCADE"
    })
    father: Father;
}
