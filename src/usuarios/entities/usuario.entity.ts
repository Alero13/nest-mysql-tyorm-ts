import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    //@Column({primary: true, generated: true})
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column({unique: true, nullable: false })
    email: string;

    @Column({ nullable: false })
    contraseña: string;

    @Column({ default: 'usuario'})
    rol: string;

    @DeleteDateColumn()
    deletedAT: Date;

}
