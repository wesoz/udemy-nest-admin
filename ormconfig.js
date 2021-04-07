module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 33066,
  username: 'root',
  password: '123456',
  database: 'admin',
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['./src/migrations/*.ts'],
  cli: {
    entitiesDir: './ts/',
    migrationsDir: './src/migrations',
  },
};
