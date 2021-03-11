import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurants: Repository<Restaurant>,
  ) {}
  getAll(): Promise<Restaurant[]> {
    return this.restaurants.find();
  }
  createRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
      const newRestaurant = this.restaurants.create(createRestaurantDto); //this create a js object
      return this.restaurants.save(newRestaurant); //this save/send the js obj to db
  }

}
