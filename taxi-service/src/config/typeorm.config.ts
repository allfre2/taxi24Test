import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 3010,
  username: 'postgres',
  password: 'taxi24',
  database: 'taxi24',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};
