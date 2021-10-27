import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private readonly repository: Repository<User>) {}

  async create(createUserDto: CreateUserDto): Promise <User> {
    const user = this.repository.create(createUserDto);
    return await this.repository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.repository.findOne(id);
  }

  async findOneOrFail(
    conditions: FindConditions<User>,
    options?: FindOneOptions<User>,
  ) {
    try {
      return await this.repository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException('Not found');
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    
    const user = await this.repository.findOneOrFail(id);

    if (!user.id) {
      throw new NotFoundException(`User ${id} not found`);
    }

    updateUserDto.password = await hash(updateUserDto.password, 10);
    
    await this.repository.update(id, updateUserDto);
    return await this.repository.findOne(id);
  }

  async remove(id: string) {
    const user = await this.findOne(id);

    if (!user.id) {
      throw new NotFoundException(`User ${id} not found`);
    }

    return this.repository.remove(user);
  }
}
