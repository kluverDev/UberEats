import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

//CODING HERE AUTHOMATICALLY GENERATES A GRAPHQL SCHEMA.
@Resolver((of) => Restaurant) //this is a resolver for the restaurant entity
export class restaurantResolver {
  @Query((returns) => [Restaurant])
  myRestaurant(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }
  @Mutation((returns) => Boolean)
  createRestaurant(@Args() createRestaurantDto: CreateRestaurantDto ){
    return true;
  }
 
}
