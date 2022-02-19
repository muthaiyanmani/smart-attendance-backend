import {MigrationInterface, QueryRunner} from "typeorm";

export class section1645252781284 implements MigrationInterface {
    name = 'section1645252781284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `section` (`id` varchar(36) NOT NULL, `created_by` varchar(255) NOT NULL, `updated_by` varchar(255) NOT NULL, `created_on` datetime NOT NULL, `updated_on` datetime NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `section`");
    }

}
