import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAsy1606511460594 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
            name:'asylums',
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
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'opening_hours',
                    type: 'varchar'
                },
                {
                    name: 'telephone',
                    type: 'number'
                },
                {
                    name: 'whatsapp',
                    type: 'number'
                },
                {
                    name: 'address',
                    type: 'string'
                },
                {
                    name: 'necessities',
                    type: 'string'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('asylums');
    }

}
