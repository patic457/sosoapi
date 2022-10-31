
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({
    name: '_Ticket',
    orderBy: {
        updatedAt: "DESC"
    },
})
export class Ticket {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: string;

    @ApiProperty()
    @Column()
    status: string;

    @ApiProperty()
    @Column()
    description: string;

    @ApiProperty()
    @Column()
    problemName: string;

    @ApiProperty()
    @Column()
    problemCategoryName: string;

    @ApiProperty()
    @Column()
    criticalityName: string;

    @ApiProperty()
    @Column()
    teamId: string;

    @ApiProperty()
    @Column()
    channelId: string;

    @ApiProperty()
    @Column()
    dueDate: Date;

    @ApiProperty()
    @Column()
    createdBy: string;

    @ApiProperty()
    @Column()
    updatedBy: string;

    @ApiProperty()
    @CreateDateColumn({ name: 'createdAt' })
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn({ name: 'updatedAt' })
    updatedAt: Date;

}
