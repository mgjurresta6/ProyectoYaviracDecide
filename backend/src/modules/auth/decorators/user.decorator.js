"use strict";
exports.__esModule = true;
exports.User = void 0;
var common_1 = require("@nestjs/common");
exports.User = (0, common_1.createParamDecorator)(function (data, ctx) {
    var request = ctx.switchToHttp().getRequest();
    var user = request.user;
    if (!user)
        throw new common_1.InternalServerErrorException('User no found');
    return data ? user[data] : user;
});
