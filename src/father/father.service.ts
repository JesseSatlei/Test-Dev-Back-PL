import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFatherDto } from './dto/create-father.dto';
import { UpdateFatherDto } from './dto/update-father.dto';
import { Father } from './entities/father.entity';

@Injectable()
export class FatherService {

  constructor(@InjectRepository(Father) private readonly repository: Repository<Father>) {}

  async create(createFatherDto: CreateFatherDto): Promise <Father> {
    const father = this.repository.create(createFatherDto);
    return await this.repository.save(father);
  }

  async findAll(): Promise<Father[]> {
    return await this.repository.find();
  }

  async findOne(id: string): Promise<Father> {
    return await this.repository.findOne(id);
  }

  async fildAllFathersAndChildrens(): Promise<Father[]> {
    return await this.repository.find({ relations: ['child'] });
  }

  async findAllChildrens(id: string): Promise<Father> {
    return await this.repository.findOne(id, {
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
