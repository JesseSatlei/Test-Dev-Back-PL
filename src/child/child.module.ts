import { Module } from '@nestjs/common';
import { ChildService } from './child.service';
import { ChildController } from './child.controller';
import { Child } from './entities/child.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Child])],
  controllers: [ChildController],
  providers: [ChildService]
})
export class ChildModule {}
