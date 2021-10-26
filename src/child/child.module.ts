import { Module } from '@nestjs/common';
import { ChildService } from './child.service';
import { ChildController } from './child.controller';
import { Child } from './entities/child.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Father } from 'src/father/entities/father.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Child, Father])],
  controllers: [ChildController],
  providers: [ChildService]
})
export class ChildModule {}
