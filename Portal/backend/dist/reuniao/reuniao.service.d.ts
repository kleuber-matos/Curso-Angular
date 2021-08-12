import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Reuniao } from './reuniao.entity';
export declare class ReuniaoService {
    private reuniaoRepository;
    constructor(reuniaoRepository: Repository<Reuniao>);
    create(reuniao: Reuniao): Promise<Reuniao>;
    readOne(reuniao: Reuniao): Promise<Reuniao[]>;
    readAll(): Promise<Reuniao[]>;
    update(reuniao: Reuniao): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
