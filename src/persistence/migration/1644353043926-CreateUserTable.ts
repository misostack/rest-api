import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1644353043926 implements MigrationInterface {
  name = 'CreateUserTable1644353043926';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`created_at\` datetime NOT NULL, \`updated_at\` datetime NOT NULL, \`email\` varchar(80) NOT NULL, \`login\` varchar(60) NOT NULL, \`password\` varchar(60) NOT NULL, \`first_name\` varchar(60) NOT NULL, \`last_name\` varchar(60) NOT NULL, \`type\` enum ('admin', 'member') NOT NULL, UNIQUE INDEX \`uq_users_email\` (\`email\`), UNIQUE INDEX \`uq_users_login\` (\`login\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX \`uq_users_login\` ON \`users\``);
    await queryRunner.query(`DROP INDEX \`uq_users_email\` ON \`users\``);
    await queryRunner.query(`DROP TABLE \`users\``);
  }
}
