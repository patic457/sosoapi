import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Hook {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type: 'longtext'
    })
    list: string;
}


