import {MigrationInterface, QueryRunner} from "typeorm";

export class latest1645278317893 implements MigrationInterface {
    name = 'latest1645278317893'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `section` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `standard` (`id` varchar(36) NOT NULL, `created_by` varchar(255) NOT NULL, `updated_by` varchar(255) NOT NULL, `created_on` datetime NOT NULL, `updated_on` datetime NOT NULL, `name` varchar(255) NOT NULL, `section_id` varchar(255) NOT NULL, `advisor` varchar(255) NULL, `academic_year` varchar(255) NOT NULL, `description` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `language` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `student` (`id` varchar(36) NOT NULL, `created_by` varchar(255) NOT NULL, `updated_by` varchar(255) NOT NULL, `created_on` datetime NOT NULL, `updated_on` datetime NOT NULL, `first_name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, `father_name` varchar(255) NOT NULL, `mother_name` varchar(255) NOT NULL, `father_occupation` varchar(255) NOT NULL, `mother_occupation` varchar(255) NOT NULL, `annual_income` varchar(255) NOT NULL, `email` varchar(255) NULL, `mobile` varchar(255) NOT NULL, `language_id` varchar(255) NOT NULL, `date_of_birth` datetime NOT NULL, `address` varchar(600) NOT NULL, `photo_path` varchar(255) NULL, `standard_id` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `attendance_status` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `attendance` (`id` varchar(36) NOT NULL, `created_by` varchar(255) NOT NULL, `updated_by` varchar(255) NOT NULL, `created_on` datetime NOT NULL, `updated_on` datetime NOT NULL, `student_id` varchar(255) NOT NULL, `standard_id` varchar(255) NOT NULL, `section_id` varchar(255) NOT NULL, `attendance_date` datetime NOT NULL, `attendance_status_id` varchar(255) NOT NULL, `attendance_session_id` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `attendance_session` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `meta_data` (`id` varchar(255) NOT NULL, `code` varchar(255) NOT NULL, `value` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `standard` ADD CONSTRAINT `FK_8c866353b09b7630cfa318126cb` FOREIGN KEY (`section_id`) REFERENCES `section`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `student` ADD CONSTRAINT `FK_18599643ea3483d376a9c615089` FOREIGN KEY (`standard_id`) REFERENCES `standard`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `student` ADD CONSTRAINT `FK_3dc3512befa9f081644e11e5e54` FOREIGN KEY (`language_id`) REFERENCES `language`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `attendance` ADD CONSTRAINT `FK_6200532f3ef99f639a27bdcae7f` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `attendance` ADD CONSTRAINT `FK_804d66d18e0d400a32c7c55e9c4` FOREIGN KEY (`standard_id`) REFERENCES `standard`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `attendance` ADD CONSTRAINT `FK_24ca79eed4c4ef0bc8cfb634b5b` FOREIGN KEY (`section_id`) REFERENCES `section`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `attendance` ADD CONSTRAINT `FK_16c3f90d800259b72fce099bb03` FOREIGN KEY (`attendance_status_id`) REFERENCES `attendance_status`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `attendance` ADD CONSTRAINT `FK_1a413cc76d422d09ced3df35c66` FOREIGN KEY (`attendance_session_id`) REFERENCES `attendance_session`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `attendance` DROP FOREIGN KEY `FK_1a413cc76d422d09ced3df35c66`");
        await queryRunner.query("ALTER TABLE `attendance` DROP FOREIGN KEY `FK_16c3f90d800259b72fce099bb03`");
        await queryRunner.query("ALTER TABLE `attendance` DROP FOREIGN KEY `FK_24ca79eed4c4ef0bc8cfb634b5b`");
        await queryRunner.query("ALTER TABLE `attendance` DROP FOREIGN KEY `FK_804d66d18e0d400a32c7c55e9c4`");
        await queryRunner.query("ALTER TABLE `attendance` DROP FOREIGN KEY `FK_6200532f3ef99f639a27bdcae7f`");
        await queryRunner.query("ALTER TABLE `student` DROP FOREIGN KEY `FK_3dc3512befa9f081644e11e5e54`");
        await queryRunner.query("ALTER TABLE `student` DROP FOREIGN KEY `FK_18599643ea3483d376a9c615089`");
        await queryRunner.query("ALTER TABLE `standard` DROP FOREIGN KEY `FK_8c866353b09b7630cfa318126cb`");
        await queryRunner.query("DROP TABLE `meta_data`");
        await queryRunner.query("DROP TABLE `attendance_session`");
        await queryRunner.query("DROP TABLE `attendance`");
        await queryRunner.query("DROP TABLE `attendance_status`");
        await queryRunner.query("DROP TABLE `student`");
        await queryRunner.query("DROP TABLE `language`");
        await queryRunner.query("DROP TABLE `standard`");
        await queryRunner.query("DROP TABLE `section`");
    }

}
