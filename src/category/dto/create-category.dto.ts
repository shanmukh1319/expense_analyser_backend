import { IsString, MinLength, MaxLength, IsOptional, IsNumber, IsBoolean } from '@nestjs/class-validator'
import { Type } from 'class-transformer'

export class CreateCategoryDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    name: string;

    @IsString()
    @MinLength(2)
    @MaxLength(20)
    @IsOptional()
    icon: string;

    @IsNumber()
    @IsOptional()
    order: number;
}
