import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class UpdatePostDto {
  @ApiProperty({ example: null })
  @IsString()
  title: string;

  @ApiProperty({ example: null })
  @IsString()
   description: string;

  @ApiProperty({ required: false, example: null })
  @IsOptional()
  @IsString()
  body: string;


  @ApiProperty({ example: null })
  @IsString()
  author: string;

  @ApiProperty({ example:null })
  @IsOptional()
  photos:any;
}
