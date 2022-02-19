import {MigrationInterface, QueryRunner} from "typeorm";

export class metaData1645266570539 implements MigrationInterface {
    name = 'metaData1645266570539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `meta_data` (`id` varchar(255) NOT NULL, `code` varchar(255) NOT NULL, `value` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `meta_data`");
    }

}
