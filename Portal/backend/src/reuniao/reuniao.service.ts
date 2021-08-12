import { Repository, UpdateResult, DeleteResult } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Reuniao } from './reuniao.entity'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ReuniaoService {
    constructor(
        @InjectRepository(Reuniao)
        private reuniaoRepository: Repository<Reuniao>
    ) { }

    async create(reuniao: Reuniao): Promise<Reuniao> {
        return await this.reuniaoRepository.save(reuniao)
    }

    async readOne(reuniao: Reuniao): Promise<Reuniao[]> {
        return await this.reuniaoRepository.find(reuniao)
    }

    async readAll(): Promise<Reuniao[]> {
        return await this.reuniaoRepository.find()
    }

    async update(reuniao: Reuniao): Promise<UpdateResult> {

        return await this.reuniaoRepository.update(reuniao.id, reuniao)
    }

    async delete(id): Promise<DeleteResult> {
        return await this.reuniaoRepository.delete(id)
    }

}
