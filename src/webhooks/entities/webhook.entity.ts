import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Webhook {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    list: string;

}
