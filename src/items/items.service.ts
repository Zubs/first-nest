import { Injectable } from '@nestjs/common';
import { ItemInterface } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: ItemInterface[] = [];

  find(): ItemInterface[] {
    return this.items;
  }
}
