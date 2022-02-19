import {MigrationInterface, QueryRunner} from "typeorm";

export class standardTable1645263495944 implements MigrationInterface {
    name = 'standardTable1645263495944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `standard` ADD `advisor` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `standard` ADD `academic_year` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `standard` DROP COLUMN `academic_year`");
        await queryRunner.query("ALTER TABLE `standard` DROP COLUMN `advisor`");
    }

}
