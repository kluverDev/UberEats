import { UpdateRestaurantDto } from './dtos/update-restaurant-dto';
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
  updateRestaurant({id, data}:UpdateRestaurantDto)  {
    return  this.restaurants.update(id, {...data})
  }

}

//.update doesnt check if the entity exists in the db.the first arg in the update fxn is the
//serch query param while the 2nd arg is the new data.