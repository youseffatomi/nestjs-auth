import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production'),
      }),
    }),
    MongooseModule.forRoot(process.env.mongo),
    ClientModule,
    AdminModule,
  ],
})
export class AppModule {}
