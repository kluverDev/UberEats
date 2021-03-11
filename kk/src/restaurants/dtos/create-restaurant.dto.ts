import { InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entity';

@InputType()
//we are creating our dto from Restaurant and omiting the id.
export class CreateRestaurantDto extends OmitType(Restaurant, ['id']){}
