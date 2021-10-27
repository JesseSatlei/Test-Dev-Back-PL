import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FatherService } from './father.service';
import { CreateFatherDto } from './dto/create-father.dto';
import { UpdateFatherDto } from './dto/update-father.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('father')
export class FatherController {
  constructor(private readonly fatherService: FatherService) {}

  @Post()
  async create(@Body() createFatherDto: CreateFatherDto) {
    return await this.fatherService.create(createFatherDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll() {
    return await this.fatherService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/children')
  async findAllFathersAndChildrens() {
    return await this.fatherService.fildAllFathersAndChildrens();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/children/:id')
  async findAllChildrens(@Param('id') id: string) {
    return await this.fatherService.findAllChildrens(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.fatherService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFatherDto: UpdateFatherDto) {
    return await this.fatherService.update(id, updateFatherDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.fatherService.remove(id);
  }
}
