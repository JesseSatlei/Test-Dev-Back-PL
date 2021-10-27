import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { hashSync } from 'bcrypt';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: 'email', type: 'varchar', unique: true })
    email: string;

    @Column({ name: 'password' })
    password: string;

    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10)
    }
}
