



import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AnalyticsController } from './analytics/analytics.controller';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   password: '12345678',
    //   username: 'qamar',
    //   entities: [User], // here we have added user enitity in entities array
    //   database: 'postank_db',
    //   synchronize: true,
    //   logging: true,
    // }),
    // UserModule,

  ],
  controllers: [AppController, AnalyticsController],
  providers: [AppService],
})
export class AppModule { }
