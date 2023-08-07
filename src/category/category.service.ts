import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './schemas/category.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { log } from 'console';
import { CodeGenerator } from 'src/helper/code-generator';

@Injectable()
export class CategoryService {

  code_generator_object:CodeGenerator= new CodeGenerator()

  constructor(@InjectModel(Category.name) private categoryModel: Model<Category>) { }

  async create(createCategoryDto: CreateCategoryDto) {
    let generated_code=""
    while(true){
      generated_code = this.code_generator_object.getCode("CAT")
      let is_code_taken=await this.categoryModel.findOne({code:generated_code})
      if(!is_code_taken){
        break
      }
    }
    createCategoryDto['code']=generated_code
    const createdCategory = new this.categoryModel(createCategoryDto)
    return createdCategory.save();
  }

  findAll() {
    return this.categoryModel.find();
  }

  findOne(code: string) {
    return this.categoryModel.findOne({code:code});
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
