import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { Child } from './entities/child.entity';

@Injectable()
export class ChildService {
  constructor(@InjectRepository(Child) private readonly repository: Repository<Child>) {}

  create(createChildDto: CreateChildDto): Promise <Child> {
    const child = this.repository.create(createChildDto);
    return this.repository.save(child);
  }

  findAll(): Promise<Child[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<Child> {
    return this.repository.findOne(id);
  }

  async update(id: string, updateChildDto: UpdateChildDto): Promise<Child> {
    
    const child = await this.repository.findOneOrFail(id);

    if (!child.id) {
      throw new NotFoundException(`Child ${id} not found`);
    }

    await this.repository.update(id, updateChildDto);
    return await this.repository.findOne(id);
  }

  async remove(id: string) {
    const child = await this.findOne(id);
    return this.repository.remove(child);
  }
}
