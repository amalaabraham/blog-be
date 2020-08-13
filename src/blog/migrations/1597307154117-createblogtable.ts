import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createblogtable1597307154117 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        return await queryRunner.createTable(new Table({
          name: 'blog',
          columns: [
            {
              name: 'id',
              type: 'bigint',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'title',
              type: 'varchar',
            },
            {
              name: 'description',
              type: 'varchar',
            },
            {
              name: 'body',
              type:'varchar',
              isNullable: true,
            },
            {
              name: 'author',
              type:'varchar',
              isUnique: true,
              isNullable: true,
            },
            {
              name: 'photos',
              type: 'jsonb',
              isNullable: true,
            },
            {
    
              name: 'createdAt',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP',
              isNullable: false,
            },
            {
    
              name: 'updatedAt',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP',
              isNullable: false,
            },
          ],
        }), true);
      }
    
      public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "blog"`);
      }
    

}
