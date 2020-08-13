import { Module, MiddlewareConsumer, RequestMethod, NestModule } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './entity/blog.entity';
import { BlogRepository } from './blog.repository';


@Module({
  imports:[
    TypeOrmModule.forFeature([Blog,BlogRepository]),
  ],
  controllers: [BlogController],
  providers: [BlogService],
  exports:[BlogService],
})
export class BlogModule  {
  
}
