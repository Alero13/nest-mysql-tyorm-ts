import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGatoDto } from './dto/create-gato.dto';
import { UpdateGatoDto } from './dto/update-gato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Gato } from './entities/gato.entity';
import { Repository } from 'typeorm';
import { Raza } from 'src/razas/entities/raza.entity';

@Injectable()
export class GatosService {

  constructor(
    
    @InjectRepository(Gato)
    private readonly gatoRepository: Repository<Gato>,

    @InjectRepository(Raza)
    private readonly razaRepository: Repository<Raza>

  )
  { };


  async create(createGatoDto: CreateGatoDto) {
    /* return 'This action adds a new gato'; */

    /* const gato = this.gatoRepository.create(createGatoDto); */
    /* return await this.gatoRepository.save(gato) */

    //return await this.gatoRepository.save(createGatoDto)

    //return

    const raza = await this.razaRepository.findOneBy({name: createGatoDto.raza})

    if(!raza) {
      throw new BadRequestException('La Raza no existe')
    }

    return await this.gatoRepository.save({
      ...createGatoDto,
      raza
    })

    
  }

  async findAll() {
    /* return `This action returns all gatos`; */

    return await this.gatoRepository.find()
  }

  async findOne(id: number) {
    /* return `This action returns a #${id} gato`; */

    return await this.gatoRepository.findOneBy({id});
  }

  async update(id: number, updateGatoDto: UpdateGatoDto) {
    /* return `This action updates a #${id} gato`; */

    //return await this.gatoRepository.update(id, updateGatoDto );

    return
  }

  async remove(id: number) {
    /* return `This action removes a #${id} gato`; */

    /* return await this.gatoRepository.softRemove({id}); Requiere la instancia */
    return await this.gatoRepository.softDelete({id}); //Requiere el id
  }
}
