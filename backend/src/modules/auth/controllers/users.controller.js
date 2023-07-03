"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.UsersController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var decorators_1 = require("@auth/decorators");
var UsersController = /** @class */ (function () {
    function UsersController(usersService) {
        this.usersService = usersService;
    }
    UsersController.prototype.create = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.create(payload)];
                    case 1:
                        serviceResponse = _a.sent();
                        return [2 /*return*/, {
                                data: serviceResponse.data,
                                message: 'User created',
                                title: 'Created'
                            }];
                }
            });
        });
    };
    UsersController.prototype.catalogue = function () {
        return __awaiter(this, void 0, void 0, function () {
            var serviceResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.catalogue()];
                    case 1:
                        serviceResponse = _a.sent();
                        return [2 /*return*/, {
                                data: serviceResponse.data,
                                pagination: serviceResponse.pagination,
                                message: "catalogue",
                                title: "Catalogue"
                            }];
                }
            });
        });
    };
    UsersController.prototype.findAll = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.findAll(params)];
                    case 1:
                        serviceResponse = _a.sent();
                        return [2 /*return*/, {
                                data: serviceResponse.data,
                                pagination: serviceResponse.pagination,
                                message: "index",
                                title: 'Success'
                            }];
                }
            });
        });
    };
    UsersController.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.findOne(id)];
                    case 1:
                        serviceResponse = _a.sent();
                        return [2 /*return*/, {
                                data: serviceResponse.data,
                                message: "show ".concat(id),
                                title: "Success"
                            }];
                }
            });
        });
    };
    UsersController.prototype.update = function (id, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.update(id, payload)];
                    case 1:
                        serviceResponse = _a.sent();
                        return [2 /*return*/, {
                                data: serviceResponse.data,
                                message: "User updated ".concat(id),
                                title: "Updated"
                            }];
                }
            });
        });
    };
    UsersController.prototype.reactivate = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.reactivate(id)];
                    case 1:
                        serviceResponse = _a.sent();
                        return [2 /*return*/, {
                                data: serviceResponse.data,
                                message: "User reactivated ".concat(id),
                                title: "Reactivated"
                            }];
                }
            });
        });
    };
    UsersController.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.remove(id)];
                    case 1:
                        serviceResponse = _a.sent();
                        return [2 /*return*/, {
                                data: serviceResponse.data,
                                message: "User deleted ".concat(id),
                                title: "Deleted"
                            }];
                }
            });
        });
    };
    UsersController.prototype.removeAll = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.removeAll(payload)];
                    case 1:
                        serviceResponse = _a.sent();
                        return [2 /*return*/, {
                                data: serviceResponse.data,
                                message: "Users deleted",
                                title: "Deleted"
                            }];
                }
            });
        });
    };
    UsersController.prototype.suspend = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.suspend(id)];
                    case 1:
                        serviceResponse = _a.sent();
                        return [2 /*return*/, {
                                data: serviceResponse.data,
                                message: "User suspended ".concat(id),
                                title: "Suspended"
                            }];
                }
            });
        });
    };
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Create One' }),
        (0, decorators_1.Auth)(),
        (0, common_1.Post)(),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __param(0, (0, common_1.Body)())
    ], UsersController.prototype, "create");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Catalogue' }),
        (0, common_1.Get)('catalogue'),
        (0, common_1.HttpCode)(common_1.HttpStatus.OK)
    ], UsersController.prototype, "catalogue");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Find All' }),
        (0, common_1.Get)(),
        (0, common_1.HttpCode)(common_1.HttpStatus.OK),
        __param(0, (0, common_1.Query)())
    ], UsersController.prototype, "findAll");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Find One' }),
        (0, decorators_1.Auth)(),
        (0, common_1.Get)(':id'),
        (0, common_1.HttpCode)(common_1.HttpStatus.OK),
        __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe))
    ], UsersController.prototype, "findOne");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Update One' }),
        (0, decorators_1.Auth)(),
        (0, common_1.Put)(':id'),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
        __param(1, (0, common_1.Body)())
    ], UsersController.prototype, "update");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Reactivate' }),
        (0, decorators_1.Auth)(),
        (0, common_1.Put)(':id/reactivate'),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe))
    ], UsersController.prototype, "reactivate");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Remove One' }),
        (0, decorators_1.Auth)(),
        (0, common_1.Delete)(':id'),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe))
    ], UsersController.prototype, "remove");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Remove All' }),
        (0, decorators_1.Auth)(),
        (0, common_1.Patch)('remove-all'),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __param(0, (0, common_1.Body)())
    ], UsersController.prototype, "removeAll");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Suspend One' }),
        (0, decorators_1.Auth)(),
        (0, common_1.Put)(':id/suspend'),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe))
    ], UsersController.prototype, "suspend");
    UsersController = __decorate([
        (0, swagger_1.ApiTags)('Users'),
        (0, common_1.Controller)('users')
    ], UsersController);
    return UsersController;
}());
exports.UsersController = UsersController;
