import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './modules/user/user.module';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [
    ProductsModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'sample_db',
      autoLoadModels: true,
      logging: false,
      // synchronize: true,
    }),
    UserModule,
    ProfileModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
