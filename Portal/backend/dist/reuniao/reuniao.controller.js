"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReuniaoController = void 0;
const common_1 = require("@nestjs/common");
const reuniao_service_1 = require("./reuniao.service");
const reuniao_entity_1 = require("./reuniao.entity");
let ReuniaoController = class ReuniaoController {
    constructor(reuniaoService) {
        this.reuniaoService = reuniaoService;
    }
    async readOne(id, reuniao) {
        reuniao.id = Number(id);
        return this.reuniaoService.readOne(reuniao);
    }
    readAll() {
        return this.reuniaoService.readAll();
    }
    async create(reuniao) {
        return this.reuniaoService.create(reuniao);
    }
    async update(id, reuniao) {
        reuniao.id = Number(id);
        return this.reuniaoService.update(reuniao);
    }
    async delete(id) {
        return this.reuniaoService.delete(id);
    }
};
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, reuniao_entity_1.Reuniao]),
    __metadata("design:returntype", Promise)
], ReuniaoController.prototype, "readOne", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReuniaoController.prototype, "readAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reuniao_entity_1.Reuniao]),
    __metadata("design:returntype", Promise)
], ReuniaoController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, reuniao_entity_1.Reuniao]),
    __metadata("design:returntype", Promise)
], ReuniaoController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReuniaoController.prototype, "delete", null);
ReuniaoController = __decorate([
    common_1.Controller('reuniao'),
    __metadata("design:paramtypes", [reuniao_service_1.ReuniaoService])
], ReuniaoController);
exports.ReuniaoController = ReuniaoController;
//# sourceMappingURL=reuniao.controller.js.map