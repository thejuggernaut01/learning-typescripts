"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = exports.introduce = exports.printFormat = exports.format = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports.default = addNumbers;
// DEFAULT PARAMETERS
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
// UNION TYPES
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
// VOID FUNCTIONS
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
// PROMISE FUNCTION
// export const fetchData = (url: string): Promise<string> => {
//   return Promise.resolve(`Data from ${url}`);
// };
// REST PARAMETERS
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(" "));
}
exports.introduce = introduce;
// #1 MISCONCEPTION: WHEN ARE TYPES ENFORCED BY TS
function getName(user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "Ayoola", " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "Adewale");
}
exports.getName = getName;
