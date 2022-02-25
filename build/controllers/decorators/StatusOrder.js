"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusOrder = void 0;
var StatusOrder;
(function (StatusOrder) {
    StatusOrder[StatusOrder["Accept"] = 3] = "Accept";
    StatusOrder[StatusOrder["Prepare"] = 2] = "Prepare";
    StatusOrder[StatusOrder["Ready"] = 1] = "Ready";
    StatusOrder[StatusOrder["Sold"] = 0] = "Sold";
})(StatusOrder = exports.StatusOrder || (exports.StatusOrder = {}));
