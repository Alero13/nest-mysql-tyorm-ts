//import { PartialType } from '@nestjs/mapped-types';
//import { CreateGatoDto } from './create-gato.dto';
import { IsInt, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';

/* export class UpdateGatoDto extends PartialType(CreateGatoDto) {} */
export class UpdateGatoDto {
    @IsOptional()
    @IsString()
    @MinLength(3)
    nombre: string;
    
    @IsOptional()
    @IsInt()
    @IsPositive()
    edad: number;

    @IsOptional()
    @IsString()
    raza?: string;
}








