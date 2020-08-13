import { Injectable, NotFoundException } from '@nestjs/common';
import { BlogRepository } from './blog.repository';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class BlogService {
    constructor ( @InjectRepository(BlogRepository)
    private readonly blogRepository: BlogRepository,) {
}

async getAllPost(): Promise<any> {
    return await this.blogRepository.find();
}

async getPostById(id:number):Promise<any>{
    const allpost = await this.blogRepository.findOne({id});
    if(allpost)
    {
        return allpost;
    }
    else {
        throw new NotFoundException("No posts")
    }

}

async addPost(data:any): Promise<any> {

     return this.blogRepository.createPost(data);
            
}

async deletePost(id:number):Promise<any> {
    const post = await this.blogRepository.findOne({ id:id })
    if(post){
    await this.blogRepository.delete(id);
    return{
        sucess:true,
        message: 'Deleted Successfully'
    }
}

    else{
        return{
            sucess:false,
            message: 'Deletion Failed'
        }
    }



}
async updatePost(id:number,data:any): Promise <any> {
    const post = await this.blogRepository.findOne({id:id })
    if(post){
        if(data.title) {
            post.title=data.title
        }
        if(data.description) {
            post.description=data.description
        }
        if(data.body) {
            post.body = data.body
        }
        if(data.author) {
            post.author = data.author
        }
        if(data.photos) {
            post.photos = data.photos
        }
        
        await this.blogRepository.save(post);
        const {...result} = post
        return {
            success:true,
            data: result
        };
    }
    else {
        return {
            sucess:false,
            message: "Updatation failed"
        }
    }
}






}