import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//we are using this file for both typeorm entities and graphql
//this file is now generating out dto,graphql schema and db tables. creating objectypes with same name as
//as input type is not good === errors. we make the input type abstract to remove the errors.

@InputType({isAbstract: true}) //we dont want this to go to the schema
@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field(type => Number)
  id: number;

  @Field(type => String)
  @Column()
  @IsString()
  @Length(5)
  name: string;

  @Field(type => Boolean,  {/* defaultValue: true, */ nullable: true} ) //for our schema. the default value is true
  @Column({default: true}) //if this is not provided, use true as the default for our db
  @IsOptional() //this is for our validator. this value is optional but must be a Boolean WHEN PROVIDED
  @IsBoolean()
  isVegan: boolean;

  @Field(type => String, {defaultValue: 'london'})
  @Column()
  @IsString()
  address: string;

  @Field(type => String)
  @Column()
  @IsString()
  ownersName: string;

  @Field(type => String)
  @Column()
  @IsString()
  categoryName: string;
}
