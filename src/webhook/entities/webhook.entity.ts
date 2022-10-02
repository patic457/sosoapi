

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Webhook {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'longtext'
    })
    list: string;
}