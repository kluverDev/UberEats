import { Query, Resolver } from '@nestjs/graphql';

@Resolver() //CODING HERE AUTHOMATICALLY GENERATES A GRAPHQL SCHEMA.
export class restaurantResolver {
    @Query((returns) => Boolean)
    isPizzaGood(): Boolean {
      return true;
    }
}
