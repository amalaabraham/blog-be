import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/db.config';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), BlogModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
