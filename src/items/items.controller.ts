import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { ItemInterface } from './interfaces/item.interface';
import It = jest.It;

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async find(): Promise<ItemInterface[]> {
    return this.itemsService.find();
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<ItemInterface> {
    return this.itemsService.create(createItemDto);
  }

  @Get(':id')
  async show(@Param('id') id): Promise<ItemInterface> {
    return this.itemsService.show(id);
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update single item, item ${id}\nNew name: ${updateItemDto.name}\nNew Description: ${updateItemDto.description}\nNew Quantity: ${updateItemDto.quantity}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete single item, item ${id}`;
  }
}
