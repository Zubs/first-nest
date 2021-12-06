import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('items')
export class ItemsController {
  @Get()
  find(): string {
    return 'Get all items';
  }

  @Post()
  create(): string {
    return 'Store new item';
  }

  @Get()
  show(): string {
    return 'Get single item';
  }

  @Put()
  update(): string {
    return 'Update single item';
  }

  @Delete()
  delete(): string {
    return 'Delete single item';
  }
}
