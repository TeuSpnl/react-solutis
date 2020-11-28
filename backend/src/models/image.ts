import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Asylum from './asylumTable'

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Asylum, asylum => asylum.images)
    @JoinColumn({ name: 'asylum_id' })
    asylum: Asylum;
}