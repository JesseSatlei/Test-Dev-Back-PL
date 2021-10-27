import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChildService } from './child.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';

@Controller('child')
export class ChildController {
  constructor(private readonly childService: ChildService) {}

  @Post()
  async create(@Body() createChildDto: CreateChildDto) {
    return await this.childService.create(createChildDto);
  }

  @Get()
  async findAll() {
    return await this.childService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.childService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateChildDto: UpdateChildDto) {
    return await this.childService.update(id, updateChildDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.childService.remove(id);
  }
}
