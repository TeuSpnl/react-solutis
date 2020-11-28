import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'
import Image from './image'

@Entity('Asylums')
export default class Asylum {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    longitude: number;
    
    @Column()
    latitude: number;

    @Column()
    opening_hours: string;

    @Column()
    telephone: number;

    @Column()
    whatsapp: number;

    @Column()
    address: string;

    @Column()
    necessities: string;

    @OneToMany(() => Image, image => image.asylum, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'asylum_id'})
    images: Image[];
}