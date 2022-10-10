import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Webhook {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    list: string;

}
