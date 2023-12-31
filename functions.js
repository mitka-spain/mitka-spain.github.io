/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/functions.ts":
/*!************************************!*\
  !*** ./src/functions/functions.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports) {



/* global window */
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.answer = void 0;
/**
 * @customfunction
 * @requiresAddress
 */
function answer(question, invocation) {
  return __awaiter(this, void 0, void 0, function () {
    var fullQuestion;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          fullQuestion = question.flat().flat().join("\n");
          return [4 /*yield*/, window.responder.response(fullQuestion).then(function (resp) {
            applyAnswerColor(resp.answer, invocation.address);
            return resp.explanation;
          }).catch(function (e) {
            return Promise.reject(new CustomFunctions.Error(CustomFunctions.ErrorCode.invalidReference, e));
          })];
        case 1:
          return [2 /*return*/, _a.sent()];
      }
    });
  });
}
exports.answer = answer;
function applyAnswerColor(answer, address) {
  return __awaiter(this, void 0, void 0, function () {
    var color;
    var _this = this;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          switch (answer.toLowerCase()) {
            case "yes":
              color = "green";
              break;
            case "no":
              color = "red";
              break;
            case "unknown":
              color = "yellow";
              break;
            default:
              color = "white";
          }
          return [4 /*yield*/, Excel.run(function (context) {
            return __awaiter(_this, void 0, void 0, function () {
              var _a, worksheet, range, functionRange;
              return __generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    _a = address.split("!"), worksheet = _a[0], range = _a[1];
                    functionRange = context.workbook.worksheets.getItem(worksheet).getRange(range);
                    functionRange.format.fill.color = color;
                    return [4 /*yield*/, context.sync()];
                  case 1:
                    _b.sent();
                    return [2 /*return*/];
                }
              });
            });
          })];
        case 1:
          _a.sent();
          return [2 /*return*/];
      }
    });
  });
}
CustomFunctions.associate("ANSWER", answer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/functions/functions.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=functions.js.map