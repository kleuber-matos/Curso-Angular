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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reuniao = void 0;
const typeorm_1 = require("typeorm");
let Reuniao = class Reuniao {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Reuniao.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reuniao.prototype, "descricao", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Reuniao.prototype, "datainicio", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reuniao.prototype, "localreuniao", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reuniao.prototype, "numeroreuniaoconjunta", void 0);
Reuniao = __decorate([
    typeorm_1.Entity()
], Reuniao);
exports.Reuniao = Reuniao;
//# sourceMappingURL=reuniao.entity.js.map