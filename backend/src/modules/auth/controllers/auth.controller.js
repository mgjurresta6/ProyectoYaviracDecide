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
exports.AuthController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var decorators_1 = require("@auth/decorators");
var AuthController = /** @class */ (function () {
    function AuthController(authService) {
        this.authService = authService;
    }
    AuthController.prototype.login = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.login(payload)];
                    case 1:
                        serviceResponse = _a.sent();
                        return [2 /*return*/, {
                                data: serviceResponse.data,
                                message: 'Correct Access',
                                title: 'Welcome'
                            }];
                }
            });
        });
    };
    AuthController.prototype.changePassword = function (id, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.changePassword(id, payload)];
                    case 1:
                        serviceResponse = _a.sent();
                        return [2 /*return*/, {
                                data: serviceResponse.data,
                                message: 'The password was changed',
                                title: 'Password Changed'
                            }];
                }
            });
        });
    };
    AuthController.prototype.findProfile = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.findProfile(user.id)];
                    case 1:
                        serviceResponse = _a.sent();
                        return [2 /*return*/, {
                                data: serviceResponse.data,
                                message: "profile",
                                title: "Success"
                            }];
                }
            });
        });
    };
    AuthController.prototype.findUserInformation = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.findUserInformation(user.id)];
                    case 1:
                        serviceResponse = _a.sent();
                        return [2 /*return*/, {
                                data: serviceResponse.data,
                                message: 'The user information was updated',
                                title: 'User Information Updated'
                            }];
                }
            });
        });
    };
    AuthController.prototype.updateProfile = function (user, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.updateProfile(user.id, payload)];
                    case 1:
                        serviceResponse = _a.sent();
                        return [2 /*return*/, {
                                data: serviceResponse.data,
                                message: 'The profile was updated',
                                title: 'Profile Updated'
                            }];
                }
            });
        });
    };
    AuthController.prototype.updateUserInformation = function (id, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.updateUserInformation(id, payload)];
                    case 1:
                        serviceResponse = _a.sent();
                        return [2 /*return*/, {
                                data: serviceResponse.data,
                                message: 'The user information was updated',
                                title: 'User Information Updated'
                            }];
                }
            });
        });
    };
    AuthController.prototype.refreshToken = function (user) {
        var serviceResponse = this.authService.refreshToken(user);
        return {
            data: serviceResponse.data,
            message: 'Correct Access',
            title: 'Refresh Token'
        };
    };
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Login' }),
        (0, decorators_1.PublicRoute)(),
        (0, common_1.Post)('login'),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __param(0, (0, common_1.Body)())
    ], AuthController.prototype, "login");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Change Password' }),
        (0, decorators_1.Auth)(),
        (0, common_1.Put)(':id/change-password'),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
        __param(1, (0, common_1.Body)())
    ], AuthController.prototype, "changePassword");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Find Profile' }),
        (0, decorators_1.Auth)(),
        (0, common_1.Get)('profile'),
        (0, common_1.HttpCode)(common_1.HttpStatus.OK),
        __param(0, (0, decorators_1.User)())
    ], AuthController.prototype, "findProfile");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Find User Information' }),
        (0, decorators_1.Auth)(),
        (0, common_1.Get)('user-information'),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __param(0, (0, decorators_1.User)())
    ], AuthController.prototype, "findUserInformation");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Update Profile' }),
        (0, decorators_1.Auth)(),
        (0, common_1.Put)('profile'),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __param(0, (0, decorators_1.User)()),
        __param(1, (0, common_1.Body)())
    ], AuthController.prototype, "updateProfile");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Update User Information' }),
        (0, decorators_1.Auth)(),
        (0, common_1.Put)('user-information'),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __param(0, (0, decorators_1.User)('id', common_1.ParseUUIDPipe)),
        __param(1, (0, common_1.Body)())
    ], AuthController.prototype, "updateUserInformation");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Refresh Token' }),
        (0, decorators_1.Auth)(),
        (0, common_1.Get)('refresh-token'),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __param(0, (0, decorators_1.User)())
    ], AuthController.prototype, "refreshToken");
    AuthController = __decorate([
        (0, swagger_1.ApiTags)('Auth'),
        (0, common_1.Controller)('auth')
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;