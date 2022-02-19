import {MigrationInterface, QueryRunner} from "typeorm";

export class student1645254964077 implements MigrationInterface {
    name = 'student1645254964077'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `student` (`id` varchar(36) NOT NULL, `created_by` varchar(255) NOT NULL, `updated_by` varchar(255) NOT NULL, `created_on` datetime NOT NULL, `updated_on` datetime NOT NULL, `name` varchar(255) NOT NULL, `standard_id` varchar(255) NOT NULL, `section_id` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `student` ADD CONSTRAINT `FK_18599643ea3483d376a9c615089` FOREIGN KEY (`standard_id`) REFERENCES `standard`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `student` ADD CONSTRAINT `FK_6375de2166bcb0a39596bf261de` FOREIGN KEY (`section_id`) REFERENCES `section`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `student` DROP FOREIGN KEY `FK_6375de2166bcb0a39596bf261de`");
        await queryRunner.query("ALTER TABLE `student` DROP FOREIGN KEY `FK_18599643ea3483d376a9c615089`");
        await queryRunner.query("DROP TABLE `student`");
    }

}
