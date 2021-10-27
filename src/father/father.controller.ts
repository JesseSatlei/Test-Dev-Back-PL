import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FatherService } from './father.service';
import { CreateFatherDto } from './dto/create-father.dto';
import { UpdateFatherDto } from './dto/update-father.dto';

@Controller('father')
export class FatherController {
  constructor(private readonly fatherService: FatherService) {}

  @Post()
  async create(@Body() createFatherDto: CreateFatherDto) {
    return await this.fatherService.create(createFatherDto);
  }

  @Get()
  async findAll() {
    return await this.fatherService.findAll();
  }

  @Get('/children')
  async findAllFathersAndChildrens() {
    return await this.fatherService.fildAllFathersAndChildrens();
  }

  @Get('/children/:id')
  async findAllChildrens(@Param('id') id: string) {
    return await this.fatherService.findAllChildrens(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.fatherService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFatherDto: UpdateFatherDto) {
    return await this.fatherService.update(id, updateFatherDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.fatherService.remove(id);
  }


}
