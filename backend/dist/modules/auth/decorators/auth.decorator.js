"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const guards_1 = require("../guards");
const swagger_1 = require("@nestjs/swagger");
function Auth(...roles) {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(guards_1.JwtGuard), (0, swagger_1.ApiBearerAuth)());
}
exports.Auth = Auth;
//# sourceMappingURL=auth.decorator.js.map