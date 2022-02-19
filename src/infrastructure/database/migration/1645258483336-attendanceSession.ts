import {MigrationInterface, QueryRunner} from "typeorm";

export class attendanceSession1645258483336 implements MigrationInterface {
    name = 'attendanceSession1645258483336'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `attendance` (`id` varchar(36) NOT NULL, `created_by` varchar(255) NOT NULL, `updated_by` varchar(255) NOT NULL, `created_on` datetime NOT NULL, `updated_on` datetime NOT NULL, `student_id` varchar(255) NOT NULL, `standard_id` varchar(255) NOT NULL, `section_id` varchar(255) NOT NULL, `attendance_date` datetime NOT NULL, `attendance_status_id` varchar(255) NOT NULL, `attendance_session_id` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
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
        await queryRunner.query("DROP TABLE `attendance`");
    }

}
