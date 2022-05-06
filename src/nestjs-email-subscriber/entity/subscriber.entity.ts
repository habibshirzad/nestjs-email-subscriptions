
import {Column, PrimaryGeneratedColumn, Entity} from 'typeorm'


@Entity()
export class Subscriber{

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ unique: true })
    public email: string;

    @Column()
    public name: string;

}


