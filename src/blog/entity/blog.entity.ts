import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  
  
  @Entity('blog')
  export class Blog {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    description: string;
  
    @Column()
    body: string;
  
    @Column()
    author: string;

    @Column({type:'jsonb',nullable:true})
    photos:any;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @CreateDateColumn()
    updatedAt: Date;
  
  
  
  }
  