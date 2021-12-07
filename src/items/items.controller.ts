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

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  find(): ItemInterface[] {
    return this.itemsService.find();
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}\nDescription: ${createItemDto.description}\nQuantity: ${createItemDto.quantity}`;
  }

  @Get(':id')
  show(@Param('id') id): string {
    return `Get single item, item ${id}`;
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
