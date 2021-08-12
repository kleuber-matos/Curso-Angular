import { ReuniaoService } from './reuniao.service';
import { Reuniao } from './reuniao.entity';
export declare class ReuniaoController {
    private reuniaoService;
    constructor(reuniaoService: ReuniaoService);
    readOne(id: any, reuniao: Reuniao): Promise<any>;
    readAll(): Promise<Reuniao[]>;
    create(reuniao: Reuniao): Promise<any>;
    update(id: any, reuniao: Reuniao): Promise<any>;
    delete(id: any): Promise<any>;
}
