import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Father } from 'src/father/entities/father.entity';
import { Repository } from 'typeorm';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { Child } from './entities/child.entity';

@Injectable()
export class ChildService {
  constructor(
    @InjectRepository(Child) 
    private readonly repository: Repository<Child>,
    @InjectRepository(Father) private readonly fatherDto: Repository<Father>
  ) {}

  async create(createChildDto: CreateChildDto): Promise <Child> {
    const fatherId = createChildDto.father_id;
    
    const father = await this.fatherDto.findOne(fatherId);

    if (!father) {
      throw new NotFoundException('Father not found');
    }
    
    let child = this.repository.create(createChildDto);
    child.father = father;

    child = await this.repository.save(child);

    return child;
  }

  async findAll(): Promise<Child[]> {
    return await this.repository.find();
  }

  async findOne(id: string): Promise<Child> {
    return await this.repository.findOne(id);
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
