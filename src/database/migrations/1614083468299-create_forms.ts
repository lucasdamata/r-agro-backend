import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createForms1614083468299 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'forms',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'                    
                },
                {
                    name: 'os',
                    type: 'string', 
                },
                {
                    name: 'time_initial',
                    type: 'varchar'
                },
                {
                    name: 'time_final',
                    type: 'varchar'
                },
                {
                    name: 'date',
                    type: 'varchar'
                },
                {
                    name: 'location',
                    type: 'varchar'
                },
                 {
                     name:'name_machine',
                     type: 'varchar'
                 },
                 {
                     name: 'implement_machine',
                     type: 'varchar'
                 },
                 {
                     name: 'operator',
                     type: 'varchar'
                 },
                 {
                     name:'input',
                     type: 'varchar'
                 },
                 {
                     name: 'amount',
                     type: 'integer'
                 }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('forms');
    }

}
