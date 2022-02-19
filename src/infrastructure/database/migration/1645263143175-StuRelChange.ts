import {MigrationInterface, QueryRunner} from "typeorm";

export class StuRelChange1645263143175 implements MigrationInterface {
    name = 'StuRelChange1645263143175'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `student` DROP FOREIGN KEY `FK_6375de2166bcb0a39596bf261de`");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `section_id`");
        await queryRunner.query("ALTER TABLE `standard` ADD `section_id` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `standard` ADD CONSTRAINT `FK_8c866353b09b7630cfa318126cb` FOREIGN KEY (`section_id`) REFERENCES `section`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `standard` DROP FOREIGN KEY `FK_8c866353b09b7630cfa318126cb`");
        await queryRunner.query("ALTER TABLE `standard` DROP COLUMN `section_id`");
        await queryRunner.query("ALTER TABLE `student` ADD `section_id` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `student` ADD CONSTRAINT `FK_6375de2166bcb0a39596bf261de` FOREIGN KEY (`section_id`) REFERENCES `section`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
