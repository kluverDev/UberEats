import { ArgsType, Field, InputType, OmitType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';
import { Restaurant } from '../entities/restaurant.entity';

@InputType()
//we are creating our dto from Restaurant and omiting the id.
export class CreateRestaurantDto extends OmitType(Restaurant, ['id']){}
