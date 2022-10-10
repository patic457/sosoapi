import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pagerduty {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    list: string;

}
