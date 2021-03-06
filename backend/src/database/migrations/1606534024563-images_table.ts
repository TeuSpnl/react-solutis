import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class imagesTable1606534024563 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'path',
                    type: 'varchar'
                },
                {
                    name: 'asylum_id',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'ImgFK',
                    columnNames: ['asylum_id'],
                    referencedTableName: 'asylums',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
