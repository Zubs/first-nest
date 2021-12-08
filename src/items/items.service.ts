import { Injectable } from '@nestjs/common';
import { ItemInterface } from './interfaces/item.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<ItemInterface>) {}

  async find(): Promise<ItemInterface[]> {
    return await this.itemModel.find();
  }

  async show(id: string): Promise<ItemInterface> {
    return await this.itemModel.findById(id);
  }

  async create(item: ItemInterface): Promise<ItemInterface> {
    return await new this.itemModel(item).save();
  }

  async delete(id: string): Promise<ItemInterface> {
    return await this.itemModel.findOneAndDelete({ _id: id });
  }
}
