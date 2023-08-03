import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type CategoryDocument = HydratedDocument<Category>

@Schema()
export class Category {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    code: string;

    @Prop({ required: false })
    icon: string;

    @Prop({ required: false })
    order: number;
}

export const CategorySchema = SchemaFactory.createForClass(Category);