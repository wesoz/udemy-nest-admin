import { Permission } from '../permission/permission.entity';
import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';

export class SeedPermissions1617746098728 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository('permissions').save(this.getPermissions());

    await getRepository('roles').save(this.getRoles());

    await getRepository('user').save(this.getUsers());
  }

  private getPermissions(): Permission[] {
    return [
      { id: 1, name: 'view_users' },
      { id: 2, name: 'edit_users' },
      { id: 3, name: 'view_roles' },
      { id: 4, name: 'edit_roles' },
      { id: 5, name: 'view_products' },
      { id: 6, name: 'edit_products' },
      { id: 7, name: 'view_orders' },
      { id: 8, name: 'edit_orders' },
    ];
  }

  private getRoles(): any[] {
    return [
      {
        id: 1,
        name: 'Admin',
        permissions: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
        ],
      },
      { id: 2, name: 'Editor', permissions: [{ id: 6 }, { id: 8 }] },
      {
        id: 3,
        name: 'Viewer',
        permissions: [{ id: 1 }, { id: 3 }, { id: 5 }, { id: 7 }],
      },
    ];
  }

  private getUsers(): any[] {
    return [
      {
        id: 1,
        first_name: 'Super',
        last_name: 'User',
        email: 'admin@admin.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 1 },
      },
      {
        id: 2,
        first_name: 'Denese',
        last_name: 'Keatts',
        email: 'denese.keatts@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 1 },
      },
      {
        id: 3,
        first_name: 'Stuart',
        last_name: 'Dargan',
        email: 'stuart.dargan@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 2 },
      },
      {
        id: 4,
        first_name: 'Maxie',
        last_name: 'Landis',
        email: 'maxie.landis@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 2 },
      },
      {
        id: 5,
        first_name: 'Cherri',
        last_name: 'Wambach',
        email: 'cherri.wambach@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 2 },
      },
      {
        id: 6,
        first_name: 'Tinisha',
        last_name: 'Aylesworth',
        email: 'tinisha.aylesworth@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 3 },
      },
      {
        id: 7,
        first_name: 'Madeleine',
        last_name: 'Lossett',
        email: 'madeleine.lossett@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 1 },
      },
      {
        id: 8,
        first_name: 'Tia',
        last_name: 'Haug',
        email: 'tia.haug@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 3 },
      },
      {
        id: 9,
        first_name: 'Myles',
        last_name: 'Hiatt',
        email: 'myles.hiatt@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 3 },
      },
      {
        id: 10,
        first_name: 'Tatyana',
        last_name: 'Wolske',
        email: 'tatyana.wolske@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 3 },
      },
      {
        id: 11,
        first_name: 'Elsa',
        last_name: 'Nagao',
        email: 'elsa.nagao@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 3 },
      },
      {
        id: 12,
        first_name: 'Rashida',
        last_name: 'Chouinard',
        email: 'rashida.chouinard@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 3 },
      },
      {
        id: 13,
        first_name: 'Angele',
        last_name: 'Campoverde',
        email: 'angele.campoverde@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 2 },
      },
      {
        id: 14,
        first_name: 'Adella',
        last_name: 'Caughey',
        email: 'adella.caughey@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 2 },
      },
      {
        id: 15,
        first_name: 'Cherlyn',
        last_name: 'Mcleroy',
        email: 'cherlyn.mcleroy@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 1 },
      },
      {
        id: 16,
        first_name: 'Kristi',
        last_name: 'Holaway',
        email: 'kristi.holaway@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 1 },
      },
      {
        id: 17,
        first_name: 'Corinne',
        last_name: 'Pentecost',
        email: 'corinne.pentecost@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 2 },
      },
      {
        id: 18,
        first_name: 'Robbyn',
        last_name: 'Pilkenton',
        email: 'robbyn.pilkenton@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 2 },
      },
      {
        id: 19,
        first_name: 'Lawanna',
        last_name: 'Dezern',
        email: 'lawanna.dezern@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 2 },
      },
      {
        id: 20,
        first_name: 'Guadalupe',
        last_name: 'Piatt',
        email: 'guadalupe.piatt@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 2 },
      },
      {
        id: 21,
        first_name: 'Princess',
        last_name: 'Marcil',
        email: 'princess.marcil@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 2 },
      },
      {
        id: 22,
        first_name: 'Melania',
        last_name: 'Hochmuth',
        email: 'melania.hochmuth@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 2 },
      },
      {
        id: 23,
        first_name: 'Arie',
        last_name: 'Yearout',
        email: 'arie.yearout@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 3 },
      },
      {
        id: 24,
        first_name: 'Debroah',
        last_name: 'Bartholow',
        email: 'debroah.bartholow@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 3 },
      },
      {
        id: 25,
        first_name: 'Nathalie',
        last_name: 'Shimizu',
        email: 'nathalie.shimizu@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 3 },
      },
      {
        id: 26,
        first_name: 'Shery',
        last_name: 'Smidt',
        email: 'shery.smidt@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 3 },
      },
      {
        id: 27,
        first_name: 'Kip',
        last_name: 'Caiazzo',
        email: 'kip.caiazzo@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 3 },
      },
      {
        id: 28,
        first_name: 'Kerry',
        last_name: 'Gaytan',
        email: 'kerry.gaytan@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 3 },
      },
      {
        id: 29,
        first_name: 'Cammy',
        last_name: 'Suda',
        email: 'cammy.suda@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 3 },
      },
      {
        id: 30,
        first_name: 'Bruna',
        last_name: 'Hodgdon',
        email: 'bruna.hodgdon@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 3 },
      },
      {
        id: 31,
        first_name: 'Beverly',
        last_name: 'Hipps',
        email: 'beverly.hipps@email.com',
        password:
          '$2a$12$NHQLCIaX.IiqKoN3.FKsrOlJ5R1cnm5fjLekXI7kAiXcAyIAWlzpa',
        role: { id: 1 },
      },
    ];
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
