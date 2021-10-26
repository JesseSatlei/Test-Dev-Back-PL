import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FatherModule } from './father/father.module';
import { ChildModule } from './child/child.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}', 'src/entity/*.ts', './build/src/entity/*.js'],
      synchronize: (process.env.DB_SYNCHRONIZE === 'true'),
    }),  
    FatherModule, ChildModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
