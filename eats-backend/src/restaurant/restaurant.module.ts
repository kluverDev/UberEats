import { Module } from '@nestjs/common';
import { restaurantResolver } from './restaurant.resolver';

@Module({
  providers: [restaurantResolver],
})
export class RestaurantModule {}
