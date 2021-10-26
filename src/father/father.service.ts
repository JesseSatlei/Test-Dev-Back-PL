import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFatherDto } from './dto/create-father.dto';
import { UpdateFatherDto } from './dto/update-father.dto';
import { Father } from './entities/father.entity';

@Injectable()
export class FatherService {

  constructor(@InjectRepository(Father) private readonly repository: Repository<Father>) {}

  create(createFatherDto: CreateFatherDto): Promise <Father> {
    const father = this.repository.create(createFatherDto);
    return this.repository.save(father);
  }

  findAll(): Promise<Father[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<Father> {
    return this.repository.findOne(id);
  }

  fildAllFathersAndChildrens(): Promise<Father[]> {
    return this.repository.find({ relations: ['child'] });
  }

  findAllChildrens(id: string): Promise<Father> {
    return this.repository.findOne(id, {
      relations: ['child'] 
    });
  }


  async update(id: string, updateFatherDto: UpdateFatherDto): Promise<Father> {
    
    const father = await this.repository.findOneOrFail(id);

    if (!father.id) {
      throw new NotFoundException(`Father ${id} not found`);
    }

    await this.repository.update(id, updateFatherDto);
    return await this.repository.findOne(id);
  }

  async remove(id: string) {
    const father = await this.findOne(id);
    return this.repository.remove(father);
  }
}
