import { Module } from '@nestjs/common';
import { GatosModule } from './gatos/gatos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RazasModule } from './razas/razas.module';

@Module({
  imports: [
    /* GatosModule, */
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_crud',
      password: 'usercrud',
      database: 'db_crud',
      /* entities: [], */
      autoLoadEntities: true,
      synchronize: true
    }),
    GatosModule,
    RazasModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
