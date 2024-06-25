import { Raza } from "src/razas/entities/raza.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne, } from "typeorm";

@Entity()
export class Gato {
    //@PrimaryGeneratedColumn
    @Column({ primary: true, generated: true})
    id: number;

    @Column()
    nombre: string;

    @Column()
    edad: number;

   /*  @Column() */
   /*  raza: string */

    @DeleteDateColumn()
    deletedAt: Date

    @ManyToOne( () => Raza, (raza) => raza.id, {
        
        eager: true //Para traer las razas al hacer un findOne
    }) 
    
    /* raza_id: number */

    raza: Raza
}
