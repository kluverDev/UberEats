import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateRestaurantDto } from './create-restaurant.dto';

@InputType()
export class UpdateRestaurantInputTYpe extends PartialType(
  CreateRestaurantDto,
) {} //the partialType enables us create an input type from CreateRestaurantDto and making them optional automatically.

@InputType()
export class UpdateRestaurantDto {
  @Field(type => Number)
  id: number;

  @Field(type => UpdateRestaurantInputTYpe)
  data: UpdateRestaurantInputTYpe;

}
