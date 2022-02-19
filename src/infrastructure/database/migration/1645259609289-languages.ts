import {MigrationInterface, QueryRunner} from "typeorm";

export class languages1645259609289 implements MigrationInterface {
    name = 'languages1645259609289'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `language` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `student` ADD `first_name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `student` ADD `last_name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `student` ADD `father_name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `student` ADD `mother_name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `student` ADD `father_occupation` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `student` ADD `mother_occupation` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `student` ADD `annual_income` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `student` ADD `email` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `student` ADD `mobile` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `student` ADD `language_id` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `student` ADD `date_of_birth` datetime NOT NULL");
        await queryRunner.query("ALTER TABLE `student` ADD `address` varchar(600) NOT NULL");
        await queryRunner.query("ALTER TABLE `student` ADD `photo_path` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `student` ADD CONSTRAINT `FK_3dc3512befa9f081644e11e5e54` FOREIGN KEY (`language_id`) REFERENCES `language`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `student` DROP FOREIGN KEY `FK_3dc3512befa9f081644e11e5e54`");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `photo_path`");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `address`");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `date_of_birth`");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `language_id`");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `mobile`");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `email`");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `annual_income`");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `mother_occupation`");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `father_occupation`");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `mother_name`");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `father_name`");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `last_name`");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `first_name`");
        await queryRunner.query("ALTER TABLE `student` ADD `name` varchar(255) NOT NULL");
        await queryRunner.query("DROP TABLE `language`");
    }

}
