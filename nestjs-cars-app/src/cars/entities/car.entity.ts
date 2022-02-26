import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'cars'})
@ObjectType()
export class Car {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => String, { description: 'The unique identifier for the car' })
  id: string;

  @Column()
  @Field(() => String, { description: 'The name of the car' })
  name: string;

  @Column()
  @Field(() => Number, { description: 'The daily price of the car to rent' })
  dailyPrice: number;

  @Column()
  @Field(() => Number, { description: 'The monthly price of the car to rent' })
  monthlyPrice: number;

  @Column()
  @Field(() => String, { description: 'The mileage of the car' })
  mileage: string;

  @Column()
  @Field(() => String, { description: 'the fuel type of the car' })
  gas: string;

  @Column()
  @Field(() => String, { description: 'The transmission type of the car' })
  gearType: string;
}
