import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { Reuniao } from './reuniao/reuniao.entity'
import { ReuniaoService } from './reuniao/reuniao.service'
import { ReuniaoController } from './reuniao/reuniao.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Reuniao])
  ],
  controllers: [AppController, ReuniaoController],
  providers: [AppService, ReuniaoService],
})
export class AppModule { }
