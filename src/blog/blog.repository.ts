import { Repository, EntityRepository } from "typeorm";
import { Blog } from "./entity/blog.entity";

@EntityRepository(Blog)
export class BlogRepository extends Repository<Blog> {

    async createPost(addpostDto: any):Promise<any>{

        const {title,description,body,author,photos}=addpostDto;
        const blog = new Blog();
        blog.title = title;
        blog.description = description;                           
        blog.body = body;
        blog.author = author;
        blog.photos = photos;
        await this.save(blog);   
        
        return blog;
    }

    async findAll():Promise<any>{

        const query = this.createQueryBuilder('blog');
        return await query.getMany();

    }
}