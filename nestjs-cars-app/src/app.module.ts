import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql'
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground: true,
    debug: process.env.NODE_ENV === 'development' ? true : false,
    autoSchemaFile: true,
  }), CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
