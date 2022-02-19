import {MigrationInterface, QueryRunner} from "typeorm";

export class changeColumn1645253470692 implements MigrationInterface {
    name = 'changeColumn1645253470692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `attendance_status` DROP COLUMN `created_by`");
        await queryRunner.query("ALTER TABLE `attendance_status` DROP COLUMN `updated_by`");
        await queryRunner.query("ALTER TABLE `attendance_status` DROP COLUMN `created_on`");
        await queryRunner.query("ALTER TABLE `attendance_status` DROP COLUMN `updated_on`");
        await queryRunner.query("ALTER TABLE `section` DROP COLUMN `created_by`");
        await queryRunner.query("ALTER TABLE `section` DROP COLUMN `updated_by`");
        await queryRunner.query("ALTER TABLE `section` DROP COLUMN `created_on`");
        await queryRunner.query("ALTER TABLE `section` DROP COLUMN `updated_on`");
        await queryRunner.query("ALTER TABLE `attendance_status` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `attendance_status` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `attendance_status` ADD `id` varchar(255) NOT NULL PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `section` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `section` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `section` ADD `id` varchar(255) NOT NULL PRIMARY KEY");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `section` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `section` ADD `id` varchar(36) NOT NULL");
        await queryRunner.query("ALTER TABLE `section` ADD PRIMARY KEY (`id`)");
        await queryRunner.query("ALTER TABLE `attendance_status` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `attendance_status` ADD `id` varchar(36) NOT NULL");
        await queryRunner.query("ALTER TABLE `attendance_status` ADD PRIMARY KEY (`id`)");
        await queryRunner.query("ALTER TABLE `section` ADD `updated_on` datetime NOT NULL");
        await queryRunner.query("ALTER TABLE `section` ADD `created_on` datetime NOT NULL");
        await queryRunner.query("ALTER TABLE `section` ADD `updated_by` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `section` ADD `created_by` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `attendance_status` ADD `updated_on` datetime NOT NULL");
        await queryRunner.query("ALTER TABLE `attendance_status` ADD `created_on` datetime NOT NULL");
        await queryRunner.query("ALTER TABLE `attendance_status` ADD `updated_by` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `attendance_status` ADD `created_by` varchar(255) NOT NULL");
    }

}
