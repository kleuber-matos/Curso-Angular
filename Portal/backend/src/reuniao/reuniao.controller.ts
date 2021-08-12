import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { ReuniaoService } from './reuniao.service'
import { Reuniao } from './reuniao.entity'

@Controller('reuniao')
export class ReuniaoController {

    constructor(private reuniaoService: ReuniaoService) {
    }

    @Get(':id')
    async readOne(@Param('id') id, @Body() reuniao: Reuniao): Promise<any> {
        reuniao.id = Number(id)
        return this.reuniaoService.readOne(reuniao)
    }

    @Get()
    readAll(): Promise<Reuniao[]> {
        return this.reuniaoService.readAll()
    }

    @Post()
    async create(@Body() reuniao: Reuniao): Promise<any> {
        return this.reuniaoService.create(reuniao)
    }

    @Put(':id')
    async update(@Param('id') id, @Body() reuniao: Reuniao): Promise<any> {
        reuniao.id = Number(id)
        return this.reuniaoService.update(reuniao)
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
        return this.reuniaoService.delete(id)
    }
}
