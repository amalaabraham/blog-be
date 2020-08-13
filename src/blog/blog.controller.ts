import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { BlogService } from './blog.service';
import { AddPostDto } from './dto/createpostdto.dto';
import { get } from 'http';
import { UpdatePostDto } from './dto/updatepostdto.dto';

@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) {}

@Post('post')
addpost(@Body() addpostdto: AddPostDto){
    return this.blogService.addPost(addpostdto);
}

@Get('/:id')
getpostbyid(@Param('id') id: number){
    return this.blogService.getPostById(id);
}

@Get('fetch/all-posts')
getAllposts(){
    return this.blogService.getAllPost();
}

@Delete('/:id')
deletePost(@Param('id') id:number) {
    return this.blogService.deletePost(id);
}

@Patch('/update-Post/:id')
updatePost(
    @Param('id') id:number,
    @Body() updatepostDto: UpdatePostDto,
     )
    {
        return this.blogService.updatePost(id, updatepostDto);
    }





}
