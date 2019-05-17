/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/amazon-cognito-identity-js/es/AuthenticationDetails.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/amazon-cognito-identity-js/es/AuthenticationDetails.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*!\n * Copyright 2016 Amazon.com,\n * Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Amazon Software License (the \"License\").\n * You may not use this file except in compliance with the\n * License. A copy of the License is located at\n *\n *     http://aws.amazon.com/asl/\n *\n * or in the \"license\" file accompanying this file. This file is\n * distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, express or implied. See the License\n * for the specific language governing permissions and\n * limitations under the License.\n */\n\n/** @class */\nvar AuthenticationDetails = function () {\n  /**\n   * Constructs a new AuthenticationDetails object\n   * @param {object=} data Creation options.\n   * @param {string} data.Username User being authenticated.\n   * @param {string} data.Password Plain-text password to authenticate with.\n   * @param {(AttributeArg[])?} data.ValidationData Application extra metadata.\n   * @param {(AttributeArg[])?} data.AuthParamaters Authentication paramaters for custom auth.\n   */\n  function AuthenticationDetails(data) {\n    _classCallCheck(this, AuthenticationDetails);\n\n    var _ref = data || {},\n        ValidationData = _ref.ValidationData,\n        Username = _ref.Username,\n        Password = _ref.Password,\n        AuthParameters = _ref.AuthParameters;\n\n    this.validationData = ValidationData || {};\n    this.authParameters = AuthParameters || {};\n    this.username = Username;\n    this.password = Password;\n  }\n\n  /**\n   * @returns {string} the record's username\n   */\n\n\n  AuthenticationDetails.prototype.getUsername = function getUsername() {\n    return this.username;\n  };\n\n  /**\n   * @returns {string} the record's password\n   */\n\n\n  AuthenticationDetails.prototype.getPassword = function getPassword() {\n    return this.password;\n  };\n\n  /**\n   * @returns {Array} the record's validationData\n   */\n\n\n  AuthenticationDetails.prototype.getValidationData = function getValidationData() {\n    return this.validationData;\n  };\n\n  /**\n   * @returns {Array} the record's authParameters\n   */\n\n\n  AuthenticationDetails.prototype.getAuthParameters = function getAuthParameters() {\n    return this.authParameters;\n  };\n\n  return AuthenticationDetails;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthenticationDetails);\n\n//# sourceURL=webpack:///./node_modules/amazon-cognito-identity-js/es/AuthenticationDetails.js?");

/***/ }),

/***/ "./node_modules/amazon-cognito-identity-js/es/AuthenticationHelper.js":
/*!****************************************************************************!*\
  !*** ./node_modules/amazon-cognito-identity-js/es/AuthenticationHelper.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buffer/ */ \"./node_modules/buffer/index.js\");\n/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buffer___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto_js_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js/core */ \"./node_modules/crypto-js/core.js\");\n/* harmony import */ var crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var crypto_js_lib_typedarrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js/lib-typedarrays */ \"./node_modules/crypto-js/lib-typedarrays.js\");\n/* harmony import */ var crypto_js_lib_typedarrays__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js_lib_typedarrays__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var crypto_js_sha256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js/sha256 */ \"./node_modules/crypto-js/sha256.js\");\n/* harmony import */ var crypto_js_sha256__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js_sha256__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js/hmac-sha256 */ \"./node_modules/crypto-js/hmac-sha256.js\");\n/* harmony import */ var crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _BigInteger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BigInteger */ \"./node_modules/amazon-cognito-identity-js/es/BigInteger.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*!\n * Copyright 2016 Amazon.com,\n * Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Amazon Software License (the \"License\").\n * You may not use this file except in compliance with the\n * License. A copy of the License is located at\n *\n *     http://aws.amazon.com/asl/\n *\n * or in the \"license\" file accompanying this file. This file is\n * distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, express or implied. See the License\n * for the specific language governing permissions and\n * limitations under the License.\n */\n\n\n\n // necessary for crypto js\n\n\n\nvar randomBytes = function randomBytes(nBytes) {\n  return buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default.a.lib.WordArray.random(nBytes).toString(), 'hex');\n};\n\n\n\nvar initN = 'FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD1' + '29024E088A67CC74020BBEA63B139B22514A08798E3404DD' + 'EF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245' + 'E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7ED' + 'EE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3D' + 'C2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F' + '83655D23DCA3AD961C62F356208552BB9ED529077096966D' + '670C354E4ABC9804F1746C08CA18217C32905E462E36CE3B' + 'E39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9' + 'DE2BCBF6955817183995497CEA956AE515D2261898FA0510' + '15728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64' + 'ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7' + 'ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6B' + 'F12FFA06D98A0864D87602733EC86A64521F2B18177B200C' + 'BBE117577A615D6C770988C0BAD946E208E24FA074E5AB31' + '43DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF';\n\nvar newPasswordRequiredChallengeUserAttributePrefix = 'userAttributes.';\n\n/** @class */\n\nvar AuthenticationHelper = function () {\n  /**\n   * Constructs a new AuthenticationHelper object\n   * @param {string} PoolName Cognito user pool name.\n   */\n  function AuthenticationHelper(PoolName) {\n    _classCallCheck(this, AuthenticationHelper);\n\n    this.N = new _BigInteger__WEBPACK_IMPORTED_MODULE_5__[\"default\"](initN, 16);\n    this.g = new _BigInteger__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('2', 16);\n    this.k = new _BigInteger__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.hexHash('00' + this.N.toString(16) + '0' + this.g.toString(16)), 16);\n\n    this.smallAValue = this.generateRandomSmallA();\n    this.getLargeAValue(function () {});\n\n    this.infoBits = buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from('Caldera Derived Key', 'utf8');\n\n    this.poolName = PoolName;\n  }\n\n  /**\n   * @returns {BigInteger} small A, a random number\n   */\n\n\n  AuthenticationHelper.prototype.getSmallAValue = function getSmallAValue() {\n    return this.smallAValue;\n  };\n\n  /**\n   * @param {nodeCallback<BigInteger>} callback Called with (err, largeAValue)\n   * @returns {void}\n   */\n\n\n  AuthenticationHelper.prototype.getLargeAValue = function getLargeAValue(callback) {\n    var _this = this;\n\n    if (this.largeAValue) {\n      callback(null, this.largeAValue);\n    } else {\n      this.calculateA(this.smallAValue, function (err, largeAValue) {\n        if (err) {\n          callback(err, null);\n        }\n\n        _this.largeAValue = largeAValue;\n        callback(null, _this.largeAValue);\n      });\n    }\n  };\n\n  /**\n   * helper function to generate a random big integer\n   * @returns {BigInteger} a random value.\n   * @private\n   */\n\n\n  AuthenticationHelper.prototype.generateRandomSmallA = function generateRandomSmallA() {\n    var hexRandom = randomBytes(128).toString('hex');\n\n    var randomBigInt = new _BigInteger__WEBPACK_IMPORTED_MODULE_5__[\"default\"](hexRandom, 16);\n    var smallABigInt = randomBigInt.mod(this.N);\n\n    return smallABigInt;\n  };\n\n  /**\n   * helper function to generate a random string\n   * @returns {string} a random value.\n   * @private\n   */\n\n\n  AuthenticationHelper.prototype.generateRandomString = function generateRandomString() {\n    return randomBytes(40).toString('base64');\n  };\n\n  /**\n   * @returns {string} Generated random value included in password hash.\n   */\n\n\n  AuthenticationHelper.prototype.getRandomPassword = function getRandomPassword() {\n    return this.randomPassword;\n  };\n\n  /**\n   * @returns {string} Generated random value included in devices hash.\n   */\n\n\n  AuthenticationHelper.prototype.getSaltDevices = function getSaltDevices() {\n    return this.SaltToHashDevices;\n  };\n\n  /**\n   * @returns {string} Value used to verify devices.\n   */\n\n\n  AuthenticationHelper.prototype.getVerifierDevices = function getVerifierDevices() {\n    return this.verifierDevices;\n  };\n\n  /**\n   * Generate salts and compute verifier.\n   * @param {string} deviceGroupKey Devices to generate verifier for.\n   * @param {string} username User to generate verifier for.\n   * @param {nodeCallback<null>} callback Called with (err, null)\n   * @returns {void}\n   */\n\n\n  AuthenticationHelper.prototype.generateHashDevice = function generateHashDevice(deviceGroupKey, username, callback) {\n    var _this2 = this;\n\n    this.randomPassword = this.generateRandomString();\n    var combinedString = '' + deviceGroupKey + username + ':' + this.randomPassword;\n    var hashedString = this.hash(combinedString);\n\n    var hexRandom = randomBytes(16).toString('hex');\n    this.SaltToHashDevices = this.padHex(new _BigInteger__WEBPACK_IMPORTED_MODULE_5__[\"default\"](hexRandom, 16));\n\n    this.g.modPow(new _BigInteger__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.hexHash(this.SaltToHashDevices + hashedString), 16), this.N, function (err, verifierDevicesNotPadded) {\n      if (err) {\n        callback(err, null);\n      }\n\n      _this2.verifierDevices = _this2.padHex(verifierDevicesNotPadded);\n      callback(null, null);\n    });\n  };\n\n  /**\n   * Calculate the client's public value A = g^a%N\n   * with the generated random number a\n   * @param {BigInteger} a Randomly generated small A.\n   * @param {nodeCallback<BigInteger>} callback Called with (err, largeAValue)\n   * @returns {void}\n   * @private\n   */\n\n\n  AuthenticationHelper.prototype.calculateA = function calculateA(a, callback) {\n    var _this3 = this;\n\n    this.g.modPow(a, this.N, function (err, A) {\n      if (err) {\n        callback(err, null);\n      }\n\n      if (A.mod(_this3.N).equals(_BigInteger__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ZERO)) {\n        callback(new Error('Illegal paramater. A mod N cannot be 0.'), null);\n      }\n\n      callback(null, A);\n    });\n  };\n\n  /**\n   * Calculate the client's value U which is the hash of A and B\n   * @param {BigInteger} A Large A value.\n   * @param {BigInteger} B Server B value.\n   * @returns {BigInteger} Computed U value.\n   * @private\n   */\n\n\n  AuthenticationHelper.prototype.calculateU = function calculateU(A, B) {\n    this.UHexHash = this.hexHash(this.padHex(A) + this.padHex(B));\n    var finalU = new _BigInteger__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.UHexHash, 16);\n\n    return finalU;\n  };\n\n  /**\n   * Calculate a hash from a bitArray\n   * @param {Buffer} buf Value to hash.\n   * @returns {String} Hex-encoded hash.\n   * @private\n   */\n\n\n  AuthenticationHelper.prototype.hash = function hash(buf) {\n    var str = buf instanceof buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"] ? crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default.a.lib.WordArray.create(buf) : buf;\n    var hashHex = crypto_js_sha256__WEBPACK_IMPORTED_MODULE_3___default()(str).toString();\n\n    return new Array(64 - hashHex.length).join('0') + hashHex;\n  };\n\n  /**\n   * Calculate a hash from a hex string\n   * @param {String} hexStr Value to hash.\n   * @returns {String} Hex-encoded hash.\n   * @private\n   */\n\n\n  AuthenticationHelper.prototype.hexHash = function hexHash(hexStr) {\n    return this.hash(buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(hexStr, 'hex'));\n  };\n\n  /**\n   * Standard hkdf algorithm\n   * @param {Buffer} ikm Input key material.\n   * @param {Buffer} salt Salt value.\n   * @returns {Buffer} Strong key material.\n   * @private\n   */\n\n\n  AuthenticationHelper.prototype.computehkdf = function computehkdf(ikm, salt) {\n    var infoBitsWordArray = crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default.a.lib.WordArray.create(buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].concat([this.infoBits, buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(String.fromCharCode(1), 'utf8')]));\n    var ikmWordArray = ikm instanceof buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"] ? crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default.a.lib.WordArray.create(ikm) : ikm;\n    var saltWordArray = salt instanceof buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"] ? crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default.a.lib.WordArray.create(salt) : salt;\n\n    var prk = crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4___default()(ikmWordArray, saltWordArray);\n    var hmac = crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4___default()(infoBitsWordArray, prk);\n    return buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(hmac.toString(), 'hex').slice(0, 16);\n  };\n\n  /**\n   * Calculates the final hkdf based on computed S value, and computed U value and the key\n   * @param {String} username Username.\n   * @param {String} password Password.\n   * @param {BigInteger} serverBValue Server B value.\n   * @param {BigInteger} salt Generated salt.\n   * @param {nodeCallback<Buffer>} callback Called with (err, hkdfValue)\n   * @returns {void}\n   */\n\n\n  AuthenticationHelper.prototype.getPasswordAuthenticationKey = function getPasswordAuthenticationKey(username, password, serverBValue, salt, callback) {\n    var _this4 = this;\n\n    if (serverBValue.mod(this.N).equals(_BigInteger__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ZERO)) {\n      throw new Error('B cannot be zero.');\n    }\n\n    this.UValue = this.calculateU(this.largeAValue, serverBValue);\n\n    if (this.UValue.equals(_BigInteger__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ZERO)) {\n      throw new Error('U cannot be zero.');\n    }\n\n    var usernamePassword = '' + this.poolName + username + ':' + password;\n    var usernamePasswordHash = this.hash(usernamePassword);\n\n    var xValue = new _BigInteger__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.hexHash(this.padHex(salt) + usernamePasswordHash), 16);\n    this.calculateS(xValue, serverBValue, function (err, sValue) {\n      if (err) {\n        callback(err, null);\n      }\n\n      var hkdf = _this4.computehkdf(buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(_this4.padHex(sValue), 'hex'), buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(_this4.padHex(_this4.UValue.toString(16)), 'hex'));\n\n      callback(null, hkdf);\n    });\n  };\n\n  /**\n   * Calculates the S value used in getPasswordAuthenticationKey\n   * @param {BigInteger} xValue Salted password hash value.\n   * @param {BigInteger} serverBValue Server B value.\n   * @param {nodeCallback<string>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  AuthenticationHelper.prototype.calculateS = function calculateS(xValue, serverBValue, callback) {\n    var _this5 = this;\n\n    this.g.modPow(xValue, this.N, function (err, gModPowXN) {\n      if (err) {\n        callback(err, null);\n      }\n\n      var intValue2 = serverBValue.subtract(_this5.k.multiply(gModPowXN));\n      intValue2.modPow(_this5.smallAValue.add(_this5.UValue.multiply(xValue)), _this5.N, function (err2, result) {\n        if (err2) {\n          callback(err2, null);\n        }\n\n        callback(null, result.mod(_this5.N));\n      });\n    });\n  };\n\n  /**\n  * Return constant newPasswordRequiredChallengeUserAttributePrefix\n  * @return {newPasswordRequiredChallengeUserAttributePrefix} constant prefix value\n  */\n\n\n  AuthenticationHelper.prototype.getNewPasswordRequiredChallengeUserAttributePrefix = function getNewPasswordRequiredChallengeUserAttributePrefix() {\n    return newPasswordRequiredChallengeUserAttributePrefix;\n  };\n\n  /**\n   * Converts a BigInteger (or hex string) to hex format padded with zeroes for hashing\n   * @param {BigInteger|String} bigInt Number or string to pad.\n   * @returns {String} Padded hex string.\n   */\n\n\n  AuthenticationHelper.prototype.padHex = function padHex(bigInt) {\n    var hashStr = bigInt.toString(16);\n    if (hashStr.length % 2 === 1) {\n      hashStr = '0' + hashStr;\n    } else if ('89ABCDEFabcdef'.indexOf(hashStr[0]) !== -1) {\n      hashStr = '00' + hashStr;\n    }\n    return hashStr;\n  };\n\n  return AuthenticationHelper;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthenticationHelper);\n\n//# sourceURL=webpack:///./node_modules/amazon-cognito-identity-js/es/AuthenticationHelper.js?");

/***/ }),

/***/ "./node_modules/amazon-cognito-identity-js/es/BigInteger.js":
/*!******************************************************************!*\
  !*** ./node_modules/amazon-cognito-identity-js/es/BigInteger.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// A small implementation of BigInteger based on http://www-cs-students.stanford.edu/~tjw/jsbn/\n//\n// All public methods have been removed except the following:\n//   new BigInteger(a, b) (only radix 2, 4, 8, 16 and 32 supported)\n//   toString (only radix 2, 4, 8, 16 and 32 supported)\n//   negate\n//   abs\n//   compareTo\n//   bitLength\n//   mod\n//   equals\n//   add\n//   subtract\n//   multiply\n//   divide\n//   modPow\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BigInteger);\n\n/*\n * Copyright (c) 2003-2005  Tom Wu\n * All Rights Reserved.\n *\n * Permission is hereby granted, free of charge, to any person obtaining\n * a copy of this software and associated documentation files (the\n * \"Software\"), to deal in the Software without restriction, including\n * without limitation the rights to use, copy, modify, merge, publish,\n * distribute, sublicense, and/or sell copies of the Software, and to\n * permit persons to whom the Software is furnished to do so, subject to\n * the following conditions:\n *\n * The above copyright notice and this permission notice shall be\n * included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS-IS\" AND WITHOUT WARRANTY OF ANY KIND,\n * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY\n * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.\n *\n * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,\n * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER\n * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF\n * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT\n * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.\n *\n * In addition, the following condition applies:\n *\n * All redistributions must retain an intact copy of this copyright notice\n * and disclaimer.\n */\n\n// (public) Constructor\nfunction BigInteger(a, b) {\n  if (a != null) this.fromString(a, b);\n}\n\n// return new, unset BigInteger\nfunction nbi() {\n  return new BigInteger(null);\n}\n\n// Bits per digit\nvar dbits;\n\n// JavaScript engine analysis\nvar canary = 0xdeadbeefcafe;\nvar j_lm = (canary & 0xffffff) == 0xefcafe;\n\n// am: Compute w_j += (x*this_i), propagate carries,\n// c is initial carry, returns final carry.\n// c < 3*dvalue, x < 2*dvalue, this_i < dvalue\n// We need to select the fastest one that works in this environment.\n\n// am1: use a single mult and divide to get the high bits,\n// max digit bits should be 26 because\n// max internal value = 2*dvalue^2-2*dvalue (< 2^53)\nfunction am1(i, x, w, j, c, n) {\n  while (--n >= 0) {\n    var v = x * this[i++] + w[j] + c;\n    c = Math.floor(v / 0x4000000);\n    w[j++] = v & 0x3ffffff;\n  }\n  return c;\n}\n// am2 avoids a big mult-and-extract completely.\n// Max digit bits should be <= 30 because we do bitwise ops\n// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)\nfunction am2(i, x, w, j, c, n) {\n  var xl = x & 0x7fff,\n      xh = x >> 15;\n  while (--n >= 0) {\n    var l = this[i] & 0x7fff;\n    var h = this[i++] >> 15;\n    var m = xh * l + h * xl;\n    l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);\n    c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);\n    w[j++] = l & 0x3fffffff;\n  }\n  return c;\n}\n// Alternately, set max digit bits to 28 since some\n// browsers slow down when dealing with 32-bit numbers.\nfunction am3(i, x, w, j, c, n) {\n  var xl = x & 0x3fff,\n      xh = x >> 14;\n  while (--n >= 0) {\n    var l = this[i] & 0x3fff;\n    var h = this[i++] >> 14;\n    var m = xh * l + h * xl;\n    l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;\n    c = (l >> 28) + (m >> 14) + xh * h;\n    w[j++] = l & 0xfffffff;\n  }\n  return c;\n}\nvar inBrowser = typeof navigator !== \"undefined\";\nif (inBrowser && j_lm && navigator.appName == \"Microsoft Internet Explorer\") {\n  BigInteger.prototype.am = am2;\n  dbits = 30;\n} else if (inBrowser && j_lm && navigator.appName != \"Netscape\") {\n  BigInteger.prototype.am = am1;\n  dbits = 26;\n} else {\n  // Mozilla/Netscape seems to prefer am3\n  BigInteger.prototype.am = am3;\n  dbits = 28;\n}\n\nBigInteger.prototype.DB = dbits;\nBigInteger.prototype.DM = (1 << dbits) - 1;\nBigInteger.prototype.DV = 1 << dbits;\n\nvar BI_FP = 52;\nBigInteger.prototype.FV = Math.pow(2, BI_FP);\nBigInteger.prototype.F1 = BI_FP - dbits;\nBigInteger.prototype.F2 = 2 * dbits - BI_FP;\n\n// Digit conversions\nvar BI_RM = \"0123456789abcdefghijklmnopqrstuvwxyz\";\nvar BI_RC = new Array();\nvar rr, vv;\nrr = \"0\".charCodeAt(0);\nfor (vv = 0; vv <= 9; ++vv) {\n  BI_RC[rr++] = vv;\n}rr = \"a\".charCodeAt(0);\nfor (vv = 10; vv < 36; ++vv) {\n  BI_RC[rr++] = vv;\n}rr = \"A\".charCodeAt(0);\nfor (vv = 10; vv < 36; ++vv) {\n  BI_RC[rr++] = vv;\n}function int2char(n) {\n  return BI_RM.charAt(n);\n}\nfunction intAt(s, i) {\n  var c = BI_RC[s.charCodeAt(i)];\n  return c == null ? -1 : c;\n}\n\n// (protected) copy this to r\nfunction bnpCopyTo(r) {\n  for (var i = this.t - 1; i >= 0; --i) {\n    r[i] = this[i];\n  }r.t = this.t;\n  r.s = this.s;\n}\n\n// (protected) set from integer value x, -DV <= x < DV\nfunction bnpFromInt(x) {\n  this.t = 1;\n  this.s = x < 0 ? -1 : 0;\n  if (x > 0) this[0] = x;else if (x < -1) this[0] = x + this.DV;else this.t = 0;\n}\n\n// return bigint initialized to value\nfunction nbv(i) {\n  var r = nbi();\n\n  r.fromInt(i);\n\n  return r;\n}\n\n// (protected) set from string and radix\nfunction bnpFromString(s, b) {\n  var k;\n  if (b == 16) k = 4;else if (b == 8) k = 3;else if (b == 2) k = 1;else if (b == 32) k = 5;else if (b == 4) k = 2;else throw new Error(\"Only radix 2, 4, 8, 16, 32 are supported\");\n  this.t = 0;\n  this.s = 0;\n  var i = s.length,\n      mi = false,\n      sh = 0;\n  while (--i >= 0) {\n    var x = intAt(s, i);\n    if (x < 0) {\n      if (s.charAt(i) == \"-\") mi = true;\n      continue;\n    }\n    mi = false;\n    if (sh == 0) this[this.t++] = x;else if (sh + k > this.DB) {\n      this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;\n      this[this.t++] = x >> this.DB - sh;\n    } else this[this.t - 1] |= x << sh;\n    sh += k;\n    if (sh >= this.DB) sh -= this.DB;\n  }\n  this.clamp();\n  if (mi) BigInteger.ZERO.subTo(this, this);\n}\n\n// (protected) clamp off excess high words\nfunction bnpClamp() {\n  var c = this.s & this.DM;\n  while (this.t > 0 && this[this.t - 1] == c) {\n    --this.t;\n  }\n}\n\n// (public) return string representation in given radix\nfunction bnToString(b) {\n  if (this.s < 0) return \"-\" + this.negate().toString();\n  var k;\n  if (b == 16) k = 4;else if (b == 8) k = 3;else if (b == 2) k = 1;else if (b == 32) k = 5;else if (b == 4) k = 2;else throw new Error(\"Only radix 2, 4, 8, 16, 32 are supported\");\n  var km = (1 << k) - 1,\n      d,\n      m = false,\n      r = \"\",\n      i = this.t;\n  var p = this.DB - i * this.DB % k;\n  if (i-- > 0) {\n    if (p < this.DB && (d = this[i] >> p) > 0) {\n      m = true;\n      r = int2char(d);\n    }\n    while (i >= 0) {\n      if (p < k) {\n        d = (this[i] & (1 << p) - 1) << k - p;\n        d |= this[--i] >> (p += this.DB - k);\n      } else {\n        d = this[i] >> (p -= k) & km;\n        if (p <= 0) {\n          p += this.DB;\n          --i;\n        }\n      }\n      if (d > 0) m = true;\n      if (m) r += int2char(d);\n    }\n  }\n  return m ? r : \"0\";\n}\n\n// (public) -this\nfunction bnNegate() {\n  var r = nbi();\n\n  BigInteger.ZERO.subTo(this, r);\n\n  return r;\n}\n\n// (public) |this|\nfunction bnAbs() {\n  return this.s < 0 ? this.negate() : this;\n}\n\n// (public) return + if this > a, - if this < a, 0 if equal\nfunction bnCompareTo(a) {\n  var r = this.s - a.s;\n  if (r != 0) return r;\n  var i = this.t;\n  r = i - a.t;\n  if (r != 0) return this.s < 0 ? -r : r;\n  while (--i >= 0) {\n    if ((r = this[i] - a[i]) != 0) return r;\n  }return 0;\n}\n\n// returns bit length of the integer x\nfunction nbits(x) {\n  var r = 1,\n      t;\n  if ((t = x >>> 16) != 0) {\n    x = t;\n    r += 16;\n  }\n  if ((t = x >> 8) != 0) {\n    x = t;\n    r += 8;\n  }\n  if ((t = x >> 4) != 0) {\n    x = t;\n    r += 4;\n  }\n  if ((t = x >> 2) != 0) {\n    x = t;\n    r += 2;\n  }\n  if ((t = x >> 1) != 0) {\n    x = t;\n    r += 1;\n  }\n  return r;\n}\n\n// (public) return the number of bits in \"this\"\nfunction bnBitLength() {\n  if (this.t <= 0) return 0;\n  return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);\n}\n\n// (protected) r = this << n*DB\nfunction bnpDLShiftTo(n, r) {\n  var i;\n  for (i = this.t - 1; i >= 0; --i) {\n    r[i + n] = this[i];\n  }for (i = n - 1; i >= 0; --i) {\n    r[i] = 0;\n  }r.t = this.t + n;\n  r.s = this.s;\n}\n\n// (protected) r = this >> n*DB\nfunction bnpDRShiftTo(n, r) {\n  for (var i = n; i < this.t; ++i) {\n    r[i - n] = this[i];\n  }r.t = Math.max(this.t - n, 0);\n  r.s = this.s;\n}\n\n// (protected) r = this << n\nfunction bnpLShiftTo(n, r) {\n  var bs = n % this.DB;\n  var cbs = this.DB - bs;\n  var bm = (1 << cbs) - 1;\n  var ds = Math.floor(n / this.DB),\n      c = this.s << bs & this.DM,\n      i;\n  for (i = this.t - 1; i >= 0; --i) {\n    r[i + ds + 1] = this[i] >> cbs | c;\n    c = (this[i] & bm) << bs;\n  }\n  for (i = ds - 1; i >= 0; --i) {\n    r[i] = 0;\n  }r[ds] = c;\n  r.t = this.t + ds + 1;\n  r.s = this.s;\n  r.clamp();\n}\n\n// (protected) r = this >> n\nfunction bnpRShiftTo(n, r) {\n  r.s = this.s;\n  var ds = Math.floor(n / this.DB);\n  if (ds >= this.t) {\n    r.t = 0;\n    return;\n  }\n  var bs = n % this.DB;\n  var cbs = this.DB - bs;\n  var bm = (1 << bs) - 1;\n  r[0] = this[ds] >> bs;\n  for (var i = ds + 1; i < this.t; ++i) {\n    r[i - ds - 1] |= (this[i] & bm) << cbs;\n    r[i - ds] = this[i] >> bs;\n  }\n  if (bs > 0) r[this.t - ds - 1] |= (this.s & bm) << cbs;\n  r.t = this.t - ds;\n  r.clamp();\n}\n\n// (protected) r = this - a\nfunction bnpSubTo(a, r) {\n  var i = 0,\n      c = 0,\n      m = Math.min(a.t, this.t);\n  while (i < m) {\n    c += this[i] - a[i];\n    r[i++] = c & this.DM;\n    c >>= this.DB;\n  }\n  if (a.t < this.t) {\n    c -= a.s;\n    while (i < this.t) {\n      c += this[i];\n      r[i++] = c & this.DM;\n      c >>= this.DB;\n    }\n    c += this.s;\n  } else {\n    c += this.s;\n    while (i < a.t) {\n      c -= a[i];\n      r[i++] = c & this.DM;\n      c >>= this.DB;\n    }\n    c -= a.s;\n  }\n  r.s = c < 0 ? -1 : 0;\n  if (c < -1) r[i++] = this.DV + c;else if (c > 0) r[i++] = c;\n  r.t = i;\n  r.clamp();\n}\n\n// (protected) r = this * a, r != this,a (HAC 14.12)\n// \"this\" should be the larger one if appropriate.\nfunction bnpMultiplyTo(a, r) {\n  var x = this.abs(),\n      y = a.abs();\n  var i = x.t;\n  r.t = i + y.t;\n  while (--i >= 0) {\n    r[i] = 0;\n  }for (i = 0; i < y.t; ++i) {\n    r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);\n  }r.s = 0;\n  r.clamp();\n  if (this.s != a.s) BigInteger.ZERO.subTo(r, r);\n}\n\n// (protected) r = this^2, r != this (HAC 14.16)\nfunction bnpSquareTo(r) {\n  var x = this.abs();\n  var i = r.t = 2 * x.t;\n  while (--i >= 0) {\n    r[i] = 0;\n  }for (i = 0; i < x.t - 1; ++i) {\n    var c = x.am(i, x[i], r, 2 * i, 0, 1);\n    if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {\n      r[i + x.t] -= x.DV;\n      r[i + x.t + 1] = 1;\n    }\n  }\n  if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);\n  r.s = 0;\n  r.clamp();\n}\n\n// (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)\n// r != q, this != m.  q or r may be null.\nfunction bnpDivRemTo(m, q, r) {\n  var pm = m.abs();\n  if (pm.t <= 0) return;\n  var pt = this.abs();\n  if (pt.t < pm.t) {\n    if (q != null) q.fromInt(0);\n    if (r != null) this.copyTo(r);\n    return;\n  }\n  if (r == null) r = nbi();\n  var y = nbi(),\n      ts = this.s,\n      ms = m.s;\n  var nsh = this.DB - nbits(pm[pm.t - 1]);\n  // normalize modulus\n  if (nsh > 0) {\n    pm.lShiftTo(nsh, y);\n    pt.lShiftTo(nsh, r);\n  } else {\n    pm.copyTo(y);\n    pt.copyTo(r);\n  }\n  var ys = y.t;\n  var y0 = y[ys - 1];\n  if (y0 == 0) return;\n  var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);\n  var d1 = this.FV / yt,\n      d2 = (1 << this.F1) / yt,\n      e = 1 << this.F2;\n  var i = r.t,\n      j = i - ys,\n      t = q == null ? nbi() : q;\n  y.dlShiftTo(j, t);\n  if (r.compareTo(t) >= 0) {\n    r[r.t++] = 1;\n    r.subTo(t, r);\n  }\n  BigInteger.ONE.dlShiftTo(ys, t);\n  t.subTo(y, y);\n  // \"negative\" y so we can replace sub with am later\n  while (y.t < ys) {\n    y[y.t++] = 0;\n  }while (--j >= 0) {\n    // Estimate quotient digit\n    var qd = r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);\n    if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {\n      // Try it out\n      y.dlShiftTo(j, t);\n      r.subTo(t, r);\n      while (r[i] < --qd) {\n        r.subTo(t, r);\n      }\n    }\n  }\n  if (q != null) {\n    r.drShiftTo(ys, q);\n    if (ts != ms) BigInteger.ZERO.subTo(q, q);\n  }\n  r.t = ys;\n  r.clamp();\n  if (nsh > 0) r.rShiftTo(nsh, r);\n  // Denormalize remainder\n  if (ts < 0) BigInteger.ZERO.subTo(r, r);\n}\n\n// (public) this mod a\nfunction bnMod(a) {\n  var r = nbi();\n  this.abs().divRemTo(a, null, r);\n  if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r);\n  return r;\n}\n\n// (protected) return \"-1/this % 2^DB\"; useful for Mont. reduction\n// justification:\n//         xy == 1 (mod m)\n//         xy =  1+km\n//   xy(2-xy) = (1+km)(1-km)\n// x[y(2-xy)] = 1-k^2m^2\n// x[y(2-xy)] == 1 (mod m^2)\n// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2\n// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.\n// JS multiply \"overflows\" differently from C/C++, so care is needed here.\nfunction bnpInvDigit() {\n  if (this.t < 1) return 0;\n  var x = this[0];\n  if ((x & 1) == 0) return 0;\n  var y = x & 3;\n  // y == 1/x mod 2^2\n  y = y * (2 - (x & 0xf) * y) & 0xf;\n  // y == 1/x mod 2^4\n  y = y * (2 - (x & 0xff) * y) & 0xff;\n  // y == 1/x mod 2^8\n  y = y * (2 - ((x & 0xffff) * y & 0xffff)) & 0xffff;\n  // y == 1/x mod 2^16\n  // last step - calculate inverse mod DV directly;\n  // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints\n  y = y * (2 - x * y % this.DV) % this.DV;\n  // y == 1/x mod 2^dbits\n  // we really want the negative inverse, and -DV < y < DV\n  return y > 0 ? this.DV - y : -y;\n}\n\nfunction bnEquals(a) {\n  return this.compareTo(a) == 0;\n}\n\n// (protected) r = this + a\nfunction bnpAddTo(a, r) {\n  var i = 0,\n      c = 0,\n      m = Math.min(a.t, this.t);\n  while (i < m) {\n    c += this[i] + a[i];\n    r[i++] = c & this.DM;\n    c >>= this.DB;\n  }\n  if (a.t < this.t) {\n    c += a.s;\n    while (i < this.t) {\n      c += this[i];\n      r[i++] = c & this.DM;\n      c >>= this.DB;\n    }\n    c += this.s;\n  } else {\n    c += this.s;\n    while (i < a.t) {\n      c += a[i];\n      r[i++] = c & this.DM;\n      c >>= this.DB;\n    }\n    c += a.s;\n  }\n  r.s = c < 0 ? -1 : 0;\n  if (c > 0) r[i++] = c;else if (c < -1) r[i++] = this.DV + c;\n  r.t = i;\n  r.clamp();\n}\n\n// (public) this + a\nfunction bnAdd(a) {\n  var r = nbi();\n\n  this.addTo(a, r);\n\n  return r;\n}\n\n// (public) this - a\nfunction bnSubtract(a) {\n  var r = nbi();\n\n  this.subTo(a, r);\n\n  return r;\n}\n\n// (public) this * a\nfunction bnMultiply(a) {\n  var r = nbi();\n\n  this.multiplyTo(a, r);\n\n  return r;\n}\n\n// (public) this / a\nfunction bnDivide(a) {\n  var r = nbi();\n\n  this.divRemTo(a, r, null);\n\n  return r;\n}\n\n// Montgomery reduction\nfunction Montgomery(m) {\n  this.m = m;\n  this.mp = m.invDigit();\n  this.mpl = this.mp & 0x7fff;\n  this.mph = this.mp >> 15;\n  this.um = (1 << m.DB - 15) - 1;\n  this.mt2 = 2 * m.t;\n}\n\n// xR mod m\nfunction montConvert(x) {\n  var r = nbi();\n  x.abs().dlShiftTo(this.m.t, r);\n  r.divRemTo(this.m, null, r);\n  if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r);\n  return r;\n}\n\n// x/R mod m\nfunction montRevert(x) {\n  var r = nbi();\n  x.copyTo(r);\n  this.reduce(r);\n  return r;\n}\n\n// x = x/R mod m (HAC 14.32)\nfunction montReduce(x) {\n  while (x.t <= this.mt2) {\n    // pad x so am has enough room later\n    x[x.t++] = 0;\n  }for (var i = 0; i < this.m.t; ++i) {\n    // faster way of calculating u0 = x[i]*mp mod DV\n    var j = x[i] & 0x7fff;\n    var u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM;\n    // use am to combine the multiply-shift-add into one call\n    j = i + this.m.t;\n    x[j] += this.m.am(0, u0, x, i, 0, this.m.t);\n    // propagate carry\n    while (x[j] >= x.DV) {\n      x[j] -= x.DV;\n      x[++j]++;\n    }\n  }\n  x.clamp();\n  x.drShiftTo(this.m.t, x);\n  if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);\n}\n\n// r = \"x^2/R mod m\"; x != r\nfunction montSqrTo(x, r) {\n  x.squareTo(r);\n\n  this.reduce(r);\n}\n\n// r = \"xy/R mod m\"; x,y != r\nfunction montMulTo(x, y, r) {\n  x.multiplyTo(y, r);\n\n  this.reduce(r);\n}\n\nMontgomery.prototype.convert = montConvert;\nMontgomery.prototype.revert = montRevert;\nMontgomery.prototype.reduce = montReduce;\nMontgomery.prototype.mulTo = montMulTo;\nMontgomery.prototype.sqrTo = montSqrTo;\n\n// (public) this^e % m (HAC 14.85)\nfunction bnModPow(e, m, callback) {\n  var i = e.bitLength(),\n      k,\n      r = nbv(1),\n      z = new Montgomery(m);\n  if (i <= 0) return r;else if (i < 18) k = 1;else if (i < 48) k = 3;else if (i < 144) k = 4;else if (i < 768) k = 5;else k = 6;\n\n  // precomputation\n  var g = new Array(),\n      n = 3,\n      k1 = k - 1,\n      km = (1 << k) - 1;\n  g[1] = z.convert(this);\n  if (k > 1) {\n    var g2 = nbi();\n    z.sqrTo(g[1], g2);\n    while (n <= km) {\n      g[n] = nbi();\n      z.mulTo(g2, g[n - 2], g[n]);\n      n += 2;\n    }\n  }\n\n  var j = e.t - 1,\n      w,\n      is1 = true,\n      r2 = nbi(),\n      t;\n  i = nbits(e[j]) - 1;\n  while (j >= 0) {\n    if (i >= k1) w = e[j] >> i - k1 & km;else {\n      w = (e[j] & (1 << i + 1) - 1) << k1 - i;\n      if (j > 0) w |= e[j - 1] >> this.DB + i - k1;\n    }\n\n    n = k;\n    while ((w & 1) == 0) {\n      w >>= 1;\n      --n;\n    }\n    if ((i -= n) < 0) {\n      i += this.DB;\n      --j;\n    }\n    if (is1) {\n      // ret == 1, don't bother squaring or multiplying it\n      g[w].copyTo(r);\n      is1 = false;\n    } else {\n      while (n > 1) {\n        z.sqrTo(r, r2);\n        z.sqrTo(r2, r);\n        n -= 2;\n      }\n      if (n > 0) z.sqrTo(r, r2);else {\n        t = r;\n        r = r2;\n        r2 = t;\n      }\n      z.mulTo(r2, g[w], r);\n    }\n\n    while (j >= 0 && (e[j] & 1 << i) == 0) {\n      z.sqrTo(r, r2);\n      t = r;\n      r = r2;\n      r2 = t;\n      if (--i < 0) {\n        i = this.DB - 1;\n        --j;\n      }\n    }\n  }\n  var result = z.revert(r);\n  callback(null, result);\n  return result;\n}\n\n// protected\nBigInteger.prototype.copyTo = bnpCopyTo;\nBigInteger.prototype.fromInt = bnpFromInt;\nBigInteger.prototype.fromString = bnpFromString;\nBigInteger.prototype.clamp = bnpClamp;\nBigInteger.prototype.dlShiftTo = bnpDLShiftTo;\nBigInteger.prototype.drShiftTo = bnpDRShiftTo;\nBigInteger.prototype.lShiftTo = bnpLShiftTo;\nBigInteger.prototype.rShiftTo = bnpRShiftTo;\nBigInteger.prototype.subTo = bnpSubTo;\nBigInteger.prototype.multiplyTo = bnpMultiplyTo;\nBigInteger.prototype.squareTo = bnpSquareTo;\nBigInteger.prototype.divRemTo = bnpDivRemTo;\nBigInteger.prototype.invDigit = bnpInvDigit;\nBigInteger.prototype.addTo = bnpAddTo;\n\n// public\nBigInteger.prototype.toString = bnToString;\nBigInteger.prototype.negate = bnNegate;\nBigInteger.prototype.abs = bnAbs;\nBigInteger.prototype.compareTo = bnCompareTo;\nBigInteger.prototype.bitLength = bnBitLength;\nBigInteger.prototype.mod = bnMod;\nBigInteger.prototype.equals = bnEquals;\nBigInteger.prototype.add = bnAdd;\nBigInteger.prototype.subtract = bnSubtract;\nBigInteger.prototype.multiply = bnMultiply;\nBigInteger.prototype.divide = bnDivide;\nBigInteger.prototype.modPow = bnModPow;\n\n// \"constants\"\nBigInteger.ZERO = nbv(0);\nBigInteger.ONE = nbv(1);\n\n//# sourceURL=webpack:///./node_modules/amazon-cognito-identity-js/es/BigInteger.js?");

/***/ }),

/***/ "./node_modules/amazon-cognito-identity-js/es/Client.js":
/*!**************************************************************!*\
  !*** ./node_modules/amazon-cognito-identity-js/es/Client.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UserAgent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAgent */ \"./node_modules/amazon-cognito-identity-js/es/UserAgent.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n/** @class */\n\nvar Client = function () {\n  /**\n   * Constructs a new AWS Cognito Identity Provider client object\n   * @param {string} region AWS region\n   * @param {string} endpoint endpoint\n   */\n  function Client(region, endpoint) {\n    _classCallCheck(this, Client);\n\n    this.endpoint = endpoint || 'https://cognito-idp.' + region + '.amazonaws.com/';\n    this.userAgent = _UserAgent__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.userAgent || 'aws-amplify/0.1.x js';\n  }\n\n  /**\n   * Makes an unauthenticated request on AWS Cognito Identity Provider API\n   * using fetch\n   * @param {string} operation API operation\n   * @param {object} params Input parameters\n   * @param {function} callback Callback called when a response is returned\n   * @returns {void}\n  */\n\n\n  Client.prototype.request = function request(operation, params, callback) {\n    var headers = {\n      'Content-Type': 'application/x-amz-json-1.1',\n      'X-Amz-Target': 'AWSCognitoIdentityProviderService.' + operation,\n      'X-Amz-User-Agent': this.userAgent\n    };\n\n    var options = {\n      headers: headers,\n      method: 'POST',\n      mode: 'cors',\n      cache: 'no-cache',\n      body: JSON.stringify(params)\n    };\n\n    var response = void 0;\n    var responseJsonData = void 0;\n\n    fetch(this.endpoint, options).then(function (resp) {\n      response = resp;\n      return resp;\n    }, function (err) {\n      // If error happens here, the request failed\n      // if it is TypeError throw network error\n      if (err instanceof TypeError) {\n        throw new Error('Network error');\n      }\n      throw err;\n    }).then(function (resp) {\n      return resp.json().catch(function () {\n        return {};\n      });\n    }).then(function (data) {\n      // return parsed body stream\n      if (response.ok) return callback(null, data);\n      responseJsonData = data;\n\n      // Taken from aws-sdk-js/lib/protocol/json.js\n      // eslint-disable-next-line no-underscore-dangle\n      var code = (data.__type || data.code).split('#').pop();\n      var error = {\n        code: code,\n        name: code,\n        message: data.message || data.Message || null\n      };\n      return callback(error);\n    }).catch(function (err) {\n      // first check if we have a service error\n      if (response && response.headers && response.headers.get('x-amzn-errortype')) {\n        try {\n          var code = response.headers.get('x-amzn-errortype').split(':')[0];\n          var error = {\n            code: code,\n            name: code,\n            statusCode: response.status,\n            message: response.status ? response.status.toString() : null\n          };\n          return callback(error);\n        } catch (ex) {\n          return callback(err);\n        }\n        // otherwise check if error is Network error\n      } else if (err instanceof Error && err.message === 'Network error') {\n        var _error = {\n          code: 'NetworkError',\n          name: err.name,\n          message: err.message\n        };\n        return callback(_error);\n      } else {\n        return callback(err);\n      }\n    });\n  };\n\n  return Client;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Client);\n\n//# sourceURL=webpack:///./node_modules/amazon-cognito-identity-js/es/Client.js?");

/***/ }),

/***/ "./node_modules/amazon-cognito-identity-js/es/CognitoAccessToken.js":
/*!**************************************************************************!*\
  !*** ./node_modules/amazon-cognito-identity-js/es/CognitoAccessToken.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CognitoJwtToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CognitoJwtToken */ \"./node_modules/amazon-cognito-identity-js/es/CognitoJwtToken.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/*\n * Copyright 2016 Amazon.com,\n * Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Amazon Software License (the \"License\").\n * You may not use this file except in compliance with the\n * License. A copy of the License is located at\n *\n *     http://aws.amazon.com/asl/\n *\n * or in the \"license\" file accompanying this file. This file is\n * distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, express or implied. See the License\n * for the specific language governing permissions and\n * limitations under the License.\n */\n\n\n\n/** @class */\n\nvar CognitoAccessToken = function (_CognitoJwtToken) {\n  _inherits(CognitoAccessToken, _CognitoJwtToken);\n\n  /**\n   * Constructs a new CognitoAccessToken object\n   * @param {string=} AccessToken The JWT access token.\n   */\n  function CognitoAccessToken() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        AccessToken = _ref.AccessToken;\n\n    _classCallCheck(this, CognitoAccessToken);\n\n    return _possibleConstructorReturn(this, _CognitoJwtToken.call(this, AccessToken || ''));\n  }\n\n  return CognitoAccessToken;\n}(_CognitoJwtToken__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CognitoAccessToken);\n\n//# sourceURL=webpack:///./node_modules/amazon-cognito-identity-js/es/CognitoAccessToken.js?");

/***/ }),

/***/ "./node_modules/amazon-cognito-identity-js/es/CognitoIdToken.js":
/*!**********************************************************************!*\
  !*** ./node_modules/amazon-cognito-identity-js/es/CognitoIdToken.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CognitoJwtToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CognitoJwtToken */ \"./node_modules/amazon-cognito-identity-js/es/CognitoJwtToken.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/*!\n * Copyright 2016 Amazon.com,\n * Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Amazon Software License (the \"License\").\n * You may not use this file except in compliance with the\n * License. A copy of the License is located at\n *\n *     http://aws.amazon.com/asl/\n *\n * or in the \"license\" file accompanying this file. This file is\n * distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, express or implied. See the License\n * for the specific language governing permissions and\n * limitations under the License.\n */\n\n\n\n/** @class */\n\nvar CognitoIdToken = function (_CognitoJwtToken) {\n  _inherits(CognitoIdToken, _CognitoJwtToken);\n\n  /**\n   * Constructs a new CognitoIdToken object\n   * @param {string=} IdToken The JWT Id token\n   */\n  function CognitoIdToken() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        IdToken = _ref.IdToken;\n\n    _classCallCheck(this, CognitoIdToken);\n\n    return _possibleConstructorReturn(this, _CognitoJwtToken.call(this, IdToken || ''));\n  }\n\n  return CognitoIdToken;\n}(_CognitoJwtToken__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CognitoIdToken);\n\n//# sourceURL=webpack:///./node_modules/amazon-cognito-identity-js/es/CognitoIdToken.js?");

/***/ }),

/***/ "./node_modules/amazon-cognito-identity-js/es/CognitoJwtToken.js":
/*!***********************************************************************!*\
  !*** ./node_modules/amazon-cognito-identity-js/es/CognitoJwtToken.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buffer/ */ \"./node_modules/buffer/index.js\");\n/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buffer___WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*!\n * Copyright 2016 Amazon.com,\n * Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Amazon Software License (the \"License\").\n * You may not use this file except in compliance with the\n * License. A copy of the License is located at\n *\n *     http://aws.amazon.com/asl/\n *\n * or in the \"license\" file accompanying this file. This file is\n * distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, express or implied. See the License\n * for the specific language governing permissions and\n * limitations under the License.\n */\n\n\n\n/** @class */\n\nvar CognitoJwtToken = function () {\n  /**\n   * Constructs a new CognitoJwtToken object\n   * @param {string=} token The JWT token.\n   */\n  function CognitoJwtToken(token) {\n    _classCallCheck(this, CognitoJwtToken);\n\n    // Assign object\n    this.jwtToken = token || '';\n    this.payload = this.decodePayload();\n  }\n\n  /**\n   * @returns {string} the record's token.\n   */\n\n\n  CognitoJwtToken.prototype.getJwtToken = function getJwtToken() {\n    return this.jwtToken;\n  };\n\n  /**\n   * @returns {int} the token's expiration (exp member).\n   */\n\n\n  CognitoJwtToken.prototype.getExpiration = function getExpiration() {\n    return this.payload.exp;\n  };\n\n  /**\n   * @returns {int} the token's \"issued at\" (iat member).\n   */\n\n\n  CognitoJwtToken.prototype.getIssuedAt = function getIssuedAt() {\n    return this.payload.iat;\n  };\n\n  /**\n   * @returns {object} the token's payload.\n   */\n\n\n  CognitoJwtToken.prototype.decodePayload = function decodePayload() {\n    var payload = this.jwtToken.split('.')[1];\n    try {\n      return JSON.parse(buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(payload, 'base64').toString('utf8'));\n    } catch (err) {\n      return {};\n    }\n  };\n\n  return CognitoJwtToken;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CognitoJwtToken);\n\n//# sourceURL=webpack:///./node_modules/amazon-cognito-identity-js/es/CognitoJwtToken.js?");

/***/ }),

/***/ "./node_modules/amazon-cognito-identity-js/es/CognitoRefreshToken.js":
/*!***************************************************************************!*\
  !*** ./node_modules/amazon-cognito-identity-js/es/CognitoRefreshToken.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*!\n * Copyright 2016 Amazon.com,\n * Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Amazon Software License (the \"License\").\n * You may not use this file except in compliance with the\n * License. A copy of the License is located at\n *\n *     http://aws.amazon.com/asl/\n *\n * or in the \"license\" file accompanying this file. This file is\n * distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, express or implied. See the License\n * for the specific language governing permissions and\n * limitations under the License.\n */\n\n/** @class */\nvar CognitoRefreshToken = function () {\n  /**\n   * Constructs a new CognitoRefreshToken object\n   * @param {string=} RefreshToken The JWT refresh token.\n   */\n  function CognitoRefreshToken() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        RefreshToken = _ref.RefreshToken;\n\n    _classCallCheck(this, CognitoRefreshToken);\n\n    // Assign object\n    this.token = RefreshToken || '';\n  }\n\n  /**\n   * @returns {string} the record's token.\n   */\n\n\n  CognitoRefreshToken.prototype.getToken = function getToken() {\n    return this.token;\n  };\n\n  return CognitoRefreshToken;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CognitoRefreshToken);\n\n//# sourceURL=webpack:///./node_modules/amazon-cognito-identity-js/es/CognitoRefreshToken.js?");

/***/ }),

/***/ "./node_modules/amazon-cognito-identity-js/es/CognitoUser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/amazon-cognito-identity-js/es/CognitoUser.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buffer/ */ \"./node_modules/buffer/index.js\");\n/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buffer___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto_js_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js/core */ \"./node_modules/crypto-js/core.js\");\n/* harmony import */ var crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var crypto_js_lib_typedarrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js/lib-typedarrays */ \"./node_modules/crypto-js/lib-typedarrays.js\");\n/* harmony import */ var crypto_js_lib_typedarrays__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js_lib_typedarrays__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js/enc-base64 */ \"./node_modules/crypto-js/enc-base64.js\");\n/* harmony import */ var crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js/hmac-sha256 */ \"./node_modules/crypto-js/hmac-sha256.js\");\n/* harmony import */ var crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _BigInteger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BigInteger */ \"./node_modules/amazon-cognito-identity-js/es/BigInteger.js\");\n/* harmony import */ var _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AuthenticationHelper */ \"./node_modules/amazon-cognito-identity-js/es/AuthenticationHelper.js\");\n/* harmony import */ var _CognitoAccessToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CognitoAccessToken */ \"./node_modules/amazon-cognito-identity-js/es/CognitoAccessToken.js\");\n/* harmony import */ var _CognitoIdToken__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CognitoIdToken */ \"./node_modules/amazon-cognito-identity-js/es/CognitoIdToken.js\");\n/* harmony import */ var _CognitoRefreshToken__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CognitoRefreshToken */ \"./node_modules/amazon-cognito-identity-js/es/CognitoRefreshToken.js\");\n/* harmony import */ var _CognitoUserSession__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CognitoUserSession */ \"./node_modules/amazon-cognito-identity-js/es/CognitoUserSession.js\");\n/* harmony import */ var _DateHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DateHelper */ \"./node_modules/amazon-cognito-identity-js/es/DateHelper.js\");\n/* harmony import */ var _CognitoUserAttribute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CognitoUserAttribute */ \"./node_modules/amazon-cognito-identity-js/es/CognitoUserAttribute.js\");\n/* harmony import */ var _StorageHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./StorageHelper */ \"./node_modules/amazon-cognito-identity-js/es/StorageHelper.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*!\n * Copyright 2016 Amazon.com,\n * Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Amazon Software License (the \"License\").\n * You may not use this file except in compliance with the\n * License. A copy of the License is located at\n *\n *     http://aws.amazon.com/asl/\n *\n * or in the \"license\" file accompanying this file. This file is\n * distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, express or implied. See the License\n * for the specific language governing permissions and\n * limitations under the License.\n */\n\n\n\n // necessary for crypto js\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * @callback nodeCallback\n * @template T result\n * @param {*} err The operation failure reason, or null.\n * @param {T} result The operation result.\n */\n\n/**\n * @callback onFailure\n * @param {*} err Failure reason.\n */\n\n/**\n * @callback onSuccess\n * @template T result\n * @param {T} result The operation result.\n */\n\n/**\n * @callback mfaRequired\n * @param {*} details MFA challenge details.\n */\n\n/**\n * @callback customChallenge\n * @param {*} details Custom challenge details.\n */\n\n/**\n * @callback inputVerificationCode\n * @param {*} data Server response.\n */\n\n/**\n * @callback authSuccess\n * @param {CognitoUserSession} session The new session.\n * @param {bool=} userConfirmationNecessary User must be confirmed.\n */\n\n/** @class */\n\nvar CognitoUser = function () {\n  /**\n   * Constructs a new CognitoUser object\n   * @param {object} data Creation options\n   * @param {string} data.Username The user's username.\n   * @param {CognitoUserPool} data.Pool Pool containing the user.\n   * @param {object} data.Storage Optional storage object.\n   */\n  function CognitoUser(data) {\n    _classCallCheck(this, CognitoUser);\n\n    if (data == null || data.Username == null || data.Pool == null) {\n      throw new Error('Username and pool information are required.');\n    }\n\n    this.username = data.Username || '';\n    this.pool = data.Pool;\n    this.Session = null;\n\n    this.client = data.Pool.client;\n\n    this.signInUserSession = null;\n    this.authenticationFlowType = 'USER_SRP_AUTH';\n\n    this.storage = data.Storage || new _StorageHelper__WEBPACK_IMPORTED_MODULE_13__[\"default\"]().getStorage();\n\n    this.keyPrefix = 'CognitoIdentityServiceProvider.' + this.pool.getClientId();\n    this.userDataKey = this.keyPrefix + '.' + this.username + '.userData';\n  }\n\n  /**\n   * Sets the session for this user\n   * @param {CognitoUserSession} signInUserSession the session\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.setSignInUserSession = function setSignInUserSession(signInUserSession) {\n    this.clearCachedUserData();\n    this.signInUserSession = signInUserSession;\n    this.cacheTokens();\n  };\n\n  /**\n   * @returns {CognitoUserSession} the current session for this user\n   */\n\n\n  CognitoUser.prototype.getSignInUserSession = function getSignInUserSession() {\n    return this.signInUserSession;\n  };\n\n  /**\n   * @returns {string} the user's username\n   */\n\n\n  CognitoUser.prototype.getUsername = function getUsername() {\n    return this.username;\n  };\n\n  /**\n   * @returns {String} the authentication flow type\n   */\n\n\n  CognitoUser.prototype.getAuthenticationFlowType = function getAuthenticationFlowType() {\n    return this.authenticationFlowType;\n  };\n\n  /**\n   * sets authentication flow type\n   * @param {string} authenticationFlowType New value.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.setAuthenticationFlowType = function setAuthenticationFlowType(authenticationFlowType) {\n    this.authenticationFlowType = authenticationFlowType;\n  };\n\n  /**\n   * This is used for authenticating the user through the custom authentication flow.\n   * @param {AuthenticationDetails} authDetails Contains the authentication data\n   * @param {object} callback Result callback map.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {customChallenge} callback.customChallenge Custom challenge\n   *        response required to continue.\n   * @param {authSuccess} callback.onSuccess Called on success with the new session.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.initiateAuth = function initiateAuth(authDetails, callback) {\n    var _this = this;\n\n    var authParameters = authDetails.getAuthParameters();\n    authParameters.USERNAME = this.username;\n\n    var jsonReq = {\n      AuthFlow: 'CUSTOM_AUTH',\n      ClientId: this.pool.getClientId(),\n      AuthParameters: authParameters,\n      ClientMetadata: authDetails.getValidationData()\n    };\n    if (this.getUserContextData()) {\n      jsonReq.UserContextData = this.getUserContextData();\n    }\n\n    this.client.request('InitiateAuth', jsonReq, function (err, data) {\n      if (err) {\n        return callback.onFailure(err);\n      }\n      var challengeName = data.ChallengeName;\n      var challengeParameters = data.ChallengeParameters;\n\n      if (challengeName === 'CUSTOM_CHALLENGE') {\n        _this.Session = data.Session;\n        return callback.customChallenge(challengeParameters);\n      }\n      _this.signInUserSession = _this.getCognitoUserSession(data.AuthenticationResult);\n      _this.cacheTokens();\n      return callback.onSuccess(_this.signInUserSession);\n    });\n  };\n\n  /**\n   * This is used for authenticating the user.\n   * stuff\n   * @param {AuthenticationDetails} authDetails Contains the authentication data\n   * @param {object} callback Result callback map.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {newPasswordRequired} callback.newPasswordRequired new\n   *        password and any required attributes are required to continue\n   * @param {mfaRequired} callback.mfaRequired MFA code\n   *        required to continue.\n   * @param {customChallenge} callback.customChallenge Custom challenge\n   *        response required to continue.\n   * @param {authSuccess} callback.onSuccess Called on success with the new session.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.authenticateUser = function authenticateUser(authDetails, callback) {\n    if (this.authenticationFlowType === 'USER_PASSWORD_AUTH') {\n      return this.authenticateUserPlainUsernamePassword(authDetails, callback);\n    } else if (this.authenticationFlowType === 'USER_SRP_AUTH' || this.authenticationFlowType === 'CUSTOM_AUTH') {\n      return this.authenticateUserDefaultAuth(authDetails, callback);\n    }\n    return callback.onFailure(new Error('Authentication flow type is invalid.'));\n  };\n\n  /**\n   * PRIVATE ONLY: This is an internal only method and should not\n   * be directly called by the consumers.\n   * It calls the AuthenticationHelper for SRP related\n   * stuff\n   * @param {AuthenticationDetails} authDetails Contains the authentication data\n   * @param {object} callback Result callback map.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {newPasswordRequired} callback.newPasswordRequired new\n   *        password and any required attributes are required to continue\n   * @param {mfaRequired} callback.mfaRequired MFA code\n   *        required to continue.\n   * @param {customChallenge} callback.customChallenge Custom challenge\n   *        response required to continue.\n   * @param {authSuccess} callback.onSuccess Called on success with the new session.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.authenticateUserDefaultAuth = function authenticateUserDefaultAuth(authDetails, callback) {\n    var _this2 = this;\n\n    var authenticationHelper = new _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.pool.getUserPoolId().split('_')[1]);\n    var dateHelper = new _DateHelper__WEBPACK_IMPORTED_MODULE_11__[\"default\"]();\n\n    var serverBValue = void 0;\n    var salt = void 0;\n    var authParameters = {};\n\n    if (this.deviceKey != null) {\n      authParameters.DEVICE_KEY = this.deviceKey;\n    }\n\n    authParameters.USERNAME = this.username;\n    authenticationHelper.getLargeAValue(function (errOnAValue, aValue) {\n      // getLargeAValue callback start\n      if (errOnAValue) {\n        callback.onFailure(errOnAValue);\n      }\n\n      authParameters.SRP_A = aValue.toString(16);\n\n      if (_this2.authenticationFlowType === 'CUSTOM_AUTH') {\n        authParameters.CHALLENGE_NAME = 'SRP_A';\n      }\n\n      var jsonReq = {\n        AuthFlow: _this2.authenticationFlowType,\n        ClientId: _this2.pool.getClientId(),\n        AuthParameters: authParameters,\n        ClientMetadata: authDetails.getValidationData()\n      };\n      if (_this2.getUserContextData(_this2.username)) {\n        jsonReq.UserContextData = _this2.getUserContextData(_this2.username);\n      }\n\n      _this2.client.request('InitiateAuth', jsonReq, function (err, data) {\n        if (err) {\n          return callback.onFailure(err);\n        }\n\n        var challengeParameters = data.ChallengeParameters;\n\n        _this2.username = challengeParameters.USER_ID_FOR_SRP;\n        serverBValue = new _BigInteger__WEBPACK_IMPORTED_MODULE_5__[\"default\"](challengeParameters.SRP_B, 16);\n        salt = new _BigInteger__WEBPACK_IMPORTED_MODULE_5__[\"default\"](challengeParameters.SALT, 16);\n        _this2.getCachedDeviceKeyAndPassword();\n\n        authenticationHelper.getPasswordAuthenticationKey(_this2.username, authDetails.getPassword(), serverBValue, salt, function (errOnHkdf, hkdf) {\n          // getPasswordAuthenticationKey callback start\n          if (errOnHkdf) {\n            callback.onFailure(errOnHkdf);\n          }\n\n          var dateNow = dateHelper.getNowString();\n\n          var message = crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default.a.lib.WordArray.create(buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].concat([buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(_this2.pool.getUserPoolId().split('_')[1], 'utf8'), buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(_this2.username, 'utf8'), buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(challengeParameters.SECRET_BLOCK, 'base64'), buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(dateNow, 'utf8')]));\n          var key = crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default.a.lib.WordArray.create(hkdf);\n          var signatureString = crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4___default()(message, key));\n\n          var challengeResponses = {};\n\n          challengeResponses.USERNAME = _this2.username;\n          challengeResponses.PASSWORD_CLAIM_SECRET_BLOCK = challengeParameters.SECRET_BLOCK;\n          challengeResponses.TIMESTAMP = dateNow;\n          challengeResponses.PASSWORD_CLAIM_SIGNATURE = signatureString;\n\n          if (_this2.deviceKey != null) {\n            challengeResponses.DEVICE_KEY = _this2.deviceKey;\n          }\n\n          var respondToAuthChallenge = function respondToAuthChallenge(challenge, challengeCallback) {\n            return _this2.client.request('RespondToAuthChallenge', challenge, function (errChallenge, dataChallenge) {\n              if (errChallenge && errChallenge.code === 'ResourceNotFoundException' && errChallenge.message.toLowerCase().indexOf('device') !== -1) {\n                challengeResponses.DEVICE_KEY = null;\n                _this2.deviceKey = null;\n                _this2.randomPassword = null;\n                _this2.deviceGroupKey = null;\n                _this2.clearCachedDeviceKeyAndPassword();\n                return respondToAuthChallenge(challenge, challengeCallback);\n              }\n              return challengeCallback(errChallenge, dataChallenge);\n            });\n          };\n\n          var jsonReqResp = {\n            ChallengeName: 'PASSWORD_VERIFIER',\n            ClientId: _this2.pool.getClientId(),\n            ChallengeResponses: challengeResponses,\n            Session: data.Session\n          };\n          if (_this2.getUserContextData()) {\n            jsonReqResp.UserContextData = _this2.getUserContextData();\n          }\n          respondToAuthChallenge(jsonReqResp, function (errAuthenticate, dataAuthenticate) {\n            if (errAuthenticate) {\n              return callback.onFailure(errAuthenticate);\n            }\n\n            return _this2.authenticateUserInternal(dataAuthenticate, authenticationHelper, callback);\n          });\n          return undefined;\n          // getPasswordAuthenticationKey callback end\n        });\n        return undefined;\n      });\n      // getLargeAValue callback end\n    });\n  };\n\n  /**\n   * PRIVATE ONLY: This is an internal only method and should not\n   * be directly called by the consumers.\n   * @param {AuthenticationDetails} authDetails Contains the authentication data.\n   * @param {object} callback Result callback map.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {mfaRequired} callback.mfaRequired MFA code\n   *        required to continue.\n   * @param {authSuccess} callback.onSuccess Called on success with the new session.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.authenticateUserPlainUsernamePassword = function authenticateUserPlainUsernamePassword(authDetails, callback) {\n    var _this3 = this;\n\n    var authParameters = {};\n    authParameters.USERNAME = this.username;\n    authParameters.PASSWORD = authDetails.getPassword();\n    if (!authParameters.PASSWORD) {\n      callback.onFailure(new Error('PASSWORD parameter is required'));\n      return;\n    }\n    var authenticationHelper = new _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.pool.getUserPoolId().split('_')[1]);\n    this.getCachedDeviceKeyAndPassword();\n    if (this.deviceKey != null) {\n      authParameters.DEVICE_KEY = this.deviceKey;\n    }\n\n    var jsonReq = {\n      AuthFlow: 'USER_PASSWORD_AUTH',\n      ClientId: this.pool.getClientId(),\n      AuthParameters: authParameters,\n      ClientMetadata: authDetails.getValidationData()\n    };\n    if (this.getUserContextData(this.username)) {\n      jsonReq.UserContextData = this.getUserContextData(this.username);\n    }\n    // USER_PASSWORD_AUTH happens in a single round-trip: client sends userName and password,\n    // Cognito UserPools verifies password and returns tokens.\n    this.client.request('InitiateAuth', jsonReq, function (err, authResult) {\n      if (err) {\n        return callback.onFailure(err);\n      }\n      return _this3.authenticateUserInternal(authResult, authenticationHelper, callback);\n    });\n  };\n\n  /**\n  * PRIVATE ONLY: This is an internal only method and should not\n  * be directly called by the consumers.\n  * @param {object} dataAuthenticate authentication data\n  * @param {object} authenticationHelper helper created\n  * @param {callback} callback passed on from caller\n  * @returns {void}\n  */\n\n\n  CognitoUser.prototype.authenticateUserInternal = function authenticateUserInternal(dataAuthenticate, authenticationHelper, callback) {\n    var _this4 = this;\n\n    var challengeName = dataAuthenticate.ChallengeName;\n    var challengeParameters = dataAuthenticate.ChallengeParameters;\n\n    if (challengeName === 'SMS_MFA') {\n      this.Session = dataAuthenticate.Session;\n      return callback.mfaRequired(challengeName, challengeParameters);\n    }\n\n    if (challengeName === 'SELECT_MFA_TYPE') {\n      this.Session = dataAuthenticate.Session;\n      return callback.selectMFAType(challengeName, challengeParameters);\n    }\n\n    if (challengeName === 'MFA_SETUP') {\n      this.Session = dataAuthenticate.Session;\n      return callback.mfaSetup(challengeName, challengeParameters);\n    }\n\n    if (challengeName === 'SOFTWARE_TOKEN_MFA') {\n      this.Session = dataAuthenticate.Session;\n      return callback.totpRequired(challengeName, challengeParameters);\n    }\n\n    if (challengeName === 'CUSTOM_CHALLENGE') {\n      this.Session = dataAuthenticate.Session;\n      return callback.customChallenge(challengeParameters);\n    }\n\n    if (challengeName === 'NEW_PASSWORD_REQUIRED') {\n      this.Session = dataAuthenticate.Session;\n\n      var userAttributes = null;\n      var rawRequiredAttributes = null;\n      var requiredAttributes = [];\n      var userAttributesPrefix = authenticationHelper.getNewPasswordRequiredChallengeUserAttributePrefix();\n\n      if (challengeParameters) {\n        userAttributes = JSON.parse(dataAuthenticate.ChallengeParameters.userAttributes);\n        rawRequiredAttributes = JSON.parse(dataAuthenticate.ChallengeParameters.requiredAttributes);\n      }\n\n      if (rawRequiredAttributes) {\n        for (var i = 0; i < rawRequiredAttributes.length; i++) {\n          requiredAttributes[i] = rawRequiredAttributes[i].substr(userAttributesPrefix.length);\n        }\n      }\n      return callback.newPasswordRequired(userAttributes, requiredAttributes);\n    }\n\n    if (challengeName === 'DEVICE_SRP_AUTH') {\n      this.getDeviceResponse(callback);\n      return undefined;\n    }\n\n    this.signInUserSession = this.getCognitoUserSession(dataAuthenticate.AuthenticationResult);\n    this.challengeName = challengeName;\n    this.cacheTokens();\n\n    var newDeviceMetadata = dataAuthenticate.AuthenticationResult.NewDeviceMetadata;\n    if (newDeviceMetadata == null) {\n      return callback.onSuccess(this.signInUserSession);\n    }\n\n    authenticationHelper.generateHashDevice(dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceKey, function (errGenHash) {\n      if (errGenHash) {\n        return callback.onFailure(errGenHash);\n      }\n\n      var deviceSecretVerifierConfig = {\n        Salt: buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(authenticationHelper.getSaltDevices(), 'hex').toString('base64'),\n        PasswordVerifier: buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(authenticationHelper.getVerifierDevices(), 'hex').toString('base64')\n      };\n\n      _this4.verifierDevices = deviceSecretVerifierConfig.PasswordVerifier;\n      _this4.deviceGroupKey = newDeviceMetadata.DeviceGroupKey;\n      _this4.randomPassword = authenticationHelper.getRandomPassword();\n\n      _this4.client.request('ConfirmDevice', {\n        DeviceKey: newDeviceMetadata.DeviceKey,\n        AccessToken: _this4.signInUserSession.getAccessToken().getJwtToken(),\n        DeviceSecretVerifierConfig: deviceSecretVerifierConfig,\n        DeviceName: navigator.userAgent\n      }, function (errConfirm, dataConfirm) {\n        if (errConfirm) {\n          return callback.onFailure(errConfirm);\n        }\n\n        _this4.deviceKey = dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceKey;\n        _this4.cacheDeviceKeyAndPassword();\n        if (dataConfirm.UserConfirmationNecessary === true) {\n          return callback.onSuccess(_this4.signInUserSession, dataConfirm.UserConfirmationNecessary);\n        }\n        return callback.onSuccess(_this4.signInUserSession);\n      });\n      return undefined;\n    });\n    return undefined;\n  };\n\n  /**\n  * This method is user to complete the NEW_PASSWORD_REQUIRED challenge.\n  * Pass the new password with any new user attributes to be updated.\n  * User attribute keys must be of format userAttributes.<attribute_name>.\n  * @param {string} newPassword new password for this user\n  * @param {object} requiredAttributeData map with values for all required attributes\n  * @param {object} callback Result callback map.\n  * @param {onFailure} callback.onFailure Called on any error.\n  * @param {mfaRequired} callback.mfaRequired MFA code required to continue.\n  * @param {customChallenge} callback.customChallenge Custom challenge\n  *         response required to continue.\n  * @param {authSuccess} callback.onSuccess Called on success with the new session.\n  * @returns {void}\n  */\n\n\n  CognitoUser.prototype.completeNewPasswordChallenge = function completeNewPasswordChallenge(newPassword, requiredAttributeData, callback) {\n    var _this5 = this;\n\n    if (!newPassword) {\n      return callback.onFailure(new Error('New password is required.'));\n    }\n    var authenticationHelper = new _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.pool.getUserPoolId().split('_')[1]);\n    var userAttributesPrefix = authenticationHelper.getNewPasswordRequiredChallengeUserAttributePrefix();\n\n    var finalUserAttributes = {};\n    if (requiredAttributeData) {\n      Object.keys(requiredAttributeData).forEach(function (key) {\n        finalUserAttributes[userAttributesPrefix + key] = requiredAttributeData[key];\n      });\n    }\n\n    finalUserAttributes.NEW_PASSWORD = newPassword;\n    finalUserAttributes.USERNAME = this.username;\n    var jsonReq = {\n      ChallengeName: 'NEW_PASSWORD_REQUIRED',\n      ClientId: this.pool.getClientId(),\n      ChallengeResponses: finalUserAttributes,\n      Session: this.Session\n    };\n    if (this.getUserContextData()) {\n      jsonReq.UserContextData = this.getUserContextData();\n    }\n\n    this.client.request('RespondToAuthChallenge', jsonReq, function (errAuthenticate, dataAuthenticate) {\n      if (errAuthenticate) {\n        return callback.onFailure(errAuthenticate);\n      }\n      return _this5.authenticateUserInternal(dataAuthenticate, authenticationHelper, callback);\n    });\n    return undefined;\n  };\n\n  /**\n   * This is used to get a session using device authentication. It is called at the end of user\n   * authentication\n   *\n   * @param {object} callback Result callback map.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {authSuccess} callback.onSuccess Called on success with the new session.\n   * @returns {void}\n   * @private\n   */\n\n\n  CognitoUser.prototype.getDeviceResponse = function getDeviceResponse(callback) {\n    var _this6 = this;\n\n    var authenticationHelper = new _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.deviceGroupKey);\n    var dateHelper = new _DateHelper__WEBPACK_IMPORTED_MODULE_11__[\"default\"]();\n\n    var authParameters = {};\n\n    authParameters.USERNAME = this.username;\n    authParameters.DEVICE_KEY = this.deviceKey;\n    authenticationHelper.getLargeAValue(function (errAValue, aValue) {\n      // getLargeAValue callback start\n      if (errAValue) {\n        callback.onFailure(errAValue);\n      }\n\n      authParameters.SRP_A = aValue.toString(16);\n\n      var jsonReq = {\n        ChallengeName: 'DEVICE_SRP_AUTH',\n        ClientId: _this6.pool.getClientId(),\n        ChallengeResponses: authParameters\n      };\n      if (_this6.getUserContextData()) {\n        jsonReq.UserContextData = _this6.getUserContextData();\n      }\n      _this6.client.request('RespondToAuthChallenge', jsonReq, function (err, data) {\n        if (err) {\n          return callback.onFailure(err);\n        }\n\n        var challengeParameters = data.ChallengeParameters;\n\n        var serverBValue = new _BigInteger__WEBPACK_IMPORTED_MODULE_5__[\"default\"](challengeParameters.SRP_B, 16);\n        var salt = new _BigInteger__WEBPACK_IMPORTED_MODULE_5__[\"default\"](challengeParameters.SALT, 16);\n\n        authenticationHelper.getPasswordAuthenticationKey(_this6.deviceKey, _this6.randomPassword, serverBValue, salt, function (errHkdf, hkdf) {\n          // getPasswordAuthenticationKey callback start\n          if (errHkdf) {\n            return callback.onFailure(errHkdf);\n          }\n\n          var dateNow = dateHelper.getNowString();\n\n          var message = crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default.a.lib.WordArray.create(buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].concat([buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(_this6.deviceGroupKey, 'utf8'), buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(_this6.deviceKey, 'utf8'), buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(challengeParameters.SECRET_BLOCK, 'base64'), buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(dateNow, 'utf8')]));\n          var key = crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default.a.lib.WordArray.create(hkdf);\n          var signatureString = crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4___default()(message, key));\n\n          var challengeResponses = {};\n\n          challengeResponses.USERNAME = _this6.username;\n          challengeResponses.PASSWORD_CLAIM_SECRET_BLOCK = challengeParameters.SECRET_BLOCK;\n          challengeResponses.TIMESTAMP = dateNow;\n          challengeResponses.PASSWORD_CLAIM_SIGNATURE = signatureString;\n          challengeResponses.DEVICE_KEY = _this6.deviceKey;\n\n          var jsonReqResp = {\n            ChallengeName: 'DEVICE_PASSWORD_VERIFIER',\n            ClientId: _this6.pool.getClientId(),\n            ChallengeResponses: challengeResponses,\n            Session: data.Session\n          };\n          if (_this6.getUserContextData()) {\n            jsonReqResp.UserContextData = _this6.getUserContextData();\n          }\n\n          _this6.client.request('RespondToAuthChallenge', jsonReqResp, function (errAuthenticate, dataAuthenticate) {\n            if (errAuthenticate) {\n              return callback.onFailure(errAuthenticate);\n            }\n\n            _this6.signInUserSession = _this6.getCognitoUserSession(dataAuthenticate.AuthenticationResult);\n            _this6.cacheTokens();\n\n            return callback.onSuccess(_this6.signInUserSession);\n          });\n          return undefined;\n          // getPasswordAuthenticationKey callback end\n        });\n        return undefined;\n      });\n      // getLargeAValue callback end\n    });\n  };\n\n  /**\n   * This is used for a certain user to confirm the registration by using a confirmation code\n   * @param {string} confirmationCode Code entered by user.\n   * @param {bool} forceAliasCreation Allow migrating from an existing email / phone number.\n   * @param {nodeCallback<string>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.confirmRegistration = function confirmRegistration(confirmationCode, forceAliasCreation, callback) {\n    var jsonReq = {\n      ClientId: this.pool.getClientId(),\n      ConfirmationCode: confirmationCode,\n      Username: this.username,\n      ForceAliasCreation: forceAliasCreation\n    };\n    if (this.getUserContextData()) {\n      jsonReq.UserContextData = this.getUserContextData();\n    }\n    this.client.request('ConfirmSignUp', jsonReq, function (err) {\n      if (err) {\n        return callback(err, null);\n      }\n      return callback(null, 'SUCCESS');\n    });\n  };\n\n  /**\n   * This is used by the user once he has the responses to a custom challenge\n   * @param {string} answerChallenge The custom challenge answer.\n   * @param {object} callback Result callback map.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {customChallenge} callback.customChallenge\n   *    Custom challenge response required to continue.\n   * @param {authSuccess} callback.onSuccess Called on success with the new session.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.sendCustomChallengeAnswer = function sendCustomChallengeAnswer(answerChallenge, callback) {\n    var _this7 = this;\n\n    var challengeResponses = {};\n    challengeResponses.USERNAME = this.username;\n    challengeResponses.ANSWER = answerChallenge;\n\n    var authenticationHelper = new _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.pool.getUserPoolId().split('_')[1]);\n    this.getCachedDeviceKeyAndPassword();\n    if (this.deviceKey != null) {\n      challengeResponses.DEVICE_KEY = this.deviceKey;\n    }\n\n    var jsonReq = {\n      ChallengeName: 'CUSTOM_CHALLENGE',\n      ChallengeResponses: challengeResponses,\n      ClientId: this.pool.getClientId(),\n      Session: this.Session\n    };\n    if (this.getUserContextData()) {\n      jsonReq.UserContextData = this.getUserContextData();\n    }\n    this.client.request('RespondToAuthChallenge', jsonReq, function (err, data) {\n      if (err) {\n        return callback.onFailure(err);\n      }\n\n      return _this7.authenticateUserInternal(data, authenticationHelper, callback);\n    });\n  };\n\n  /**\n   * This is used by the user once he has an MFA code\n   * @param {string} confirmationCode The MFA code entered by the user.\n   * @param {object} callback Result callback map.\n   * @param {string} mfaType The mfa we are replying to.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {authSuccess} callback.onSuccess Called on success with the new session.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.sendMFACode = function sendMFACode(confirmationCode, callback, mfaType) {\n    var _this8 = this;\n\n    var challengeResponses = {};\n    challengeResponses.USERNAME = this.username;\n    challengeResponses.SMS_MFA_CODE = confirmationCode;\n    var mfaTypeSelection = mfaType || 'SMS_MFA';\n    if (mfaTypeSelection === 'SOFTWARE_TOKEN_MFA') {\n      challengeResponses.SOFTWARE_TOKEN_MFA_CODE = confirmationCode;\n    }\n\n    if (this.deviceKey != null) {\n      challengeResponses.DEVICE_KEY = this.deviceKey;\n    }\n\n    var jsonReq = {\n      ChallengeName: mfaTypeSelection,\n      ChallengeResponses: challengeResponses,\n      ClientId: this.pool.getClientId(),\n      Session: this.Session\n    };\n    if (this.getUserContextData()) {\n      jsonReq.UserContextData = this.getUserContextData();\n    }\n\n    this.client.request('RespondToAuthChallenge', jsonReq, function (err, dataAuthenticate) {\n      if (err) {\n        return callback.onFailure(err);\n      }\n\n      var challengeName = dataAuthenticate.ChallengeName;\n\n      if (challengeName === 'DEVICE_SRP_AUTH') {\n        _this8.getDeviceResponse(callback);\n        return undefined;\n      }\n\n      _this8.signInUserSession = _this8.getCognitoUserSession(dataAuthenticate.AuthenticationResult);\n      _this8.cacheTokens();\n\n      if (dataAuthenticate.AuthenticationResult.NewDeviceMetadata == null) {\n        return callback.onSuccess(_this8.signInUserSession);\n      }\n\n      var authenticationHelper = new _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_6__[\"default\"](_this8.pool.getUserPoolId().split('_')[1]);\n      authenticationHelper.generateHashDevice(dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceKey, function (errGenHash) {\n        if (errGenHash) {\n          return callback.onFailure(errGenHash);\n        }\n\n        var deviceSecretVerifierConfig = {\n          Salt: buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(authenticationHelper.getSaltDevices(), 'hex').toString('base64'),\n          PasswordVerifier: buffer___WEBPACK_IMPORTED_MODULE_0__[\"Buffer\"].from(authenticationHelper.getVerifierDevices(), 'hex').toString('base64')\n        };\n\n        _this8.verifierDevices = deviceSecretVerifierConfig.PasswordVerifier;\n        _this8.deviceGroupKey = dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey;\n        _this8.randomPassword = authenticationHelper.getRandomPassword();\n\n        _this8.client.request('ConfirmDevice', {\n          DeviceKey: dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceKey,\n          AccessToken: _this8.signInUserSession.getAccessToken().getJwtToken(),\n          DeviceSecretVerifierConfig: deviceSecretVerifierConfig,\n          DeviceName: navigator.userAgent\n        }, function (errConfirm, dataConfirm) {\n          if (errConfirm) {\n            return callback.onFailure(errConfirm);\n          }\n\n          _this8.deviceKey = dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceKey;\n          _this8.cacheDeviceKeyAndPassword();\n          if (dataConfirm.UserConfirmationNecessary === true) {\n            return callback.onSuccess(_this8.signInUserSession, dataConfirm.UserConfirmationNecessary);\n          }\n          return callback.onSuccess(_this8.signInUserSession);\n        });\n        return undefined;\n      });\n      return undefined;\n    });\n  };\n\n  /**\n   * This is used by an authenticated user to change the current password\n   * @param {string} oldUserPassword The current password.\n   * @param {string} newUserPassword The requested new password.\n   * @param {nodeCallback<string>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.changePassword = function changePassword(oldUserPassword, newUserPassword, callback) {\n    if (!(this.signInUserSession != null && this.signInUserSession.isValid())) {\n      return callback(new Error('User is not authenticated'), null);\n    }\n\n    this.client.request('ChangePassword', {\n      PreviousPassword: oldUserPassword,\n      ProposedPassword: newUserPassword,\n      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()\n    }, function (err) {\n      if (err) {\n        return callback(err, null);\n      }\n      return callback(null, 'SUCCESS');\n    });\n    return undefined;\n  };\n\n  /**\n   * This is used by an authenticated user to enable MFA for itself\n   * @deprecated\n   * @param {nodeCallback<string>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.enableMFA = function enableMFA(callback) {\n    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {\n      return callback(new Error('User is not authenticated'), null);\n    }\n\n    var mfaOptions = [];\n    var mfaEnabled = {\n      DeliveryMedium: 'SMS',\n      AttributeName: 'phone_number'\n    };\n    mfaOptions.push(mfaEnabled);\n\n    this.client.request('SetUserSettings', {\n      MFAOptions: mfaOptions,\n      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()\n    }, function (err) {\n      if (err) {\n        return callback(err, null);\n      }\n      return callback(null, 'SUCCESS');\n    });\n    return undefined;\n  };\n\n  /**\n   * This is used by an authenticated user to enable MFA for itself\n   * @param {IMfaSettings} smsMfaSettings the sms mfa settings\n   * @param {IMFASettings} softwareTokenMfaSettings the software token mfa settings\n   * @param {nodeCallback<string>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.setUserMfaPreference = function setUserMfaPreference(smsMfaSettings, softwareTokenMfaSettings, callback) {\n    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {\n      return callback(new Error('User is not authenticated'), null);\n    }\n\n    this.client.request('SetUserMFAPreference', {\n      SMSMfaSettings: smsMfaSettings,\n      SoftwareTokenMfaSettings: softwareTokenMfaSettings,\n      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()\n    }, function (err) {\n      if (err) {\n        return callback(err, null);\n      }\n      return callback(null, 'SUCCESS');\n    });\n    return undefined;\n  };\n\n  /**\n   * This is used by an authenticated user to disable MFA for itself\n   * @deprecated\n   * @param {nodeCallback<string>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.disableMFA = function disableMFA(callback) {\n    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {\n      return callback(new Error('User is not authenticated'), null);\n    }\n\n    var mfaOptions = [];\n\n    this.client.request('SetUserSettings', {\n      MFAOptions: mfaOptions,\n      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()\n    }, function (err) {\n      if (err) {\n        return callback(err, null);\n      }\n      return callback(null, 'SUCCESS');\n    });\n    return undefined;\n  };\n\n  /**\n   * This is used by an authenticated user to delete itself\n   * @param {nodeCallback<string>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.deleteUser = function deleteUser(callback) {\n    var _this9 = this;\n\n    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {\n      return callback(new Error('User is not authenticated'), null);\n    }\n\n    this.client.request('DeleteUser', {\n      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()\n    }, function (err) {\n      if (err) {\n        return callback(err, null);\n      }\n      _this9.clearCachedUser();\n      return callback(null, 'SUCCESS');\n    });\n    return undefined;\n  };\n\n  /**\n   * @typedef {CognitoUserAttribute | { Name:string, Value:string }} AttributeArg\n   */\n  /**\n   * This is used by an authenticated user to change a list of attributes\n   * @param {AttributeArg[]} attributes A list of the new user attributes.\n   * @param {nodeCallback<string>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.updateAttributes = function updateAttributes(attributes, callback) {\n    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {\n      return callback(new Error('User is not authenticated'), null);\n    }\n\n    this.client.request('UpdateUserAttributes', {\n      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),\n      UserAttributes: attributes\n    }, function (err) {\n      if (err) {\n        return callback(err, null);\n      }\n      return callback(null, 'SUCCESS');\n    });\n    return undefined;\n  };\n\n  /**\n   * This is used by an authenticated user to get a list of attributes\n   * @param {nodeCallback<CognitoUserAttribute[]>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.getUserAttributes = function getUserAttributes(callback) {\n    if (!(this.signInUserSession != null && this.signInUserSession.isValid())) {\n      return callback(new Error('User is not authenticated'), null);\n    }\n\n    this.client.request('GetUser', {\n      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()\n    }, function (err, userData) {\n      if (err) {\n        return callback(err, null);\n      }\n\n      var attributeList = [];\n\n      for (var i = 0; i < userData.UserAttributes.length; i++) {\n        var attribute = {\n          Name: userData.UserAttributes[i].Name,\n          Value: userData.UserAttributes[i].Value\n        };\n        var userAttribute = new _CognitoUserAttribute__WEBPACK_IMPORTED_MODULE_12__[\"default\"](attribute);\n        attributeList.push(userAttribute);\n      }\n\n      return callback(null, attributeList);\n    });\n    return undefined;\n  };\n\n  /**\n   * This is used by an authenticated user to get the MFAOptions\n   * @param {nodeCallback<MFAOptions>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.getMFAOptions = function getMFAOptions(callback) {\n    if (!(this.signInUserSession != null && this.signInUserSession.isValid())) {\n      return callback(new Error('User is not authenticated'), null);\n    }\n\n    this.client.request('GetUser', {\n      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()\n    }, function (err, userData) {\n      if (err) {\n        return callback(err, null);\n      }\n\n      return callback(null, userData.MFAOptions);\n    });\n    return undefined;\n  };\n\n  /**\n   * This is used by an authenticated users to get the userData\n   * @param {nodeCallback<UserData>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.getUserData = function getUserData(callback, params) {\n    var _this10 = this;\n\n    if (!(this.signInUserSession != null && this.signInUserSession.isValid())) {\n      this.clearCachedUserData();\n      return callback(new Error('User is not authenticated'), null);\n    }\n\n    var bypassCache = params ? params.bypassCache : false;\n\n    var userData = this.storage.getItem(this.userDataKey);\n    // get the cached user data\n\n    if (!userData || bypassCache) {\n      this.client.request('GetUser', {\n        AccessToken: this.signInUserSession.getAccessToken().getJwtToken()\n      }, function (err, latestUserData) {\n        if (err) {\n          return callback(err, null);\n        }\n        _this10.cacheUserData(latestUserData);\n        var refresh = _this10.signInUserSession.getRefreshToken();\n        if (refresh && refresh.getToken()) {\n          _this10.refreshSession(refresh, function (refreshError, data) {\n            if (refreshError) {\n              return callback(refreshError, null);\n            }\n            return callback(null, latestUserData);\n          });\n        } else {\n          return callback(null, latestUserData);\n        }\n      });\n    } else {\n      try {\n        return callback(null, JSON.parse(userData));\n      } catch (err) {\n        this.clearCachedUserData();\n        return callback(err, null);\n      }\n    }\n    return undefined;\n  };\n\n  /**\n   * This is used by an authenticated user to delete a list of attributes\n   * @param {string[]} attributeList Names of the attributes to delete.\n   * @param {nodeCallback<string>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.deleteAttributes = function deleteAttributes(attributeList, callback) {\n    if (!(this.signInUserSession != null && this.signInUserSession.isValid())) {\n      return callback(new Error('User is not authenticated'), null);\n    }\n\n    this.client.request('DeleteUserAttributes', {\n      UserAttributeNames: attributeList,\n      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()\n    }, function (err) {\n      if (err) {\n        return callback(err, null);\n      }\n      return callback(null, 'SUCCESS');\n    });\n    return undefined;\n  };\n\n  /**\n   * This is used by a user to resend a confirmation code\n   * @param {nodeCallback<string>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.resendConfirmationCode = function resendConfirmationCode(callback) {\n    var jsonReq = {\n      ClientId: this.pool.getClientId(),\n      Username: this.username\n    };\n\n    this.client.request('ResendConfirmationCode', jsonReq, function (err, result) {\n      if (err) {\n        return callback(err, null);\n      }\n      return callback(null, result);\n    });\n  };\n\n  /**\n   * This is used to get a session, either from the session object\n   * or from  the local storage, or by using a refresh token\n   *\n   * @param {nodeCallback<CognitoUserSession>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.getSession = function getSession(callback) {\n    if (this.username == null) {\n      return callback(new Error('Username is null. Cannot retrieve a new session'), null);\n    }\n\n    if (this.signInUserSession != null && this.signInUserSession.isValid()) {\n      return callback(null, this.signInUserSession);\n    }\n\n    var keyPrefix = 'CognitoIdentityServiceProvider.' + this.pool.getClientId() + '.' + this.username;\n    var idTokenKey = keyPrefix + '.idToken';\n    var accessTokenKey = keyPrefix + '.accessToken';\n    var refreshTokenKey = keyPrefix + '.refreshToken';\n    var clockDriftKey = keyPrefix + '.clockDrift';\n\n    if (this.storage.getItem(idTokenKey)) {\n      var idToken = new _CognitoIdToken__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n        IdToken: this.storage.getItem(idTokenKey)\n      });\n      var accessToken = new _CognitoAccessToken__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n        AccessToken: this.storage.getItem(accessTokenKey)\n      });\n      var refreshToken = new _CognitoRefreshToken__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n        RefreshToken: this.storage.getItem(refreshTokenKey)\n      });\n      var clockDrift = parseInt(this.storage.getItem(clockDriftKey), 0) || 0;\n\n      var sessionData = {\n        IdToken: idToken,\n        AccessToken: accessToken,\n        RefreshToken: refreshToken,\n        ClockDrift: clockDrift\n      };\n      var cachedSession = new _CognitoUserSession__WEBPACK_IMPORTED_MODULE_10__[\"default\"](sessionData);\n      if (cachedSession.isValid()) {\n        this.signInUserSession = cachedSession;\n        return callback(null, this.signInUserSession);\n      }\n\n      if (!refreshToken.getToken()) {\n        return callback(new Error('Cannot retrieve a new session. Please authenticate.'), null);\n      }\n\n      this.refreshSession(refreshToken, callback);\n    } else {\n      callback(new Error('Local storage is missing an ID Token, Please authenticate'), null);\n    }\n\n    return undefined;\n  };\n\n  /**\n   * This uses the refreshToken to retrieve a new session\n   * @param {CognitoRefreshToken} refreshToken A previous session's refresh token.\n   * @param {nodeCallback<CognitoUserSession>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.refreshSession = function refreshSession(refreshToken, callback) {\n    var _this11 = this;\n\n    var authParameters = {};\n    authParameters.REFRESH_TOKEN = refreshToken.getToken();\n    var keyPrefix = 'CognitoIdentityServiceProvider.' + this.pool.getClientId();\n    var lastUserKey = keyPrefix + '.LastAuthUser';\n\n    if (this.storage.getItem(lastUserKey)) {\n      this.username = this.storage.getItem(lastUserKey);\n      var deviceKeyKey = keyPrefix + '.' + this.username + '.deviceKey';\n      this.deviceKey = this.storage.getItem(deviceKeyKey);\n      authParameters.DEVICE_KEY = this.deviceKey;\n    }\n\n    var jsonReq = {\n      ClientId: this.pool.getClientId(),\n      AuthFlow: 'REFRESH_TOKEN_AUTH',\n      AuthParameters: authParameters\n    };\n    if (this.getUserContextData()) {\n      jsonReq.UserContextData = this.getUserContextData();\n    }\n    this.client.request('InitiateAuth', jsonReq, function (err, authResult) {\n      if (err) {\n        if (err.code === 'NotAuthorizedException') {\n          _this11.clearCachedUser();\n        }\n        return callback(err, null);\n      }\n      if (authResult) {\n        var authenticationResult = authResult.AuthenticationResult;\n        if (!Object.prototype.hasOwnProperty.call(authenticationResult, 'RefreshToken')) {\n          authenticationResult.RefreshToken = refreshToken.getToken();\n        }\n        _this11.signInUserSession = _this11.getCognitoUserSession(authenticationResult);\n        _this11.cacheTokens();\n        return callback(null, _this11.signInUserSession);\n      }\n      return undefined;\n    });\n  };\n\n  /**\n   * This is used to save the session tokens to local storage\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.cacheTokens = function cacheTokens() {\n    var keyPrefix = 'CognitoIdentityServiceProvider.' + this.pool.getClientId();\n    var idTokenKey = keyPrefix + '.' + this.username + '.idToken';\n    var accessTokenKey = keyPrefix + '.' + this.username + '.accessToken';\n    var refreshTokenKey = keyPrefix + '.' + this.username + '.refreshToken';\n    var clockDriftKey = keyPrefix + '.' + this.username + '.clockDrift';\n    var lastUserKey = keyPrefix + '.LastAuthUser';\n\n    this.storage.setItem(idTokenKey, this.signInUserSession.getIdToken().getJwtToken());\n    this.storage.setItem(accessTokenKey, this.signInUserSession.getAccessToken().getJwtToken());\n    this.storage.setItem(refreshTokenKey, this.signInUserSession.getRefreshToken().getToken());\n    this.storage.setItem(clockDriftKey, '' + this.signInUserSession.getClockDrift());\n    this.storage.setItem(lastUserKey, this.username);\n  };\n\n  /**\n   * This is to cache user data\n   */\n\n\n  CognitoUser.prototype.cacheUserData = function cacheUserData(userData) {\n    this.storage.setItem(this.userDataKey, JSON.stringify(userData));\n  };\n\n  /**\n   * This is to remove cached user data\n   */\n\n\n  CognitoUser.prototype.clearCachedUserData = function clearCachedUserData() {\n    this.storage.removeItem(this.userDataKey);\n  };\n\n  CognitoUser.prototype.clearCachedUser = function clearCachedUser() {\n    this.clearCachedTokens();\n    this.clearCachedUserData();\n  };\n\n  /**\n   * This is used to cache the device key and device group and device password\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.cacheDeviceKeyAndPassword = function cacheDeviceKeyAndPassword() {\n    var keyPrefix = 'CognitoIdentityServiceProvider.' + this.pool.getClientId() + '.' + this.username;\n    var deviceKeyKey = keyPrefix + '.deviceKey';\n    var randomPasswordKey = keyPrefix + '.randomPasswordKey';\n    var deviceGroupKeyKey = keyPrefix + '.deviceGroupKey';\n\n    this.storage.setItem(deviceKeyKey, this.deviceKey);\n    this.storage.setItem(randomPasswordKey, this.randomPassword);\n    this.storage.setItem(deviceGroupKeyKey, this.deviceGroupKey);\n  };\n\n  /**\n   * This is used to get current device key and device group and device password\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.getCachedDeviceKeyAndPassword = function getCachedDeviceKeyAndPassword() {\n    var keyPrefix = 'CognitoIdentityServiceProvider.' + this.pool.getClientId() + '.' + this.username;\n    var deviceKeyKey = keyPrefix + '.deviceKey';\n    var randomPasswordKey = keyPrefix + '.randomPasswordKey';\n    var deviceGroupKeyKey = keyPrefix + '.deviceGroupKey';\n\n    if (this.storage.getItem(deviceKeyKey)) {\n      this.deviceKey = this.storage.getItem(deviceKeyKey);\n      this.randomPassword = this.storage.getItem(randomPasswordKey);\n      this.deviceGroupKey = this.storage.getItem(deviceGroupKeyKey);\n    }\n  };\n\n  /**\n   * This is used to clear the device key info from local storage\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.clearCachedDeviceKeyAndPassword = function clearCachedDeviceKeyAndPassword() {\n    var keyPrefix = 'CognitoIdentityServiceProvider.' + this.pool.getClientId() + '.' + this.username;\n    var deviceKeyKey = keyPrefix + '.deviceKey';\n    var randomPasswordKey = keyPrefix + '.randomPasswordKey';\n    var deviceGroupKeyKey = keyPrefix + '.deviceGroupKey';\n\n    this.storage.removeItem(deviceKeyKey);\n    this.storage.removeItem(randomPasswordKey);\n    this.storage.removeItem(deviceGroupKeyKey);\n  };\n\n  /**\n   * This is used to clear the session tokens from local storage\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.clearCachedTokens = function clearCachedTokens() {\n    var keyPrefix = 'CognitoIdentityServiceProvider.' + this.pool.getClientId();\n    var idTokenKey = keyPrefix + '.' + this.username + '.idToken';\n    var accessTokenKey = keyPrefix + '.' + this.username + '.accessToken';\n    var refreshTokenKey = keyPrefix + '.' + this.username + '.refreshToken';\n    var lastUserKey = keyPrefix + '.LastAuthUser';\n    var clockDriftKey = keyPrefix + '.' + this.username + '.clockDrift';\n\n    this.storage.removeItem(idTokenKey);\n    this.storage.removeItem(accessTokenKey);\n    this.storage.removeItem(refreshTokenKey);\n    this.storage.removeItem(lastUserKey);\n    this.storage.removeItem(clockDriftKey);\n  };\n\n  /**\n   * This is used to build a user session from tokens retrieved in the authentication result\n   * @param {object} authResult Successful auth response from server.\n   * @returns {CognitoUserSession} The new user session.\n   * @private\n   */\n\n\n  CognitoUser.prototype.getCognitoUserSession = function getCognitoUserSession(authResult) {\n    var idToken = new _CognitoIdToken__WEBPACK_IMPORTED_MODULE_8__[\"default\"](authResult);\n    var accessToken = new _CognitoAccessToken__WEBPACK_IMPORTED_MODULE_7__[\"default\"](authResult);\n    var refreshToken = new _CognitoRefreshToken__WEBPACK_IMPORTED_MODULE_9__[\"default\"](authResult);\n\n    var sessionData = {\n      IdToken: idToken,\n      AccessToken: accessToken,\n      RefreshToken: refreshToken\n    };\n\n    return new _CognitoUserSession__WEBPACK_IMPORTED_MODULE_10__[\"default\"](sessionData);\n  };\n\n  /**\n   * This is used to initiate a forgot password request\n   * @param {object} callback Result callback map.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {inputVerificationCode?} callback.inputVerificationCode\n   *    Optional callback raised instead of onSuccess with response data.\n   * @param {onSuccess} callback.onSuccess Called on success.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.forgotPassword = function forgotPassword(callback) {\n    var jsonReq = {\n      ClientId: this.pool.getClientId(),\n      Username: this.username\n    };\n    if (this.getUserContextData()) {\n      jsonReq.UserContextData = this.getUserContextData();\n    }\n    this.client.request('ForgotPassword', jsonReq, function (err, data) {\n      if (err) {\n        return callback.onFailure(err);\n      }\n      if (typeof callback.inputVerificationCode === 'function') {\n        return callback.inputVerificationCode(data);\n      }\n      return callback.onSuccess(data);\n    });\n  };\n\n  /**\n   * This is used to confirm a new password using a confirmationCode\n   * @param {string} confirmationCode Code entered by user.\n   * @param {string} newPassword Confirm new password.\n   * @param {object} callback Result callback map.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {onSuccess<void>} callback.onSuccess Called on success.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.confirmPassword = function confirmPassword(confirmationCode, newPassword, callback) {\n    var jsonReq = {\n      ClientId: this.pool.getClientId(),\n      Username: this.username,\n      ConfirmationCode: confirmationCode,\n      Password: newPassword\n    };\n    if (this.getUserContextData()) {\n      jsonReq.UserContextData = this.getUserContextData();\n    }\n    this.client.request('ConfirmForgotPassword', jsonReq, function (err) {\n      if (err) {\n        return callback.onFailure(err);\n      }\n      return callback.onSuccess();\n    });\n  };\n\n  /**\n   * This is used to initiate an attribute confirmation request\n   * @param {string} attributeName User attribute that needs confirmation.\n   * @param {object} callback Result callback map.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {inputVerificationCode} callback.inputVerificationCode Called on success.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.getAttributeVerificationCode = function getAttributeVerificationCode(attributeName, callback) {\n    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {\n      return callback.onFailure(new Error('User is not authenticated'));\n    }\n\n    this.client.request('GetUserAttributeVerificationCode', {\n      AttributeName: attributeName,\n      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()\n    }, function (err, data) {\n      if (err) {\n        return callback.onFailure(err);\n      }\n      if (typeof callback.inputVerificationCode === 'function') {\n        return callback.inputVerificationCode(data);\n      }\n      return callback.onSuccess();\n    });\n    return undefined;\n  };\n\n  /**\n   * This is used to confirm an attribute using a confirmation code\n   * @param {string} attributeName Attribute being confirmed.\n   * @param {string} confirmationCode Code entered by user.\n   * @param {object} callback Result callback map.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {onSuccess<string>} callback.onSuccess Called on success.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.verifyAttribute = function verifyAttribute(attributeName, confirmationCode, callback) {\n    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {\n      return callback.onFailure(new Error('User is not authenticated'));\n    }\n\n    this.client.request('VerifyUserAttribute', {\n      AttributeName: attributeName,\n      Code: confirmationCode,\n      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()\n    }, function (err) {\n      if (err) {\n        return callback.onFailure(err);\n      }\n      return callback.onSuccess('SUCCESS');\n    });\n    return undefined;\n  };\n\n  /**\n   * This is used to get the device information using the current device key\n   * @param {object} callback Result callback map.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {onSuccess<*>} callback.onSuccess Called on success with device data.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.getDevice = function getDevice(callback) {\n    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {\n      return callback.onFailure(new Error('User is not authenticated'));\n    }\n\n    this.client.request('GetDevice', {\n      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),\n      DeviceKey: this.deviceKey\n    }, function (err, data) {\n      if (err) {\n        return callback.onFailure(err);\n      }\n      return callback.onSuccess(data);\n    });\n    return undefined;\n  };\n\n  /**\n   * This is used to forget a specific device\n   * @param {string} deviceKey Device key.\n   * @param {object} callback Result callback map.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {onSuccess<string>} callback.onSuccess Called on success.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.forgetSpecificDevice = function forgetSpecificDevice(deviceKey, callback) {\n    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {\n      return callback.onFailure(new Error('User is not authenticated'));\n    }\n\n    this.client.request('ForgetDevice', {\n      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),\n      DeviceKey: deviceKey\n    }, function (err) {\n      if (err) {\n        return callback.onFailure(err);\n      }\n      return callback.onSuccess('SUCCESS');\n    });\n    return undefined;\n  };\n\n  /**\n   * This is used to forget the current device\n   * @param {object} callback Result callback map.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {onSuccess<string>} callback.onSuccess Called on success.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.forgetDevice = function forgetDevice(callback) {\n    var _this12 = this;\n\n    this.forgetSpecificDevice(this.deviceKey, {\n      onFailure: callback.onFailure,\n      onSuccess: function onSuccess(result) {\n        _this12.deviceKey = null;\n        _this12.deviceGroupKey = null;\n        _this12.randomPassword = null;\n        _this12.clearCachedDeviceKeyAndPassword();\n        return callback.onSuccess(result);\n      }\n    });\n  };\n\n  /**\n   * This is used to set the device status as remembered\n   * @param {object} callback Result callback map.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {onSuccess<string>} callback.onSuccess Called on success.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.setDeviceStatusRemembered = function setDeviceStatusRemembered(callback) {\n    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {\n      return callback.onFailure(new Error('User is not authenticated'));\n    }\n\n    this.client.request('UpdateDeviceStatus', {\n      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),\n      DeviceKey: this.deviceKey,\n      DeviceRememberedStatus: 'remembered'\n    }, function (err) {\n      if (err) {\n        return callback.onFailure(err);\n      }\n      return callback.onSuccess('SUCCESS');\n    });\n    return undefined;\n  };\n\n  /**\n   * This is used to set the device status as not remembered\n   * @param {object} callback Result callback map.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {onSuccess<string>} callback.onSuccess Called on success.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.setDeviceStatusNotRemembered = function setDeviceStatusNotRemembered(callback) {\n    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {\n      return callback.onFailure(new Error('User is not authenticated'));\n    }\n\n    this.client.request('UpdateDeviceStatus', {\n      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),\n      DeviceKey: this.deviceKey,\n      DeviceRememberedStatus: 'not_remembered'\n    }, function (err) {\n      if (err) {\n        return callback.onFailure(err);\n      }\n      return callback.onSuccess('SUCCESS');\n    });\n    return undefined;\n  };\n\n  /**\n   * This is used to list all devices for a user\n   *\n   * @param {int} limit the number of devices returned in a call\n   * @param {string} paginationToken the pagination token in case any was returned before\n   * @param {object} callback Result callback map.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {onSuccess<*>} callback.onSuccess Called on success with device list.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.listDevices = function listDevices(limit, paginationToken, callback) {\n    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {\n      return callback.onFailure(new Error('User is not authenticated'));\n    }\n\n    this.client.request('ListDevices', {\n      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),\n      Limit: limit,\n      PaginationToken: paginationToken\n    }, function (err, data) {\n      if (err) {\n        return callback.onFailure(err);\n      }\n      return callback.onSuccess(data);\n    });\n    return undefined;\n  };\n\n  /**\n   * This is used to globally revoke all tokens issued to a user\n   * @param {object} callback Result callback map.\n   * @param {onFailure} callback.onFailure Called on any error.\n   * @param {onSuccess<string>} callback.onSuccess Called on success.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.globalSignOut = function globalSignOut(callback) {\n    var _this13 = this;\n\n    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {\n      return callback.onFailure(new Error('User is not authenticated'));\n    }\n\n    this.client.request('GlobalSignOut', {\n      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()\n    }, function (err) {\n      if (err) {\n        return callback.onFailure(err);\n      }\n      _this13.clearCachedUser();\n      return callback.onSuccess('SUCCESS');\n    });\n    return undefined;\n  };\n\n  /**\n   * This is used for the user to signOut of the application and clear the cached tokens.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.signOut = function signOut() {\n    this.signInUserSession = null;\n    this.clearCachedUser();\n  };\n\n  /**\n   * This is used by a user trying to select a given MFA\n   * @param {string} answerChallenge the mfa the user wants\n   * @param {nodeCallback<string>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.sendMFASelectionAnswer = function sendMFASelectionAnswer(answerChallenge, callback) {\n    var _this14 = this;\n\n    var challengeResponses = {};\n    challengeResponses.USERNAME = this.username;\n    challengeResponses.ANSWER = answerChallenge;\n\n    var jsonReq = {\n      ChallengeName: 'SELECT_MFA_TYPE',\n      ChallengeResponses: challengeResponses,\n      ClientId: this.pool.getClientId(),\n      Session: this.Session\n    };\n    if (this.getUserContextData()) {\n      jsonReq.UserContextData = this.getUserContextData();\n    }\n    this.client.request('RespondToAuthChallenge', jsonReq, function (err, data) {\n      if (err) {\n        return callback.onFailure(err);\n      }\n      _this14.Session = data.Session;\n      if (answerChallenge === 'SMS_MFA') {\n        return callback.mfaRequired(data.challengeName, data.challengeParameters);\n      }\n      if (answerChallenge === 'SOFTWARE_TOKEN_MFA') {\n        return callback.totpRequired(data.challengeName, data.challengeParameters);\n      }\n      return undefined;\n    });\n  };\n\n  /**\n   * This returns the user context data for advanced security feature.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.getUserContextData = function getUserContextData() {\n    var pool = this.pool;\n    return pool.getUserContextData(this.username);\n  };\n\n  /**\n   * This is used by an authenticated or a user trying to authenticate to associate a TOTP MFA\n   * @param {nodeCallback<string>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.associateSoftwareToken = function associateSoftwareToken(callback) {\n    var _this15 = this;\n\n    if (!(this.signInUserSession != null && this.signInUserSession.isValid())) {\n      this.client.request('AssociateSoftwareToken', {\n        Session: this.Session\n      }, function (err, data) {\n        if (err) {\n          return callback.onFailure(err);\n        }\n        _this15.Session = data.Session;\n        return callback.associateSecretCode(data.SecretCode);\n      });\n    } else {\n      this.client.request('AssociateSoftwareToken', {\n        AccessToken: this.signInUserSession.getAccessToken().getJwtToken()\n      }, function (err, data) {\n        if (err) {\n          return callback.onFailure(err);\n        }\n        return callback.associateSecretCode(data.SecretCode);\n      });\n    }\n  };\n\n  /**\n   * This is used by an authenticated or a user trying to authenticate to verify a TOTP MFA\n   * @param {string} totpCode The MFA code entered by the user.\n   * @param {string} friendlyDeviceName The device name we are assigning to the device.\n   * @param {nodeCallback<string>} callback Called on success or error.\n   * @returns {void}\n   */\n\n\n  CognitoUser.prototype.verifySoftwareToken = function verifySoftwareToken(totpCode, friendlyDeviceName, callback) {\n    var _this16 = this;\n\n    if (!(this.signInUserSession != null && this.signInUserSession.isValid())) {\n      this.client.request('VerifySoftwareToken', {\n        Session: this.Session,\n        UserCode: totpCode,\n        FriendlyDeviceName: friendlyDeviceName\n      }, function (err, data) {\n        if (err) {\n          return callback.onFailure(err);\n        }\n        _this16.Session = data.Session;\n        var challengeResponses = {};\n        challengeResponses.USERNAME = _this16.username;\n        var jsonReq = {\n          ChallengeName: 'MFA_SETUP',\n          ClientId: _this16.pool.getClientId(),\n          ChallengeResponses: challengeResponses,\n          Session: _this16.Session\n        };\n        if (_this16.getUserContextData()) {\n          jsonReq.UserContextData = _this16.getUserContextData();\n        }\n        _this16.client.request('RespondToAuthChallenge', jsonReq, function (errRespond, dataRespond) {\n          if (errRespond) {\n            return callback.onFailure(errRespond);\n          }\n          _this16.signInUserSession = _this16.getCognitoUserSession(dataRespond.AuthenticationResult);\n          _this16.cacheTokens();\n          return callback.onSuccess(_this16.signInUserSession);\n        });\n        return undefined;\n      });\n    } else {\n      this.client.request('VerifySoftwareToken', {\n        AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),\n        UserCode: totpCode,\n        FriendlyDeviceName: friendlyDeviceName\n      }, function (err, data) {\n        if (err) {\n          return callback.onFailure(err);\n        }\n        return callback.onSuccess(data);\n      });\n    }\n  };\n\n  return CognitoUser;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CognitoUser);\n\n//# sourceURL=webpack:///./node_modules/amazon-cognito-identity-js/es/CognitoUser.js?");

/***/ }),

/***/ "./node_modules/amazon-cognito-identity-js/es/CognitoUserAttribute.js":
/*!****************************************************************************!*\
  !*** ./node_modules/amazon-cognito-identity-js/es/CognitoUserAttribute.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*!\n * Copyright 2016 Amazon.com,\n * Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Amazon Software License (the \"License\").\n * You may not use this file except in compliance with the\n * License. A copy of the License is located at\n *\n *     http://aws.amazon.com/asl/\n *\n * or in the \"license\" file accompanying this file. This file is\n * distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, express or implied. See the License\n * for the specific language governing permissions and\n * limitations under the License.\n */\n\n/** @class */\nvar CognitoUserAttribute = function () {\n  /**\n   * Constructs a new CognitoUserAttribute object\n   * @param {string=} Name The record's name\n   * @param {string=} Value The record's value\n   */\n  function CognitoUserAttribute() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        Name = _ref.Name,\n        Value = _ref.Value;\n\n    _classCallCheck(this, CognitoUserAttribute);\n\n    this.Name = Name || '';\n    this.Value = Value || '';\n  }\n\n  /**\n   * @returns {string} the record's value.\n   */\n\n\n  CognitoUserAttribute.prototype.getValue = function getValue() {\n    return this.Value;\n  };\n\n  /**\n   * Sets the record's value.\n   * @param {string} value The new value.\n   * @returns {CognitoUserAttribute} The record for method chaining.\n   */\n\n\n  CognitoUserAttribute.prototype.setValue = function setValue(value) {\n    this.Value = value;\n    return this;\n  };\n\n  /**\n   * @returns {string} the record's name.\n   */\n\n\n  CognitoUserAttribute.prototype.getName = function getName() {\n    return this.Name;\n  };\n\n  /**\n   * Sets the record's name\n   * @param {string} name The new name.\n   * @returns {CognitoUserAttribute} The record for method chaining.\n   */\n\n\n  CognitoUserAttribute.prototype.setName = function setName(name) {\n    this.Name = name;\n    return this;\n  };\n\n  /**\n   * @returns {string} a string representation of the record.\n   */\n\n\n  CognitoUserAttribute.prototype.toString = function toString() {\n    return JSON.stringify(this);\n  };\n\n  /**\n   * @returns {object} a flat object representing the record.\n   */\n\n\n  CognitoUserAttribute.prototype.toJSON = function toJSON() {\n    return {\n      Name: this.Name,\n      Value: this.Value\n    };\n  };\n\n  return CognitoUserAttribute;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CognitoUserAttribute);\n\n//# sourceURL=webpack:///./node_modules/amazon-cognito-identity-js/es/CognitoUserAttribute.js?");

/***/ }),

/***/ "./node_modules/amazon-cognito-identity-js/es/CognitoUserPool.js":
/*!***********************************************************************!*\
  !*** ./node_modules/amazon-cognito-identity-js/es/CognitoUserPool.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Client */ \"./node_modules/amazon-cognito-identity-js/es/Client.js\");\n/* harmony import */ var _CognitoUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CognitoUser */ \"./node_modules/amazon-cognito-identity-js/es/CognitoUser.js\");\n/* harmony import */ var _StorageHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StorageHelper */ \"./node_modules/amazon-cognito-identity-js/es/StorageHelper.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*!\n * Copyright 2016 Amazon.com,\n * Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Amazon Software License (the \"License\").\n * You may not use this file except in compliance with the\n * License. A copy of the License is located at\n *\n *     http://aws.amazon.com/asl/\n *\n * or in the \"license\" file accompanying this file. This file is\n * distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, express or implied. See the License\n * for the specific language governing permissions and\n * limitations under the License.\n */\n\n\n\n\n\n/** @class */\n\nvar CognitoUserPool = function () {\n  /**\n   * Constructs a new CognitoUserPool object\n   * @param {object} data Creation options.\n   * @param {string} data.UserPoolId Cognito user pool id.\n   * @param {string} data.ClientId User pool application client id.\n   * @param {object} data.Storage Optional storage object.\n   * @param {boolean} data.AdvancedSecurityDataCollectionFlag Optional:\n   *        boolean flag indicating if the data collection is enabled\n   *        to support cognito advanced security features. By default, this\n   *        flag is set to true.\n   */\n  function CognitoUserPool(data) {\n    _classCallCheck(this, CognitoUserPool);\n\n    var _ref = data || {},\n        UserPoolId = _ref.UserPoolId,\n        ClientId = _ref.ClientId,\n        endpoint = _ref.endpoint,\n        AdvancedSecurityDataCollectionFlag = _ref.AdvancedSecurityDataCollectionFlag;\n\n    if (!UserPoolId || !ClientId) {\n      throw new Error('Both UserPoolId and ClientId are required.');\n    }\n    if (!/^[\\w-]+_.+$/.test(UserPoolId)) {\n      throw new Error('Invalid UserPoolId format.');\n    }\n    var region = UserPoolId.split('_')[0];\n\n    this.userPoolId = UserPoolId;\n    this.clientId = ClientId;\n\n    this.client = new _Client__WEBPACK_IMPORTED_MODULE_0__[\"default\"](region, endpoint);\n\n    /**\n     * By default, AdvancedSecurityDataCollectionFlag is set to true,\n     * if no input value is provided.\n     */\n    this.advancedSecurityDataCollectionFlag = AdvancedSecurityDataCollectionFlag !== false;\n\n    this.storage = data.Storage || new _StorageHelper__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().getStorage();\n  }\n\n  /**\n   * @returns {string} the user pool id\n   */\n\n\n  CognitoUserPool.prototype.getUserPoolId = function getUserPoolId() {\n    return this.userPoolId;\n  };\n\n  /**\n   * @returns {string} the client id\n   */\n\n\n  CognitoUserPool.prototype.getClientId = function getClientId() {\n    return this.clientId;\n  };\n\n  /**\n   * @typedef {object} SignUpResult\n   * @property {CognitoUser} user New user.\n   * @property {bool} userConfirmed If the user is already confirmed.\n   */\n  /**\n   * method for signing up a user\n   * @param {string} username User's username.\n   * @param {string} password Plain-text initial password entered by user.\n   * @param {(AttributeArg[])=} userAttributes New user attributes.\n   * @param {(AttributeArg[])=} validationData Application metadata.\n   * @param {nodeCallback<SignUpResult>} callback Called on error or with the new user.\n   * @returns {void}\n   */\n\n\n  CognitoUserPool.prototype.signUp = function signUp(username, password, userAttributes, validationData, callback) {\n    var _this = this;\n\n    var jsonReq = {\n      ClientId: this.clientId,\n      Username: username,\n      Password: password,\n      UserAttributes: userAttributes,\n      ValidationData: validationData\n    };\n    if (this.getUserContextData(username)) {\n      jsonReq.UserContextData = this.getUserContextData(username);\n    }\n    this.client.request('SignUp', jsonReq, function (err, data) {\n      if (err) {\n        return callback(err, null);\n      }\n\n      var cognitoUser = {\n        Username: username,\n        Pool: _this,\n        Storage: _this.storage\n      };\n\n      var returnData = {\n        user: new _CognitoUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"](cognitoUser),\n        userConfirmed: data.UserConfirmed,\n        userSub: data.UserSub\n      };\n\n      return callback(null, returnData);\n    });\n  };\n\n  /**\n   * method for getting the current user of the application from the local storage\n   *\n   * @returns {CognitoUser} the user retrieved from storage\n   */\n\n\n  CognitoUserPool.prototype.getCurrentUser = function getCurrentUser() {\n    var lastUserKey = 'CognitoIdentityServiceProvider.' + this.clientId + '.LastAuthUser';\n\n    var lastAuthUser = this.storage.getItem(lastUserKey);\n    if (lastAuthUser) {\n      var cognitoUser = {\n        Username: lastAuthUser,\n        Pool: this,\n        Storage: this.storage\n      };\n\n      return new _CognitoUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"](cognitoUser);\n    }\n\n    return null;\n  };\n\n  /**\n   * This method returns the encoded data string used for cognito advanced security feature.\n   * This would be generated only when developer has included the JS used for collecting the\n   * data on their client. Please refer to documentation to know more about using AdvancedSecurity\n   * features\n   * @param {string} username the username for the context data\n   * @returns {string} the user context data\n   **/\n\n\n  CognitoUserPool.prototype.getUserContextData = function getUserContextData(username) {\n    if (typeof AmazonCognitoAdvancedSecurityData === 'undefined') {\n      return undefined;\n    }\n    /* eslint-disable */\n    var amazonCognitoAdvancedSecurityDataConst = AmazonCognitoAdvancedSecurityData;\n    /* eslint-enable */\n\n    if (this.advancedSecurityDataCollectionFlag) {\n      var advancedSecurityData = amazonCognitoAdvancedSecurityDataConst.getData(username, this.userPoolId, this.clientId);\n      if (advancedSecurityData) {\n        var userContextData = {\n          EncodedData: advancedSecurityData\n        };\n        return userContextData;\n      }\n    }\n    return {};\n  };\n\n  return CognitoUserPool;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CognitoUserPool);\n\n//# sourceURL=webpack:///./node_modules/amazon-cognito-identity-js/es/CognitoUserPool.js?");

/***/ }),

/***/ "./node_modules/amazon-cognito-identity-js/es/CognitoUserSession.js":
/*!**************************************************************************!*\
  !*** ./node_modules/amazon-cognito-identity-js/es/CognitoUserSession.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*!\n * Copyright 2016 Amazon.com,\n * Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Amazon Software License (the \"License\").\n * You may not use this file except in compliance with the\n * License. A copy of the License is located at\n *\n *     http://aws.amazon.com/asl/\n *\n * or in the \"license\" file accompanying this file. This file is\n * distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, express or implied. See the License\n * for the specific language governing permissions and\n * limitations under the License.\n */\n\n/** @class */\nvar CognitoUserSession = function () {\n  /**\n   * Constructs a new CognitoUserSession object\n   * @param {CognitoIdToken} IdToken The session's Id token.\n   * @param {CognitoRefreshToken=} RefreshToken The session's refresh token.\n   * @param {CognitoAccessToken} AccessToken The session's access token.\n   * @param {int} ClockDrift The saved computer's clock drift or undefined to force calculation.\n   */\n  function CognitoUserSession() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        IdToken = _ref.IdToken,\n        RefreshToken = _ref.RefreshToken,\n        AccessToken = _ref.AccessToken,\n        ClockDrift = _ref.ClockDrift;\n\n    _classCallCheck(this, CognitoUserSession);\n\n    if (AccessToken == null || IdToken == null) {\n      throw new Error('Id token and Access Token must be present.');\n    }\n\n    this.idToken = IdToken;\n    this.refreshToken = RefreshToken;\n    this.accessToken = AccessToken;\n    this.clockDrift = ClockDrift === undefined ? this.calculateClockDrift() : ClockDrift;\n  }\n\n  /**\n   * @returns {CognitoIdToken} the session's Id token\n   */\n\n\n  CognitoUserSession.prototype.getIdToken = function getIdToken() {\n    return this.idToken;\n  };\n\n  /**\n   * @returns {CognitoRefreshToken} the session's refresh token\n   */\n\n\n  CognitoUserSession.prototype.getRefreshToken = function getRefreshToken() {\n    return this.refreshToken;\n  };\n\n  /**\n   * @returns {CognitoAccessToken} the session's access token\n   */\n\n\n  CognitoUserSession.prototype.getAccessToken = function getAccessToken() {\n    return this.accessToken;\n  };\n\n  /**\n   * @returns {int} the session's clock drift\n   */\n\n\n  CognitoUserSession.prototype.getClockDrift = function getClockDrift() {\n    return this.clockDrift;\n  };\n\n  /**\n   * @returns {int} the computer's clock drift\n   */\n\n\n  CognitoUserSession.prototype.calculateClockDrift = function calculateClockDrift() {\n    var now = Math.floor(new Date() / 1000);\n    var iat = Math.min(this.accessToken.getIssuedAt(), this.idToken.getIssuedAt());\n\n    return now - iat;\n  };\n\n  /**\n   * Checks to see if the session is still valid based on session expiry information found\n   * in tokens and the current time (adjusted with clock drift)\n   * @returns {boolean} if the session is still valid\n   */\n\n\n  CognitoUserSession.prototype.isValid = function isValid() {\n    var now = Math.floor(new Date() / 1000);\n    var adjusted = now - this.clockDrift;\n\n    return adjusted < this.accessToken.getExpiration() && adjusted < this.idToken.getExpiration();\n  };\n\n  return CognitoUserSession;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CognitoUserSession);\n\n//# sourceURL=webpack:///./node_modules/amazon-cognito-identity-js/es/CognitoUserSession.js?");

/***/ }),

/***/ "./node_modules/amazon-cognito-identity-js/es/CookieStorage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/amazon-cognito-identity-js/es/CookieStorage.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n/** @class */\n\nvar CookieStorage = function () {\n\n  /**\n   * Constructs a new CookieStorage object\n   * @param {object} data Creation options.\n   * @param {string} data.domain Cookies domain (mandatory).\n   * @param {string} data.path Cookies path (default: '/')\n   * @param {integer} data.expires Cookie expiration (in days, default: 365)\n   * @param {boolean} data.secure Cookie secure flag (default: true)\n   */\n  function CookieStorage(data) {\n    _classCallCheck(this, CookieStorage);\n\n    this.domain = data.domain;\n    if (data.path) {\n      this.path = data.path;\n    } else {\n      this.path = '/';\n    }\n    if (Object.prototype.hasOwnProperty.call(data, 'expires')) {\n      this.expires = data.expires;\n    } else {\n      this.expires = 365;\n    }\n    if (Object.prototype.hasOwnProperty.call(data, 'secure')) {\n      this.secure = data.secure;\n    } else {\n      this.secure = true;\n    }\n  }\n\n  /**\n   * This is used to set a specific item in storage\n   * @param {string} key - the key for the item\n   * @param {object} value - the value\n   * @returns {string} value that was set\n   */\n\n\n  CookieStorage.prototype.setItem = function setItem(key, value) {\n    js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"set\"](key, value, {\n      path: this.path,\n      expires: this.expires,\n      domain: this.domain,\n      secure: this.secure\n    });\n    return js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"get\"](key);\n  };\n\n  /**\n   * This is used to get a specific key from storage\n   * @param {string} key - the key for the item\n   * This is used to clear the storage\n   * @returns {string} the data item\n   */\n\n\n  CookieStorage.prototype.getItem = function getItem(key) {\n    return js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"get\"](key);\n  };\n\n  /**\n   * This is used to remove an item from storage\n   * @param {string} key - the key being set\n   * @returns {string} value - value that was deleted\n   */\n\n\n  CookieStorage.prototype.removeItem = function removeItem(key) {\n    return js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"remove\"](key, {\n      path: this.path,\n      domain: this.domain,\n      secure: this.secure\n    });\n  };\n\n  /**\n   * This is used to clear the storage\n   * @returns {string} nothing\n   */\n\n\n  CookieStorage.prototype.clear = function clear() {\n    var cookies = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"get\"]();\n    var index = void 0;\n    for (index = 0; index < cookies.length; ++index) {\n      js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"remove\"](cookies[index]);\n    }\n    return {};\n  };\n\n  return CookieStorage;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CookieStorage);\n\n//# sourceURL=webpack:///./node_modules/amazon-cognito-identity-js/es/CookieStorage.js?");

/***/ }),

/***/ "./node_modules/amazon-cognito-identity-js/es/DateHelper.js":
/*!******************************************************************!*\
  !*** ./node_modules/amazon-cognito-identity-js/es/DateHelper.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*!\n * Copyright 2016 Amazon.com,\n * Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Amazon Software License (the \"License\").\n * You may not use this file except in compliance with the\n * License. A copy of the License is located at\n *\n *     http://aws.amazon.com/asl/\n *\n * or in the \"license\" file accompanying this file. This file is\n * distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, express or implied. See the License\n * for the specific language governing permissions and\n * limitations under the License.\n */\n\nvar monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];\nvar weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\n\n/** @class */\n\nvar DateHelper = function () {\n  function DateHelper() {\n    _classCallCheck(this, DateHelper);\n  }\n\n  /**\n   * @returns {string} The current time in \"ddd MMM D HH:mm:ss UTC YYYY\" format.\n   */\n  DateHelper.prototype.getNowString = function getNowString() {\n    var now = new Date();\n\n    var weekDay = weekNames[now.getUTCDay()];\n    var month = monthNames[now.getUTCMonth()];\n    var day = now.getUTCDate();\n\n    var hours = now.getUTCHours();\n    if (hours < 10) {\n      hours = '0' + hours;\n    }\n\n    var minutes = now.getUTCMinutes();\n    if (minutes < 10) {\n      minutes = '0' + minutes;\n    }\n\n    var seconds = now.getUTCSeconds();\n    if (seconds < 10) {\n      seconds = '0' + seconds;\n    }\n\n    var year = now.getUTCFullYear();\n\n    // ddd MMM D HH:mm:ss UTC YYYY\n    var dateNow = weekDay + ' ' + month + ' ' + day + ' ' + hours + ':' + minutes + ':' + seconds + ' UTC ' + year;\n\n    return dateNow;\n  };\n\n  return DateHelper;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DateHelper);\n\n//# sourceURL=webpack:///./node_modules/amazon-cognito-identity-js/es/DateHelper.js?");

/***/ }),

/***/ "./node_modules/amazon-cognito-identity-js/es/StorageHelper.js":
/*!*********************************************************************!*\
  !*** ./node_modules/amazon-cognito-identity-js/es/StorageHelper.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*!\n * Copyright 2016 Amazon.com,\n * Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Amazon Software License (the \"License\").\n * You may not use this file except in compliance with the\n * License. A copy of the License is located at\n *\n *     http://aws.amazon.com/asl/\n *\n * or in the \"license\" file accompanying this file. This file is\n * distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, express or implied. See the License\n * for the specific language governing permissions and\n * limitations under the License.\n */\n\nvar dataMemory = {};\n\n/** @class */\n\nvar MemoryStorage = function () {\n  function MemoryStorage() {\n    _classCallCheck(this, MemoryStorage);\n  }\n\n  /**\n   * This is used to set a specific item in storage\n   * @param {string} key - the key for the item\n   * @param {object} value - the value\n   * @returns {string} value that was set\n   */\n  MemoryStorage.setItem = function setItem(key, value) {\n    dataMemory[key] = value;\n    return dataMemory[key];\n  };\n\n  /**\n   * This is used to get a specific key from storage\n   * @param {string} key - the key for the item\n   * This is used to clear the storage\n   * @returns {string} the data item\n   */\n\n\n  MemoryStorage.getItem = function getItem(key) {\n    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined;\n  };\n\n  /**\n   * This is used to remove an item from storage\n   * @param {string} key - the key being set\n   * @returns {string} value - value that was deleted\n   */\n\n\n  MemoryStorage.removeItem = function removeItem(key) {\n    return delete dataMemory[key];\n  };\n\n  /**\n   * This is used to clear the storage\n   * @returns {string} nothing\n   */\n\n\n  MemoryStorage.clear = function clear() {\n    dataMemory = {};\n    return dataMemory;\n  };\n\n  return MemoryStorage;\n}();\n\n/** @class */\n\n\nvar StorageHelper = function () {\n\n  /**\n   * This is used to get a storage object\n   * @returns {object} the storage\n   */\n  function StorageHelper() {\n    _classCallCheck(this, StorageHelper);\n\n    try {\n      this.storageWindow = window.localStorage;\n      this.storageWindow.setItem('aws.cognito.test-ls', 1);\n      this.storageWindow.removeItem('aws.cognito.test-ls');\n    } catch (exception) {\n      this.storageWindow = MemoryStorage;\n    }\n  }\n\n  /**\n   * This is used to return the storage\n   * @returns {object} the storage\n   */\n\n\n  StorageHelper.prototype.getStorage = function getStorage() {\n    return this.storageWindow;\n  };\n\n  return StorageHelper;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StorageHelper);\n\n//# sourceURL=webpack:///./node_modules/amazon-cognito-identity-js/es/StorageHelper.js?");

/***/ }),

/***/ "./node_modules/amazon-cognito-identity-js/es/UserAgent.js":
/*!*****************************************************************!*\
  !*** ./node_modules/amazon-cognito-identity-js/es/UserAgent.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// class for defining the amzn user-agent\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserAgent);\n// constructor\nfunction UserAgent() {}\n// public\nUserAgent.prototype.userAgent = 'aws-amplify/0.1.x js';\n\n//# sourceURL=webpack:///./node_modules/amazon-cognito-identity-js/es/UserAgent.js?");

/***/ }),

/***/ "./node_modules/amazon-cognito-identity-js/es/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/amazon-cognito-identity-js/es/index.js ***!
  \*************************************************************/
/*! exports provided: AuthenticationDetails, AuthenticationHelper, CognitoAccessToken, CognitoIdToken, CognitoRefreshToken, CognitoUser, CognitoUserAttribute, CognitoUserPool, CognitoUserSession, CookieStorage, DateHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AuthenticationDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthenticationDetails */ \"./node_modules/amazon-cognito-identity-js/es/AuthenticationDetails.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AuthenticationDetails\", function() { return _AuthenticationDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthenticationHelper */ \"./node_modules/amazon-cognito-identity-js/es/AuthenticationHelper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AuthenticationHelper\", function() { return _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _CognitoAccessToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CognitoAccessToken */ \"./node_modules/amazon-cognito-identity-js/es/CognitoAccessToken.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CognitoAccessToken\", function() { return _CognitoAccessToken__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _CognitoIdToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CognitoIdToken */ \"./node_modules/amazon-cognito-identity-js/es/CognitoIdToken.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CognitoIdToken\", function() { return _CognitoIdToken__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _CognitoRefreshToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CognitoRefreshToken */ \"./node_modules/amazon-cognito-identity-js/es/CognitoRefreshToken.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CognitoRefreshToken\", function() { return _CognitoRefreshToken__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _CognitoUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CognitoUser */ \"./node_modules/amazon-cognito-identity-js/es/CognitoUser.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CognitoUser\", function() { return _CognitoUser__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _CognitoUserAttribute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CognitoUserAttribute */ \"./node_modules/amazon-cognito-identity-js/es/CognitoUserAttribute.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CognitoUserAttribute\", function() { return _CognitoUserAttribute__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _CognitoUserPool__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CognitoUserPool */ \"./node_modules/amazon-cognito-identity-js/es/CognitoUserPool.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CognitoUserPool\", function() { return _CognitoUserPool__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _CognitoUserSession__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CognitoUserSession */ \"./node_modules/amazon-cognito-identity-js/es/CognitoUserSession.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CognitoUserSession\", function() { return _CognitoUserSession__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _CookieStorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CookieStorage */ \"./node_modules/amazon-cognito-identity-js/es/CookieStorage.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CookieStorage\", function() { return _CookieStorage__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _DateHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DateHelper */ \"./node_modules/amazon-cognito-identity-js/es/DateHelper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DateHelper\", function() { return _DateHelper__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/*!\n * Copyright 2016 Amazon.com,\n * Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Amazon Software License (the \"License\").\n * You may not use this file except in compliance with the\n * License. A copy of the License is located at\n *\n *     http://aws.amazon.com/asl/\n *\n * or in the \"license\" file accompanying this file. This file is\n * distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, express or implied. See the License\n * for the specific language governing permissions and\n * limitations under the License.\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/amazon-cognito-identity-js/es/index.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/babel-polyfill/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\n__webpack_require__(/*! core-js/shim */ \"./node_modules/babel-polyfill/node_modules/core-js/shim.js\");\n\n__webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n\n__webpack_require__(/*! core-js/fn/regexp/escape */ \"./node_modules/babel-polyfill/node_modules/core-js/fn/regexp/escape.js\");\n\nif (global._babelPolyfill) {\n  throw new Error(\"only one instance of babel-polyfill is allowed\");\n}\nglobal._babelPolyfill = true;\n\nvar DEFINE_PROPERTY = \"defineProperty\";\nfunction define(O, key, value) {\n  O[key] || Object[DEFINE_PROPERTY](O, key, {\n    writable: true,\n    configurable: true,\n    value: value\n  });\n}\n\ndefine(String.prototype, \"padLeft\", \"\".padStart);\ndefine(String.prototype, \"padRight\", \"\".padEnd);\n\n\"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill\".split(\",\").forEach(function (key) {\n  [][key] && define(Array, key, Function.call.bind([][key]));\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/lib/index.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/fn/regexp/escape.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/fn/regexp/escape.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/core.regexp.escape */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/core.regexp.escape.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\").RegExp.escape;\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/fn/regexp/escape.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_a-number-value.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_a-number-value.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cof = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\");\nmodule.exports = function (it, msg) {\n  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);\n  return +it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_a-number-value.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.31 Array.prototype[@@unscopables]\nvar UNSCOPABLES = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('unscopables');\nvar ArrayProto = Array.prototype;\nif (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\")(ArrayProto, UNSCOPABLES, {});\nmodule.exports = function (key) {\n  ArrayProto[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_advance-string-index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_advance-string-index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar at = __webpack_require__(/*! ./_string-at */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js\")(true);\n\n // `AdvanceStringIndex` abstract operation\n// https://tc39.github.io/ecma262/#sec-advancestringindex\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? at(S, index).length : 1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_advance-string-index.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_array-copy-within.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_array-copy-within.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {\n  var O = toObject(this);\n  var len = toLength(O.length);\n  var to = toAbsoluteIndex(target, len);\n  var from = toAbsoluteIndex(start, len);\n  var end = arguments.length > 2 ? arguments[2] : undefined;\n  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);\n  var inc = 1;\n  if (from < to && to < from + count) {\n    inc = -1;\n    from += count - 1;\n    to += count - 1;\n  }\n  while (count-- > 0) {\n    if (from in O) O[to] = O[from];\n    else delete O[to];\n    to += inc;\n    from += inc;\n  } return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_array-copy-within.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_array-fill.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_array-fill.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function fill(value /* , start = 0, end = @length */) {\n  var O = toObject(this);\n  var length = toLength(O.length);\n  var aLen = arguments.length;\n  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);\n  var end = aLen > 2 ? arguments[2] : undefined;\n  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);\n  while (endPos > index) O[index++] = value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_array-fill.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_array-from-iterable.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_array-from-iterable.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js\");\n\nmodule.exports = function (iter, ITERATOR) {\n  var result = [];\n  forOf(iter, false, result.push, result, ITERATOR);\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_array-from-iterable.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 0 -> Array#forEach\n// 1 -> Array#map\n// 2 -> Array#filter\n// 3 -> Array#some\n// 4 -> Array#every\n// 5 -> Array#find\n// 6 -> Array#findIndex\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar asc = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-create.js\");\nmodule.exports = function (TYPE, $create) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  var create = $create || asc;\n  return function ($this, callbackfn, that) {\n    var O = toObject($this);\n    var self = IObject(O);\n    var f = ctx(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var val, res;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      val = self[index];\n      res = f(val, index, O);\n      if (TYPE) {\n        if (IS_MAP) result[index] = res;   // map\n        else if (res) switch (TYPE) {\n          case 3: return true;             // some\n          case 5: return val;              // find\n          case 6: return index;            // findIndex\n          case 2: result.push(val);        // filter\n        } else if (IS_EVERY) return false; // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_array-reduce.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_array-reduce.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = function (that, callbackfn, aLen, memo, isRight) {\n  aFunction(callbackfn);\n  var O = toObject(that);\n  var self = IObject(O);\n  var length = toLength(O.length);\n  var index = isRight ? length - 1 : 0;\n  var i = isRight ? -1 : 1;\n  if (aLen < 2) for (;;) {\n    if (index in self) {\n      memo = self[index];\n      index += i;\n      break;\n    }\n    index += i;\n    if (isRight ? index < 0 : length <= index) {\n      throw TypeError('Reduce of empty array with no initial value');\n    }\n  }\n  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {\n    memo = callbackfn(memo, self[index], index, O);\n  }\n  return memo;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_array-reduce.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-constructor.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-constructor.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (original) {\n  var C;\n  if (isArray(original)) {\n    C = original.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return C === undefined ? Array : C;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-constructor.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-create.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-create.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 9.4.2.3 ArraySpeciesCreate(originalArray, length)\nvar speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-constructor.js\");\n\nmodule.exports = function (original, length) {\n  return new (speciesConstructor(original))(length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-create.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_bind.js":
/*!***************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_bind.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_invoke.js\");\nvar arraySlice = [].slice;\nvar factories = {};\n\nvar construct = function (F, len, args) {\n  if (!(len in factories)) {\n    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';\n    // eslint-disable-next-line no-new-func\n    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');\n  } return factories[len](F, args);\n};\n\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = arraySlice.call(arguments, 1);\n  var bound = function (/* args... */) {\n    var args = partArgs.concat(arraySlice.call(arguments));\n    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);\n  };\n  if (isObject(fn.prototype)) bound.prototype = fn.prototype;\n  return bound;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_bind.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js":
/*!**************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-strong.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-strong.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f;\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js\");\nvar $iterDefine = __webpack_require__(/*! ./_iter-define */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-define.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-step.js\");\nvar setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\");\nvar fastKey = __webpack_require__(/*! ./_meta */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js\").fastKey;\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js\");\nvar SIZE = DESCRIPTORS ? '_s' : 'size';\n\nvar getEntry = function (that, key) {\n  // fast case\n  var index = fastKey(key);\n  var entry;\n  if (index !== 'F') return that._i[index];\n  // frozen object case\n  for (entry = that._f; entry; entry = entry.n) {\n    if (entry.k == key) return entry;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;         // collection type\n      that._i = create(null); // index\n      that._f = undefined;    // first entry\n      that._l = undefined;    // last entry\n      that[SIZE] = 0;         // size\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.1.3.1 Map.prototype.clear()\n      // 23.2.3.2 Set.prototype.clear()\n      clear: function clear() {\n        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {\n          entry.r = true;\n          if (entry.p) entry.p = entry.p.n = undefined;\n          delete data[entry.i];\n        }\n        that._f = that._l = undefined;\n        that[SIZE] = 0;\n      },\n      // 23.1.3.3 Map.prototype.delete(key)\n      // 23.2.3.4 Set.prototype.delete(value)\n      'delete': function (key) {\n        var that = validate(this, NAME);\n        var entry = getEntry(that, key);\n        if (entry) {\n          var next = entry.n;\n          var prev = entry.p;\n          delete that._i[entry.i];\n          entry.r = true;\n          if (prev) prev.n = next;\n          if (next) next.p = prev;\n          if (that._f == entry) that._f = next;\n          if (that._l == entry) that._l = prev;\n          that[SIZE]--;\n        } return !!entry;\n      },\n      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)\n      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)\n      forEach: function forEach(callbackfn /* , that = undefined */) {\n        validate(this, NAME);\n        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n        var entry;\n        while (entry = entry ? entry.n : this._f) {\n          f(entry.v, entry.k, this);\n          // revert to the last existing entry\n          while (entry && entry.r) entry = entry.p;\n        }\n      },\n      // 23.1.3.7 Map.prototype.has(key)\n      // 23.2.3.7 Set.prototype.has(value)\n      has: function has(key) {\n        return !!getEntry(validate(this, NAME), key);\n      }\n    });\n    if (DESCRIPTORS) dP(C.prototype, 'size', {\n      get: function () {\n        return validate(this, NAME)[SIZE];\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var entry = getEntry(that, key);\n    var prev, index;\n    // change existing entry\n    if (entry) {\n      entry.v = value;\n    // create new entry\n    } else {\n      that._l = entry = {\n        i: index = fastKey(key, true), // <- index\n        k: key,                        // <- key\n        v: value,                      // <- value\n        p: prev = that._l,             // <- previous entry\n        n: undefined,                  // <- next entry\n        r: false                       // <- removed\n      };\n      if (!that._f) that._f = entry;\n      if (prev) prev.n = entry;\n      that[SIZE]++;\n      // add to index\n      if (index !== 'F') that._i[index] = entry;\n    } return that;\n  },\n  getEntry: getEntry,\n  setStrong: function (C, NAME, IS_MAP) {\n    // add .keys, .values, .entries, [@@iterator]\n    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11\n    $iterDefine(C, NAME, function (iterated, kind) {\n      this._t = validate(iterated, NAME); // target\n      this._k = kind;                     // kind\n      this._l = undefined;                // previous\n    }, function () {\n      var that = this;\n      var kind = that._k;\n      var entry = that._l;\n      // revert to the last existing entry\n      while (entry && entry.r) entry = entry.p;\n      // get next entry\n      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {\n        // or finish the iteration\n        that._t = undefined;\n        return step(1);\n      }\n      // return step by kind\n      if (kind == 'keys') return step(0, entry.k);\n      if (kind == 'values') return step(0, entry.v);\n      return step(0, [entry.k, entry.v]);\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);\n\n    // add [@@species], 23.1.2.2, 23.2.2.2\n    setSpecies(NAME);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-strong.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-to-json.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-to-json.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js\");\nvar from = __webpack_require__(/*! ./_array-from-iterable */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-from-iterable.js\");\nmodule.exports = function (NAME) {\n  return function toJSON() {\n    if (classof(this) != NAME) throw TypeError(NAME + \"#toJSON isn't generic\");\n    return from(this);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-to-json.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-weak.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-weak.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js\");\nvar getWeak = __webpack_require__(/*! ./_meta */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js\").getWeak;\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js\");\nvar createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\");\nvar $has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js\");\nvar arrayFind = createArrayMethod(5);\nvar arrayFindIndex = createArrayMethod(6);\nvar id = 0;\n\n// fallback for uncaught frozen keys\nvar uncaughtFrozenStore = function (that) {\n  return that._l || (that._l = new UncaughtFrozenStore());\n};\nvar UncaughtFrozenStore = function () {\n  this.a = [];\n};\nvar findUncaughtFrozen = function (store, key) {\n  return arrayFind(store.a, function (it) {\n    return it[0] === key;\n  });\n};\nUncaughtFrozenStore.prototype = {\n  get: function (key) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) return entry[1];\n  },\n  has: function (key) {\n    return !!findUncaughtFrozen(this, key);\n  },\n  set: function (key, value) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) entry[1] = value;\n    else this.a.push([key, value]);\n  },\n  'delete': function (key) {\n    var index = arrayFindIndex(this.a, function (it) {\n      return it[0] === key;\n    });\n    if (~index) this.a.splice(index, 1);\n    return !!~index;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;      // collection type\n      that._i = id++;      // collection id\n      that._l = undefined; // leak store for uncaught frozen objects\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.3.3.2 WeakMap.prototype.delete(key)\n      // 23.4.3.3 WeakSet.prototype.delete(value)\n      'delete': function (key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);\n        return data && $has(data, this._i) && delete data[this._i];\n      },\n      // 23.3.3.4 WeakMap.prototype.has(key)\n      // 23.4.3.4 WeakSet.prototype.has(value)\n      has: function has(key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);\n        return data && $has(data, this._i);\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var data = getWeak(anObject(key), true);\n    if (data === true) uncaughtFrozenStore(that).set(key, value);\n    else data[that._i] = value;\n    return that;\n  },\n  ufstore: uncaughtFrozenStore\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-weak.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\nvar $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_inherit-if-required.js\");\n\nmodule.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {\n  var Base = global[NAME];\n  var C = Base;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var proto = C && C.prototype;\n  var O = {};\n  var fixMethod = function (KEY) {\n    var fn = proto[KEY];\n    redefine(proto, KEY,\n      KEY == 'delete' ? function (a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'has' ? function has(a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'get' ? function get(a) {\n        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }\n        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }\n    );\n  };\n  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {\n    new C().entries().next();\n  }))) {\n    // create collection constructor\n    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);\n    redefineAll(C.prototype, methods);\n    meta.NEED = true;\n  } else {\n    var instance = new C();\n    // early implementations not supports chaining\n    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;\n    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false\n    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });\n    // most early implementations doesn't supports iterables, most modern - not close it correctly\n    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new\n    // for early implementations -0 and +0 not the same\n    var BUGGY_ZERO = !IS_WEAK && fails(function () {\n      // V8 ~ Chromium 42- fails only with 5+ elements\n      var $instance = new C();\n      var index = 5;\n      while (index--) $instance[ADDER](index, index);\n      return !$instance.has(-0);\n    });\n    if (!ACCEPT_ITERABLES) {\n      C = wrapper(function (target, iterable) {\n        anInstance(target, C, NAME);\n        var that = inheritIfRequired(new Base(), target, C);\n        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n        return that;\n      });\n      C.prototype = proto;\n      proto.constructor = C;\n    }\n    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {\n      fixMethod('delete');\n      fixMethod('has');\n      IS_MAP && fixMethod('get');\n    }\n    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);\n    // weak collections should not contains .clear method\n    if (IS_WEAK && proto.clear) delete proto.clear;\n  }\n\n  setToStringTag(C, NAME);\n\n  O[NAME] = C;\n  $export($export.G + $export.W + $export.F * (C != Base), O);\n\n  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);\n\n  return C;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js":
/*!***************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.6.5' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_create-property.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_create-property.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js\");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));\n  else object[index] = value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_create-property.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js":
/*!**************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-iso-string.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\nvar getTime = Date.prototype.getTime;\nvar $toISOString = Date.prototype.toISOString;\n\nvar lz = function (num) {\n  return num > 9 ? num : '0' + num;\n};\n\n// PhantomJS / old WebKit has a broken implementations\nmodule.exports = (fails(function () {\n  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';\n}) || !fails(function () {\n  $toISOString.call(new Date(NaN));\n})) ? function toISOString() {\n  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');\n  var d = this;\n  var y = d.getUTCFullYear();\n  var m = d.getUTCMilliseconds();\n  var s = y < 0 ? '-' : y > 9999 ? '+' : '';\n  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +\n    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +\n    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +\n    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';\n} : $toISOString;\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-iso-string.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-primitive.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-primitive.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\nvar NUMBER = 'number';\n\nmodule.exports = function (hint) {\n  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');\n  return toPrimitive(anObject(this), hint != NUMBER);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-primitive.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_dom-create.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_dom-create.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-bug-keys.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-bug-keys.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-keys.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-keys.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    // export native or passed\n    out = (own ? target : source)[key];\n    // bind timers to global for call from export context\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // extend global\n    if (target) redefine(target, key, out, type & $export.U);\n    // export\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\nglobal.core = core;\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_fails-is-regexp.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (KEY) {\n  var re = /./;\n  try {\n    '/./'[KEY](re);\n  } catch (e) {\n    try {\n      re[MATCH] = false;\n      return !'/./'[KEY](re);\n    } catch (f) { /* empty */ }\n  } return true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_fails-is-regexp.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js":
/*!****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.exec */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.exec.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\");\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec.js\");\n\nvar SPECIES = wks('species');\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  // #replace needs built-in support for named groups.\n  // #match works fine because it just return the exec results, even if it has\n  // a \"grops\" property.\n  var re = /./;\n  re.exec = function () {\n    var result = [];\n    result.groups = { a: '7' };\n    return result;\n  };\n  return ''.replace(re, '$<a>') !== '7';\n});\n\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {\n  // Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n  var re = /(?:)/;\n  var originalExec = re.exec;\n  re.exec = function () { return originalExec.apply(this, arguments); };\n  var result = 'ab'.split(re);\n  return result.length === 2 && result[0] === 'a' && result[1] === 'b';\n})();\n\nmodule.exports = function (KEY, length, exec) {\n  var SYMBOL = wks(KEY);\n\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  });\n\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n    re.exec = function () { execCalled = true; return null; };\n    if (KEY === 'split') {\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n      re.constructor[SPECIES] = function () { return re; };\n    }\n    re[SYMBOL]('');\n    return !execCalled;\n  }) : undefined;\n\n  if (\n    !DELEGATES_TO_SYMBOL ||\n    !DELEGATES_TO_EXEC ||\n    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||\n    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)\n  ) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var fns = exec(\n      defined,\n      SYMBOL,\n      ''[KEY],\n      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {\n        if (regexp.exec === regexpExec) {\n          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n            // The native String method already delegates to @@method (this\n            // polyfilled function), leasing to infinite recursion.\n            // We avoid it by directly calling the native @@method method.\n            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };\n          }\n          return { done: true, value: nativeMethod.call(str, regexp, arg2) };\n        }\n        return { done: false };\n      }\n    );\n    var strfn = fns[0];\n    var rxfn = fns[1];\n\n    redefine(String.prototype, KEY, strfn);\n    hide(RegExp.prototype, SYMBOL, length == 2\n      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n      // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n      ? function (string, arg) { return rxfn.call(string, this, arg); }\n      // 21.2.5.6 RegExp.prototype[@@match](string)\n      // 21.2.5.9 RegExp.prototype[@@search](string)\n      : function (string) { return rxfn.call(string, this); }\n    );\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js":
/*!****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.2.5.3 get RegExp.prototype.flags\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_flatten-into-array.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_flatten-into-array.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\nvar IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('isConcatSpreadable');\n\nfunction flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {\n  var targetIndex = start;\n  var sourceIndex = 0;\n  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;\n  var element, spreadable;\n\n  while (sourceIndex < sourceLen) {\n    if (sourceIndex in source) {\n      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];\n\n      spreadable = false;\n      if (isObject(element)) {\n        spreadable = element[IS_CONCAT_SPREADABLE];\n        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);\n      }\n\n      if (spreadable && depth > 0) {\n        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;\n      } else {\n        if (targetIndex >= 0x1fffffffffffff) throw TypeError();\n        target[targetIndex] = element;\n      }\n\n      targetIndex++;\n    }\n    sourceIndex++;\n  }\n  return targetIndex;\n}\n\nmodule.exports = flattenIntoArray;\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_flatten-into-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_function-to-string.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_function-to-string.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_shared */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js\")('native-function-to-string', Function.toString);\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_function-to-string.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js":
/*!**************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js":
/*!***************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_html.js":
/*!***************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_html.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_html.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_ie8-dom-define.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_inherit-if-required.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_inherit-if-required.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar setPrototypeOf = __webpack_require__(/*! ./_set-proto */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-proto.js\").set;\nmodule.exports = function (that, target, C) {\n  var S = target.constructor;\n  var P;\n  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {\n    setPrototypeOf(that, P);\n  } return that;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_inherit-if-required.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_invoke.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_invoke.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_invoke.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array-iter.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array-iter.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_is-integer.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_is-integer.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.3 Number.isInteger(number)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar floor = Math.floor;\nmodule.exports = function isInteger(it) {\n  return !isObject(it) && isFinite(it) && floor(it) === it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_is-integer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.8 IsRegExp(argument)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\");\nvar MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-call.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-call.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-create.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-create.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-define.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-define.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-step.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-step.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_math-expm1.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_math-expm1.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 20.2.2.14 Math.expm1(x)\nvar $expm1 = Math.expm1;\nmodule.exports = (!$expm1\n  // Old FF bug\n  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168\n  // Tor Browser bug\n  || $expm1(-2e-17) != -2e-17\n) ? function expm1(x) {\n  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;\n} : $expm1;\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_math-expm1.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_math-fround.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_math-fround.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.16 Math.fround(x)\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-sign.js\");\nvar pow = Math.pow;\nvar EPSILON = pow(2, -52);\nvar EPSILON32 = pow(2, -23);\nvar MAX32 = pow(2, 127) * (2 - EPSILON32);\nvar MIN32 = pow(2, -126);\n\nvar roundTiesToEven = function (n) {\n  return n + 1 / EPSILON - 1 / EPSILON;\n};\n\nmodule.exports = Math.fround || function fround(x) {\n  var $abs = Math.abs(x);\n  var $sign = sign(x);\n  var a, result;\n  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;\n  a = (1 + EPSILON32 / EPSILON) * $abs;\n  result = a - (a - $abs);\n  // eslint-disable-next-line no-self-compare\n  if (result > MAX32 || result != result) return $sign * Infinity;\n  return $sign * result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_math-fround.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_math-log1p.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_math-log1p.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 20.2.2.20 Math.log1p(x)\nmodule.exports = Math.log1p || function log1p(x) {\n  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_math-log1p.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_math-scale.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_math-scale.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nmodule.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {\n  if (\n    arguments.length === 0\n      // eslint-disable-next-line no-self-compare\n      || x != x\n      // eslint-disable-next-line no-self-compare\n      || inLow != inLow\n      // eslint-disable-next-line no-self-compare\n      || inHigh != inHigh\n      // eslint-disable-next-line no-self-compare\n      || outLow != outLow\n      // eslint-disable-next-line no-self-compare\n      || outHigh != outHigh\n  ) return NaN;\n  if (x === Infinity || x === -Infinity) return x;\n  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_math-scale.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_math-sign.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_math-sign.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 20.2.2.28 Math.sign(x)\nmodule.exports = Math.sign || function sign(x) {\n  // eslint-disable-next-line no-self-compare\n  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_math-sign.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js":
/*!***************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Map = __webpack_require__(/*! ./es6.map */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.map.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js\")('metadata');\nvar store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-map.js\"))());\n\nvar getOrCreateMetadataMap = function (target, targetKey, create) {\n  var targetMetadata = store.get(target);\n  if (!targetMetadata) {\n    if (!create) return undefined;\n    store.set(target, targetMetadata = new Map());\n  }\n  var keyMetadata = targetMetadata.get(targetKey);\n  if (!keyMetadata) {\n    if (!create) return undefined;\n    targetMetadata.set(targetKey, keyMetadata = new Map());\n  } return keyMetadata;\n};\nvar ordinaryHasOwnMetadata = function (MetadataKey, O, P) {\n  var metadataMap = getOrCreateMetadataMap(O, P, false);\n  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);\n};\nvar ordinaryGetOwnMetadata = function (MetadataKey, O, P) {\n  var metadataMap = getOrCreateMetadataMap(O, P, false);\n  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);\n};\nvar ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {\n  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);\n};\nvar ordinaryOwnMetadataKeys = function (target, targetKey) {\n  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);\n  var keys = [];\n  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });\n  return keys;\n};\nvar toMetaKey = function (it) {\n  return it === undefined || typeof it == 'symbol' ? it : String(it);\n};\nvar exp = function (O) {\n  $export($export.S, 'Reflect', O);\n};\n\nmodule.exports = {\n  store: store,\n  map: getOrCreateMetadataMap,\n  has: ordinaryHasOwnMetadata,\n  get: ordinaryGetOwnMetadata,\n  set: ordinaryDefineOwnMetadata,\n  keys: ordinaryOwnMetadataKeys,\n  key: toMetaKey,\n  exp: exp\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_microtask.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_microtask.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar macrotask = __webpack_require__(/*! ./_task */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_task.js\").set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\")(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_microtask.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_new-promise-capability.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_new-promise-capability.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-assign.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-assign.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.2.1 Object.assign(target, source, ...)\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js\");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_object-assign.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dps.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dps.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Forced replacement prototype accessors methods\nmodule.exports = __webpack_require__(/*! ./_library */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js\") || !__webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  var K = Math.random();\n  // In FF throws only define methods\n  // eslint-disable-next-line no-undef, no-useless-call\n  __defineSetter__.call(null, K, function () { /* empty */ });\n  delete __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\")[K];\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn-ext.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys-internal.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys-internal.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-to-array.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-to-array.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\nvar isEnum = __webpack_require__(/*! ./_object-pie */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js\").f;\nmodule.exports = function (isEntries) {\n  return function (it) {\n    var O = toIObject(it);\n    var keys = getKeys(O);\n    var length = keys.length;\n    var i = 0;\n    var result = [];\n    var key;\n    while (length > i) if (isEnum.call(O, key = keys[i++])) {\n      result.push(isEntries ? [key, O[key]] : O[key]);\n    } return result;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_object-to-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_own-keys.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_own-keys.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all object keys, includes non-enumerable and symbols\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar Reflect = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").Reflect;\nmodule.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {\n  var keys = gOPN.f(anObject(it));\n  var getSymbols = gOPS.f;\n  return getSymbols ? keys.concat(getSymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_own-keys.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-float.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-float.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $parseFloat = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").parseFloat;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js\").trim;\n\nmodule.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-ws.js\") + '-0') !== -Infinity ? function parseFloat(str) {\n  var string = $trim(String(str), 3);\n  var result = $parseFloat(string);\n  return result === 0 && string.charAt(0) == '-' ? -0 : result;\n} : $parseFloat;\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-float.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-int.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-int.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $parseInt = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").parseInt;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js\").trim;\nvar ws = __webpack_require__(/*! ./_string-ws */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-ws.js\");\nvar hex = /^[-+]?0[xX]/;\n\nmodule.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {\n  var string = $trim(String(str), 3);\n  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));\n} : $parseInt;\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-int.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_perform.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_perform.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_perform.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_promise-resolve.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_promise-resolve.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_promise-resolve.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) redefine(target, key, src[key], safe);\n  return target;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\nvar SRC = __webpack_require__(/*! ./_uid */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js\")('src');\nvar $toString = __webpack_require__(/*! ./_function-to-string */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_function-to-string.js\");\nvar TO_STRING = 'toString';\nvar TPL = ('' + $toString).split(TO_STRING);\n\n__webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\").inspectSource = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  }\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js\");\nvar builtinExec = RegExp.prototype.exec;\n\n // `RegExpExec` abstract operation\n// https://tc39.github.io/ecma262/#sec-regexpexec\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n    if (typeof result !== 'object') {\n      throw new TypeError('RegExp exec method returned something other than an Object or null');\n    }\n    return result;\n  }\n  if (classof(R) !== 'RegExp') {\n    throw new TypeError('RegExp#exec called on incompatible receiver');\n  }\n  return builtinExec.call(R, S);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar regexpFlags = __webpack_require__(/*! ./_flags */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js\");\n\nvar nativeExec = RegExp.prototype.exec;\n// This always refers to the native implementation, because the\n// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,\n// which loads this file before patching the method.\nvar nativeReplace = String.prototype.replace;\n\nvar patchedExec = nativeExec;\n\nvar LAST_INDEX = 'lastIndex';\n\nvar UPDATES_LAST_INDEX_WRONG = (function () {\n  var re1 = /a/,\n      re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;\n})();\n\n// nonparticipating capturing group, copied from es5-shim's String#split patch.\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\n\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + re.source + '$(?!\\\\s)', regexpFlags.call(re));\n    }\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];\n\n    match = nativeExec.call(re, str);\n\n    if (UPDATES_LAST_INDEX_WRONG && match) {\n      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;\n    }\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      // eslint-disable-next-line no-loop-func\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_replacer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_replacer.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (regExp, replace) {\n  var replacer = replace === Object(replace) ? function (part) {\n    return replace[part];\n  } : replace;\n  return function (it) {\n    return String(it).replace(regExp, replacer);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_replacer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_same-value.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_same-value.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.9 SameValue(x, y)\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_same-value.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js\");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {\n    var mapFn = arguments[1];\n    var mapping, A, n, cb;\n    aFunction(this);\n    mapping = mapFn !== undefined;\n    if (mapping) aFunction(mapFn);\n    if (source == undefined) return new this();\n    A = [];\n    if (mapping) {\n      n = 0;\n      cb = ctx(mapFn, arguments[2], 2);\n      forOf(source, false, function (nextItem) {\n        A.push(cb(nextItem, n++));\n      });\n    } else {\n      forOf(source, false, A.push, A);\n    }\n    return new this(A);\n  } });\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { of: function of() {\n    var length = arguments.length;\n    var A = new Array(length);\n    while (length--) A[length] = arguments[length];\n    return new this(A);\n  } });\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_set-proto.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_set-proto.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_set-proto.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_shared-key.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_shared-key.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n\nmodule.exports = function (method, arg) {\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call\n    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_string-context.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_string-context.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// helper for String#{startsWith, endsWith, includes}\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, searchString, NAME) {\n  if (isRegExp(searchString)) throw TypeError('String#' + NAME + \" doesn't accept regex!\");\n  return String(defined(that));\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_string-context.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\nvar quot = /\"/g;\n// B.2.3.2.1 CreateHTML(string, tag, attribute, value)\nvar createHTML = function (string, tag, attribute, value) {\n  var S = String(defined(string));\n  var p1 = '<' + tag;\n  if (attribute !== '') p1 += ' ' + attribute + '=\"' + String(value).replace(quot, '&quot;') + '\"';\n  return p1 + '>' + S + '</' + tag + '>';\n};\nmodule.exports = function (NAME, exec) {\n  var O = {};\n  O[NAME] = exec(createHTML);\n  $export($export.P + $export.F * fails(function () {\n    var test = ''[NAME]('\"');\n    return test !== test.toLowerCase() || test.split('\"').length > 3;\n  }), 'String', O);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_string-pad.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_string-pad.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-string-pad-start-end\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-repeat.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, maxLength, fillString, left) {\n  var S = String(defined(that));\n  var stringLength = S.length;\n  var fillStr = fillString === undefined ? ' ' : String(fillString);\n  var intMaxLength = toLength(maxLength);\n  if (intMaxLength <= stringLength || fillStr == '') return S;\n  var fillLen = intMaxLength - stringLength;\n  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));\n  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);\n  return left ? stringFiller + S : S + stringFiller;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_string-pad.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_string-repeat.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_string-repeat.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function repeat(count) {\n  var str = String(defined(this));\n  var res = '';\n  var n = toInteger(count);\n  if (n < 0 || n == Infinity) throw RangeError(\"Count can't be negative\");\n  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;\n  return res;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_string-repeat.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\nvar spaces = __webpack_require__(/*! ./_string-ws */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-ws.js\");\nvar space = '[' + spaces + ']';\nvar non = '\\u200b\\u0085';\nvar ltrim = RegExp('^' + space + space + '*');\nvar rtrim = RegExp(space + space + '*$');\n\nvar exporter = function (KEY, exec, ALIAS) {\n  var exp = {};\n  var FORCE = fails(function () {\n    return !!spaces[KEY]() || non[KEY]() != non;\n  });\n  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];\n  if (ALIAS) exp[ALIAS] = fn;\n  $export($export.P + $export.F * FORCE, 'String', exp);\n};\n\n// 1 -> String#trimLeft\n// 2 -> String#trimRight\n// 3 -> String#trim\nvar trim = exporter.trim = function (string, TYPE) {\n  string = String(defined(string));\n  if (TYPE & 1) string = string.replace(ltrim, '');\n  if (TYPE & 2) string = string.replace(rtrim, '');\n  return string;\n};\n\nmodule.exports = exporter;\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_string-ws.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_string-ws.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = '\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003' +\n  '\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_string-ws.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_task.js":
/*!***************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_task.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_invoke.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_html.js\");\nvar cel = __webpack_require__(/*! ./_dom-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_dom-create.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\")(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_task.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_to-index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_to-index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/ecma262/#sec-toindex\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function (it) {\n  if (it === undefined) return 0;\n  var number = toInteger(it);\n  var length = toLength(number);\n  if (number !== length) throw RangeError('Wrong length!');\n  return length;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_to-index.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\")) {\n  var LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js\");\n  var global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n  var fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n  var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n  var $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js\");\n  var $buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-buffer.js\");\n  var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\n  var anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js\");\n  var propertyDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js\");\n  var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\n  var redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js\");\n  var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\n  var toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n  var toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-index.js\");\n  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js\");\n  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\n  var has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\n  var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js\");\n  var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n  var toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array-iter.js\");\n  var create = __webpack_require__(/*! ./_object-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js\");\n  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\n  var gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js\").f;\n  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/core.get-iterator-method.js\");\n  var uid = __webpack_require__(/*! ./_uid */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js\");\n  var wks = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\");\n  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\");\n  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js\");\n  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js\");\n  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.iterator.js\");\n  var Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js\");\n  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js\");\n  var setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js\");\n  var arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-fill.js\");\n  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-copy-within.js\");\n  var $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\n  var $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\");\n  var dP = $DP.f;\n  var gOPD = $GOPD.f;\n  var RangeError = global.RangeError;\n  var TypeError = global.TypeError;\n  var Uint8Array = global.Uint8Array;\n  var ARRAY_BUFFER = 'ArrayBuffer';\n  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;\n  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';\n  var PROTOTYPE = 'prototype';\n  var ArrayProto = Array[PROTOTYPE];\n  var $ArrayBuffer = $buffer.ArrayBuffer;\n  var $DataView = $buffer.DataView;\n  var arrayForEach = createArrayMethod(0);\n  var arrayFilter = createArrayMethod(2);\n  var arraySome = createArrayMethod(3);\n  var arrayEvery = createArrayMethod(4);\n  var arrayFind = createArrayMethod(5);\n  var arrayFindIndex = createArrayMethod(6);\n  var arrayIncludes = createArrayIncludes(true);\n  var arrayIndexOf = createArrayIncludes(false);\n  var arrayValues = ArrayIterators.values;\n  var arrayKeys = ArrayIterators.keys;\n  var arrayEntries = ArrayIterators.entries;\n  var arrayLastIndexOf = ArrayProto.lastIndexOf;\n  var arrayReduce = ArrayProto.reduce;\n  var arrayReduceRight = ArrayProto.reduceRight;\n  var arrayJoin = ArrayProto.join;\n  var arraySort = ArrayProto.sort;\n  var arraySlice = ArrayProto.slice;\n  var arrayToString = ArrayProto.toString;\n  var arrayToLocaleString = ArrayProto.toLocaleString;\n  var ITERATOR = wks('iterator');\n  var TAG = wks('toStringTag');\n  var TYPED_CONSTRUCTOR = uid('typed_constructor');\n  var DEF_CONSTRUCTOR = uid('def_constructor');\n  var ALL_CONSTRUCTORS = $typed.CONSTR;\n  var TYPED_ARRAY = $typed.TYPED;\n  var VIEW = $typed.VIEW;\n  var WRONG_LENGTH = 'Wrong length!';\n\n  var $map = createArrayMethod(1, function (O, length) {\n    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);\n  });\n\n  var LITTLE_ENDIAN = fails(function () {\n    // eslint-disable-next-line no-undef\n    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;\n  });\n\n  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {\n    new Uint8Array(1).set({});\n  });\n\n  var toOffset = function (it, BYTES) {\n    var offset = toInteger(it);\n    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');\n    return offset;\n  };\n\n  var validate = function (it) {\n    if (isObject(it) && TYPED_ARRAY in it) return it;\n    throw TypeError(it + ' is not a typed array!');\n  };\n\n  var allocate = function (C, length) {\n    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {\n      throw TypeError('It is not a typed array constructor!');\n    } return new C(length);\n  };\n\n  var speciesFromList = function (O, list) {\n    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);\n  };\n\n  var fromList = function (C, list) {\n    var index = 0;\n    var length = list.length;\n    var result = allocate(C, length);\n    while (length > index) result[index] = list[index++];\n    return result;\n  };\n\n  var addGetter = function (it, key, internal) {\n    dP(it, key, { get: function () { return this._d[internal]; } });\n  };\n\n  var $from = function from(source /* , mapfn, thisArg */) {\n    var O = toObject(source);\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var iterFn = getIterFn(O);\n    var i, length, values, result, step, iterator;\n    if (iterFn != undefined && !isArrayIter(iterFn)) {\n      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {\n        values.push(step.value);\n      } O = values;\n    }\n    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);\n    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {\n      result[i] = mapping ? mapfn(O[i], i) : O[i];\n    }\n    return result;\n  };\n\n  var $of = function of(/* ...items */) {\n    var index = 0;\n    var length = arguments.length;\n    var result = allocate(this, length);\n    while (length > index) result[index] = arguments[index++];\n    return result;\n  };\n\n  // iOS Safari 6.x fails here\n  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });\n\n  var $toLocaleString = function toLocaleString() {\n    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);\n  };\n\n  var proto = {\n    copyWithin: function copyWithin(target, start /* , end */) {\n      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    every: function every(callbackfn /* , thisArg */) {\n      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars\n      return arrayFill.apply(validate(this), arguments);\n    },\n    filter: function filter(callbackfn /* , thisArg */) {\n      return speciesFromList(this, arrayFilter(validate(this), callbackfn,\n        arguments.length > 1 ? arguments[1] : undefined));\n    },\n    find: function find(predicate /* , thisArg */) {\n      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    findIndex: function findIndex(predicate /* , thisArg */) {\n      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    forEach: function forEach(callbackfn /* , thisArg */) {\n      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    indexOf: function indexOf(searchElement /* , fromIndex */) {\n      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    includes: function includes(searchElement /* , fromIndex */) {\n      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    join: function join(separator) { // eslint-disable-line no-unused-vars\n      return arrayJoin.apply(validate(this), arguments);\n    },\n    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars\n      return arrayLastIndexOf.apply(validate(this), arguments);\n    },\n    map: function map(mapfn /* , thisArg */) {\n      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars\n      return arrayReduce.apply(validate(this), arguments);\n    },\n    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars\n      return arrayReduceRight.apply(validate(this), arguments);\n    },\n    reverse: function reverse() {\n      var that = this;\n      var length = validate(that).length;\n      var middle = Math.floor(length / 2);\n      var index = 0;\n      var value;\n      while (index < middle) {\n        value = that[index];\n        that[index++] = that[--length];\n        that[length] = value;\n      } return that;\n    },\n    some: function some(callbackfn /* , thisArg */) {\n      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    sort: function sort(comparefn) {\n      return arraySort.call(validate(this), comparefn);\n    },\n    subarray: function subarray(begin, end) {\n      var O = validate(this);\n      var length = O.length;\n      var $begin = toAbsoluteIndex(begin, length);\n      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(\n        O.buffer,\n        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,\n        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)\n      );\n    }\n  };\n\n  var $slice = function slice(start, end) {\n    return speciesFromList(this, arraySlice.call(validate(this), start, end));\n  };\n\n  var $set = function set(arrayLike /* , offset */) {\n    validate(this);\n    var offset = toOffset(arguments[1], 1);\n    var length = this.length;\n    var src = toObject(arrayLike);\n    var len = toLength(src.length);\n    var index = 0;\n    if (len + offset > length) throw RangeError(WRONG_LENGTH);\n    while (index < len) this[offset + index] = src[index++];\n  };\n\n  var $iterators = {\n    entries: function entries() {\n      return arrayEntries.call(validate(this));\n    },\n    keys: function keys() {\n      return arrayKeys.call(validate(this));\n    },\n    values: function values() {\n      return arrayValues.call(validate(this));\n    }\n  };\n\n  var isTAIndex = function (target, key) {\n    return isObject(target)\n      && target[TYPED_ARRAY]\n      && typeof key != 'symbol'\n      && key in target\n      && String(+key) == String(key);\n  };\n  var $getDesc = function getOwnPropertyDescriptor(target, key) {\n    return isTAIndex(target, key = toPrimitive(key, true))\n      ? propertyDesc(2, target[key])\n      : gOPD(target, key);\n  };\n  var $setDesc = function defineProperty(target, key, desc) {\n    if (isTAIndex(target, key = toPrimitive(key, true))\n      && isObject(desc)\n      && has(desc, 'value')\n      && !has(desc, 'get')\n      && !has(desc, 'set')\n      // TODO: add validation descriptor w/o calling accessors\n      && !desc.configurable\n      && (!has(desc, 'writable') || desc.writable)\n      && (!has(desc, 'enumerable') || desc.enumerable)\n    ) {\n      target[key] = desc.value;\n      return target;\n    } return dP(target, key, desc);\n  };\n\n  if (!ALL_CONSTRUCTORS) {\n    $GOPD.f = $getDesc;\n    $DP.f = $setDesc;\n  }\n\n  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {\n    getOwnPropertyDescriptor: $getDesc,\n    defineProperty: $setDesc\n  });\n\n  if (fails(function () { arrayToString.call({}); })) {\n    arrayToString = arrayToLocaleString = function toString() {\n      return arrayJoin.call(this);\n    };\n  }\n\n  var $TypedArrayPrototype$ = redefineAll({}, proto);\n  redefineAll($TypedArrayPrototype$, $iterators);\n  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);\n  redefineAll($TypedArrayPrototype$, {\n    slice: $slice,\n    set: $set,\n    constructor: function () { /* noop */ },\n    toString: arrayToString,\n    toLocaleString: $toLocaleString\n  });\n  addGetter($TypedArrayPrototype$, 'buffer', 'b');\n  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');\n  addGetter($TypedArrayPrototype$, 'byteLength', 'l');\n  addGetter($TypedArrayPrototype$, 'length', 'e');\n  dP($TypedArrayPrototype$, TAG, {\n    get: function () { return this[TYPED_ARRAY]; }\n  });\n\n  // eslint-disable-next-line max-statements\n  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {\n    CLAMPED = !!CLAMPED;\n    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';\n    var GETTER = 'get' + KEY;\n    var SETTER = 'set' + KEY;\n    var TypedArray = global[NAME];\n    var Base = TypedArray || {};\n    var TAC = TypedArray && getPrototypeOf(TypedArray);\n    var FORCED = !TypedArray || !$typed.ABV;\n    var O = {};\n    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];\n    var getter = function (that, index) {\n      var data = that._d;\n      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);\n    };\n    var setter = function (that, index, value) {\n      var data = that._d;\n      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;\n      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);\n    };\n    var addElement = function (that, index) {\n      dP(that, index, {\n        get: function () {\n          return getter(this, index);\n        },\n        set: function (value) {\n          return setter(this, index, value);\n        },\n        enumerable: true\n      });\n    };\n    if (FORCED) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME, '_d');\n        var index = 0;\n        var offset = 0;\n        var buffer, byteLength, length, klass;\n        if (!isObject(data)) {\n          length = toIndex(data);\n          byteLength = length * BYTES;\n          buffer = new $ArrayBuffer(byteLength);\n        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          buffer = data;\n          offset = toOffset($offset, BYTES);\n          var $len = data.byteLength;\n          if ($length === undefined) {\n            if ($len % BYTES) throw RangeError(WRONG_LENGTH);\n            byteLength = $len - offset;\n            if (byteLength < 0) throw RangeError(WRONG_LENGTH);\n          } else {\n            byteLength = toLength($length) * BYTES;\n            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);\n          }\n          length = byteLength / BYTES;\n        } else if (TYPED_ARRAY in data) {\n          return fromList(TypedArray, data);\n        } else {\n          return $from.call(TypedArray, data);\n        }\n        hide(that, '_d', {\n          b: buffer,\n          o: offset,\n          l: byteLength,\n          e: length,\n          v: new $DataView(buffer)\n        });\n        while (index < length) addElement(that, index++);\n      });\n      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);\n      hide(TypedArrayPrototype, 'constructor', TypedArray);\n    } else if (!fails(function () {\n      TypedArray(1);\n    }) || !fails(function () {\n      new TypedArray(-1); // eslint-disable-line no-new\n    }) || !$iterDetect(function (iter) {\n      new TypedArray(); // eslint-disable-line no-new\n      new TypedArray(null); // eslint-disable-line no-new\n      new TypedArray(1.5); // eslint-disable-line no-new\n      new TypedArray(iter); // eslint-disable-line no-new\n    }, true)) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME);\n        var klass;\n        // `ws` module bug, temporarily remove validation length for Uint8Array\n        // https://github.com/websockets/ws/pull/645\n        if (!isObject(data)) return new Base(toIndex(data));\n        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          return $length !== undefined\n            ? new Base(data, toOffset($offset, BYTES), $length)\n            : $offset !== undefined\n              ? new Base(data, toOffset($offset, BYTES))\n              : new Base(data);\n        }\n        if (TYPED_ARRAY in data) return fromList(TypedArray, data);\n        return $from.call(TypedArray, data);\n      });\n      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {\n        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);\n      });\n      TypedArray[PROTOTYPE] = TypedArrayPrototype;\n      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;\n    }\n    var $nativeIterator = TypedArrayPrototype[ITERATOR];\n    var CORRECT_ITER_NAME = !!$nativeIterator\n      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);\n    var $iterator = $iterators.values;\n    hide(TypedArray, TYPED_CONSTRUCTOR, true);\n    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);\n    hide(TypedArrayPrototype, VIEW, true);\n    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);\n\n    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {\n      dP(TypedArrayPrototype, TAG, {\n        get: function () { return NAME; }\n      });\n    }\n\n    O[NAME] = TypedArray;\n\n    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);\n\n    $export($export.S, NAME, {\n      BYTES_PER_ELEMENT: BYTES\n    });\n\n    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {\n      from: $from,\n      of: $of\n    });\n\n    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);\n\n    $export($export.P, NAME, proto);\n\n    setSpecies(NAME);\n\n    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });\n\n    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);\n\n    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;\n\n    $export($export.P + $export.F * fails(function () {\n      new TypedArray(1).slice();\n    }), NAME, { slice: $slice });\n\n    $export($export.P + $export.F * (fails(function () {\n      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();\n    }) || !fails(function () {\n      TypedArrayPrototype.toLocaleString.call([1, 2]);\n    })), NAME, { toLocaleString: $toLocaleString });\n\n    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;\n    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);\n  };\n} else module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-buffer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-buffer.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-index.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f;\nvar arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-fill.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js\");\nvar ARRAY_BUFFER = 'ArrayBuffer';\nvar DATA_VIEW = 'DataView';\nvar PROTOTYPE = 'prototype';\nvar WRONG_LENGTH = 'Wrong length!';\nvar WRONG_INDEX = 'Wrong index!';\nvar $ArrayBuffer = global[ARRAY_BUFFER];\nvar $DataView = global[DATA_VIEW];\nvar Math = global.Math;\nvar RangeError = global.RangeError;\n// eslint-disable-next-line no-shadow-restricted-names\nvar Infinity = global.Infinity;\nvar BaseBuffer = $ArrayBuffer;\nvar abs = Math.abs;\nvar pow = Math.pow;\nvar floor = Math.floor;\nvar log = Math.log;\nvar LN2 = Math.LN2;\nvar BUFFER = 'buffer';\nvar BYTE_LENGTH = 'byteLength';\nvar BYTE_OFFSET = 'byteOffset';\nvar $BUFFER = DESCRIPTORS ? '_b' : BUFFER;\nvar $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;\nvar $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;\n\n// IEEE754 conversions based on https://github.com/feross/ieee754\nfunction packIEEE754(value, mLen, nBytes) {\n  var buffer = new Array(nBytes);\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;\n  var i = 0;\n  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;\n  var e, m, c;\n  value = abs(value);\n  // eslint-disable-next-line no-self-compare\n  if (value != value || value === Infinity) {\n    // eslint-disable-next-line no-self-compare\n    m = value != value ? 1 : 0;\n    e = eMax;\n  } else {\n    e = floor(log(value) / LN2);\n    if (value * (c = pow(2, -e)) < 1) {\n      e--;\n      c *= 2;\n    }\n    if (e + eBias >= 1) {\n      value += rt / c;\n    } else {\n      value += rt * pow(2, 1 - eBias);\n    }\n    if (value * c >= 2) {\n      e++;\n      c /= 2;\n    }\n    if (e + eBias >= eMax) {\n      m = 0;\n      e = eMax;\n    } else if (e + eBias >= 1) {\n      m = (value * c - 1) * pow(2, mLen);\n      e = e + eBias;\n    } else {\n      m = value * pow(2, eBias - 1) * pow(2, mLen);\n      e = 0;\n    }\n  }\n  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);\n  e = e << mLen | m;\n  eLen += mLen;\n  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);\n  buffer[--i] |= s * 128;\n  return buffer;\n}\nfunction unpackIEEE754(buffer, mLen, nBytes) {\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var nBits = eLen - 7;\n  var i = nBytes - 1;\n  var s = buffer[i--];\n  var e = s & 127;\n  var m;\n  s >>= 7;\n  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);\n  m = e & (1 << -nBits) - 1;\n  e >>= -nBits;\n  nBits += mLen;\n  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);\n  if (e === 0) {\n    e = 1 - eBias;\n  } else if (e === eMax) {\n    return m ? NaN : s ? -Infinity : Infinity;\n  } else {\n    m = m + pow(2, mLen);\n    e = e - eBias;\n  } return (s ? -1 : 1) * m * pow(2, e - mLen);\n}\n\nfunction unpackI32(bytes) {\n  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];\n}\nfunction packI8(it) {\n  return [it & 0xff];\n}\nfunction packI16(it) {\n  return [it & 0xff, it >> 8 & 0xff];\n}\nfunction packI32(it) {\n  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];\n}\nfunction packF64(it) {\n  return packIEEE754(it, 52, 8);\n}\nfunction packF32(it) {\n  return packIEEE754(it, 23, 4);\n}\n\nfunction addGetter(C, key, internal) {\n  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });\n}\n\nfunction get(view, bytes, index, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = store.slice(start, start + bytes);\n  return isLittleEndian ? pack : pack.reverse();\n}\nfunction set(view, bytes, index, conversion, value, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = conversion(+value);\n  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];\n}\n\nif (!$typed.ABV) {\n  $ArrayBuffer = function ArrayBuffer(length) {\n    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);\n    var byteLength = toIndex(length);\n    this._b = arrayFill.call(new Array(byteLength), 0);\n    this[$LENGTH] = byteLength;\n  };\n\n  $DataView = function DataView(buffer, byteOffset, byteLength) {\n    anInstance(this, $DataView, DATA_VIEW);\n    anInstance(buffer, $ArrayBuffer, DATA_VIEW);\n    var bufferLength = buffer[$LENGTH];\n    var offset = toInteger(byteOffset);\n    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');\n    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);\n    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);\n    this[$BUFFER] = buffer;\n    this[$OFFSET] = offset;\n    this[$LENGTH] = byteLength;\n  };\n\n  if (DESCRIPTORS) {\n    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');\n    addGetter($DataView, BUFFER, '_b');\n    addGetter($DataView, BYTE_LENGTH, '_l');\n    addGetter($DataView, BYTE_OFFSET, '_o');\n  }\n\n  redefineAll($DataView[PROTOTYPE], {\n    getInt8: function getInt8(byteOffset) {\n      return get(this, 1, byteOffset)[0] << 24 >> 24;\n    },\n    getUint8: function getUint8(byteOffset) {\n      return get(this, 1, byteOffset)[0];\n    },\n    getInt16: function getInt16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;\n    },\n    getUint16: function getUint16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return bytes[1] << 8 | bytes[0];\n    },\n    getInt32: function getInt32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1]));\n    },\n    getUint32: function getUint32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;\n    },\n    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);\n    },\n    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);\n    },\n    setInt8: function setInt8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packF32, value, arguments[2]);\n    },\n    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {\n      set(this, 8, byteOffset, packF64, value, arguments[2]);\n    }\n  });\n} else {\n  if (!fails(function () {\n    $ArrayBuffer(1);\n  }) || !fails(function () {\n    new $ArrayBuffer(-1); // eslint-disable-line no-new\n  }) || fails(function () {\n    new $ArrayBuffer(); // eslint-disable-line no-new\n    new $ArrayBuffer(1.5); // eslint-disable-line no-new\n    new $ArrayBuffer(NaN); // eslint-disable-line no-new\n    return $ArrayBuffer.name != ARRAY_BUFFER;\n  })) {\n    $ArrayBuffer = function ArrayBuffer(length) {\n      anInstance(this, $ArrayBuffer);\n      return new BaseBuffer(toIndex(length));\n    };\n    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];\n    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {\n      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);\n    }\n    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;\n  }\n  // iOS Safari 7.x bug\n  var view = new $DataView(new $ArrayBuffer(2));\n  var $setInt8 = $DataView[PROTOTYPE].setInt8;\n  view.setInt8(0, 2147483648);\n  view.setInt8(1, 2147483649);\n  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {\n    setInt8: function setInt8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    }\n  }, true);\n}\nsetToStringTag($ArrayBuffer, ARRAY_BUFFER);\nsetToStringTag($DataView, DATA_VIEW);\nhide($DataView[PROTOTYPE], $typed.VIEW, true);\nexports[ARRAY_BUFFER] = $ArrayBuffer;\nexports[DATA_VIEW] = $DataView;\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-buffer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js":
/*!****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js\");\nvar TYPED = uid('typed_array');\nvar VIEW = uid('view');\nvar ABV = !!(global.ArrayBuffer && global.DataView);\nvar CONSTR = ABV;\nvar i = 0;\nvar l = 9;\nvar Typed;\n\nvar TypedArrayConstructors = (\n  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'\n).split(',');\n\nwhile (i < l) {\n  if (Typed = global[TypedArrayConstructors[i++]]) {\n    hide(Typed.prototype, TYPED, true);\n    hide(Typed.prototype, VIEW, true);\n  } else CONSTR = false;\n}\n\nmodule.exports = {\n  ABV: ABV,\n  CONSTR: CONSTR,\n  TYPED: TYPED,\n  VIEW: VIEW\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js":
/*!**************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar navigator = global.navigator;\n\nmodule.exports = navigator && navigator.userAgent || '';\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it, TYPE) {\n  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-define.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-define.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-ext.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-ext.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\");\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/core.get-iterator-method.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/core.get-iterator-method.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/core.regexp.escape.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/core.regexp.escape.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/benjamingr/RexExp.escape\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $re = __webpack_require__(/*! ./_replacer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_replacer.js\")(/[\\\\^$*+?.()|[\\]{}]/g, '\\\\$&');\n\n$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/core.regexp.escape.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.copy-within.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.copy-within.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-copy-within.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js\")('copyWithin');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.copy-within.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.every.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.every.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $every = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\")(4);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")([].every, true), 'Array', {\n  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])\n  every: function every(callbackfn /* , thisArg */) {\n    return $every(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.every.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.fill.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.fill.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-fill.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js\")('fill');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.fill.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.filter.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.filter.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $filter = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\")(2);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")([].filter, true), 'Array', {\n  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.filter.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find-index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find-index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\")(6);\nvar KEY = 'findIndex';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  findIndex: function findIndex(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find-index.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\")(5);\nvar KEY = 'find';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  find: function find(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.for-each.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.for-each.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $forEach = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\")(0);\nvar STRICT = __webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")([].forEach, true);\n\n$export($export.P + $export.F * !STRICT, 'Array', {\n  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])\n  forEach: function forEach(callbackfn /* , thisArg */) {\n    return $forEach(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.for-each.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.from.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.from.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array-iter.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_create-property.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/core.get-iterator-method.js\");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js\")(function (iter) { Array.from(iter); }), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.from.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.index-of.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.index-of.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $indexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js\")(false);\nvar $native = [].indexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? $native.apply(this, arguments) || 0\n      : $indexOf(this, searchElement, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.index-of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.is-array.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.is-array.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.is-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.iterator.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.iterator.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.join.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.join.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.13 Array.prototype.join(separator)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\nvar arrayJoin = [].join;\n\n// fallback for not array-like strings\n$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js\") != Object || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")(arrayJoin)), 'Array', {\n  join: function join(separator) {\n    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.join.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar $native = [].lastIndexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])\n  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {\n    // convert -0 to +0\n    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;\n    var O = toIObject(this);\n    var length = toLength(O.length);\n    var index = length - 1;\n    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));\n    if (index < 0) index = length + index;\n    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;\n    return -1;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.last-index-of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.map.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.map.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $map = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\")(1);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")([].map, true), 'Array', {\n  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.map.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.of.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.of.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_create-property.js\");\n\n// WebKit Array.of isn't generic\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  function F() { /* empty */ }\n  return !(Array.of.call(F) instanceof F);\n}), 'Array', {\n  // 22.1.2.3 Array.of( ...items)\n  of: function of(/* ...args */) {\n    var index = 0;\n    var aLen = arguments.length;\n    var result = new (typeof this == 'function' ? this : Array)(aLen);\n    while (aLen > index) createProperty(result, index, arguments[index++]);\n    result.length = aLen;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce-right.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")([].reduceRight, true), 'Array', {\n  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])\n  reduceRight: function reduceRight(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], true);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce-right.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")([].reduce, true), 'Array', {\n  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])\n  reduce: function reduce(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], false);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.slice.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.slice.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_html.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar arraySlice = [].slice;\n\n// fallback for not array-like ES3 strings and DOM objects\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  if (html) arraySlice.call(html);\n}), 'Array', {\n  slice: function slice(begin, end) {\n    var len = toLength(this.length);\n    var klass = cof(this);\n    end = end === undefined ? len : end;\n    if (klass == 'Array') return arraySlice.call(this, begin, end);\n    var start = toAbsoluteIndex(begin, len);\n    var upTo = toAbsoluteIndex(end, len);\n    var size = toLength(upTo - start);\n    var cloned = new Array(size);\n    var i = 0;\n    for (; i < size; i++) cloned[i] = klass == 'String'\n      ? this.charAt(start + i)\n      : this[start + i];\n    return cloned;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.slice.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.some.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.some.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $some = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\")(3);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")([].some, true), 'Array', {\n  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])\n  some: function some(callbackfn /* , thisArg */) {\n    return $some(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.some.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.sort.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.sort.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\nvar $sort = [].sort;\nvar test = [1, 2, 3];\n\n$export($export.P + $export.F * (fails(function () {\n  // IE8-\n  test.sort(undefined);\n}) || !fails(function () {\n  // V8 bug\n  test.sort(null);\n  // Old WebKit\n}) || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")($sort)), 'Array', {\n  // 22.1.3.25 Array.prototype.sort(comparefn)\n  sort: function sort(comparefn) {\n    return comparefn === undefined\n      ? $sort.call(toObject(this))\n      : $sort.call(toObject(this), aFunction(comparefn));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.sort.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.species.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.species.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_set-species */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js\")('Array');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.species.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.now.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.now.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.3.3.1 / 15.9.4.4 Date.now()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.now.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar toISOString = __webpack_require__(/*! ./_date-to-iso-string */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-iso-string.js\");\n\n// PhantomJS / old WebKit has a broken implementations\n$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {\n  toISOString: toISOString\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-iso-string.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-json.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-json.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  return new Date(NaN).toJSON() !== null\n    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;\n}), 'Date', {\n  // eslint-disable-next-line no-unused-vars\n  toJSON: function toJSON(key) {\n    var O = toObject(this);\n    var pv = toPrimitive(O);\n    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-json.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-primitive.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('toPrimitive');\nvar proto = Date.prototype;\n\nif (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-primitive.js\"));\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-primitive.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-string.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-string.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DateProto = Date.prototype;\nvar INVALID_DATE = 'Invalid Date';\nvar TO_STRING = 'toString';\nvar $toString = DateProto[TO_STRING];\nvar getTime = DateProto.getTime;\nif (new Date(NaN) + '' != INVALID_DATE) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\")(DateProto, TO_STRING, function toString() {\n    var value = getTime.call(this);\n    // eslint-disable-next-line no-self-compare\n    return value === value ? $toString.call(this) : INVALID_DATE;\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-string.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.bind.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.bind.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_bind.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.bind.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.has-instance.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.has-instance.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\nvar HAS_INSTANCE = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('hasInstance');\nvar FunctionProto = Function.prototype;\n// 19.2.3.6 Function.prototype[@@hasInstance](V)\nif (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f(FunctionProto, HAS_INSTANCE, { value: function (O) {\n  if (typeof this != 'function' || !isObject(O)) return false;\n  if (!isObject(this.prototype)) return O instanceof this;\n  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:\n  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;\n  return false;\n} });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.has-instance.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.name.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.name.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f;\nvar FProto = Function.prototype;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// 19.2.4.2 name\nNAME in FProto || __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") && dP(FProto, NAME, {\n  configurable: true,\n  get: function () {\n    try {\n      return ('' + this).match(nameRE)[1];\n    } catch (e) {\n      return '';\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.name.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.map.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.map.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js\");\nvar MAP = 'Map';\n\n// 23.1 Map Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js\")(MAP, function (get) {\n  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.1.3.6 Map.prototype.get(key)\n  get: function get(key) {\n    var entry = strong.getEntry(validate(this, MAP), key);\n    return entry && entry.v;\n  },\n  // 23.1.3.9 Map.prototype.set(key, value)\n  set: function set(key, value) {\n    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);\n  }\n}, strong, true);\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.map.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.acosh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.acosh.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.3 Math.acosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar log1p = __webpack_require__(/*! ./_math-log1p */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-log1p.js\");\nvar sqrt = Math.sqrt;\nvar $acosh = Math.acosh;\n\n$export($export.S + $export.F * !($acosh\n  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509\n  && Math.floor($acosh(Number.MAX_VALUE)) == 710\n  // Tor Browser bug: Math.acosh(Infinity) -> NaN\n  && $acosh(Infinity) == Infinity\n), 'Math', {\n  acosh: function acosh(x) {\n    return (x = +x) < 1 ? NaN : x > 94906265.62425156\n      ? Math.log(x) + Math.LN2\n      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.acosh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.asinh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.asinh.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.5 Math.asinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $asinh = Math.asinh;\n\nfunction asinh(x) {\n  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));\n}\n\n// Tor Browser bug: Math.asinh(0) -> -0\n$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.asinh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.atanh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.atanh.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.7 Math.atanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $atanh = Math.atanh;\n\n// Tor Browser bug: Math.atanh(-0) -> 0\n$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {\n  atanh: function atanh(x) {\n    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.atanh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cbrt.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cbrt.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.9 Math.cbrt(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-sign.js\");\n\n$export($export.S, 'Math', {\n  cbrt: function cbrt(x) {\n    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cbrt.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.clz32.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.clz32.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.11 Math.clz32(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  clz32: function clz32(x) {\n    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.clz32.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cosh.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cosh.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.12 Math.cosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  cosh: function cosh(x) {\n    return (exp(x = +x) + exp(-x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cosh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.expm1.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.expm1.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.14 Math.expm1(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-expm1.js\");\n\n$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.expm1.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.fround.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.fround.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.16 Math.fround(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-fround.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.fround.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.hypot.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.hypot.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Math', {\n  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars\n    var sum = 0;\n    var i = 0;\n    var aLen = arguments.length;\n    var larg = 0;\n    var arg, div;\n    while (i < aLen) {\n      arg = abs(arguments[i++]);\n      if (larg < arg) {\n        div = larg / arg;\n        sum = sum * div * div + 1;\n        larg = arg;\n      } else if (arg > 0) {\n        div = arg / larg;\n        sum += div * div;\n      } else sum += arg;\n    }\n    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.hypot.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.imul.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.imul.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.18 Math.imul(x, y)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $imul = Math.imul;\n\n// some WebKit versions fails with big numbers, some has wrong arity\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;\n}), 'Math', {\n  imul: function imul(x, y) {\n    var UINT16 = 0xffff;\n    var xn = +x;\n    var yn = +y;\n    var xl = UINT16 & xn;\n    var yl = UINT16 & yn;\n    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.imul.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log10.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log10.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.21 Math.log10(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log10: function log10(x) {\n    return Math.log(x) * Math.LOG10E;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log10.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log1p.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log1p.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.20 Math.log1p(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-log1p.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log1p.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log2.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log2.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.22 Math.log2(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log2: function log2(x) {\n    return Math.log(x) / Math.LN2;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log2.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sign.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sign.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.28 Math.sign(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-sign.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sign.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sinh.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sinh.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.30 Math.sinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n// V8 near Chromium 38 has a problem with very small numbers\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  return !Math.sinh(-2e-17) != -2e-17;\n}), 'Math', {\n  sinh: function sinh(x) {\n    return Math.abs(x = +x) < 1\n      ? (expm1(x) - expm1(-x)) / 2\n      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sinh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.tanh.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.tanh.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.33 Math.tanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  tanh: function tanh(x) {\n    var a = expm1(x = +x);\n    var b = expm1(-x);\n    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.tanh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.trunc.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.trunc.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.34 Math.trunc(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  trunc: function trunc(it) {\n    return (it > 0 ? Math.floor : Math.ceil)(it);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.trunc.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.constructor.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.constructor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_inherit-if-required.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js\").f;\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js\").trim;\nvar NUMBER = 'Number';\nvar $Number = global[NUMBER];\nvar Base = $Number;\nvar proto = $Number.prototype;\n// Opera ~12 has broken Object#toString\nvar BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js\")(proto)) == NUMBER;\nvar TRIM = 'trim' in String.prototype;\n\n// 7.1.3 ToNumber(argument)\nvar toNumber = function (argument) {\n  var it = toPrimitive(argument, false);\n  if (typeof it == 'string' && it.length > 2) {\n    it = TRIM ? it.trim() : $trim(it, 3);\n    var first = it.charCodeAt(0);\n    var third, radix, maxCode;\n    if (first === 43 || first === 45) {\n      third = it.charCodeAt(2);\n      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix\n    } else if (first === 48) {\n      switch (it.charCodeAt(1)) {\n        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i\n        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i\n        default: return +it;\n      }\n      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {\n        code = digits.charCodeAt(i);\n        // parseInt parses a string to a first unavailable symbol\n        // but ToNumber should return NaN if a string contains unavailable symbols\n        if (code < 48 || code > maxCode) return NaN;\n      } return parseInt(digits, radix);\n    }\n  } return +it;\n};\n\nif (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {\n  $Number = function Number(value) {\n    var it = arguments.length < 1 ? 0 : value;\n    var that = this;\n    return that instanceof $Number\n      // check on 1..constructor(foo) case\n      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)\n        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);\n  };\n  for (var keys = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") ? gOPN(Base) : (\n    // ES3:\n    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +\n    // ES6 (in case, if modules with ES6 Number statics required before):\n    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +\n    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'\n  ).split(','), j = 0, key; keys.length > j; j++) {\n    if (has(Base, key = keys[j]) && !has($Number, key)) {\n      dP($Number, key, gOPD(Base, key));\n    }\n  }\n  $Number.prototype = proto;\n  proto.constructor = $Number;\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\")(global, NUMBER, $Number);\n}\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.constructor.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.epsilon.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.epsilon.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.1 Number.EPSILON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.epsilon.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-finite.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-finite.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.2 Number.isFinite(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar _isFinite = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").isFinite;\n\n$export($export.S, 'Number', {\n  isFinite: function isFinite(it) {\n    return typeof it == 'number' && _isFinite(it);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-finite.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-integer.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-integer.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.3 Number.isInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-integer.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-integer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-nan.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.4 Number.isNaN(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', {\n  isNaN: function isNaN(number) {\n    // eslint-disable-next-line no-self-compare\n    return number != number;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-nan.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.5 Number.isSafeInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar isInteger = __webpack_require__(/*! ./_is-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-integer.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Number', {\n  isSafeInteger: function isSafeInteger(number) {\n    return isInteger(number) && abs(number) <= 0x1fffffffffffff;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-safe-integer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.6 Number.MAX_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.max-safe-integer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.10 Number.MIN_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.min-safe-integer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-float.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-float.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-float.js\");\n// 20.1.2.12 Number.parseFloat(string)\n$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-float.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-int.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-int.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-int.js\");\n// 20.1.2.13 Number.parseInt(string, radix)\n$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-int.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-number-value.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-repeat.js\");\nvar $toFixed = 1.0.toFixed;\nvar floor = Math.floor;\nvar data = [0, 0, 0, 0, 0, 0];\nvar ERROR = 'Number.toFixed: incorrect invocation!';\nvar ZERO = '0';\n\nvar multiply = function (n, c) {\n  var i = -1;\n  var c2 = c;\n  while (++i < 6) {\n    c2 += n * data[i];\n    data[i] = c2 % 1e7;\n    c2 = floor(c2 / 1e7);\n  }\n};\nvar divide = function (n) {\n  var i = 6;\n  var c = 0;\n  while (--i >= 0) {\n    c += data[i];\n    data[i] = floor(c / n);\n    c = (c % n) * 1e7;\n  }\n};\nvar numToString = function () {\n  var i = 6;\n  var s = '';\n  while (--i >= 0) {\n    if (s !== '' || i === 0 || data[i] !== 0) {\n      var t = String(data[i]);\n      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;\n    }\n  } return s;\n};\nvar pow = function (x, n, acc) {\n  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);\n};\nvar log = function (x) {\n  var n = 0;\n  var x2 = x;\n  while (x2 >= 4096) {\n    n += 12;\n    x2 /= 4096;\n  }\n  while (x2 >= 2) {\n    n += 1;\n    x2 /= 2;\n  } return n;\n};\n\n$export($export.P + $export.F * (!!$toFixed && (\n  0.00008.toFixed(3) !== '0.000' ||\n  0.9.toFixed(0) !== '1' ||\n  1.255.toFixed(2) !== '1.25' ||\n  1000000000000000128.0.toFixed(0) !== '1000000000000000128'\n) || !__webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  // V8 ~ Android 4.3-\n  $toFixed.call({});\n})), 'Number', {\n  toFixed: function toFixed(fractionDigits) {\n    var x = aNumberValue(this, ERROR);\n    var f = toInteger(fractionDigits);\n    var s = '';\n    var m = ZERO;\n    var e, z, j, k;\n    if (f < 0 || f > 20) throw RangeError(ERROR);\n    // eslint-disable-next-line no-self-compare\n    if (x != x) return 'NaN';\n    if (x <= -1e21 || x >= 1e21) return String(x);\n    if (x < 0) {\n      s = '-';\n      x = -x;\n    }\n    if (x > 1e-21) {\n      e = log(x * pow(2, 69, 1)) - 69;\n      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);\n      z *= 0x10000000000000;\n      e = 52 - e;\n      if (e > 0) {\n        multiply(0, z);\n        j = f;\n        while (j >= 7) {\n          multiply(1e7, 0);\n          j -= 7;\n        }\n        multiply(pow(10, j, 1), 0);\n        j = e - 1;\n        while (j >= 23) {\n          divide(1 << 23);\n          j -= 23;\n        }\n        divide(1 << j);\n        multiply(1, 1);\n        divide(2);\n        m = numToString();\n      } else {\n        multiply(0, z);\n        multiply(1 << -e, 0);\n        m = numToString() + repeat.call(ZERO, f);\n      }\n    }\n    if (f > 0) {\n      k = m.length;\n      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));\n    } else {\n      m = s + m;\n    } return m;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-fixed.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-precision.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-number-value.js\");\nvar $toPrecision = 1.0.toPrecision;\n\n$export($export.P + $export.F * ($fails(function () {\n  // IE7-\n  return $toPrecision.call(1, undefined) !== '1';\n}) || !$fails(function () {\n  // V8 ~ Android 4.3-\n  $toPrecision.call({});\n})), 'Number', {\n  toPrecision: function toPrecision(precision) {\n    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');\n    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-precision.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.assign.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.assign.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-assign.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.assign.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.create.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.create.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.create.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-properties.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dps.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-properties.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-property.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-property.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.freeze.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.freeze.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.5 Object.freeze(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('freeze', function ($freeze) {\n  return function freeze(it) {\n    return $freeze && isObject(it) ? $freeze(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.freeze.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\nvar $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\").f;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyDescriptor', function () {\n  return function getOwnPropertyDescriptor(it, key) {\n    return $getOwnPropertyDescriptor(toIObject(it), key);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 Object.getOwnPropertyNames(O)\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyNames', function () {\n  return __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn-ext.js\").f;\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-extensible.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.11 Object.isExtensible(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('isExtensible', function ($isExtensible) {\n  return function isExtensible(it) {\n    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-extensible.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-frozen.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.12 Object.isFrozen(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('isFrozen', function ($isFrozen) {\n  return function isFrozen(it) {\n    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-frozen.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-sealed.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.13 Object.isSealed(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('isSealed', function ($isSealed) {\n  return function isSealed(it) {\n    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-sealed.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.10 Object.is(value1, value2)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_same-value.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.keys.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.keys.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 Object.keys(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('keys', function () {\n  return function keys(it) {\n    return $keys(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.keys.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.15 Object.preventExtensions(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('preventExtensions', function ($preventExtensions) {\n  return function preventExtensions(it) {\n    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.seal.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.seal.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.17 Object.seal(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('seal', function ($seal) {\n  return function seal(it) {\n    return $seal && isObject(it) ? $seal(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.seal.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-proto.js\").set });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.to-string.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.to-string.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.3.6 Object.prototype.toString()\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js\");\nvar test = {};\ntest[__webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('toStringTag')] = 'z';\nif (test + '' != '[object z]') {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\")(Object.prototype, 'toString', function toString() {\n    return '[object ' + classof(this) + ']';\n  }, true);\n}\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-float.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-float.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-float.js\");\n// 18.2.4 parseFloat(string)\n$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-float.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-int.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-int.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-int.js\");\n// 18.2.5 parseInt(string, radix)\n$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-int.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.promise.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.promise.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js\");\nvar task = __webpack_require__(/*! ./_task */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_task.js\").set;\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_microtask.js\")();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_perform.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_promise-resolve.js\");\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || '';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function')\n      && promise.then(empty) instanceof FakePromise\n      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n      // we can't detect it synchronously, so just check versions\n      && v8.indexOf('6.6') !== 0\n      && userAgent.indexOf('Chrome/66') === -1;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js\")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js\")($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js\")(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\")[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js\")(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.promise.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.apply.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar rApply = (__webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").Reflect || {}).apply;\nvar fApply = Function.apply;\n// MS Edge argumentsList argument is optional\n$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  rApply(function () { /* empty */ });\n}), 'Reflect', {\n  apply: function apply(target, thisArgument, argumentsList) {\n    var T = aFunction(target);\n    var L = anObject(argumentsList);\n    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.apply.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.construct.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.construct.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\nvar bind = __webpack_require__(/*! ./_bind */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_bind.js\");\nvar rConstruct = (__webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").Reflect || {}).construct;\n\n// MS Edge supports only 2 arguments and argumentsList argument is optional\n// FF Nightly sets third argument as `new.target`, but does not create `this` from it\nvar NEW_TARGET_BUG = fails(function () {\n  function F() { /* empty */ }\n  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);\n});\nvar ARGS_BUG = !fails(function () {\n  rConstruct(function () { /* empty */ });\n});\n\n$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {\n  construct: function construct(Target, args /* , newTarget */) {\n    aFunction(Target);\n    anObject(args);\n    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);\n    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);\n    if (Target == newTarget) {\n      // w/o altered newTarget, optimization for 0-4 arguments\n      switch (args.length) {\n        case 0: return new Target();\n        case 1: return new Target(args[0]);\n        case 2: return new Target(args[0], args[1]);\n        case 3: return new Target(args[0], args[1], args[2]);\n        case 4: return new Target(args[0], args[1], args[2], args[3]);\n      }\n      // w/o altered newTarget, lot of arguments case\n      var $args = [null];\n      $args.push.apply($args, args);\n      return new (bind.apply(Target, $args))();\n    }\n    // with altered newTarget, not support built-in constructors\n    var proto = newTarget.prototype;\n    var instance = create(isObject(proto) ? proto : Object.prototype);\n    var result = Function.apply.call(Target, instance, args);\n    return isObject(result) ? result : instance;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.construct.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\n\n// MS Edge has broken Reflect.defineProperty - throwing instead of returning false\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  // eslint-disable-next-line no-undef\n  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });\n}), 'Reflect', {\n  defineProperty: function defineProperty(target, propertyKey, attributes) {\n    anObject(target);\n    propertyKey = toPrimitive(propertyKey, true);\n    anObject(attributes);\n    try {\n      dP.f(target, propertyKey, attributes);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.define-property.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.4 Reflect.deleteProperty(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\").f;\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  deleteProperty: function deleteProperty(target, propertyKey) {\n    var desc = gOPD(anObject(target), propertyKey);\n    return desc && !desc.configurable ? false : delete target[propertyKey];\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.delete-property.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 26.1.5 Reflect.enumerate(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar Enumerate = function (iterated) {\n  this._t = anObject(iterated); // target\n  this._i = 0;                  // next index\n  var keys = this._k = [];      // keys\n  var key;\n  for (key in iterated) keys.push(key);\n};\n__webpack_require__(/*! ./_iter-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-create.js\")(Enumerate, 'Object', function () {\n  var that = this;\n  var keys = that._k;\n  var key;\n  do {\n    if (that._i >= keys.length) return { value: undefined, done: true };\n  } while (!((key = keys[that._i++]) in that._t));\n  return { value: key, done: false };\n});\n\n$export($export.S, 'Reflect', {\n  enumerate: function enumerate(target) {\n    return new Enumerate(target);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.enumerate.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {\n    return gOPD.f(anObject(target), propertyKey);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.8 Reflect.getPrototypeOf(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar getProto = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getPrototypeOf: function getPrototypeOf(target) {\n    return getProto(anObject(target));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.6 Reflect.get(target, propertyKey [, receiver])\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nfunction get(target, propertyKey /* , receiver */) {\n  var receiver = arguments.length < 3 ? target : arguments[2];\n  var desc, proto;\n  if (anObject(target) === receiver) return target[propertyKey];\n  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')\n    ? desc.value\n    : desc.get !== undefined\n      ? desc.get.call(receiver)\n      : undefined;\n  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);\n}\n\n$export($export.S, 'Reflect', { get: get });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.has.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.has.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.9 Reflect.has(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', {\n  has: function has(target, propertyKey) {\n    return propertyKey in target;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.has.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.10 Reflect.isExtensible(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar $isExtensible = Object.isExtensible;\n\n$export($export.S, 'Reflect', {\n  isExtensible: function isExtensible(target) {\n    anObject(target);\n    return $isExtensible ? $isExtensible(target) : true;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.is-extensible.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.11 Reflect.ownKeys(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_own-keys.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.own-keys.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.12 Reflect.preventExtensions(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar $preventExtensions = Object.preventExtensions;\n\n$export($export.S, 'Reflect', {\n  preventExtensions: function preventExtensions(target) {\n    anObject(target);\n    try {\n      if ($preventExtensions) $preventExtensions(target);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.14 Reflect.setPrototypeOf(target, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar setProto = __webpack_require__(/*! ./_set-proto */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-proto.js\");\n\nif (setProto) $export($export.S, 'Reflect', {\n  setPrototypeOf: function setPrototypeOf(target, proto) {\n    setProto.check(target, proto);\n    try {\n      setProto.set(target, proto);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nfunction set(target, propertyKey, V /* , receiver */) {\n  var receiver = arguments.length < 4 ? target : arguments[3];\n  var ownDesc = gOPD.f(anObject(target), propertyKey);\n  var existingDescriptor, proto;\n  if (!ownDesc) {\n    if (isObject(proto = getPrototypeOf(target))) {\n      return set(proto, propertyKey, V, receiver);\n    }\n    ownDesc = createDesc(0);\n  }\n  if (has(ownDesc, 'value')) {\n    if (ownDesc.writable === false || !isObject(receiver)) return false;\n    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {\n      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;\n      existingDescriptor.value = V;\n      dP.f(receiver, propertyKey, existingDescriptor);\n    } else dP.f(receiver, propertyKey, createDesc(0, V));\n    return true;\n  }\n  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);\n}\n\n$export($export.S, 'Reflect', { set: set });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.constructor.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_inherit-if-required.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f;\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js\").f;\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js\");\nvar $RegExp = global.RegExp;\nvar Base = $RegExp;\nvar proto = $RegExp.prototype;\nvar re1 = /a/g;\nvar re2 = /a/g;\n// \"new\" creates a new object, old webkit buggy here\nvar CORRECT_NEW = new $RegExp(re1) !== re1;\n\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  re2[__webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('match')] = false;\n  // RegExp constructor can alter flags and IsRegExp works correct with @@match\n  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';\n}))) {\n  $RegExp = function RegExp(p, f) {\n    var tiRE = this instanceof $RegExp;\n    var piRE = isRegExp(p);\n    var fiU = f === undefined;\n    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p\n      : inheritIfRequired(CORRECT_NEW\n        ? new Base(piRE && !fiU ? p.source : p, f)\n        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)\n      , tiRE ? this : proto, $RegExp);\n  };\n  var proxy = function (key) {\n    key in $RegExp || dP($RegExp, key, {\n      configurable: true,\n      get: function () { return Base[key]; },\n      set: function (it) { Base[key] = it; }\n    });\n  };\n  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);\n  proto.constructor = $RegExp;\n  $RegExp.prototype = proto;\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\")(global, 'RegExp', $RegExp);\n}\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js\")('RegExp');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.constructor.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.exec.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec.js\");\n__webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\")({\n  target: 'RegExp',\n  proto: true,\n  forced: regexpExec !== /./.exec\n}, {\n  exec: regexpExec\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.exec.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.flags.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 21.2.5.3 get RegExp.prototype.flags()\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f(RegExp.prototype, 'flags', {\n  configurable: true,\n  get: __webpack_require__(/*! ./_flags */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js\")\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.flags.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.match.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.match.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js\");\n\n// @@match logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js\")('match', 1, function (defined, MATCH, $match, maybeCallNative) {\n  return [\n    // `String.prototype.match` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.match\n    function match(regexp) {\n      var O = defined(this);\n      var fn = regexp == undefined ? undefined : regexp[MATCH];\n      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n    },\n    // `RegExp.prototype[@@match]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match\n    function (regexp) {\n      var res = maybeCallNative($match, regexp, this);\n      if (res.done) return res.value;\n      var rx = anObject(regexp);\n      var S = String(this);\n      if (!rx.global) return regExpExec(rx, S);\n      var fullUnicode = rx.unicode;\n      rx.lastIndex = 0;\n      var A = [];\n      var n = 0;\n      var result;\n      while ((result = regExpExec(rx, S)) !== null) {\n        var matchStr = String(result[0]);\n        A[n] = matchStr;\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n        n++;\n      }\n      return n === 0 ? null : A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.match.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.replace.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.replace.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js\");\nvar max = Math.max;\nvar min = Math.min;\nvar floor = Math.floor;\nvar SUBSTITUTION_SYMBOLS = /\\$([$&`']|\\d\\d?|<[^>]*>)/g;\nvar SUBSTITUTION_SYMBOLS_NO_NAMED = /\\$([$&`']|\\d\\d?)/g;\n\nvar maybeToString = function (it) {\n  return it === undefined ? it : String(it);\n};\n\n// @@replace logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js\")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {\n  return [\n    // `String.prototype.replace` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.replace\n    function replace(searchValue, replaceValue) {\n      var O = defined(this);\n      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];\n      return fn !== undefined\n        ? fn.call(searchValue, O, replaceValue)\n        : $replace.call(String(O), searchValue, replaceValue);\n    },\n    // `RegExp.prototype[@@replace]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace\n    function (regexp, replaceValue) {\n      var res = maybeCallNative($replace, regexp, this, replaceValue);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var functionalReplace = typeof replaceValue === 'function';\n      if (!functionalReplace) replaceValue = String(replaceValue);\n      var global = rx.global;\n      if (global) {\n        var fullUnicode = rx.unicode;\n        rx.lastIndex = 0;\n      }\n      var results = [];\n      while (true) {\n        var result = regExpExec(rx, S);\n        if (result === null) break;\n        results.push(result);\n        if (!global) break;\n        var matchStr = String(result[0]);\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n      }\n      var accumulatedResult = '';\n      var nextSourcePosition = 0;\n      for (var i = 0; i < results.length; i++) {\n        result = results[i];\n        var matched = String(result[0]);\n        var position = max(min(toInteger(result.index), S.length), 0);\n        var captures = [];\n        // NOTE: This is equivalent to\n        //   captures = result.slice(1).map(maybeToString)\n        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in\n        // the slice polyfill when slicing native arrays) \"doesn't work\" in safari 9 and\n        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.\n        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));\n        var namedCaptures = result.groups;\n        if (functionalReplace) {\n          var replacerArgs = [matched].concat(captures, position, S);\n          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);\n          var replacement = String(replaceValue.apply(undefined, replacerArgs));\n        } else {\n          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);\n        }\n        if (position >= nextSourcePosition) {\n          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;\n          nextSourcePosition = position + matched.length;\n        }\n      }\n      return accumulatedResult + S.slice(nextSourcePosition);\n    }\n  ];\n\n    // https://tc39.github.io/ecma262/#sec-getsubstitution\n  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {\n    var tailPos = position + matched.length;\n    var m = captures.length;\n    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;\n    if (namedCaptures !== undefined) {\n      namedCaptures = toObject(namedCaptures);\n      symbols = SUBSTITUTION_SYMBOLS;\n    }\n    return $replace.call(replacement, symbols, function (match, ch) {\n      var capture;\n      switch (ch.charAt(0)) {\n        case '$': return '$';\n        case '&': return matched;\n        case '`': return str.slice(0, position);\n        case \"'\": return str.slice(tailPos);\n        case '<':\n          capture = namedCaptures[ch.slice(1, -1)];\n          break;\n        default: // \\d\\d?\n          var n = +ch;\n          if (n === 0) return match;\n          if (n > m) {\n            var f = floor(n / 10);\n            if (f === 0) return match;\n            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);\n            return match;\n          }\n          capture = captures[n - 1];\n      }\n      return capture === undefined ? '' : capture;\n    });\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.replace.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.search.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.search.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar sameValue = __webpack_require__(/*! ./_same-value */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_same-value.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js\");\n\n// @@search logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js\")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {\n  return [\n    // `String.prototype.search` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.search\n    function search(regexp) {\n      var O = defined(this);\n      var fn = regexp == undefined ? undefined : regexp[SEARCH];\n      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));\n    },\n    // `RegExp.prototype[@@search]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search\n    function (regexp) {\n      var res = maybeCallNative($search, regexp, this);\n      if (res.done) return res.value;\n      var rx = anObject(regexp);\n      var S = String(this);\n      var previousLastIndex = rx.lastIndex;\n      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;\n      var result = regExpExec(rx, S);\n      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;\n      return result === null ? -1 : result.index;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.search.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.split.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.split.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_advance-string-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js\");\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\nvar $min = Math.min;\nvar $push = [].push;\nvar $SPLIT = 'split';\nvar LENGTH = 'length';\nvar LAST_INDEX = 'lastIndex';\nvar MAX_UINT32 = 0xffffffff;\n\n// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError\nvar SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });\n\n// @@split logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js\")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {\n  var internalSplit;\n  if (\n    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||\n    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||\n    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||\n    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||\n    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||\n    ''[$SPLIT](/.?/)[LENGTH]\n  ) {\n    // based on es5-shim implementation, need to rework it\n    internalSplit = function (separator, limit) {\n      var string = String(this);\n      if (separator === undefined && limit === 0) return [];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) return $split.call(string, separator, limit);\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') +\n                  (separator.multiline ? 'm' : '') +\n                  (separator.unicode ? 'u' : '') +\n                  (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var match, lastIndex, lastLength;\n      while (match = regexpExec.call(separatorCopy, string)) {\n        lastIndex = separatorCopy[LAST_INDEX];\n        if (lastIndex > lastLastIndex) {\n          output.push(string.slice(lastLastIndex, match.index));\n          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));\n          lastLength = match[0][LENGTH];\n          lastLastIndex = lastIndex;\n          if (output[LENGTH] >= splitLimit) break;\n        }\n        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string[LENGTH]) {\n        if (lastLength || !separatorCopy.test('')) output.push('');\n      } else output.push(string.slice(lastLastIndex));\n      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;\n    };\n  // Chakra, V8\n  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {\n    internalSplit = function (separator, limit) {\n      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);\n    };\n  } else {\n    internalSplit = $split;\n  }\n\n  return [\n    // `String.prototype.split` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.split\n    function split(separator, limit) {\n      var O = defined(this);\n      var splitter = separator == undefined ? undefined : separator[SPLIT];\n      return splitter !== undefined\n        ? splitter.call(separator, O, limit)\n        : internalSplit.call(String(O), separator, limit);\n    },\n    // `RegExp.prototype[@@split]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split\n    //\n    // NOTE: This cannot be properly polyfilled in engines that don't support\n    // the 'y' flag.\n    function (regexp, limit) {\n      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var C = speciesConstructor(rx, RegExp);\n\n      var unicodeMatching = rx.unicode;\n      var flags = (rx.ignoreCase ? 'i' : '') +\n                  (rx.multiline ? 'm' : '') +\n                  (rx.unicode ? 'u' : '') +\n                  (SUPPORTS_Y ? 'y' : 'g');\n\n      // ^(? + rx + ) is needed, in combination with some S slicing, to\n      // simulate the 'y' flag.\n      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];\n      var p = 0;\n      var q = 0;\n      var A = [];\n      while (q < S.length) {\n        splitter.lastIndex = SUPPORTS_Y ? q : 0;\n        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));\n        var e;\n        if (\n          z === null ||\n          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p\n        ) {\n          q = advanceStringIndex(S, q, unicodeMatching);\n        } else {\n          A.push(S.slice(p, q));\n          if (A.length === lim) return A;\n          for (var i = 1; i <= z.length - 1; i++) {\n            A.push(z[i]);\n            if (A.length === lim) return A;\n          }\n          q = p = e;\n        }\n      }\n      A.push(S.slice(p));\n      return A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.split.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.to-string.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.flags */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.flags.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\");\nvar TO_STRING = 'toString';\nvar $toString = /./[TO_STRING];\n\nvar define = function (fn) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\")(RegExp.prototype, TO_STRING, fn, true);\n};\n\n// 21.2.5.14 RegExp.prototype.toString()\nif (__webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {\n  define(function toString() {\n    var R = anObject(this);\n    return '/'.concat(R.source, '/',\n      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);\n  });\n// FF44- RegExp#toString has a wrong name\n} else if ($toString.name != TO_STRING) {\n  define(function toString() {\n    return $toString.call(this);\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.to-string.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.set.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.set.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js\");\nvar SET = 'Set';\n\n// 23.2 Set Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js\")(SET, function (get) {\n  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.2.3.1 Set.prototype.add(value)\n  add: function add(value) {\n    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);\n  }\n}, strong);\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.set.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.anchor.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.anchor.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.2 String.prototype.anchor(name)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('anchor', function (createHTML) {\n  return function anchor(name) {\n    return createHTML(this, 'a', 'name', name);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.anchor.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.big.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.big.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.3 String.prototype.big()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('big', function (createHTML) {\n  return function big() {\n    return createHTML(this, 'big', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.big.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.blink.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.blink.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.4 String.prototype.blink()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('blink', function (createHTML) {\n  return function blink() {\n    return createHTML(this, 'blink', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.blink.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.bold.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.bold.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.5 String.prototype.bold()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('bold', function (createHTML) {\n  return function bold() {\n    return createHTML(this, 'b', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.bold.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.code-point-at.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js\")(false);\n$export($export.P, 'String', {\n  // 21.1.3.3 String.prototype.codePointAt(pos)\n  codePointAt: function codePointAt(pos) {\n    return $at(this, pos);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.code-point-at.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.ends-with.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.ends-with.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-context.js\");\nvar ENDS_WITH = 'endsWith';\nvar $endsWith = ''[ENDS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails-is-regexp.js\")(ENDS_WITH), 'String', {\n  endsWith: function endsWith(searchString /* , endPosition = @length */) {\n    var that = context(this, searchString, ENDS_WITH);\n    var endPosition = arguments.length > 1 ? arguments[1] : undefined;\n    var len = toLength(that.length);\n    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);\n    var search = String(searchString);\n    return $endsWith\n      ? $endsWith.call(that, search, end)\n      : that.slice(end - search.length, end) === search;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.ends-with.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fixed.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fixed.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.6 String.prototype.fixed()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('fixed', function (createHTML) {\n  return function fixed() {\n    return createHTML(this, 'tt', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fixed.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontcolor.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.7 String.prototype.fontcolor(color)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('fontcolor', function (createHTML) {\n  return function fontcolor(color) {\n    return createHTML(this, 'font', 'color', color);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontcolor.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontsize.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.8 String.prototype.fontsize(size)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('fontsize', function (createHTML) {\n  return function fontsize(size) {\n    return createHTML(this, 'font', 'size', size);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontsize.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.from-code-point.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js\");\nvar fromCharCode = String.fromCharCode;\nvar $fromCodePoint = String.fromCodePoint;\n\n// length should be 1, old FF problem\n$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {\n  // 21.1.2.2 String.fromCodePoint(...codePoints)\n  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars\n    var res = [];\n    var aLen = arguments.length;\n    var i = 0;\n    var code;\n    while (aLen > i) {\n      code = +arguments[i++];\n      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');\n      res.push(code < 0x10000\n        ? fromCharCode(code)\n        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)\n      );\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.from-code-point.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.includes.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.includes.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.7 String.prototype.includes(searchString, position = 0)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-context.js\");\nvar INCLUDES = 'includes';\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails-is-regexp.js\")(INCLUDES), 'String', {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~context(this, searchString, INCLUDES)\n      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.includes.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.italics.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.italics.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.9 String.prototype.italics()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('italics', function (createHTML) {\n  return function italics() {\n    return createHTML(this, 'i', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.italics.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.iterator.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.iterator.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.link.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.link.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.10 String.prototype.link(url)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('link', function (createHTML) {\n  return function link(url) {\n    return createHTML(this, 'a', 'href', url);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.link.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.raw.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.raw.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\n$export($export.S, 'String', {\n  // 21.1.2.4 String.raw(callSite, ...substitutions)\n  raw: function raw(callSite) {\n    var tpl = toIObject(callSite.raw);\n    var len = toLength(tpl.length);\n    var aLen = arguments.length;\n    var res = [];\n    var i = 0;\n    while (len > i) {\n      res.push(String(tpl[i++]));\n      if (i < aLen) res.push(String(arguments[i]));\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.raw.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.repeat.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.repeat.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'String', {\n  // 21.1.3.13 String.prototype.repeat(count)\n  repeat: __webpack_require__(/*! ./_string-repeat */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-repeat.js\")\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.repeat.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.small.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.small.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.11 String.prototype.small()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('small', function (createHTML) {\n  return function small() {\n    return createHTML(this, 'small', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.small.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.starts-with.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.starts-with.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.18 String.prototype.startsWith(searchString [, position ])\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-context.js\");\nvar STARTS_WITH = 'startsWith';\nvar $startsWith = ''[STARTS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails-is-regexp.js\")(STARTS_WITH), 'String', {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = context(this, searchString, STARTS_WITH);\n    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = String(searchString);\n    return $startsWith\n      ? $startsWith.call(that, search, index)\n      : that.slice(index, index + search.length) === search;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.starts-with.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.strike.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.strike.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.12 String.prototype.strike()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('strike', function (createHTML) {\n  return function strike() {\n    return createHTML(this, 'strike', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.strike.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sub.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sub.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.13 String.prototype.sub()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('sub', function (createHTML) {\n  return function sub() {\n    return createHTML(this, 'sub', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sub.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sup.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sup.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.14 String.prototype.sup()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('sup', function (createHTML) {\n  return function sup() {\n    return createHTML(this, 'sup', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sup.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.trim.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.trim.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.1.3.25 String.prototype.trim()\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js\")('trim', function ($trim) {\n  return function trim() {\n    return $trim(this, 3);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.trim.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.symbol.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.symbol.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function';\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  __webpack_require__(/*! ./_object-gops */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js\").f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js\");\nvar buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-buffer.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar ArrayBuffer = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").ArrayBuffer;\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js\");\nvar $ArrayBuffer = buffer.ArrayBuffer;\nvar $DataView = buffer.DataView;\nvar $isView = $typed.ABV && ArrayBuffer.isView;\nvar $slice = $ArrayBuffer.prototype.slice;\nvar VIEW = $typed.VIEW;\nvar ARRAY_BUFFER = 'ArrayBuffer';\n\n$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });\n\n$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {\n  // 24.1.3.1 ArrayBuffer.isView(arg)\n  isView: function isView(it) {\n    return $isView && $isView(it) || isObject(it) && VIEW in it;\n  }\n});\n\n$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;\n}), ARRAY_BUFFER, {\n  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)\n  slice: function slice(start, end) {\n    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix\n    var len = anObject(this).byteLength;\n    var first = toAbsoluteIndex(start, len);\n    var fin = toAbsoluteIndex(end === undefined ? len : end, len);\n    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));\n    var viewS = new $DataView(this);\n    var viewT = new $DataView(result);\n    var index = 0;\n    while (first < fin) {\n      viewT.setUint8(index++, viewS.getUint8(first++));\n    } return result;\n  }\n});\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js\")(ARRAY_BUFFER);\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.array-buffer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.data-view.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js\").ABV, {\n  DataView: __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-buffer.js\").DataView\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.data-view.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Float32', 4, function (init) {\n  return function Float32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float32-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Float64', 8, function (init) {\n  return function Float64Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float64-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int16-array.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Int16', 2, function (init) {\n  return function Int16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int16-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int32-array.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Int32', 4, function (init) {\n  return function Int32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int32-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int8-array.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Int8', 1, function (init) {\n  return function Int8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int8-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Uint16', 2, function (init) {\n  return function Uint16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint16-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Uint32', 4, function (init) {\n  return function Uint32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint32-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8ClampedArray(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n}, true);\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-map.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-map.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar each = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\")(0);\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js\");\nvar assign = __webpack_require__(/*! ./_object-assign */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-assign.js\");\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-weak.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js\");\nvar NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js\");\nvar IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;\nvar WEAK_MAP = 'WeakMap';\nvar getWeak = meta.getWeak;\nvar isExtensible = Object.isExtensible;\nvar uncaughtFrozenStore = weak.ufstore;\nvar InternalMap;\n\nvar wrapper = function (get) {\n  return function WeakMap() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n};\n\nvar methods = {\n  // 23.3.3.3 WeakMap.prototype.get(key)\n  get: function get(key) {\n    if (isObject(key)) {\n      var data = getWeak(key);\n      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);\n      return data ? data[this._i] : undefined;\n    }\n  },\n  // 23.3.3.5 WeakMap.prototype.set(key, value)\n  set: function set(key, value) {\n    return weak.def(validate(this, WEAK_MAP), key, value);\n  }\n};\n\n// 23.3 WeakMap Objects\nvar $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js\")(WEAK_MAP, wrapper, methods, weak, true, true);\n\n// IE11 WeakMap frozen keys fix\nif (NATIVE_WEAK_MAP && IS_IE11) {\n  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);\n  assign(InternalMap.prototype, methods);\n  meta.NEED = true;\n  each(['delete', 'has', 'get', 'set'], function (key) {\n    var proto = $WeakMap.prototype;\n    var method = proto[key];\n    redefine(proto, key, function (a, b) {\n      // store frozen objects on internal weakmap shim\n      if (isObject(a) && !isExtensible(a)) {\n        if (!this._f) this._f = new InternalMap();\n        var result = this._f[key](a, b);\n        return key == 'set' ? this : result;\n      // store all the rest on native weakmap\n      } return method.call(this, a, b);\n    });\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-map.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-set.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-set.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-weak.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js\");\nvar WEAK_SET = 'WeakSet';\n\n// 23.4 WeakSet Objects\n__webpack_require__(/*! ./_collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js\")(WEAK_SET, function (get) {\n  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.4.3.1 WeakSet.prototype.add(value)\n  add: function add(value) {\n    return weak.def(validate(this, WEAK_SET), value, true);\n  }\n}, weak, false, true);\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-set.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flat-map.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flat-map.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_flatten-into-array.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-create.js\");\n\n$export($export.P, 'Array', {\n  flatMap: function flatMap(callbackfn /* , thisArg */) {\n    var O = toObject(this);\n    var sourceLen, A;\n    aFunction(callbackfn);\n    sourceLen = toLength(O.length);\n    A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js\")('flatMap');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flat-map.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flatten.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flatten.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_flatten-into-array.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-create.js\");\n\n$export($export.P, 'Array', {\n  flatten: function flatten(/* depthArg = 1 */) {\n    var depthArg = arguments[0];\n    var O = toObject(this);\n    var sourceLen = toLength(O.length);\n    var A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js\")('flatten');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flatten.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.includes.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.includes.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/Array.prototype.includes\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $includes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js\")(true);\n\n$export($export.P, 'Array', {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js\")('includes');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.includes.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.asap.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.asap.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_microtask.js\")();\nvar process = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").process;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\")(process) == 'process';\n\n$export($export.G, {\n  asap: function asap(fn) {\n    var domain = isNode && process.domain;\n    microtask(domain ? domain.bind(fn) : fn);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.asap.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.error.is-error.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.error.is-error.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/ljharb/proposal-is-error\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\");\n\n$export($export.S, 'Error', {\n  isError: function isError(it) {\n    return cof(it) === 'Error';\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.error.is-error.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.global.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.global.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.G, { global: __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.global.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.from.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.from.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js\")('Map');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.from.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js\")('Map');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.to-json.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.to-json.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-to-json.js\")('Map') });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.to-json.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.clamp.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.clamp.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  clamp: function clamp(x, lower, upper) {\n    return Math.min(upper, Math.max(lower, x));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.clamp.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.deg-per-rad.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.deg-per-rad.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.deg-per-rad.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.degrees.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.degrees.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar RAD_PER_DEG = 180 / Math.PI;\n\n$export($export.S, 'Math', {\n  degrees: function degrees(radians) {\n    return radians * RAD_PER_DEG;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.degrees.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.fscale.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.fscale.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar scale = __webpack_require__(/*! ./_math-scale */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-scale.js\");\nvar fround = __webpack_require__(/*! ./_math-fround */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-fround.js\");\n\n$export($export.S, 'Math', {\n  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {\n    return fround(scale(x, inLow, inHigh, outLow, outHigh));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.fscale.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.iaddh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.iaddh.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  iaddh: function iaddh(x0, x1, y0, y1) {\n    var $x0 = x0 >>> 0;\n    var $x1 = x1 >>> 0;\n    var $y0 = y0 >>> 0;\n    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.iaddh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.imulh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.imulh.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  imulh: function imulh(u, v) {\n    var UINT16 = 0xffff;\n    var $u = +u;\n    var $v = +v;\n    var u0 = $u & UINT16;\n    var v0 = $v & UINT16;\n    var u1 = $u >> 16;\n    var v1 = $v >> 16;\n    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);\n    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.imulh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.isubh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.isubh.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  isubh: function isubh(x0, x1, y0, y1) {\n    var $x0 = x0 >>> 0;\n    var $x1 = x1 >>> 0;\n    var $y0 = y0 >>> 0;\n    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.isubh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.rad-per-deg.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.rad-per-deg.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.rad-per-deg.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.radians.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.radians.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar DEG_PER_RAD = Math.PI / 180;\n\n$export($export.S, 'Math', {\n  radians: function radians(degrees) {\n    return degrees * DEG_PER_RAD;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.radians.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.scale.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.scale.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { scale: __webpack_require__(/*! ./_math-scale */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-scale.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.scale.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.signbit.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.signbit.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// http://jfbastien.github.io/papers/Math.signbit.html\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { signbit: function signbit(x) {\n  // eslint-disable-next-line no-self-compare\n  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;\n} });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.signbit.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.umulh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.umulh.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  umulh: function umulh(u, v) {\n    var UINT16 = 0xffff;\n    var $u = +u;\n    var $v = +v;\n    var u0 = $u & UINT16;\n    var v0 = $v & UINT16;\n    var u1 = $u >>> 16;\n    var v1 = $v >>> 16;\n    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);\n    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.umulh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-getter.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-getter.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\n\n// B.2.2.2 Object.prototype.__defineGetter__(P, getter)\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __defineGetter__: function __defineGetter__(P, getter) {\n    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-getter.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-setter.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-setter.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\n\n// B.2.2.3 Object.prototype.__defineSetter__(P, setter)\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __defineSetter__: function __defineSetter__(P, setter) {\n    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-setter.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.entries.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.entries.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $entries = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-to-array.js\")(true);\n\n$export($export.S, 'Object', {\n  entries: function entries(it) {\n    return $entries(it);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.entries.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-getownpropertydescriptors\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar ownKeys = __webpack_require__(/*! ./_own-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_own-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_create-property.js\");\n\n$export($export.S, 'Object', {\n  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {\n    var O = toIObject(object);\n    var getDesc = gOPD.f;\n    var keys = ownKeys(O);\n    var result = {};\n    var i = 0;\n    var key, desc;\n    while (keys.length > i) {\n      desc = getDesc(O, key = keys[i++]);\n      if (desc !== undefined) createProperty(result, key, desc);\n    }\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-getter.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-getter.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\").f;\n\n// B.2.2.4 Object.prototype.__lookupGetter__(P)\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __lookupGetter__: function __lookupGetter__(P) {\n    var O = toObject(this);\n    var K = toPrimitive(P, true);\n    var D;\n    do {\n      if (D = getOwnPropertyDescriptor(O, K)) return D.get;\n    } while (O = getPrototypeOf(O));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-getter.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-setter.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-setter.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\").f;\n\n// B.2.2.5 Object.prototype.__lookupSetter__(P)\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __lookupSetter__: function __lookupSetter__(P) {\n    var O = toObject(this);\n    var K = toPrimitive(P, true);\n    var D;\n    do {\n      if (D = getOwnPropertyDescriptor(O, K)) return D.set;\n    } while (O = getPrototypeOf(O));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-setter.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.values.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.values.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $values = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-to-array.js\")(false);\n\n$export($export.S, 'Object', {\n  values: function values(it) {\n    return $values(it);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.values.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.observable.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.observable.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/zenparsing/es-observable\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\");\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_microtask.js\")();\nvar OBSERVABLE = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('observable');\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js\");\nvar RETURN = forOf.RETURN;\n\nvar getMethod = function (fn) {\n  return fn == null ? undefined : aFunction(fn);\n};\n\nvar cleanupSubscription = function (subscription) {\n  var cleanup = subscription._c;\n  if (cleanup) {\n    subscription._c = undefined;\n    cleanup();\n  }\n};\n\nvar subscriptionClosed = function (subscription) {\n  return subscription._o === undefined;\n};\n\nvar closeSubscription = function (subscription) {\n  if (!subscriptionClosed(subscription)) {\n    subscription._o = undefined;\n    cleanupSubscription(subscription);\n  }\n};\n\nvar Subscription = function (observer, subscriber) {\n  anObject(observer);\n  this._c = undefined;\n  this._o = observer;\n  observer = new SubscriptionObserver(this);\n  try {\n    var cleanup = subscriber(observer);\n    var subscription = cleanup;\n    if (cleanup != null) {\n      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };\n      else aFunction(cleanup);\n      this._c = cleanup;\n    }\n  } catch (e) {\n    observer.error(e);\n    return;\n  } if (subscriptionClosed(this)) cleanupSubscription(this);\n};\n\nSubscription.prototype = redefineAll({}, {\n  unsubscribe: function unsubscribe() { closeSubscription(this); }\n});\n\nvar SubscriptionObserver = function (subscription) {\n  this._s = subscription;\n};\n\nSubscriptionObserver.prototype = redefineAll({}, {\n  next: function next(value) {\n    var subscription = this._s;\n    if (!subscriptionClosed(subscription)) {\n      var observer = subscription._o;\n      try {\n        var m = getMethod(observer.next);\n        if (m) return m.call(observer, value);\n      } catch (e) {\n        try {\n          closeSubscription(subscription);\n        } finally {\n          throw e;\n        }\n      }\n    }\n  },\n  error: function error(value) {\n    var subscription = this._s;\n    if (subscriptionClosed(subscription)) throw value;\n    var observer = subscription._o;\n    subscription._o = undefined;\n    try {\n      var m = getMethod(observer.error);\n      if (!m) throw value;\n      value = m.call(observer, value);\n    } catch (e) {\n      try {\n        cleanupSubscription(subscription);\n      } finally {\n        throw e;\n      }\n    } cleanupSubscription(subscription);\n    return value;\n  },\n  complete: function complete(value) {\n    var subscription = this._s;\n    if (!subscriptionClosed(subscription)) {\n      var observer = subscription._o;\n      subscription._o = undefined;\n      try {\n        var m = getMethod(observer.complete);\n        value = m ? m.call(observer, value) : undefined;\n      } catch (e) {\n        try {\n          cleanupSubscription(subscription);\n        } finally {\n          throw e;\n        }\n      } cleanupSubscription(subscription);\n      return value;\n    }\n  }\n});\n\nvar $Observable = function Observable(subscriber) {\n  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);\n};\n\nredefineAll($Observable.prototype, {\n  subscribe: function subscribe(observer) {\n    return new Subscription(observer, this._f);\n  },\n  forEach: function forEach(fn) {\n    var that = this;\n    return new (core.Promise || global.Promise)(function (resolve, reject) {\n      aFunction(fn);\n      var subscription = that.subscribe({\n        next: function (value) {\n          try {\n            return fn(value);\n          } catch (e) {\n            reject(e);\n            subscription.unsubscribe();\n          }\n        },\n        error: reject,\n        complete: resolve\n      });\n    });\n  }\n});\n\nredefineAll($Observable, {\n  from: function from(x) {\n    var C = typeof this === 'function' ? this : $Observable;\n    var method = getMethod(anObject(x)[OBSERVABLE]);\n    if (method) {\n      var observable = anObject(method.call(x));\n      return observable.constructor === C ? observable : new C(function (observer) {\n        return observable.subscribe(observer);\n      });\n    }\n    return new C(function (observer) {\n      var done = false;\n      microtask(function () {\n        if (!done) {\n          try {\n            if (forOf(x, false, function (it) {\n              observer.next(it);\n              if (done) return RETURN;\n            }) === RETURN) return;\n          } catch (e) {\n            if (done) throw e;\n            observer.error(e);\n            return;\n          } observer.complete();\n        }\n      });\n      return function () { done = true; };\n    });\n  },\n  of: function of() {\n    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];\n    return new (typeof this === 'function' ? this : $Observable)(function (observer) {\n      var done = false;\n      microtask(function () {\n        if (!done) {\n          for (var j = 0; j < items.length; ++j) {\n            observer.next(items[j]);\n            if (done) return;\n          } observer.complete();\n        }\n      });\n      return function () { done = true; };\n    });\n  }\n});\n\nhide($Observable.prototype, OBSERVABLE, function () { return this; });\n\n$export($export.G, { Observable: $Observable });\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js\")('Observable');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.observable.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.finally.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.finally.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_promise-resolve.js\");\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.finally.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.try.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.try.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-promise-try\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_perform.js\");\n\n$export($export.S, 'Promise', { 'try': function (callbackfn) {\n  var promiseCapability = newPromiseCapability.f(this);\n  var result = perform(callbackfn);\n  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n  return promiseCapability.promise;\n} });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.try.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar toMetaKey = metadata.key;\nvar ordinaryDefineOwnMetadata = metadata.set;\n\nmetadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {\n  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));\n} });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.define-metadata.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar toMetaKey = metadata.key;\nvar getOrCreateMetadataMap = metadata.map;\nvar store = metadata.store;\n\nmetadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {\n  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);\n  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);\n  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;\n  if (metadataMap.size) return true;\n  var targetMetadata = store.get(target);\n  targetMetadata['delete'](targetKey);\n  return !!targetMetadata.size || store['delete'](target);\n} });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.delete-metadata.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Set = __webpack_require__(/*! ./es6.set */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.set.js\");\nvar from = __webpack_require__(/*! ./_array-from-iterable */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-from-iterable.js\");\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryOwnMetadataKeys = metadata.keys;\nvar toMetaKey = metadata.key;\n\nvar ordinaryMetadataKeys = function (O, P) {\n  var oKeys = ordinaryOwnMetadataKeys(O, P);\n  var parent = getPrototypeOf(O);\n  if (parent === null) return oKeys;\n  var pKeys = ordinaryMetadataKeys(parent, P);\n  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;\n};\n\nmetadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {\n  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));\n} });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar ordinaryGetOwnMetadata = metadata.get;\nvar toMetaKey = metadata.key;\n\nvar ordinaryGetMetadata = function (MetadataKey, O, P) {\n  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);\n  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);\n  var parent = getPrototypeOf(O);\n  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;\n};\n\nmetadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar ordinaryOwnMetadataKeys = metadata.keys;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {\n  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));\n} });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar ordinaryGetOwnMetadata = metadata.get;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryGetOwnMetadata(metadataKey, anObject(target)\n    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar toMetaKey = metadata.key;\n\nvar ordinaryHasMetadata = function (MetadataKey, O, P) {\n  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);\n  if (hasOwn) return true;\n  var parent = getPrototypeOf(O);\n  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;\n};\n\nmetadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-metadata.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryHasOwnMetadata(metadataKey, anObject(target)\n    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-own-metadata.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.metadata.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\nvar toMetaKey = $metadata.key;\nvar ordinaryDefineOwnMetadata = $metadata.set;\n\n$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {\n  return function decorator(target, targetKey) {\n    ordinaryDefineOwnMetadata(\n      metadataKey, metadataValue,\n      (targetKey !== undefined ? anObject : aFunction)(target),\n      toMetaKey(targetKey)\n    );\n  };\n} });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.metadata.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.from.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.from.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js\")('Set');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.from.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js\")('Set');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.to-json.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.to-json.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-to-json.js\")('Set') });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.to-json.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.at.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.at.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/mathiasbynens/String.prototype.at\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js\")(true);\n\n$export($export.P, 'String', {\n  at: function at(pos) {\n    return $at(this, pos);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.at.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.match-all.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.match-all.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/String.prototype.matchAll/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js\");\nvar getFlags = __webpack_require__(/*! ./_flags */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js\");\nvar RegExpProto = RegExp.prototype;\n\nvar $RegExpStringIterator = function (regexp, string) {\n  this._r = regexp;\n  this._s = string;\n};\n\n__webpack_require__(/*! ./_iter-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-create.js\")($RegExpStringIterator, 'RegExp String', function next() {\n  var match = this._r.exec(this._s);\n  return { value: match, done: match === null };\n});\n\n$export($export.P, 'String', {\n  matchAll: function matchAll(regexp) {\n    defined(this);\n    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');\n    var S = String(this);\n    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);\n    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);\n    rx.lastIndex = toLength(regexp.lastIndex);\n    return new $RegExpStringIterator(rx, S);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.match-all.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-end.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-end.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-pad.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js\");\n\n// https://github.com/zloirock/core-js/issues/280\nvar WEBKIT_BUG = /Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(userAgent);\n\n$export($export.P + $export.F * WEBKIT_BUG, 'String', {\n  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-end.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-start.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-start.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-pad.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js\");\n\n// https://github.com/zloirock/core-js/issues/280\nvar WEBKIT_BUG = /Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(userAgent);\n\n$export($export.P + $export.F * WEBKIT_BUG, 'String', {\n  padStart: function padStart(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-start.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-left.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-left.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js\")('trimLeft', function ($trim) {\n  return function trimLeft() {\n    return $trim(this, 1);\n  };\n}, 'trimStart');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-left.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-right.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-right.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js\")('trimRight', function ($trim) {\n  return function trimRight() {\n    return $trim(this, 2);\n  };\n}, 'trimEnd');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-right.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.observable.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.observable.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-define.js\")('observable');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.observable.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.system.global.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.system.global.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'System', { global: __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.system.global.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.from.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.from.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js\")('WeakMap');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.from.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.of.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.of.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js\")('WeakMap');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.from.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.from.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js\")('WeakSet');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.from.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.of.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.of.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js\")('WeakSet');\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/web.dom.iterable.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/web.dom.iterable.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $iterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.iterator.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\");\nvar ITERATOR = wks('iterator');\nvar TO_STRING_TAG = wks('toStringTag');\nvar ArrayValues = Iterators.Array;\n\nvar DOMIterables = {\n  CSSRuleList: true, // TODO: Not spec compliant, should be false.\n  CSSStyleDeclaration: false,\n  CSSValueList: false,\n  ClientRectList: false,\n  DOMRectList: false,\n  DOMStringList: false,\n  DOMTokenList: true,\n  DataTransferItemList: false,\n  FileList: false,\n  HTMLAllCollection: false,\n  HTMLCollection: false,\n  HTMLFormElement: false,\n  HTMLSelectElement: false,\n  MediaList: true, // TODO: Not spec compliant, should be false.\n  MimeTypeArray: false,\n  NamedNodeMap: false,\n  NodeList: true,\n  PaintRequestList: false,\n  Plugin: false,\n  PluginArray: false,\n  SVGLengthList: false,\n  SVGNumberList: false,\n  SVGPathSegList: false,\n  SVGPointList: false,\n  SVGStringList: false,\n  SVGTransformList: false,\n  SourceBufferList: false,\n  StyleSheetList: true, // TODO: Not spec compliant, should be false.\n  TextTrackCueList: false,\n  TextTrackList: false,\n  TouchList: false\n};\n\nfor (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {\n  var NAME = collections[i];\n  var explicit = DOMIterables[NAME];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  var key;\n  if (proto) {\n    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);\n    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n    Iterators[NAME] = ArrayValues;\n    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/web.immediate.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/web.immediate.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar $task = __webpack_require__(/*! ./_task */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_task.js\");\n$export($export.G + $export.B, {\n  setImmediate: $task.set,\n  clearImmediate: $task.clear\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/web.immediate.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/web.timers.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/web.timers.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// ie9- setTimeout & setInterval additional parameters fix\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js\");\nvar slice = [].slice;\nvar MSIE = /MSIE .\\./.test(userAgent); // <- dirty ie9- check\nvar wrap = function (set) {\n  return function (fn, time /* , ...args */) {\n    var boundArgs = arguments.length > 2;\n    var args = boundArgs ? slice.call(arguments, 2) : false;\n    return set(boundArgs ? function () {\n      // eslint-disable-next-line no-new-func\n      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);\n    } : fn, time);\n  };\n};\n$export($export.G + $export.B + $export.F * MSIE, {\n  setTimeout: wrap(global.setTimeout),\n  setInterval: wrap(global.setInterval)\n});\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/modules/web.timers.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/shim.js":
/*!******************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/shim.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./modules/es6.symbol */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.symbol.js\");\n__webpack_require__(/*! ./modules/es6.object.create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.create.js\");\n__webpack_require__(/*! ./modules/es6.object.define-property */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-property.js\");\n__webpack_require__(/*! ./modules/es6.object.define-properties */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-properties.js\");\n__webpack_require__(/*! ./modules/es6.object.get-own-property-descriptor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js\");\n__webpack_require__(/*! ./modules/es6.object.get-prototype-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-prototype-of.js\");\n__webpack_require__(/*! ./modules/es6.object.keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.keys.js\");\n__webpack_require__(/*! ./modules/es6.object.get-own-property-names */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-names.js\");\n__webpack_require__(/*! ./modules/es6.object.freeze */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.freeze.js\");\n__webpack_require__(/*! ./modules/es6.object.seal */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.seal.js\");\n__webpack_require__(/*! ./modules/es6.object.prevent-extensions */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.prevent-extensions.js\");\n__webpack_require__(/*! ./modules/es6.object.is-frozen */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-frozen.js\");\n__webpack_require__(/*! ./modules/es6.object.is-sealed */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-sealed.js\");\n__webpack_require__(/*! ./modules/es6.object.is-extensible */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-extensible.js\");\n__webpack_require__(/*! ./modules/es6.object.assign */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.assign.js\");\n__webpack_require__(/*! ./modules/es6.object.is */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is.js\");\n__webpack_require__(/*! ./modules/es6.object.set-prototype-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.set-prototype-of.js\");\n__webpack_require__(/*! ./modules/es6.object.to-string */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ./modules/es6.function.bind */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.bind.js\");\n__webpack_require__(/*! ./modules/es6.function.name */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.name.js\");\n__webpack_require__(/*! ./modules/es6.function.has-instance */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.has-instance.js\");\n__webpack_require__(/*! ./modules/es6.parse-int */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-int.js\");\n__webpack_require__(/*! ./modules/es6.parse-float */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-float.js\");\n__webpack_require__(/*! ./modules/es6.number.constructor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.constructor.js\");\n__webpack_require__(/*! ./modules/es6.number.to-fixed */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-fixed.js\");\n__webpack_require__(/*! ./modules/es6.number.to-precision */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-precision.js\");\n__webpack_require__(/*! ./modules/es6.number.epsilon */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.epsilon.js\");\n__webpack_require__(/*! ./modules/es6.number.is-finite */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-finite.js\");\n__webpack_require__(/*! ./modules/es6.number.is-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.is-nan */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-nan.js\");\n__webpack_require__(/*! ./modules/es6.number.is-safe-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-safe-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.max-safe-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.max-safe-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.min-safe-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.min-safe-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.parse-float */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-float.js\");\n__webpack_require__(/*! ./modules/es6.number.parse-int */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-int.js\");\n__webpack_require__(/*! ./modules/es6.math.acosh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.acosh.js\");\n__webpack_require__(/*! ./modules/es6.math.asinh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.asinh.js\");\n__webpack_require__(/*! ./modules/es6.math.atanh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.atanh.js\");\n__webpack_require__(/*! ./modules/es6.math.cbrt */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cbrt.js\");\n__webpack_require__(/*! ./modules/es6.math.clz32 */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.clz32.js\");\n__webpack_require__(/*! ./modules/es6.math.cosh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cosh.js\");\n__webpack_require__(/*! ./modules/es6.math.expm1 */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.expm1.js\");\n__webpack_require__(/*! ./modules/es6.math.fround */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.fround.js\");\n__webpack_require__(/*! ./modules/es6.math.hypot */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.hypot.js\");\n__webpack_require__(/*! ./modules/es6.math.imul */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.imul.js\");\n__webpack_require__(/*! ./modules/es6.math.log10 */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log10.js\");\n__webpack_require__(/*! ./modules/es6.math.log1p */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log1p.js\");\n__webpack_require__(/*! ./modules/es6.math.log2 */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log2.js\");\n__webpack_require__(/*! ./modules/es6.math.sign */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sign.js\");\n__webpack_require__(/*! ./modules/es6.math.sinh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sinh.js\");\n__webpack_require__(/*! ./modules/es6.math.tanh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.tanh.js\");\n__webpack_require__(/*! ./modules/es6.math.trunc */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.trunc.js\");\n__webpack_require__(/*! ./modules/es6.string.from-code-point */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.from-code-point.js\");\n__webpack_require__(/*! ./modules/es6.string.raw */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.raw.js\");\n__webpack_require__(/*! ./modules/es6.string.trim */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.trim.js\");\n__webpack_require__(/*! ./modules/es6.string.iterator */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ./modules/es6.string.code-point-at */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.code-point-at.js\");\n__webpack_require__(/*! ./modules/es6.string.ends-with */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.ends-with.js\");\n__webpack_require__(/*! ./modules/es6.string.includes */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.includes.js\");\n__webpack_require__(/*! ./modules/es6.string.repeat */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.repeat.js\");\n__webpack_require__(/*! ./modules/es6.string.starts-with */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.starts-with.js\");\n__webpack_require__(/*! ./modules/es6.string.anchor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.anchor.js\");\n__webpack_require__(/*! ./modules/es6.string.big */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.big.js\");\n__webpack_require__(/*! ./modules/es6.string.blink */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.blink.js\");\n__webpack_require__(/*! ./modules/es6.string.bold */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.bold.js\");\n__webpack_require__(/*! ./modules/es6.string.fixed */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fixed.js\");\n__webpack_require__(/*! ./modules/es6.string.fontcolor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontcolor.js\");\n__webpack_require__(/*! ./modules/es6.string.fontsize */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontsize.js\");\n__webpack_require__(/*! ./modules/es6.string.italics */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.italics.js\");\n__webpack_require__(/*! ./modules/es6.string.link */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.link.js\");\n__webpack_require__(/*! ./modules/es6.string.small */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.small.js\");\n__webpack_require__(/*! ./modules/es6.string.strike */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.strike.js\");\n__webpack_require__(/*! ./modules/es6.string.sub */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sub.js\");\n__webpack_require__(/*! ./modules/es6.string.sup */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sup.js\");\n__webpack_require__(/*! ./modules/es6.date.now */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.now.js\");\n__webpack_require__(/*! ./modules/es6.date.to-json */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-json.js\");\n__webpack_require__(/*! ./modules/es6.date.to-iso-string */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-iso-string.js\");\n__webpack_require__(/*! ./modules/es6.date.to-string */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-string.js\");\n__webpack_require__(/*! ./modules/es6.date.to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-primitive.js\");\n__webpack_require__(/*! ./modules/es6.array.is-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.is-array.js\");\n__webpack_require__(/*! ./modules/es6.array.from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.from.js\");\n__webpack_require__(/*! ./modules/es6.array.of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.of.js\");\n__webpack_require__(/*! ./modules/es6.array.join */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.join.js\");\n__webpack_require__(/*! ./modules/es6.array.slice */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.slice.js\");\n__webpack_require__(/*! ./modules/es6.array.sort */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.sort.js\");\n__webpack_require__(/*! ./modules/es6.array.for-each */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.for-each.js\");\n__webpack_require__(/*! ./modules/es6.array.map */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.map.js\");\n__webpack_require__(/*! ./modules/es6.array.filter */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.filter.js\");\n__webpack_require__(/*! ./modules/es6.array.some */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.some.js\");\n__webpack_require__(/*! ./modules/es6.array.every */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.every.js\");\n__webpack_require__(/*! ./modules/es6.array.reduce */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce.js\");\n__webpack_require__(/*! ./modules/es6.array.reduce-right */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce-right.js\");\n__webpack_require__(/*! ./modules/es6.array.index-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.index-of.js\");\n__webpack_require__(/*! ./modules/es6.array.last-index-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.last-index-of.js\");\n__webpack_require__(/*! ./modules/es6.array.copy-within */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.copy-within.js\");\n__webpack_require__(/*! ./modules/es6.array.fill */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.fill.js\");\n__webpack_require__(/*! ./modules/es6.array.find */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find.js\");\n__webpack_require__(/*! ./modules/es6.array.find-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find-index.js\");\n__webpack_require__(/*! ./modules/es6.array.species */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.species.js\");\n__webpack_require__(/*! ./modules/es6.array.iterator */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.iterator.js\");\n__webpack_require__(/*! ./modules/es6.regexp.constructor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.constructor.js\");\n__webpack_require__(/*! ./modules/es6.regexp.exec */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.exec.js\");\n__webpack_require__(/*! ./modules/es6.regexp.to-string */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.to-string.js\");\n__webpack_require__(/*! ./modules/es6.regexp.flags */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.flags.js\");\n__webpack_require__(/*! ./modules/es6.regexp.match */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.match.js\");\n__webpack_require__(/*! ./modules/es6.regexp.replace */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.replace.js\");\n__webpack_require__(/*! ./modules/es6.regexp.search */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.search.js\");\n__webpack_require__(/*! ./modules/es6.regexp.split */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.split.js\");\n__webpack_require__(/*! ./modules/es6.promise */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.promise.js\");\n__webpack_require__(/*! ./modules/es6.map */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.map.js\");\n__webpack_require__(/*! ./modules/es6.set */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.set.js\");\n__webpack_require__(/*! ./modules/es6.weak-map */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-map.js\");\n__webpack_require__(/*! ./modules/es6.weak-set */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-set.js\");\n__webpack_require__(/*! ./modules/es6.typed.array-buffer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.array-buffer.js\");\n__webpack_require__(/*! ./modules/es6.typed.data-view */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.data-view.js\");\n__webpack_require__(/*! ./modules/es6.typed.int8-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int8-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint8-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint8-clamped-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.int16-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int16-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint16-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint16-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.int32-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int32-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint32-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint32-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.float32-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float32-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.float64-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float64-array.js\");\n__webpack_require__(/*! ./modules/es6.reflect.apply */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.apply.js\");\n__webpack_require__(/*! ./modules/es6.reflect.construct */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.construct.js\");\n__webpack_require__(/*! ./modules/es6.reflect.define-property */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.define-property.js\");\n__webpack_require__(/*! ./modules/es6.reflect.delete-property */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.delete-property.js\");\n__webpack_require__(/*! ./modules/es6.reflect.enumerate */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.enumerate.js\");\n__webpack_require__(/*! ./modules/es6.reflect.get */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get.js\");\n__webpack_require__(/*! ./modules/es6.reflect.get-own-property-descriptor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js\");\n__webpack_require__(/*! ./modules/es6.reflect.get-prototype-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-prototype-of.js\");\n__webpack_require__(/*! ./modules/es6.reflect.has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.has.js\");\n__webpack_require__(/*! ./modules/es6.reflect.is-extensible */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.is-extensible.js\");\n__webpack_require__(/*! ./modules/es6.reflect.own-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.own-keys.js\");\n__webpack_require__(/*! ./modules/es6.reflect.prevent-extensions */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.prevent-extensions.js\");\n__webpack_require__(/*! ./modules/es6.reflect.set */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set.js\");\n__webpack_require__(/*! ./modules/es6.reflect.set-prototype-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set-prototype-of.js\");\n__webpack_require__(/*! ./modules/es7.array.includes */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.includes.js\");\n__webpack_require__(/*! ./modules/es7.array.flat-map */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flat-map.js\");\n__webpack_require__(/*! ./modules/es7.array.flatten */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flatten.js\");\n__webpack_require__(/*! ./modules/es7.string.at */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.at.js\");\n__webpack_require__(/*! ./modules/es7.string.pad-start */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-start.js\");\n__webpack_require__(/*! ./modules/es7.string.pad-end */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-end.js\");\n__webpack_require__(/*! ./modules/es7.string.trim-left */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-left.js\");\n__webpack_require__(/*! ./modules/es7.string.trim-right */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-right.js\");\n__webpack_require__(/*! ./modules/es7.string.match-all */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.match-all.js\");\n__webpack_require__(/*! ./modules/es7.symbol.async-iterator */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n__webpack_require__(/*! ./modules/es7.symbol.observable */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.observable.js\");\n__webpack_require__(/*! ./modules/es7.object.get-own-property-descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js\");\n__webpack_require__(/*! ./modules/es7.object.values */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.values.js\");\n__webpack_require__(/*! ./modules/es7.object.entries */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.entries.js\");\n__webpack_require__(/*! ./modules/es7.object.define-getter */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-getter.js\");\n__webpack_require__(/*! ./modules/es7.object.define-setter */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-setter.js\");\n__webpack_require__(/*! ./modules/es7.object.lookup-getter */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-getter.js\");\n__webpack_require__(/*! ./modules/es7.object.lookup-setter */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-setter.js\");\n__webpack_require__(/*! ./modules/es7.map.to-json */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.to-json.js\");\n__webpack_require__(/*! ./modules/es7.set.to-json */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.to-json.js\");\n__webpack_require__(/*! ./modules/es7.map.of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.of.js\");\n__webpack_require__(/*! ./modules/es7.set.of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.of.js\");\n__webpack_require__(/*! ./modules/es7.weak-map.of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.of.js\");\n__webpack_require__(/*! ./modules/es7.weak-set.of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.of.js\");\n__webpack_require__(/*! ./modules/es7.map.from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.from.js\");\n__webpack_require__(/*! ./modules/es7.set.from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.from.js\");\n__webpack_require__(/*! ./modules/es7.weak-map.from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.from.js\");\n__webpack_require__(/*! ./modules/es7.weak-set.from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.from.js\");\n__webpack_require__(/*! ./modules/es7.global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.global.js\");\n__webpack_require__(/*! ./modules/es7.system.global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.system.global.js\");\n__webpack_require__(/*! ./modules/es7.error.is-error */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.error.is-error.js\");\n__webpack_require__(/*! ./modules/es7.math.clamp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.clamp.js\");\n__webpack_require__(/*! ./modules/es7.math.deg-per-rad */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.deg-per-rad.js\");\n__webpack_require__(/*! ./modules/es7.math.degrees */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.degrees.js\");\n__webpack_require__(/*! ./modules/es7.math.fscale */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.fscale.js\");\n__webpack_require__(/*! ./modules/es7.math.iaddh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.iaddh.js\");\n__webpack_require__(/*! ./modules/es7.math.isubh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.isubh.js\");\n__webpack_require__(/*! ./modules/es7.math.imulh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.imulh.js\");\n__webpack_require__(/*! ./modules/es7.math.rad-per-deg */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.rad-per-deg.js\");\n__webpack_require__(/*! ./modules/es7.math.radians */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.radians.js\");\n__webpack_require__(/*! ./modules/es7.math.scale */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.scale.js\");\n__webpack_require__(/*! ./modules/es7.math.umulh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.umulh.js\");\n__webpack_require__(/*! ./modules/es7.math.signbit */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.signbit.js\");\n__webpack_require__(/*! ./modules/es7.promise.finally */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.finally.js\");\n__webpack_require__(/*! ./modules/es7.promise.try */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.try.js\");\n__webpack_require__(/*! ./modules/es7.reflect.define-metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.define-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.delete-metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.delete-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-metadata-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js\");\n__webpack_require__(/*! ./modules/es7.reflect.has-metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.has-own-metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-own-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.metadata.js\");\n__webpack_require__(/*! ./modules/es7.asap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.asap.js\");\n__webpack_require__(/*! ./modules/es7.observable */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.observable.js\");\n__webpack_require__(/*! ./modules/web.timers */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/web.timers.js\");\n__webpack_require__(/*! ./modules/web.immediate */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/web.immediate.js\");\n__webpack_require__(/*! ./modules/web.dom.iterable */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ./modules/_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\");\n\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/core-js/shim.js?");

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.byteLength = byteLength\nexports.toByteArray = toByteArray\nexports.fromByteArray = fromByteArray\n\nvar lookup = []\nvar revLookup = []\nvar Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array\n\nvar code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'\nfor (var i = 0, len = code.length; i < len; ++i) {\n  lookup[i] = code[i]\n  revLookup[code.charCodeAt(i)] = i\n}\n\n// Support decoding URL-safe base64 strings, as Node.js does.\n// See: https://en.wikipedia.org/wiki/Base64#URL_applications\nrevLookup['-'.charCodeAt(0)] = 62\nrevLookup['_'.charCodeAt(0)] = 63\n\nfunction getLens (b64) {\n  var len = b64.length\n\n  if (len % 4 > 0) {\n    throw new Error('Invalid string. Length must be a multiple of 4')\n  }\n\n  // Trim off extra bytes after placeholder bytes are found\n  // See: https://github.com/beatgammit/base64-js/issues/42\n  var validLen = b64.indexOf('=')\n  if (validLen === -1) validLen = len\n\n  var placeHoldersLen = validLen === len\n    ? 0\n    : 4 - (validLen % 4)\n\n  return [validLen, placeHoldersLen]\n}\n\n// base64 is 4/3 + up to two characters of the original data\nfunction byteLength (b64) {\n  var lens = getLens(b64)\n  var validLen = lens[0]\n  var placeHoldersLen = lens[1]\n  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen\n}\n\nfunction _byteLength (b64, validLen, placeHoldersLen) {\n  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen\n}\n\nfunction toByteArray (b64) {\n  var tmp\n  var lens = getLens(b64)\n  var validLen = lens[0]\n  var placeHoldersLen = lens[1]\n\n  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))\n\n  var curByte = 0\n\n  // if there are placeholders, only get up to the last complete 4 chars\n  var len = placeHoldersLen > 0\n    ? validLen - 4\n    : validLen\n\n  for (var i = 0; i < len; i += 4) {\n    tmp =\n      (revLookup[b64.charCodeAt(i)] << 18) |\n      (revLookup[b64.charCodeAt(i + 1)] << 12) |\n      (revLookup[b64.charCodeAt(i + 2)] << 6) |\n      revLookup[b64.charCodeAt(i + 3)]\n    arr[curByte++] = (tmp >> 16) & 0xFF\n    arr[curByte++] = (tmp >> 8) & 0xFF\n    arr[curByte++] = tmp & 0xFF\n  }\n\n  if (placeHoldersLen === 2) {\n    tmp =\n      (revLookup[b64.charCodeAt(i)] << 2) |\n      (revLookup[b64.charCodeAt(i + 1)] >> 4)\n    arr[curByte++] = tmp & 0xFF\n  }\n\n  if (placeHoldersLen === 1) {\n    tmp =\n      (revLookup[b64.charCodeAt(i)] << 10) |\n      (revLookup[b64.charCodeAt(i + 1)] << 4) |\n      (revLookup[b64.charCodeAt(i + 2)] >> 2)\n    arr[curByte++] = (tmp >> 8) & 0xFF\n    arr[curByte++] = tmp & 0xFF\n  }\n\n  return arr\n}\n\nfunction tripletToBase64 (num) {\n  return lookup[num >> 18 & 0x3F] +\n    lookup[num >> 12 & 0x3F] +\n    lookup[num >> 6 & 0x3F] +\n    lookup[num & 0x3F]\n}\n\nfunction encodeChunk (uint8, start, end) {\n  var tmp\n  var output = []\n  for (var i = start; i < end; i += 3) {\n    tmp =\n      ((uint8[i] << 16) & 0xFF0000) +\n      ((uint8[i + 1] << 8) & 0xFF00) +\n      (uint8[i + 2] & 0xFF)\n    output.push(tripletToBase64(tmp))\n  }\n  return output.join('')\n}\n\nfunction fromByteArray (uint8) {\n  var tmp\n  var len = uint8.length\n  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes\n  var parts = []\n  var maxChunkLength = 16383 // must be multiple of 3\n\n  // go through the array every three bytes, we'll deal with trailing stuff later\n  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {\n    parts.push(encodeChunk(\n      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)\n    ))\n  }\n\n  // pad the end with zeros, but make sure to not forget the extra bytes\n  if (extraBytes === 1) {\n    tmp = uint8[len - 1]\n    parts.push(\n      lookup[tmp >> 2] +\n      lookup[(tmp << 4) & 0x3F] +\n      '=='\n    )\n  } else if (extraBytes === 2) {\n    tmp = (uint8[len - 2] << 8) + uint8[len - 1]\n    parts.push(\n      lookup[tmp >> 10] +\n      lookup[(tmp >> 4) & 0x3F] +\n      lookup[(tmp << 2) & 0x3F] +\n      '='\n    )\n  }\n\n  return parts.join('')\n}\n\n\n//# sourceURL=webpack:///./node_modules/base64-js/index.js?");

/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {/*!\n * The buffer module from node.js, for the browser.\n *\n * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>\n * @license  MIT\n */\n/* eslint-disable no-proto */\n\n\n\nvar base64 = __webpack_require__(/*! base64-js */ \"./node_modules/base64-js/index.js\")\nvar ieee754 = __webpack_require__(/*! ieee754 */ \"./node_modules/ieee754/index.js\")\nvar isArray = __webpack_require__(/*! isarray */ \"./node_modules/isarray/index.js\")\n\nexports.Buffer = Buffer\nexports.SlowBuffer = SlowBuffer\nexports.INSPECT_MAX_BYTES = 50\n\n/**\n * If `Buffer.TYPED_ARRAY_SUPPORT`:\n *   === true    Use Uint8Array implementation (fastest)\n *   === false   Use Object implementation (most compatible, even IE6)\n *\n * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,\n * Opera 11.6+, iOS 4.2+.\n *\n * Due to various browser bugs, sometimes the Object implementation will be used even\n * when the browser supports typed arrays.\n *\n * Note:\n *\n *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,\n *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.\n *\n *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.\n *\n *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of\n *     incorrect length in some situations.\n\n * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they\n * get the Object implementation, which is slower but behaves correctly.\n */\nBuffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined\n  ? global.TYPED_ARRAY_SUPPORT\n  : typedArraySupport()\n\n/*\n * Export kMaxLength after typed array support is determined.\n */\nexports.kMaxLength = kMaxLength()\n\nfunction typedArraySupport () {\n  try {\n    var arr = new Uint8Array(1)\n    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}\n    return arr.foo() === 42 && // typed array instances can be augmented\n        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`\n        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`\n  } catch (e) {\n    return false\n  }\n}\n\nfunction kMaxLength () {\n  return Buffer.TYPED_ARRAY_SUPPORT\n    ? 0x7fffffff\n    : 0x3fffffff\n}\n\nfunction createBuffer (that, length) {\n  if (kMaxLength() < length) {\n    throw new RangeError('Invalid typed array length')\n  }\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    // Return an augmented `Uint8Array` instance, for best performance\n    that = new Uint8Array(length)\n    that.__proto__ = Buffer.prototype\n  } else {\n    // Fallback: Return an object instance of the Buffer class\n    if (that === null) {\n      that = new Buffer(length)\n    }\n    that.length = length\n  }\n\n  return that\n}\n\n/**\n * The Buffer constructor returns instances of `Uint8Array` that have their\n * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of\n * `Uint8Array`, so the returned instances will have all the node `Buffer` methods\n * and the `Uint8Array` methods. Square bracket notation works as expected -- it\n * returns a single octet.\n *\n * The `Uint8Array` prototype remains unmodified.\n */\n\nfunction Buffer (arg, encodingOrOffset, length) {\n  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {\n    return new Buffer(arg, encodingOrOffset, length)\n  }\n\n  // Common case.\n  if (typeof arg === 'number') {\n    if (typeof encodingOrOffset === 'string') {\n      throw new Error(\n        'If encoding is specified then the first argument must be a string'\n      )\n    }\n    return allocUnsafe(this, arg)\n  }\n  return from(this, arg, encodingOrOffset, length)\n}\n\nBuffer.poolSize = 8192 // not used by this implementation\n\n// TODO: Legacy, not needed anymore. Remove in next major version.\nBuffer._augment = function (arr) {\n  arr.__proto__ = Buffer.prototype\n  return arr\n}\n\nfunction from (that, value, encodingOrOffset, length) {\n  if (typeof value === 'number') {\n    throw new TypeError('\"value\" argument must not be a number')\n  }\n\n  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {\n    return fromArrayBuffer(that, value, encodingOrOffset, length)\n  }\n\n  if (typeof value === 'string') {\n    return fromString(that, value, encodingOrOffset)\n  }\n\n  return fromObject(that, value)\n}\n\n/**\n * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError\n * if value is a number.\n * Buffer.from(str[, encoding])\n * Buffer.from(array)\n * Buffer.from(buffer)\n * Buffer.from(arrayBuffer[, byteOffset[, length]])\n **/\nBuffer.from = function (value, encodingOrOffset, length) {\n  return from(null, value, encodingOrOffset, length)\n}\n\nif (Buffer.TYPED_ARRAY_SUPPORT) {\n  Buffer.prototype.__proto__ = Uint8Array.prototype\n  Buffer.__proto__ = Uint8Array\n  if (typeof Symbol !== 'undefined' && Symbol.species &&\n      Buffer[Symbol.species] === Buffer) {\n    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97\n    Object.defineProperty(Buffer, Symbol.species, {\n      value: null,\n      configurable: true\n    })\n  }\n}\n\nfunction assertSize (size) {\n  if (typeof size !== 'number') {\n    throw new TypeError('\"size\" argument must be a number')\n  } else if (size < 0) {\n    throw new RangeError('\"size\" argument must not be negative')\n  }\n}\n\nfunction alloc (that, size, fill, encoding) {\n  assertSize(size)\n  if (size <= 0) {\n    return createBuffer(that, size)\n  }\n  if (fill !== undefined) {\n    // Only pay attention to encoding if it's a string. This\n    // prevents accidentally sending in a number that would\n    // be interpretted as a start offset.\n    return typeof encoding === 'string'\n      ? createBuffer(that, size).fill(fill, encoding)\n      : createBuffer(that, size).fill(fill)\n  }\n  return createBuffer(that, size)\n}\n\n/**\n * Creates a new filled Buffer instance.\n * alloc(size[, fill[, encoding]])\n **/\nBuffer.alloc = function (size, fill, encoding) {\n  return alloc(null, size, fill, encoding)\n}\n\nfunction allocUnsafe (that, size) {\n  assertSize(size)\n  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)\n  if (!Buffer.TYPED_ARRAY_SUPPORT) {\n    for (var i = 0; i < size; ++i) {\n      that[i] = 0\n    }\n  }\n  return that\n}\n\n/**\n * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.\n * */\nBuffer.allocUnsafe = function (size) {\n  return allocUnsafe(null, size)\n}\n/**\n * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.\n */\nBuffer.allocUnsafeSlow = function (size) {\n  return allocUnsafe(null, size)\n}\n\nfunction fromString (that, string, encoding) {\n  if (typeof encoding !== 'string' || encoding === '') {\n    encoding = 'utf8'\n  }\n\n  if (!Buffer.isEncoding(encoding)) {\n    throw new TypeError('\"encoding\" must be a valid string encoding')\n  }\n\n  var length = byteLength(string, encoding) | 0\n  that = createBuffer(that, length)\n\n  var actual = that.write(string, encoding)\n\n  if (actual !== length) {\n    // Writing a hex string, for example, that contains invalid characters will\n    // cause everything after the first invalid character to be ignored. (e.g.\n    // 'abxxcd' will be treated as 'ab')\n    that = that.slice(0, actual)\n  }\n\n  return that\n}\n\nfunction fromArrayLike (that, array) {\n  var length = array.length < 0 ? 0 : checked(array.length) | 0\n  that = createBuffer(that, length)\n  for (var i = 0; i < length; i += 1) {\n    that[i] = array[i] & 255\n  }\n  return that\n}\n\nfunction fromArrayBuffer (that, array, byteOffset, length) {\n  array.byteLength // this throws if `array` is not a valid ArrayBuffer\n\n  if (byteOffset < 0 || array.byteLength < byteOffset) {\n    throw new RangeError('\\'offset\\' is out of bounds')\n  }\n\n  if (array.byteLength < byteOffset + (length || 0)) {\n    throw new RangeError('\\'length\\' is out of bounds')\n  }\n\n  if (byteOffset === undefined && length === undefined) {\n    array = new Uint8Array(array)\n  } else if (length === undefined) {\n    array = new Uint8Array(array, byteOffset)\n  } else {\n    array = new Uint8Array(array, byteOffset, length)\n  }\n\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    // Return an augmented `Uint8Array` instance, for best performance\n    that = array\n    that.__proto__ = Buffer.prototype\n  } else {\n    // Fallback: Return an object instance of the Buffer class\n    that = fromArrayLike(that, array)\n  }\n  return that\n}\n\nfunction fromObject (that, obj) {\n  if (Buffer.isBuffer(obj)) {\n    var len = checked(obj.length) | 0\n    that = createBuffer(that, len)\n\n    if (that.length === 0) {\n      return that\n    }\n\n    obj.copy(that, 0, 0, len)\n    return that\n  }\n\n  if (obj) {\n    if ((typeof ArrayBuffer !== 'undefined' &&\n        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {\n      if (typeof obj.length !== 'number' || isnan(obj.length)) {\n        return createBuffer(that, 0)\n      }\n      return fromArrayLike(that, obj)\n    }\n\n    if (obj.type === 'Buffer' && isArray(obj.data)) {\n      return fromArrayLike(that, obj.data)\n    }\n  }\n\n  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')\n}\n\nfunction checked (length) {\n  // Note: cannot use `length < kMaxLength()` here because that fails when\n  // length is NaN (which is otherwise coerced to zero.)\n  if (length >= kMaxLength()) {\n    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +\n                         'size: 0x' + kMaxLength().toString(16) + ' bytes')\n  }\n  return length | 0\n}\n\nfunction SlowBuffer (length) {\n  if (+length != length) { // eslint-disable-line eqeqeq\n    length = 0\n  }\n  return Buffer.alloc(+length)\n}\n\nBuffer.isBuffer = function isBuffer (b) {\n  return !!(b != null && b._isBuffer)\n}\n\nBuffer.compare = function compare (a, b) {\n  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {\n    throw new TypeError('Arguments must be Buffers')\n  }\n\n  if (a === b) return 0\n\n  var x = a.length\n  var y = b.length\n\n  for (var i = 0, len = Math.min(x, y); i < len; ++i) {\n    if (a[i] !== b[i]) {\n      x = a[i]\n      y = b[i]\n      break\n    }\n  }\n\n  if (x < y) return -1\n  if (y < x) return 1\n  return 0\n}\n\nBuffer.isEncoding = function isEncoding (encoding) {\n  switch (String(encoding).toLowerCase()) {\n    case 'hex':\n    case 'utf8':\n    case 'utf-8':\n    case 'ascii':\n    case 'latin1':\n    case 'binary':\n    case 'base64':\n    case 'ucs2':\n    case 'ucs-2':\n    case 'utf16le':\n    case 'utf-16le':\n      return true\n    default:\n      return false\n  }\n}\n\nBuffer.concat = function concat (list, length) {\n  if (!isArray(list)) {\n    throw new TypeError('\"list\" argument must be an Array of Buffers')\n  }\n\n  if (list.length === 0) {\n    return Buffer.alloc(0)\n  }\n\n  var i\n  if (length === undefined) {\n    length = 0\n    for (i = 0; i < list.length; ++i) {\n      length += list[i].length\n    }\n  }\n\n  var buffer = Buffer.allocUnsafe(length)\n  var pos = 0\n  for (i = 0; i < list.length; ++i) {\n    var buf = list[i]\n    if (!Buffer.isBuffer(buf)) {\n      throw new TypeError('\"list\" argument must be an Array of Buffers')\n    }\n    buf.copy(buffer, pos)\n    pos += buf.length\n  }\n  return buffer\n}\n\nfunction byteLength (string, encoding) {\n  if (Buffer.isBuffer(string)) {\n    return string.length\n  }\n  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&\n      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {\n    return string.byteLength\n  }\n  if (typeof string !== 'string') {\n    string = '' + string\n  }\n\n  var len = string.length\n  if (len === 0) return 0\n\n  // Use a for loop to avoid recursion\n  var loweredCase = false\n  for (;;) {\n    switch (encoding) {\n      case 'ascii':\n      case 'latin1':\n      case 'binary':\n        return len\n      case 'utf8':\n      case 'utf-8':\n      case undefined:\n        return utf8ToBytes(string).length\n      case 'ucs2':\n      case 'ucs-2':\n      case 'utf16le':\n      case 'utf-16le':\n        return len * 2\n      case 'hex':\n        return len >>> 1\n      case 'base64':\n        return base64ToBytes(string).length\n      default:\n        if (loweredCase) return utf8ToBytes(string).length // assume utf8\n        encoding = ('' + encoding).toLowerCase()\n        loweredCase = true\n    }\n  }\n}\nBuffer.byteLength = byteLength\n\nfunction slowToString (encoding, start, end) {\n  var loweredCase = false\n\n  // No need to verify that \"this.length <= MAX_UINT32\" since it's a read-only\n  // property of a typed array.\n\n  // This behaves neither like String nor Uint8Array in that we set start/end\n  // to their upper/lower bounds if the value passed is out of range.\n  // undefined is handled specially as per ECMA-262 6th Edition,\n  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.\n  if (start === undefined || start < 0) {\n    start = 0\n  }\n  // Return early if start > this.length. Done here to prevent potential uint32\n  // coercion fail below.\n  if (start > this.length) {\n    return ''\n  }\n\n  if (end === undefined || end > this.length) {\n    end = this.length\n  }\n\n  if (end <= 0) {\n    return ''\n  }\n\n  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.\n  end >>>= 0\n  start >>>= 0\n\n  if (end <= start) {\n    return ''\n  }\n\n  if (!encoding) encoding = 'utf8'\n\n  while (true) {\n    switch (encoding) {\n      case 'hex':\n        return hexSlice(this, start, end)\n\n      case 'utf8':\n      case 'utf-8':\n        return utf8Slice(this, start, end)\n\n      case 'ascii':\n        return asciiSlice(this, start, end)\n\n      case 'latin1':\n      case 'binary':\n        return latin1Slice(this, start, end)\n\n      case 'base64':\n        return base64Slice(this, start, end)\n\n      case 'ucs2':\n      case 'ucs-2':\n      case 'utf16le':\n      case 'utf-16le':\n        return utf16leSlice(this, start, end)\n\n      default:\n        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)\n        encoding = (encoding + '').toLowerCase()\n        loweredCase = true\n    }\n  }\n}\n\n// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect\n// Buffer instances.\nBuffer.prototype._isBuffer = true\n\nfunction swap (b, n, m) {\n  var i = b[n]\n  b[n] = b[m]\n  b[m] = i\n}\n\nBuffer.prototype.swap16 = function swap16 () {\n  var len = this.length\n  if (len % 2 !== 0) {\n    throw new RangeError('Buffer size must be a multiple of 16-bits')\n  }\n  for (var i = 0; i < len; i += 2) {\n    swap(this, i, i + 1)\n  }\n  return this\n}\n\nBuffer.prototype.swap32 = function swap32 () {\n  var len = this.length\n  if (len % 4 !== 0) {\n    throw new RangeError('Buffer size must be a multiple of 32-bits')\n  }\n  for (var i = 0; i < len; i += 4) {\n    swap(this, i, i + 3)\n    swap(this, i + 1, i + 2)\n  }\n  return this\n}\n\nBuffer.prototype.swap64 = function swap64 () {\n  var len = this.length\n  if (len % 8 !== 0) {\n    throw new RangeError('Buffer size must be a multiple of 64-bits')\n  }\n  for (var i = 0; i < len; i += 8) {\n    swap(this, i, i + 7)\n    swap(this, i + 1, i + 6)\n    swap(this, i + 2, i + 5)\n    swap(this, i + 3, i + 4)\n  }\n  return this\n}\n\nBuffer.prototype.toString = function toString () {\n  var length = this.length | 0\n  if (length === 0) return ''\n  if (arguments.length === 0) return utf8Slice(this, 0, length)\n  return slowToString.apply(this, arguments)\n}\n\nBuffer.prototype.equals = function equals (b) {\n  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')\n  if (this === b) return true\n  return Buffer.compare(this, b) === 0\n}\n\nBuffer.prototype.inspect = function inspect () {\n  var str = ''\n  var max = exports.INSPECT_MAX_BYTES\n  if (this.length > 0) {\n    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')\n    if (this.length > max) str += ' ... '\n  }\n  return '<Buffer ' + str + '>'\n}\n\nBuffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {\n  if (!Buffer.isBuffer(target)) {\n    throw new TypeError('Argument must be a Buffer')\n  }\n\n  if (start === undefined) {\n    start = 0\n  }\n  if (end === undefined) {\n    end = target ? target.length : 0\n  }\n  if (thisStart === undefined) {\n    thisStart = 0\n  }\n  if (thisEnd === undefined) {\n    thisEnd = this.length\n  }\n\n  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {\n    throw new RangeError('out of range index')\n  }\n\n  if (thisStart >= thisEnd && start >= end) {\n    return 0\n  }\n  if (thisStart >= thisEnd) {\n    return -1\n  }\n  if (start >= end) {\n    return 1\n  }\n\n  start >>>= 0\n  end >>>= 0\n  thisStart >>>= 0\n  thisEnd >>>= 0\n\n  if (this === target) return 0\n\n  var x = thisEnd - thisStart\n  var y = end - start\n  var len = Math.min(x, y)\n\n  var thisCopy = this.slice(thisStart, thisEnd)\n  var targetCopy = target.slice(start, end)\n\n  for (var i = 0; i < len; ++i) {\n    if (thisCopy[i] !== targetCopy[i]) {\n      x = thisCopy[i]\n      y = targetCopy[i]\n      break\n    }\n  }\n\n  if (x < y) return -1\n  if (y < x) return 1\n  return 0\n}\n\n// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,\n// OR the last index of `val` in `buffer` at offset <= `byteOffset`.\n//\n// Arguments:\n// - buffer - a Buffer to search\n// - val - a string, Buffer, or number\n// - byteOffset - an index into `buffer`; will be clamped to an int32\n// - encoding - an optional encoding, relevant is val is a string\n// - dir - true for indexOf, false for lastIndexOf\nfunction bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {\n  // Empty buffer means no match\n  if (buffer.length === 0) return -1\n\n  // Normalize byteOffset\n  if (typeof byteOffset === 'string') {\n    encoding = byteOffset\n    byteOffset = 0\n  } else if (byteOffset > 0x7fffffff) {\n    byteOffset = 0x7fffffff\n  } else if (byteOffset < -0x80000000) {\n    byteOffset = -0x80000000\n  }\n  byteOffset = +byteOffset  // Coerce to Number.\n  if (isNaN(byteOffset)) {\n    // byteOffset: it it's undefined, null, NaN, \"foo\", etc, search whole buffer\n    byteOffset = dir ? 0 : (buffer.length - 1)\n  }\n\n  // Normalize byteOffset: negative offsets start from the end of the buffer\n  if (byteOffset < 0) byteOffset = buffer.length + byteOffset\n  if (byteOffset >= buffer.length) {\n    if (dir) return -1\n    else byteOffset = buffer.length - 1\n  } else if (byteOffset < 0) {\n    if (dir) byteOffset = 0\n    else return -1\n  }\n\n  // Normalize val\n  if (typeof val === 'string') {\n    val = Buffer.from(val, encoding)\n  }\n\n  // Finally, search either indexOf (if dir is true) or lastIndexOf\n  if (Buffer.isBuffer(val)) {\n    // Special case: looking for empty string/buffer always fails\n    if (val.length === 0) {\n      return -1\n    }\n    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)\n  } else if (typeof val === 'number') {\n    val = val & 0xFF // Search for a byte value [0-255]\n    if (Buffer.TYPED_ARRAY_SUPPORT &&\n        typeof Uint8Array.prototype.indexOf === 'function') {\n      if (dir) {\n        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)\n      } else {\n        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)\n      }\n    }\n    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)\n  }\n\n  throw new TypeError('val must be string, number or Buffer')\n}\n\nfunction arrayIndexOf (arr, val, byteOffset, encoding, dir) {\n  var indexSize = 1\n  var arrLength = arr.length\n  var valLength = val.length\n\n  if (encoding !== undefined) {\n    encoding = String(encoding).toLowerCase()\n    if (encoding === 'ucs2' || encoding === 'ucs-2' ||\n        encoding === 'utf16le' || encoding === 'utf-16le') {\n      if (arr.length < 2 || val.length < 2) {\n        return -1\n      }\n      indexSize = 2\n      arrLength /= 2\n      valLength /= 2\n      byteOffset /= 2\n    }\n  }\n\n  function read (buf, i) {\n    if (indexSize === 1) {\n      return buf[i]\n    } else {\n      return buf.readUInt16BE(i * indexSize)\n    }\n  }\n\n  var i\n  if (dir) {\n    var foundIndex = -1\n    for (i = byteOffset; i < arrLength; i++) {\n      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {\n        if (foundIndex === -1) foundIndex = i\n        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize\n      } else {\n        if (foundIndex !== -1) i -= i - foundIndex\n        foundIndex = -1\n      }\n    }\n  } else {\n    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength\n    for (i = byteOffset; i >= 0; i--) {\n      var found = true\n      for (var j = 0; j < valLength; j++) {\n        if (read(arr, i + j) !== read(val, j)) {\n          found = false\n          break\n        }\n      }\n      if (found) return i\n    }\n  }\n\n  return -1\n}\n\nBuffer.prototype.includes = function includes (val, byteOffset, encoding) {\n  return this.indexOf(val, byteOffset, encoding) !== -1\n}\n\nBuffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {\n  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)\n}\n\nBuffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {\n  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)\n}\n\nfunction hexWrite (buf, string, offset, length) {\n  offset = Number(offset) || 0\n  var remaining = buf.length - offset\n  if (!length) {\n    length = remaining\n  } else {\n    length = Number(length)\n    if (length > remaining) {\n      length = remaining\n    }\n  }\n\n  // must be an even number of digits\n  var strLen = string.length\n  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')\n\n  if (length > strLen / 2) {\n    length = strLen / 2\n  }\n  for (var i = 0; i < length; ++i) {\n    var parsed = parseInt(string.substr(i * 2, 2), 16)\n    if (isNaN(parsed)) return i\n    buf[offset + i] = parsed\n  }\n  return i\n}\n\nfunction utf8Write (buf, string, offset, length) {\n  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)\n}\n\nfunction asciiWrite (buf, string, offset, length) {\n  return blitBuffer(asciiToBytes(string), buf, offset, length)\n}\n\nfunction latin1Write (buf, string, offset, length) {\n  return asciiWrite(buf, string, offset, length)\n}\n\nfunction base64Write (buf, string, offset, length) {\n  return blitBuffer(base64ToBytes(string), buf, offset, length)\n}\n\nfunction ucs2Write (buf, string, offset, length) {\n  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)\n}\n\nBuffer.prototype.write = function write (string, offset, length, encoding) {\n  // Buffer#write(string)\n  if (offset === undefined) {\n    encoding = 'utf8'\n    length = this.length\n    offset = 0\n  // Buffer#write(string, encoding)\n  } else if (length === undefined && typeof offset === 'string') {\n    encoding = offset\n    length = this.length\n    offset = 0\n  // Buffer#write(string, offset[, length][, encoding])\n  } else if (isFinite(offset)) {\n    offset = offset | 0\n    if (isFinite(length)) {\n      length = length | 0\n      if (encoding === undefined) encoding = 'utf8'\n    } else {\n      encoding = length\n      length = undefined\n    }\n  // legacy write(string, encoding, offset, length) - remove in v0.13\n  } else {\n    throw new Error(\n      'Buffer.write(string, encoding, offset[, length]) is no longer supported'\n    )\n  }\n\n  var remaining = this.length - offset\n  if (length === undefined || length > remaining) length = remaining\n\n  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {\n    throw new RangeError('Attempt to write outside buffer bounds')\n  }\n\n  if (!encoding) encoding = 'utf8'\n\n  var loweredCase = false\n  for (;;) {\n    switch (encoding) {\n      case 'hex':\n        return hexWrite(this, string, offset, length)\n\n      case 'utf8':\n      case 'utf-8':\n        return utf8Write(this, string, offset, length)\n\n      case 'ascii':\n        return asciiWrite(this, string, offset, length)\n\n      case 'latin1':\n      case 'binary':\n        return latin1Write(this, string, offset, length)\n\n      case 'base64':\n        // Warning: maxLength not taken into account in base64Write\n        return base64Write(this, string, offset, length)\n\n      case 'ucs2':\n      case 'ucs-2':\n      case 'utf16le':\n      case 'utf-16le':\n        return ucs2Write(this, string, offset, length)\n\n      default:\n        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)\n        encoding = ('' + encoding).toLowerCase()\n        loweredCase = true\n    }\n  }\n}\n\nBuffer.prototype.toJSON = function toJSON () {\n  return {\n    type: 'Buffer',\n    data: Array.prototype.slice.call(this._arr || this, 0)\n  }\n}\n\nfunction base64Slice (buf, start, end) {\n  if (start === 0 && end === buf.length) {\n    return base64.fromByteArray(buf)\n  } else {\n    return base64.fromByteArray(buf.slice(start, end))\n  }\n}\n\nfunction utf8Slice (buf, start, end) {\n  end = Math.min(buf.length, end)\n  var res = []\n\n  var i = start\n  while (i < end) {\n    var firstByte = buf[i]\n    var codePoint = null\n    var bytesPerSequence = (firstByte > 0xEF) ? 4\n      : (firstByte > 0xDF) ? 3\n      : (firstByte > 0xBF) ? 2\n      : 1\n\n    if (i + bytesPerSequence <= end) {\n      var secondByte, thirdByte, fourthByte, tempCodePoint\n\n      switch (bytesPerSequence) {\n        case 1:\n          if (firstByte < 0x80) {\n            codePoint = firstByte\n          }\n          break\n        case 2:\n          secondByte = buf[i + 1]\n          if ((secondByte & 0xC0) === 0x80) {\n            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)\n            if (tempCodePoint > 0x7F) {\n              codePoint = tempCodePoint\n            }\n          }\n          break\n        case 3:\n          secondByte = buf[i + 1]\n          thirdByte = buf[i + 2]\n          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {\n            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)\n            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {\n              codePoint = tempCodePoint\n            }\n          }\n          break\n        case 4:\n          secondByte = buf[i + 1]\n          thirdByte = buf[i + 2]\n          fourthByte = buf[i + 3]\n          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {\n            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)\n            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {\n              codePoint = tempCodePoint\n            }\n          }\n      }\n    }\n\n    if (codePoint === null) {\n      // we did not generate a valid codePoint so insert a\n      // replacement char (U+FFFD) and advance only 1 byte\n      codePoint = 0xFFFD\n      bytesPerSequence = 1\n    } else if (codePoint > 0xFFFF) {\n      // encode to utf16 (surrogate pair dance)\n      codePoint -= 0x10000\n      res.push(codePoint >>> 10 & 0x3FF | 0xD800)\n      codePoint = 0xDC00 | codePoint & 0x3FF\n    }\n\n    res.push(codePoint)\n    i += bytesPerSequence\n  }\n\n  return decodeCodePointsArray(res)\n}\n\n// Based on http://stackoverflow.com/a/22747272/680742, the browser with\n// the lowest limit is Chrome, with 0x10000 args.\n// We go 1 magnitude less, for safety\nvar MAX_ARGUMENTS_LENGTH = 0x1000\n\nfunction decodeCodePointsArray (codePoints) {\n  var len = codePoints.length\n  if (len <= MAX_ARGUMENTS_LENGTH) {\n    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()\n  }\n\n  // Decode in chunks to avoid \"call stack size exceeded\".\n  var res = ''\n  var i = 0\n  while (i < len) {\n    res += String.fromCharCode.apply(\n      String,\n      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)\n    )\n  }\n  return res\n}\n\nfunction asciiSlice (buf, start, end) {\n  var ret = ''\n  end = Math.min(buf.length, end)\n\n  for (var i = start; i < end; ++i) {\n    ret += String.fromCharCode(buf[i] & 0x7F)\n  }\n  return ret\n}\n\nfunction latin1Slice (buf, start, end) {\n  var ret = ''\n  end = Math.min(buf.length, end)\n\n  for (var i = start; i < end; ++i) {\n    ret += String.fromCharCode(buf[i])\n  }\n  return ret\n}\n\nfunction hexSlice (buf, start, end) {\n  var len = buf.length\n\n  if (!start || start < 0) start = 0\n  if (!end || end < 0 || end > len) end = len\n\n  var out = ''\n  for (var i = start; i < end; ++i) {\n    out += toHex(buf[i])\n  }\n  return out\n}\n\nfunction utf16leSlice (buf, start, end) {\n  var bytes = buf.slice(start, end)\n  var res = ''\n  for (var i = 0; i < bytes.length; i += 2) {\n    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)\n  }\n  return res\n}\n\nBuffer.prototype.slice = function slice (start, end) {\n  var len = this.length\n  start = ~~start\n  end = end === undefined ? len : ~~end\n\n  if (start < 0) {\n    start += len\n    if (start < 0) start = 0\n  } else if (start > len) {\n    start = len\n  }\n\n  if (end < 0) {\n    end += len\n    if (end < 0) end = 0\n  } else if (end > len) {\n    end = len\n  }\n\n  if (end < start) end = start\n\n  var newBuf\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    newBuf = this.subarray(start, end)\n    newBuf.__proto__ = Buffer.prototype\n  } else {\n    var sliceLen = end - start\n    newBuf = new Buffer(sliceLen, undefined)\n    for (var i = 0; i < sliceLen; ++i) {\n      newBuf[i] = this[i + start]\n    }\n  }\n\n  return newBuf\n}\n\n/*\n * Need to make sure that buffer isn't trying to write out of bounds.\n */\nfunction checkOffset (offset, ext, length) {\n  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')\n  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')\n}\n\nBuffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) checkOffset(offset, byteLength, this.length)\n\n  var val = this[offset]\n  var mul = 1\n  var i = 0\n  while (++i < byteLength && (mul *= 0x100)) {\n    val += this[offset + i] * mul\n  }\n\n  return val\n}\n\nBuffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) {\n    checkOffset(offset, byteLength, this.length)\n  }\n\n  var val = this[offset + --byteLength]\n  var mul = 1\n  while (byteLength > 0 && (mul *= 0x100)) {\n    val += this[offset + --byteLength] * mul\n  }\n\n  return val\n}\n\nBuffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 1, this.length)\n  return this[offset]\n}\n\nBuffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 2, this.length)\n  return this[offset] | (this[offset + 1] << 8)\n}\n\nBuffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 2, this.length)\n  return (this[offset] << 8) | this[offset + 1]\n}\n\nBuffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n\n  return ((this[offset]) |\n      (this[offset + 1] << 8) |\n      (this[offset + 2] << 16)) +\n      (this[offset + 3] * 0x1000000)\n}\n\nBuffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n\n  return (this[offset] * 0x1000000) +\n    ((this[offset + 1] << 16) |\n    (this[offset + 2] << 8) |\n    this[offset + 3])\n}\n\nBuffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) checkOffset(offset, byteLength, this.length)\n\n  var val = this[offset]\n  var mul = 1\n  var i = 0\n  while (++i < byteLength && (mul *= 0x100)) {\n    val += this[offset + i] * mul\n  }\n  mul *= 0x80\n\n  if (val >= mul) val -= Math.pow(2, 8 * byteLength)\n\n  return val\n}\n\nBuffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) checkOffset(offset, byteLength, this.length)\n\n  var i = byteLength\n  var mul = 1\n  var val = this[offset + --i]\n  while (i > 0 && (mul *= 0x100)) {\n    val += this[offset + --i] * mul\n  }\n  mul *= 0x80\n\n  if (val >= mul) val -= Math.pow(2, 8 * byteLength)\n\n  return val\n}\n\nBuffer.prototype.readInt8 = function readInt8 (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 1, this.length)\n  if (!(this[offset] & 0x80)) return (this[offset])\n  return ((0xff - this[offset] + 1) * -1)\n}\n\nBuffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 2, this.length)\n  var val = this[offset] | (this[offset + 1] << 8)\n  return (val & 0x8000) ? val | 0xFFFF0000 : val\n}\n\nBuffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 2, this.length)\n  var val = this[offset + 1] | (this[offset] << 8)\n  return (val & 0x8000) ? val | 0xFFFF0000 : val\n}\n\nBuffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n\n  return (this[offset]) |\n    (this[offset + 1] << 8) |\n    (this[offset + 2] << 16) |\n    (this[offset + 3] << 24)\n}\n\nBuffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n\n  return (this[offset] << 24) |\n    (this[offset + 1] << 16) |\n    (this[offset + 2] << 8) |\n    (this[offset + 3])\n}\n\nBuffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n  return ieee754.read(this, offset, true, 23, 4)\n}\n\nBuffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n  return ieee754.read(this, offset, false, 23, 4)\n}\n\nBuffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 8, this.length)\n  return ieee754.read(this, offset, true, 52, 8)\n}\n\nBuffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 8, this.length)\n  return ieee754.read(this, offset, false, 52, 8)\n}\n\nfunction checkInt (buf, value, offset, ext, max, min) {\n  if (!Buffer.isBuffer(buf)) throw new TypeError('\"buffer\" argument must be a Buffer instance')\n  if (value > max || value < min) throw new RangeError('\"value\" argument is out of bounds')\n  if (offset + ext > buf.length) throw new RangeError('Index out of range')\n}\n\nBuffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {\n  value = +value\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) {\n    var maxBytes = Math.pow(2, 8 * byteLength) - 1\n    checkInt(this, value, offset, byteLength, maxBytes, 0)\n  }\n\n  var mul = 1\n  var i = 0\n  this[offset] = value & 0xFF\n  while (++i < byteLength && (mul *= 0x100)) {\n    this[offset + i] = (value / mul) & 0xFF\n  }\n\n  return offset + byteLength\n}\n\nBuffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {\n  value = +value\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) {\n    var maxBytes = Math.pow(2, 8 * byteLength) - 1\n    checkInt(this, value, offset, byteLength, maxBytes, 0)\n  }\n\n  var i = byteLength - 1\n  var mul = 1\n  this[offset + i] = value & 0xFF\n  while (--i >= 0 && (mul *= 0x100)) {\n    this[offset + i] = (value / mul) & 0xFF\n  }\n\n  return offset + byteLength\n}\n\nBuffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)\n  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)\n  this[offset] = (value & 0xff)\n  return offset + 1\n}\n\nfunction objectWriteUInt16 (buf, value, offset, littleEndian) {\n  if (value < 0) value = 0xffff + value + 1\n  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {\n    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>\n      (littleEndian ? i : 1 - i) * 8\n  }\n}\n\nBuffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value & 0xff)\n    this[offset + 1] = (value >>> 8)\n  } else {\n    objectWriteUInt16(this, value, offset, true)\n  }\n  return offset + 2\n}\n\nBuffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value >>> 8)\n    this[offset + 1] = (value & 0xff)\n  } else {\n    objectWriteUInt16(this, value, offset, false)\n  }\n  return offset + 2\n}\n\nfunction objectWriteUInt32 (buf, value, offset, littleEndian) {\n  if (value < 0) value = 0xffffffff + value + 1\n  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {\n    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff\n  }\n}\n\nBuffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset + 3] = (value >>> 24)\n    this[offset + 2] = (value >>> 16)\n    this[offset + 1] = (value >>> 8)\n    this[offset] = (value & 0xff)\n  } else {\n    objectWriteUInt32(this, value, offset, true)\n  }\n  return offset + 4\n}\n\nBuffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value >>> 24)\n    this[offset + 1] = (value >>> 16)\n    this[offset + 2] = (value >>> 8)\n    this[offset + 3] = (value & 0xff)\n  } else {\n    objectWriteUInt32(this, value, offset, false)\n  }\n  return offset + 4\n}\n\nBuffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) {\n    var limit = Math.pow(2, 8 * byteLength - 1)\n\n    checkInt(this, value, offset, byteLength, limit - 1, -limit)\n  }\n\n  var i = 0\n  var mul = 1\n  var sub = 0\n  this[offset] = value & 0xFF\n  while (++i < byteLength && (mul *= 0x100)) {\n    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {\n      sub = 1\n    }\n    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF\n  }\n\n  return offset + byteLength\n}\n\nBuffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) {\n    var limit = Math.pow(2, 8 * byteLength - 1)\n\n    checkInt(this, value, offset, byteLength, limit - 1, -limit)\n  }\n\n  var i = byteLength - 1\n  var mul = 1\n  var sub = 0\n  this[offset + i] = value & 0xFF\n  while (--i >= 0 && (mul *= 0x100)) {\n    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {\n      sub = 1\n    }\n    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF\n  }\n\n  return offset + byteLength\n}\n\nBuffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)\n  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)\n  if (value < 0) value = 0xff + value + 1\n  this[offset] = (value & 0xff)\n  return offset + 1\n}\n\nBuffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value & 0xff)\n    this[offset + 1] = (value >>> 8)\n  } else {\n    objectWriteUInt16(this, value, offset, true)\n  }\n  return offset + 2\n}\n\nBuffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value >>> 8)\n    this[offset + 1] = (value & 0xff)\n  } else {\n    objectWriteUInt16(this, value, offset, false)\n  }\n  return offset + 2\n}\n\nBuffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value & 0xff)\n    this[offset + 1] = (value >>> 8)\n    this[offset + 2] = (value >>> 16)\n    this[offset + 3] = (value >>> 24)\n  } else {\n    objectWriteUInt32(this, value, offset, true)\n  }\n  return offset + 4\n}\n\nBuffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)\n  if (value < 0) value = 0xffffffff + value + 1\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value >>> 24)\n    this[offset + 1] = (value >>> 16)\n    this[offset + 2] = (value >>> 8)\n    this[offset + 3] = (value & 0xff)\n  } else {\n    objectWriteUInt32(this, value, offset, false)\n  }\n  return offset + 4\n}\n\nfunction checkIEEE754 (buf, value, offset, ext, max, min) {\n  if (offset + ext > buf.length) throw new RangeError('Index out of range')\n  if (offset < 0) throw new RangeError('Index out of range')\n}\n\nfunction writeFloat (buf, value, offset, littleEndian, noAssert) {\n  if (!noAssert) {\n    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)\n  }\n  ieee754.write(buf, value, offset, littleEndian, 23, 4)\n  return offset + 4\n}\n\nBuffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {\n  return writeFloat(this, value, offset, true, noAssert)\n}\n\nBuffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {\n  return writeFloat(this, value, offset, false, noAssert)\n}\n\nfunction writeDouble (buf, value, offset, littleEndian, noAssert) {\n  if (!noAssert) {\n    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)\n  }\n  ieee754.write(buf, value, offset, littleEndian, 52, 8)\n  return offset + 8\n}\n\nBuffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {\n  return writeDouble(this, value, offset, true, noAssert)\n}\n\nBuffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {\n  return writeDouble(this, value, offset, false, noAssert)\n}\n\n// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)\nBuffer.prototype.copy = function copy (target, targetStart, start, end) {\n  if (!start) start = 0\n  if (!end && end !== 0) end = this.length\n  if (targetStart >= target.length) targetStart = target.length\n  if (!targetStart) targetStart = 0\n  if (end > 0 && end < start) end = start\n\n  // Copy 0 bytes; we're done\n  if (end === start) return 0\n  if (target.length === 0 || this.length === 0) return 0\n\n  // Fatal error conditions\n  if (targetStart < 0) {\n    throw new RangeError('targetStart out of bounds')\n  }\n  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')\n  if (end < 0) throw new RangeError('sourceEnd out of bounds')\n\n  // Are we oob?\n  if (end > this.length) end = this.length\n  if (target.length - targetStart < end - start) {\n    end = target.length - targetStart + start\n  }\n\n  var len = end - start\n  var i\n\n  if (this === target && start < targetStart && targetStart < end) {\n    // descending copy from end\n    for (i = len - 1; i >= 0; --i) {\n      target[i + targetStart] = this[i + start]\n    }\n  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {\n    // ascending copy from start\n    for (i = 0; i < len; ++i) {\n      target[i + targetStart] = this[i + start]\n    }\n  } else {\n    Uint8Array.prototype.set.call(\n      target,\n      this.subarray(start, start + len),\n      targetStart\n    )\n  }\n\n  return len\n}\n\n// Usage:\n//    buffer.fill(number[, offset[, end]])\n//    buffer.fill(buffer[, offset[, end]])\n//    buffer.fill(string[, offset[, end]][, encoding])\nBuffer.prototype.fill = function fill (val, start, end, encoding) {\n  // Handle string cases:\n  if (typeof val === 'string') {\n    if (typeof start === 'string') {\n      encoding = start\n      start = 0\n      end = this.length\n    } else if (typeof end === 'string') {\n      encoding = end\n      end = this.length\n    }\n    if (val.length === 1) {\n      var code = val.charCodeAt(0)\n      if (code < 256) {\n        val = code\n      }\n    }\n    if (encoding !== undefined && typeof encoding !== 'string') {\n      throw new TypeError('encoding must be a string')\n    }\n    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {\n      throw new TypeError('Unknown encoding: ' + encoding)\n    }\n  } else if (typeof val === 'number') {\n    val = val & 255\n  }\n\n  // Invalid ranges are not set to a default, so can range check early.\n  if (start < 0 || this.length < start || this.length < end) {\n    throw new RangeError('Out of range index')\n  }\n\n  if (end <= start) {\n    return this\n  }\n\n  start = start >>> 0\n  end = end === undefined ? this.length : end >>> 0\n\n  if (!val) val = 0\n\n  var i\n  if (typeof val === 'number') {\n    for (i = start; i < end; ++i) {\n      this[i] = val\n    }\n  } else {\n    var bytes = Buffer.isBuffer(val)\n      ? val\n      : utf8ToBytes(new Buffer(val, encoding).toString())\n    var len = bytes.length\n    for (i = 0; i < end - start; ++i) {\n      this[i + start] = bytes[i % len]\n    }\n  }\n\n  return this\n}\n\n// HELPER FUNCTIONS\n// ================\n\nvar INVALID_BASE64_RE = /[^+\\/0-9A-Za-z-_]/g\n\nfunction base64clean (str) {\n  // Node strips out invalid characters like \\n and \\t from the string, base64-js does not\n  str = stringtrim(str).replace(INVALID_BASE64_RE, '')\n  // Node converts strings with length < 2 to ''\n  if (str.length < 2) return ''\n  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not\n  while (str.length % 4 !== 0) {\n    str = str + '='\n  }\n  return str\n}\n\nfunction stringtrim (str) {\n  if (str.trim) return str.trim()\n  return str.replace(/^\\s+|\\s+$/g, '')\n}\n\nfunction toHex (n) {\n  if (n < 16) return '0' + n.toString(16)\n  return n.toString(16)\n}\n\nfunction utf8ToBytes (string, units) {\n  units = units || Infinity\n  var codePoint\n  var length = string.length\n  var leadSurrogate = null\n  var bytes = []\n\n  for (var i = 0; i < length; ++i) {\n    codePoint = string.charCodeAt(i)\n\n    // is surrogate component\n    if (codePoint > 0xD7FF && codePoint < 0xE000) {\n      // last char was a lead\n      if (!leadSurrogate) {\n        // no lead yet\n        if (codePoint > 0xDBFF) {\n          // unexpected trail\n          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\n          continue\n        } else if (i + 1 === length) {\n          // unpaired lead\n          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\n          continue\n        }\n\n        // valid lead\n        leadSurrogate = codePoint\n\n        continue\n      }\n\n      // 2 leads in a row\n      if (codePoint < 0xDC00) {\n        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\n        leadSurrogate = codePoint\n        continue\n      }\n\n      // valid surrogate pair\n      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000\n    } else if (leadSurrogate) {\n      // valid bmp char, but last char was a lead\n      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\n    }\n\n    leadSurrogate = null\n\n    // encode utf8\n    if (codePoint < 0x80) {\n      if ((units -= 1) < 0) break\n      bytes.push(codePoint)\n    } else if (codePoint < 0x800) {\n      if ((units -= 2) < 0) break\n      bytes.push(\n        codePoint >> 0x6 | 0xC0,\n        codePoint & 0x3F | 0x80\n      )\n    } else if (codePoint < 0x10000) {\n      if ((units -= 3) < 0) break\n      bytes.push(\n        codePoint >> 0xC | 0xE0,\n        codePoint >> 0x6 & 0x3F | 0x80,\n        codePoint & 0x3F | 0x80\n      )\n    } else if (codePoint < 0x110000) {\n      if ((units -= 4) < 0) break\n      bytes.push(\n        codePoint >> 0x12 | 0xF0,\n        codePoint >> 0xC & 0x3F | 0x80,\n        codePoint >> 0x6 & 0x3F | 0x80,\n        codePoint & 0x3F | 0x80\n      )\n    } else {\n      throw new Error('Invalid code point')\n    }\n  }\n\n  return bytes\n}\n\nfunction asciiToBytes (str) {\n  var byteArray = []\n  for (var i = 0; i < str.length; ++i) {\n    // Node's code seems to be doing this and not & 0x7F..\n    byteArray.push(str.charCodeAt(i) & 0xFF)\n  }\n  return byteArray\n}\n\nfunction utf16leToBytes (str, units) {\n  var c, hi, lo\n  var byteArray = []\n  for (var i = 0; i < str.length; ++i) {\n    if ((units -= 2) < 0) break\n\n    c = str.charCodeAt(i)\n    hi = c >> 8\n    lo = c % 256\n    byteArray.push(lo)\n    byteArray.push(hi)\n  }\n\n  return byteArray\n}\n\nfunction base64ToBytes (str) {\n  return base64.toByteArray(base64clean(str))\n}\n\nfunction blitBuffer (src, dst, offset, length) {\n  for (var i = 0; i < length; ++i) {\n    if ((i + offset >= dst.length) || (i >= src.length)) break\n    dst[i + offset] = src[i]\n  }\n  return i\n}\n\nfunction isnan (val) {\n  return val !== val // eslint-disable-line no-self-compare\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/buffer/index.js?");

/***/ }),

/***/ "./node_modules/crypto-js/core.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval(";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory();\n\t}\n\telse {}\n}(this, function () {\n\n\t/**\n\t * CryptoJS core components.\n\t */\n\tvar CryptoJS = CryptoJS || (function (Math, undefined) {\n\t    /*\n\t     * Local polyfil of Object.create\n\t     */\n\t    var create = Object.create || (function () {\n\t        function F() {};\n\n\t        return function (obj) {\n\t            var subtype;\n\n\t            F.prototype = obj;\n\n\t            subtype = new F();\n\n\t            F.prototype = null;\n\n\t            return subtype;\n\t        };\n\t    }())\n\n\t    /**\n\t     * CryptoJS namespace.\n\t     */\n\t    var C = {};\n\n\t    /**\n\t     * Library namespace.\n\t     */\n\t    var C_lib = C.lib = {};\n\n\t    /**\n\t     * Base object for prototypal inheritance.\n\t     */\n\t    var Base = C_lib.Base = (function () {\n\n\n\t        return {\n\t            /**\n\t             * Creates a new object that inherits from this object.\n\t             *\n\t             * @param {Object} overrides Properties to copy into the new object.\n\t             *\n\t             * @return {Object} The new object.\n\t             *\n\t             * @static\n\t             *\n\t             * @example\n\t             *\n\t             *     var MyType = CryptoJS.lib.Base.extend({\n\t             *         field: 'value',\n\t             *\n\t             *         method: function () {\n\t             *         }\n\t             *     });\n\t             */\n\t            extend: function (overrides) {\n\t                // Spawn\n\t                var subtype = create(this);\n\n\t                // Augment\n\t                if (overrides) {\n\t                    subtype.mixIn(overrides);\n\t                }\n\n\t                // Create default initializer\n\t                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {\n\t                    subtype.init = function () {\n\t                        subtype.$super.init.apply(this, arguments);\n\t                    };\n\t                }\n\n\t                // Initializer's prototype is the subtype object\n\t                subtype.init.prototype = subtype;\n\n\t                // Reference supertype\n\t                subtype.$super = this;\n\n\t                return subtype;\n\t            },\n\n\t            /**\n\t             * Extends this object and runs the init method.\n\t             * Arguments to create() will be passed to init().\n\t             *\n\t             * @return {Object} The new object.\n\t             *\n\t             * @static\n\t             *\n\t             * @example\n\t             *\n\t             *     var instance = MyType.create();\n\t             */\n\t            create: function () {\n\t                var instance = this.extend();\n\t                instance.init.apply(instance, arguments);\n\n\t                return instance;\n\t            },\n\n\t            /**\n\t             * Initializes a newly created object.\n\t             * Override this method to add some logic when your objects are created.\n\t             *\n\t             * @example\n\t             *\n\t             *     var MyType = CryptoJS.lib.Base.extend({\n\t             *         init: function () {\n\t             *             // ...\n\t             *         }\n\t             *     });\n\t             */\n\t            init: function () {\n\t            },\n\n\t            /**\n\t             * Copies properties into this object.\n\t             *\n\t             * @param {Object} properties The properties to mix in.\n\t             *\n\t             * @example\n\t             *\n\t             *     MyType.mixIn({\n\t             *         field: 'value'\n\t             *     });\n\t             */\n\t            mixIn: function (properties) {\n\t                for (var propertyName in properties) {\n\t                    if (properties.hasOwnProperty(propertyName)) {\n\t                        this[propertyName] = properties[propertyName];\n\t                    }\n\t                }\n\n\t                // IE won't copy toString using the loop above\n\t                if (properties.hasOwnProperty('toString')) {\n\t                    this.toString = properties.toString;\n\t                }\n\t            },\n\n\t            /**\n\t             * Creates a copy of this object.\n\t             *\n\t             * @return {Object} The clone.\n\t             *\n\t             * @example\n\t             *\n\t             *     var clone = instance.clone();\n\t             */\n\t            clone: function () {\n\t                return this.init.prototype.extend(this);\n\t            }\n\t        };\n\t    }());\n\n\t    /**\n\t     * An array of 32-bit words.\n\t     *\n\t     * @property {Array} words The array of 32-bit words.\n\t     * @property {number} sigBytes The number of significant bytes in this word array.\n\t     */\n\t    var WordArray = C_lib.WordArray = Base.extend({\n\t        /**\n\t         * Initializes a newly created word array.\n\t         *\n\t         * @param {Array} words (Optional) An array of 32-bit words.\n\t         * @param {number} sigBytes (Optional) The number of significant bytes in the words.\n\t         *\n\t         * @example\n\t         *\n\t         *     var wordArray = CryptoJS.lib.WordArray.create();\n\t         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);\n\t         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);\n\t         */\n\t        init: function (words, sigBytes) {\n\t            words = this.words = words || [];\n\n\t            if (sigBytes != undefined) {\n\t                this.sigBytes = sigBytes;\n\t            } else {\n\t                this.sigBytes = words.length * 4;\n\t            }\n\t        },\n\n\t        /**\n\t         * Converts this word array to a string.\n\t         *\n\t         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex\n\t         *\n\t         * @return {string} The stringified word array.\n\t         *\n\t         * @example\n\t         *\n\t         *     var string = wordArray + '';\n\t         *     var string = wordArray.toString();\n\t         *     var string = wordArray.toString(CryptoJS.enc.Utf8);\n\t         */\n\t        toString: function (encoder) {\n\t            return (encoder || Hex).stringify(this);\n\t        },\n\n\t        /**\n\t         * Concatenates a word array to this word array.\n\t         *\n\t         * @param {WordArray} wordArray The word array to append.\n\t         *\n\t         * @return {WordArray} This word array.\n\t         *\n\t         * @example\n\t         *\n\t         *     wordArray1.concat(wordArray2);\n\t         */\n\t        concat: function (wordArray) {\n\t            // Shortcuts\n\t            var thisWords = this.words;\n\t            var thatWords = wordArray.words;\n\t            var thisSigBytes = this.sigBytes;\n\t            var thatSigBytes = wordArray.sigBytes;\n\n\t            // Clamp excess bits\n\t            this.clamp();\n\n\t            // Concat\n\t            if (thisSigBytes % 4) {\n\t                // Copy one byte at a time\n\t                for (var i = 0; i < thatSigBytes; i++) {\n\t                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;\n\t                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);\n\t                }\n\t            } else {\n\t                // Copy one word at a time\n\t                for (var i = 0; i < thatSigBytes; i += 4) {\n\t                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];\n\t                }\n\t            }\n\t            this.sigBytes += thatSigBytes;\n\n\t            // Chainable\n\t            return this;\n\t        },\n\n\t        /**\n\t         * Removes insignificant bits.\n\t         *\n\t         * @example\n\t         *\n\t         *     wordArray.clamp();\n\t         */\n\t        clamp: function () {\n\t            // Shortcuts\n\t            var words = this.words;\n\t            var sigBytes = this.sigBytes;\n\n\t            // Clamp\n\t            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);\n\t            words.length = Math.ceil(sigBytes / 4);\n\t        },\n\n\t        /**\n\t         * Creates a copy of this word array.\n\t         *\n\t         * @return {WordArray} The clone.\n\t         *\n\t         * @example\n\t         *\n\t         *     var clone = wordArray.clone();\n\t         */\n\t        clone: function () {\n\t            var clone = Base.clone.call(this);\n\t            clone.words = this.words.slice(0);\n\n\t            return clone;\n\t        },\n\n\t        /**\n\t         * Creates a word array filled with random bytes.\n\t         *\n\t         * @param {number} nBytes The number of random bytes to generate.\n\t         *\n\t         * @return {WordArray} The random word array.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var wordArray = CryptoJS.lib.WordArray.random(16);\n\t         */\n\t        random: function (nBytes) {\n\t            var words = [];\n\n\t            var r = (function (m_w) {\n\t                var m_w = m_w;\n\t                var m_z = 0x3ade68b1;\n\t                var mask = 0xffffffff;\n\n\t                return function () {\n\t                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;\n\t                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;\n\t                    var result = ((m_z << 0x10) + m_w) & mask;\n\t                    result /= 0x100000000;\n\t                    result += 0.5;\n\t                    return result * (Math.random() > .5 ? 1 : -1);\n\t                }\n\t            });\n\n\t            for (var i = 0, rcache; i < nBytes; i += 4) {\n\t                var _r = r((rcache || Math.random()) * 0x100000000);\n\n\t                rcache = _r() * 0x3ade67b7;\n\t                words.push((_r() * 0x100000000) | 0);\n\t            }\n\n\t            return new WordArray.init(words, nBytes);\n\t        }\n\t    });\n\n\t    /**\n\t     * Encoder namespace.\n\t     */\n\t    var C_enc = C.enc = {};\n\n\t    /**\n\t     * Hex encoding strategy.\n\t     */\n\t    var Hex = C_enc.Hex = {\n\t        /**\n\t         * Converts a word array to a hex string.\n\t         *\n\t         * @param {WordArray} wordArray The word array.\n\t         *\n\t         * @return {string} The hex string.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);\n\t         */\n\t        stringify: function (wordArray) {\n\t            // Shortcuts\n\t            var words = wordArray.words;\n\t            var sigBytes = wordArray.sigBytes;\n\n\t            // Convert\n\t            var hexChars = [];\n\t            for (var i = 0; i < sigBytes; i++) {\n\t                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;\n\t                hexChars.push((bite >>> 4).toString(16));\n\t                hexChars.push((bite & 0x0f).toString(16));\n\t            }\n\n\t            return hexChars.join('');\n\t        },\n\n\t        /**\n\t         * Converts a hex string to a word array.\n\t         *\n\t         * @param {string} hexStr The hex string.\n\t         *\n\t         * @return {WordArray} The word array.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);\n\t         */\n\t        parse: function (hexStr) {\n\t            // Shortcut\n\t            var hexStrLength = hexStr.length;\n\n\t            // Convert\n\t            var words = [];\n\t            for (var i = 0; i < hexStrLength; i += 2) {\n\t                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);\n\t            }\n\n\t            return new WordArray.init(words, hexStrLength / 2);\n\t        }\n\t    };\n\n\t    /**\n\t     * Latin1 encoding strategy.\n\t     */\n\t    var Latin1 = C_enc.Latin1 = {\n\t        /**\n\t         * Converts a word array to a Latin1 string.\n\t         *\n\t         * @param {WordArray} wordArray The word array.\n\t         *\n\t         * @return {string} The Latin1 string.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);\n\t         */\n\t        stringify: function (wordArray) {\n\t            // Shortcuts\n\t            var words = wordArray.words;\n\t            var sigBytes = wordArray.sigBytes;\n\n\t            // Convert\n\t            var latin1Chars = [];\n\t            for (var i = 0; i < sigBytes; i++) {\n\t                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;\n\t                latin1Chars.push(String.fromCharCode(bite));\n\t            }\n\n\t            return latin1Chars.join('');\n\t        },\n\n\t        /**\n\t         * Converts a Latin1 string to a word array.\n\t         *\n\t         * @param {string} latin1Str The Latin1 string.\n\t         *\n\t         * @return {WordArray} The word array.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);\n\t         */\n\t        parse: function (latin1Str) {\n\t            // Shortcut\n\t            var latin1StrLength = latin1Str.length;\n\n\t            // Convert\n\t            var words = [];\n\t            for (var i = 0; i < latin1StrLength; i++) {\n\t                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);\n\t            }\n\n\t            return new WordArray.init(words, latin1StrLength);\n\t        }\n\t    };\n\n\t    /**\n\t     * UTF-8 encoding strategy.\n\t     */\n\t    var Utf8 = C_enc.Utf8 = {\n\t        /**\n\t         * Converts a word array to a UTF-8 string.\n\t         *\n\t         * @param {WordArray} wordArray The word array.\n\t         *\n\t         * @return {string} The UTF-8 string.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);\n\t         */\n\t        stringify: function (wordArray) {\n\t            try {\n\t                return decodeURIComponent(escape(Latin1.stringify(wordArray)));\n\t            } catch (e) {\n\t                throw new Error('Malformed UTF-8 data');\n\t            }\n\t        },\n\n\t        /**\n\t         * Converts a UTF-8 string to a word array.\n\t         *\n\t         * @param {string} utf8Str The UTF-8 string.\n\t         *\n\t         * @return {WordArray} The word array.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);\n\t         */\n\t        parse: function (utf8Str) {\n\t            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));\n\t        }\n\t    };\n\n\t    /**\n\t     * Abstract buffered block algorithm template.\n\t     *\n\t     * The property blockSize must be implemented in a concrete subtype.\n\t     *\n\t     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0\n\t     */\n\t    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({\n\t        /**\n\t         * Resets this block algorithm's data buffer to its initial state.\n\t         *\n\t         * @example\n\t         *\n\t         *     bufferedBlockAlgorithm.reset();\n\t         */\n\t        reset: function () {\n\t            // Initial values\n\t            this._data = new WordArray.init();\n\t            this._nDataBytes = 0;\n\t        },\n\n\t        /**\n\t         * Adds new data to this block algorithm's buffer.\n\t         *\n\t         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.\n\t         *\n\t         * @example\n\t         *\n\t         *     bufferedBlockAlgorithm._append('data');\n\t         *     bufferedBlockAlgorithm._append(wordArray);\n\t         */\n\t        _append: function (data) {\n\t            // Convert string to WordArray, else assume WordArray already\n\t            if (typeof data == 'string') {\n\t                data = Utf8.parse(data);\n\t            }\n\n\t            // Append\n\t            this._data.concat(data);\n\t            this._nDataBytes += data.sigBytes;\n\t        },\n\n\t        /**\n\t         * Processes available data blocks.\n\t         *\n\t         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.\n\t         *\n\t         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.\n\t         *\n\t         * @return {WordArray} The processed data.\n\t         *\n\t         * @example\n\t         *\n\t         *     var processedData = bufferedBlockAlgorithm._process();\n\t         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');\n\t         */\n\t        _process: function (doFlush) {\n\t            // Shortcuts\n\t            var data = this._data;\n\t            var dataWords = data.words;\n\t            var dataSigBytes = data.sigBytes;\n\t            var blockSize = this.blockSize;\n\t            var blockSizeBytes = blockSize * 4;\n\n\t            // Count blocks ready\n\t            var nBlocksReady = dataSigBytes / blockSizeBytes;\n\t            if (doFlush) {\n\t                // Round up to include partial blocks\n\t                nBlocksReady = Math.ceil(nBlocksReady);\n\t            } else {\n\t                // Round down to include only full blocks,\n\t                // less the number of blocks that must remain in the buffer\n\t                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);\n\t            }\n\n\t            // Count words ready\n\t            var nWordsReady = nBlocksReady * blockSize;\n\n\t            // Count bytes ready\n\t            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);\n\n\t            // Process blocks\n\t            if (nWordsReady) {\n\t                for (var offset = 0; offset < nWordsReady; offset += blockSize) {\n\t                    // Perform concrete-algorithm logic\n\t                    this._doProcessBlock(dataWords, offset);\n\t                }\n\n\t                // Remove processed words\n\t                var processedWords = dataWords.splice(0, nWordsReady);\n\t                data.sigBytes -= nBytesReady;\n\t            }\n\n\t            // Return processed words\n\t            return new WordArray.init(processedWords, nBytesReady);\n\t        },\n\n\t        /**\n\t         * Creates a copy of this object.\n\t         *\n\t         * @return {Object} The clone.\n\t         *\n\t         * @example\n\t         *\n\t         *     var clone = bufferedBlockAlgorithm.clone();\n\t         */\n\t        clone: function () {\n\t            var clone = Base.clone.call(this);\n\t            clone._data = this._data.clone();\n\n\t            return clone;\n\t        },\n\n\t        _minBufferSize: 0\n\t    });\n\n\t    /**\n\t     * Abstract hasher template.\n\t     *\n\t     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)\n\t     */\n\t    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({\n\t        /**\n\t         * Configuration options.\n\t         */\n\t        cfg: Base.extend(),\n\n\t        /**\n\t         * Initializes a newly created hasher.\n\t         *\n\t         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.\n\t         *\n\t         * @example\n\t         *\n\t         *     var hasher = CryptoJS.algo.SHA256.create();\n\t         */\n\t        init: function (cfg) {\n\t            // Apply config defaults\n\t            this.cfg = this.cfg.extend(cfg);\n\n\t            // Set initial values\n\t            this.reset();\n\t        },\n\n\t        /**\n\t         * Resets this hasher to its initial state.\n\t         *\n\t         * @example\n\t         *\n\t         *     hasher.reset();\n\t         */\n\t        reset: function () {\n\t            // Reset data buffer\n\t            BufferedBlockAlgorithm.reset.call(this);\n\n\t            // Perform concrete-hasher logic\n\t            this._doReset();\n\t        },\n\n\t        /**\n\t         * Updates this hasher with a message.\n\t         *\n\t         * @param {WordArray|string} messageUpdate The message to append.\n\t         *\n\t         * @return {Hasher} This hasher.\n\t         *\n\t         * @example\n\t         *\n\t         *     hasher.update('message');\n\t         *     hasher.update(wordArray);\n\t         */\n\t        update: function (messageUpdate) {\n\t            // Append\n\t            this._append(messageUpdate);\n\n\t            // Update the hash\n\t            this._process();\n\n\t            // Chainable\n\t            return this;\n\t        },\n\n\t        /**\n\t         * Finalizes the hash computation.\n\t         * Note that the finalize operation is effectively a destructive, read-once operation.\n\t         *\n\t         * @param {WordArray|string} messageUpdate (Optional) A final message update.\n\t         *\n\t         * @return {WordArray} The hash.\n\t         *\n\t         * @example\n\t         *\n\t         *     var hash = hasher.finalize();\n\t         *     var hash = hasher.finalize('message');\n\t         *     var hash = hasher.finalize(wordArray);\n\t         */\n\t        finalize: function (messageUpdate) {\n\t            // Final message update\n\t            if (messageUpdate) {\n\t                this._append(messageUpdate);\n\t            }\n\n\t            // Perform concrete-hasher logic\n\t            var hash = this._doFinalize();\n\n\t            return hash;\n\t        },\n\n\t        blockSize: 512/32,\n\n\t        /**\n\t         * Creates a shortcut function to a hasher's object interface.\n\t         *\n\t         * @param {Hasher} hasher The hasher to create a helper for.\n\t         *\n\t         * @return {Function} The shortcut function.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);\n\t         */\n\t        _createHelper: function (hasher) {\n\t            return function (message, cfg) {\n\t                return new hasher.init(cfg).finalize(message);\n\t            };\n\t        },\n\n\t        /**\n\t         * Creates a shortcut function to the HMAC's object interface.\n\t         *\n\t         * @param {Hasher} hasher The hasher to use in this HMAC helper.\n\t         *\n\t         * @return {Function} The shortcut function.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);\n\t         */\n\t        _createHmacHelper: function (hasher) {\n\t            return function (message, key) {\n\t                return new C_algo.HMAC.init(hasher, key).finalize(message);\n\t            };\n\t        }\n\t    });\n\n\t    /**\n\t     * Algorithm namespace.\n\t     */\n\t    var C_algo = C.algo = {};\n\n\t    return C;\n\t}(Math));\n\n\n\treturn CryptoJS;\n\n}));\n\n//# sourceURL=webpack:///./node_modules/crypto-js/core.js?");

/***/ }),

/***/ "./node_modules/crypto-js/enc-base64.js":
/*!**********************************************!*\
  !*** ./node_modules/crypto-js/enc-base64.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval(";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t}\n\telse {}\n}(this, function (CryptoJS) {\n\n\t(function () {\n\t    // Shortcuts\n\t    var C = CryptoJS;\n\t    var C_lib = C.lib;\n\t    var WordArray = C_lib.WordArray;\n\t    var C_enc = C.enc;\n\n\t    /**\n\t     * Base64 encoding strategy.\n\t     */\n\t    var Base64 = C_enc.Base64 = {\n\t        /**\n\t         * Converts a word array to a Base64 string.\n\t         *\n\t         * @param {WordArray} wordArray The word array.\n\t         *\n\t         * @return {string} The Base64 string.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);\n\t         */\n\t        stringify: function (wordArray) {\n\t            // Shortcuts\n\t            var words = wordArray.words;\n\t            var sigBytes = wordArray.sigBytes;\n\t            var map = this._map;\n\n\t            // Clamp excess bits\n\t            wordArray.clamp();\n\n\t            // Convert\n\t            var base64Chars = [];\n\t            for (var i = 0; i < sigBytes; i += 3) {\n\t                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;\n\t                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;\n\t                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;\n\n\t                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;\n\n\t                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {\n\t                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));\n\t                }\n\t            }\n\n\t            // Add padding\n\t            var paddingChar = map.charAt(64);\n\t            if (paddingChar) {\n\t                while (base64Chars.length % 4) {\n\t                    base64Chars.push(paddingChar);\n\t                }\n\t            }\n\n\t            return base64Chars.join('');\n\t        },\n\n\t        /**\n\t         * Converts a Base64 string to a word array.\n\t         *\n\t         * @param {string} base64Str The Base64 string.\n\t         *\n\t         * @return {WordArray} The word array.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);\n\t         */\n\t        parse: function (base64Str) {\n\t            // Shortcuts\n\t            var base64StrLength = base64Str.length;\n\t            var map = this._map;\n\t            var reverseMap = this._reverseMap;\n\n\t            if (!reverseMap) {\n\t                    reverseMap = this._reverseMap = [];\n\t                    for (var j = 0; j < map.length; j++) {\n\t                        reverseMap[map.charCodeAt(j)] = j;\n\t                    }\n\t            }\n\n\t            // Ignore padding\n\t            var paddingChar = map.charAt(64);\n\t            if (paddingChar) {\n\t                var paddingIndex = base64Str.indexOf(paddingChar);\n\t                if (paddingIndex !== -1) {\n\t                    base64StrLength = paddingIndex;\n\t                }\n\t            }\n\n\t            // Convert\n\t            return parseLoop(base64Str, base64StrLength, reverseMap);\n\n\t        },\n\n\t        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='\n\t    };\n\n\t    function parseLoop(base64Str, base64StrLength, reverseMap) {\n\t      var words = [];\n\t      var nBytes = 0;\n\t      for (var i = 0; i < base64StrLength; i++) {\n\t          if (i % 4) {\n\t              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);\n\t              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);\n\t              words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);\n\t              nBytes++;\n\t          }\n\t      }\n\t      return WordArray.create(words, nBytes);\n\t    }\n\t}());\n\n\n\treturn CryptoJS.enc.Base64;\n\n}));\n\n//# sourceURL=webpack:///./node_modules/crypto-js/enc-base64.js?");

/***/ }),

/***/ "./node_modules/crypto-js/hmac-sha256.js":
/*!***********************************************!*\
  !*** ./node_modules/crypto-js/hmac-sha256.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval(";(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"), __webpack_require__(/*! ./sha256 */ \"./node_modules/crypto-js/sha256.js\"), __webpack_require__(/*! ./hmac */ \"./node_modules/crypto-js/hmac.js\"));\n\t}\n\telse {}\n}(this, function (CryptoJS) {\n\n\treturn CryptoJS.HmacSHA256;\n\n}));\n\n//# sourceURL=webpack:///./node_modules/crypto-js/hmac-sha256.js?");

/***/ }),

/***/ "./node_modules/crypto-js/hmac.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/hmac.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval(";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t}\n\telse {}\n}(this, function (CryptoJS) {\n\n\t(function () {\n\t    // Shortcuts\n\t    var C = CryptoJS;\n\t    var C_lib = C.lib;\n\t    var Base = C_lib.Base;\n\t    var C_enc = C.enc;\n\t    var Utf8 = C_enc.Utf8;\n\t    var C_algo = C.algo;\n\n\t    /**\n\t     * HMAC algorithm.\n\t     */\n\t    var HMAC = C_algo.HMAC = Base.extend({\n\t        /**\n\t         * Initializes a newly created HMAC.\n\t         *\n\t         * @param {Hasher} hasher The hash algorithm to use.\n\t         * @param {WordArray|string} key The secret key.\n\t         *\n\t         * @example\n\t         *\n\t         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);\n\t         */\n\t        init: function (hasher, key) {\n\t            // Init hasher\n\t            hasher = this._hasher = new hasher.init();\n\n\t            // Convert string to WordArray, else assume WordArray already\n\t            if (typeof key == 'string') {\n\t                key = Utf8.parse(key);\n\t            }\n\n\t            // Shortcuts\n\t            var hasherBlockSize = hasher.blockSize;\n\t            var hasherBlockSizeBytes = hasherBlockSize * 4;\n\n\t            // Allow arbitrary length keys\n\t            if (key.sigBytes > hasherBlockSizeBytes) {\n\t                key = hasher.finalize(key);\n\t            }\n\n\t            // Clamp excess bits\n\t            key.clamp();\n\n\t            // Clone key for inner and outer pads\n\t            var oKey = this._oKey = key.clone();\n\t            var iKey = this._iKey = key.clone();\n\n\t            // Shortcuts\n\t            var oKeyWords = oKey.words;\n\t            var iKeyWords = iKey.words;\n\n\t            // XOR keys with pad constants\n\t            for (var i = 0; i < hasherBlockSize; i++) {\n\t                oKeyWords[i] ^= 0x5c5c5c5c;\n\t                iKeyWords[i] ^= 0x36363636;\n\t            }\n\t            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;\n\n\t            // Set initial values\n\t            this.reset();\n\t        },\n\n\t        /**\n\t         * Resets this HMAC to its initial state.\n\t         *\n\t         * @example\n\t         *\n\t         *     hmacHasher.reset();\n\t         */\n\t        reset: function () {\n\t            // Shortcut\n\t            var hasher = this._hasher;\n\n\t            // Reset\n\t            hasher.reset();\n\t            hasher.update(this._iKey);\n\t        },\n\n\t        /**\n\t         * Updates this HMAC with a message.\n\t         *\n\t         * @param {WordArray|string} messageUpdate The message to append.\n\t         *\n\t         * @return {HMAC} This HMAC instance.\n\t         *\n\t         * @example\n\t         *\n\t         *     hmacHasher.update('message');\n\t         *     hmacHasher.update(wordArray);\n\t         */\n\t        update: function (messageUpdate) {\n\t            this._hasher.update(messageUpdate);\n\n\t            // Chainable\n\t            return this;\n\t        },\n\n\t        /**\n\t         * Finalizes the HMAC computation.\n\t         * Note that the finalize operation is effectively a destructive, read-once operation.\n\t         *\n\t         * @param {WordArray|string} messageUpdate (Optional) A final message update.\n\t         *\n\t         * @return {WordArray} The HMAC.\n\t         *\n\t         * @example\n\t         *\n\t         *     var hmac = hmacHasher.finalize();\n\t         *     var hmac = hmacHasher.finalize('message');\n\t         *     var hmac = hmacHasher.finalize(wordArray);\n\t         */\n\t        finalize: function (messageUpdate) {\n\t            // Shortcut\n\t            var hasher = this._hasher;\n\n\t            // Compute HMAC\n\t            var innerHash = hasher.finalize(messageUpdate);\n\t            hasher.reset();\n\t            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));\n\n\t            return hmac;\n\t        }\n\t    });\n\t}());\n\n\n}));\n\n//# sourceURL=webpack:///./node_modules/crypto-js/hmac.js?");

/***/ }),

/***/ "./node_modules/crypto-js/lib-typedarrays.js":
/*!***************************************************!*\
  !*** ./node_modules/crypto-js/lib-typedarrays.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval(";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t}\n\telse {}\n}(this, function (CryptoJS) {\n\n\t(function () {\n\t    // Check if typed arrays are supported\n\t    if (typeof ArrayBuffer != 'function') {\n\t        return;\n\t    }\n\n\t    // Shortcuts\n\t    var C = CryptoJS;\n\t    var C_lib = C.lib;\n\t    var WordArray = C_lib.WordArray;\n\n\t    // Reference original init\n\t    var superInit = WordArray.init;\n\n\t    // Augment WordArray.init to handle typed arrays\n\t    var subInit = WordArray.init = function (typedArray) {\n\t        // Convert buffers to uint8\n\t        if (typedArray instanceof ArrayBuffer) {\n\t            typedArray = new Uint8Array(typedArray);\n\t        }\n\n\t        // Convert other array views to uint8\n\t        if (\n\t            typedArray instanceof Int8Array ||\n\t            (typeof Uint8ClampedArray !== \"undefined\" && typedArray instanceof Uint8ClampedArray) ||\n\t            typedArray instanceof Int16Array ||\n\t            typedArray instanceof Uint16Array ||\n\t            typedArray instanceof Int32Array ||\n\t            typedArray instanceof Uint32Array ||\n\t            typedArray instanceof Float32Array ||\n\t            typedArray instanceof Float64Array\n\t        ) {\n\t            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);\n\t        }\n\n\t        // Handle Uint8Array\n\t        if (typedArray instanceof Uint8Array) {\n\t            // Shortcut\n\t            var typedArrayByteLength = typedArray.byteLength;\n\n\t            // Extract bytes\n\t            var words = [];\n\t            for (var i = 0; i < typedArrayByteLength; i++) {\n\t                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);\n\t            }\n\n\t            // Initialize this word array\n\t            superInit.call(this, words, typedArrayByteLength);\n\t        } else {\n\t            // Else call normal init\n\t            superInit.apply(this, arguments);\n\t        }\n\t    };\n\n\t    subInit.prototype = WordArray;\n\t}());\n\n\n\treturn CryptoJS.lib.WordArray;\n\n}));\n\n//# sourceURL=webpack:///./node_modules/crypto-js/lib-typedarrays.js?");

/***/ }),

/***/ "./node_modules/crypto-js/sha256.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha256.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval(";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t}\n\telse {}\n}(this, function (CryptoJS) {\n\n\t(function (Math) {\n\t    // Shortcuts\n\t    var C = CryptoJS;\n\t    var C_lib = C.lib;\n\t    var WordArray = C_lib.WordArray;\n\t    var Hasher = C_lib.Hasher;\n\t    var C_algo = C.algo;\n\n\t    // Initialization and round constants tables\n\t    var H = [];\n\t    var K = [];\n\n\t    // Compute constants\n\t    (function () {\n\t        function isPrime(n) {\n\t            var sqrtN = Math.sqrt(n);\n\t            for (var factor = 2; factor <= sqrtN; factor++) {\n\t                if (!(n % factor)) {\n\t                    return false;\n\t                }\n\t            }\n\n\t            return true;\n\t        }\n\n\t        function getFractionalBits(n) {\n\t            return ((n - (n | 0)) * 0x100000000) | 0;\n\t        }\n\n\t        var n = 2;\n\t        var nPrime = 0;\n\t        while (nPrime < 64) {\n\t            if (isPrime(n)) {\n\t                if (nPrime < 8) {\n\t                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));\n\t                }\n\t                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));\n\n\t                nPrime++;\n\t            }\n\n\t            n++;\n\t        }\n\t    }());\n\n\t    // Reusable object\n\t    var W = [];\n\n\t    /**\n\t     * SHA-256 hash algorithm.\n\t     */\n\t    var SHA256 = C_algo.SHA256 = Hasher.extend({\n\t        _doReset: function () {\n\t            this._hash = new WordArray.init(H.slice(0));\n\t        },\n\n\t        _doProcessBlock: function (M, offset) {\n\t            // Shortcut\n\t            var H = this._hash.words;\n\n\t            // Working variables\n\t            var a = H[0];\n\t            var b = H[1];\n\t            var c = H[2];\n\t            var d = H[3];\n\t            var e = H[4];\n\t            var f = H[5];\n\t            var g = H[6];\n\t            var h = H[7];\n\n\t            // Computation\n\t            for (var i = 0; i < 64; i++) {\n\t                if (i < 16) {\n\t                    W[i] = M[offset + i] | 0;\n\t                } else {\n\t                    var gamma0x = W[i - 15];\n\t                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^\n\t                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^\n\t                                   (gamma0x >>> 3);\n\n\t                    var gamma1x = W[i - 2];\n\t                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^\n\t                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^\n\t                                   (gamma1x >>> 10);\n\n\t                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];\n\t                }\n\n\t                var ch  = (e & f) ^ (~e & g);\n\t                var maj = (a & b) ^ (a & c) ^ (b & c);\n\n\t                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));\n\t                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));\n\n\t                var t1 = h + sigma1 + ch + K[i] + W[i];\n\t                var t2 = sigma0 + maj;\n\n\t                h = g;\n\t                g = f;\n\t                f = e;\n\t                e = (d + t1) | 0;\n\t                d = c;\n\t                c = b;\n\t                b = a;\n\t                a = (t1 + t2) | 0;\n\t            }\n\n\t            // Intermediate hash value\n\t            H[0] = (H[0] + a) | 0;\n\t            H[1] = (H[1] + b) | 0;\n\t            H[2] = (H[2] + c) | 0;\n\t            H[3] = (H[3] + d) | 0;\n\t            H[4] = (H[4] + e) | 0;\n\t            H[5] = (H[5] + f) | 0;\n\t            H[6] = (H[6] + g) | 0;\n\t            H[7] = (H[7] + h) | 0;\n\t        },\n\n\t        _doFinalize: function () {\n\t            // Shortcuts\n\t            var data = this._data;\n\t            var dataWords = data.words;\n\n\t            var nBitsTotal = this._nDataBytes * 8;\n\t            var nBitsLeft = data.sigBytes * 8;\n\n\t            // Add padding\n\t            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);\n\t            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);\n\t            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;\n\t            data.sigBytes = dataWords.length * 4;\n\n\t            // Hash final blocks\n\t            this._process();\n\n\t            // Return final computed hash\n\t            return this._hash;\n\t        },\n\n\t        clone: function () {\n\t            var clone = Hasher.clone.call(this);\n\t            clone._hash = this._hash.clone();\n\n\t            return clone;\n\t        }\n\t    });\n\n\t    /**\n\t     * Shortcut function to the hasher's object interface.\n\t     *\n\t     * @param {WordArray|string} message The message to hash.\n\t     *\n\t     * @return {WordArray} The hash.\n\t     *\n\t     * @static\n\t     *\n\t     * @example\n\t     *\n\t     *     var hash = CryptoJS.SHA256('message');\n\t     *     var hash = CryptoJS.SHA256(wordArray);\n\t     */\n\t    C.SHA256 = Hasher._createHelper(SHA256);\n\n\t    /**\n\t     * Shortcut function to the HMAC's object interface.\n\t     *\n\t     * @param {WordArray|string} message The message to hash.\n\t     * @param {WordArray|string} key The secret key.\n\t     *\n\t     * @return {WordArray} The HMAC.\n\t     *\n\t     * @static\n\t     *\n\t     * @example\n\t     *\n\t     *     var hmac = CryptoJS.HmacSHA256(message, key);\n\t     */\n\t    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);\n\t}(Math));\n\n\n\treturn CryptoJS.SHA256;\n\n}));\n\n//# sourceURL=webpack:///./node_modules/crypto-js/sha256.js?");

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.read = function (buffer, offset, isLE, mLen, nBytes) {\n  var e, m\n  var eLen = (nBytes * 8) - mLen - 1\n  var eMax = (1 << eLen) - 1\n  var eBias = eMax >> 1\n  var nBits = -7\n  var i = isLE ? (nBytes - 1) : 0\n  var d = isLE ? -1 : 1\n  var s = buffer[offset + i]\n\n  i += d\n\n  e = s & ((1 << (-nBits)) - 1)\n  s >>= (-nBits)\n  nBits += eLen\n  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}\n\n  m = e & ((1 << (-nBits)) - 1)\n  e >>= (-nBits)\n  nBits += mLen\n  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}\n\n  if (e === 0) {\n    e = 1 - eBias\n  } else if (e === eMax) {\n    return m ? NaN : ((s ? -1 : 1) * Infinity)\n  } else {\n    m = m + Math.pow(2, mLen)\n    e = e - eBias\n  }\n  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)\n}\n\nexports.write = function (buffer, value, offset, isLE, mLen, nBytes) {\n  var e, m, c\n  var eLen = (nBytes * 8) - mLen - 1\n  var eMax = (1 << eLen) - 1\n  var eBias = eMax >> 1\n  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)\n  var i = isLE ? 0 : (nBytes - 1)\n  var d = isLE ? 1 : -1\n  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0\n\n  value = Math.abs(value)\n\n  if (isNaN(value) || value === Infinity) {\n    m = isNaN(value) ? 1 : 0\n    e = eMax\n  } else {\n    e = Math.floor(Math.log(value) / Math.LN2)\n    if (value * (c = Math.pow(2, -e)) < 1) {\n      e--\n      c *= 2\n    }\n    if (e + eBias >= 1) {\n      value += rt / c\n    } else {\n      value += rt * Math.pow(2, 1 - eBias)\n    }\n    if (value * c >= 2) {\n      e++\n      c /= 2\n    }\n\n    if (e + eBias >= eMax) {\n      m = 0\n      e = eMax\n    } else if (e + eBias >= 1) {\n      m = ((value * c) - 1) * Math.pow(2, mLen)\n      e = e + eBias\n    } else {\n      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)\n      e = 0\n    }\n  }\n\n  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}\n\n  e = (e << mLen) | m\n  eLen += mLen\n  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}\n\n  buffer[offset + i - d] |= s * 128\n}\n\n\n//# sourceURL=webpack:///./node_modules/ieee754/index.js?");

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = Array.isArray || function (arr) {\n  return toString.call(arr) == '[object Array]';\n};\n\n\n//# sourceURL=webpack:///./node_modules/isarray/index.js?");

/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * JavaScript Cookie v2.2.0\n * https://github.com/js-cookie/js-cookie\n *\n * Copyright 2006, 2015 Klaus Hartl & Fagner Brack\n * Released under the MIT license\n */\n;(function (factory) {\n\tvar registeredInModuleLoader = false;\n\tif (true) {\n\t\t!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t\tregisteredInModuleLoader = true;\n\t}\n\tif (true) {\n\t\tmodule.exports = factory();\n\t\tregisteredInModuleLoader = true;\n\t}\n\tif (!registeredInModuleLoader) {\n\t\tvar OldCookies = window.Cookies;\n\t\tvar api = window.Cookies = factory();\n\t\tapi.noConflict = function () {\n\t\t\twindow.Cookies = OldCookies;\n\t\t\treturn api;\n\t\t};\n\t}\n}(function () {\n\tfunction extend () {\n\t\tvar i = 0;\n\t\tvar result = {};\n\t\tfor (; i < arguments.length; i++) {\n\t\t\tvar attributes = arguments[ i ];\n\t\t\tfor (var key in attributes) {\n\t\t\t\tresult[key] = attributes[key];\n\t\t\t}\n\t\t}\n\t\treturn result;\n\t}\n\n\tfunction init (converter) {\n\t\tfunction api (key, value, attributes) {\n\t\t\tvar result;\n\t\t\tif (typeof document === 'undefined') {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// Write\n\n\t\t\tif (arguments.length > 1) {\n\t\t\t\tattributes = extend({\n\t\t\t\t\tpath: '/'\n\t\t\t\t}, api.defaults, attributes);\n\n\t\t\t\tif (typeof attributes.expires === 'number') {\n\t\t\t\t\tvar expires = new Date();\n\t\t\t\t\texpires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);\n\t\t\t\t\tattributes.expires = expires;\n\t\t\t\t}\n\n\t\t\t\t// We're using \"expires\" because \"max-age\" is not supported by IE\n\t\t\t\tattributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';\n\n\t\t\t\ttry {\n\t\t\t\t\tresult = JSON.stringify(value);\n\t\t\t\t\tif (/^[\\{\\[]/.test(result)) {\n\t\t\t\t\t\tvalue = result;\n\t\t\t\t\t}\n\t\t\t\t} catch (e) {}\n\n\t\t\t\tif (!converter.write) {\n\t\t\t\t\tvalue = encodeURIComponent(String(value))\n\t\t\t\t\t\t.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);\n\t\t\t\t} else {\n\t\t\t\t\tvalue = converter.write(value, key);\n\t\t\t\t}\n\n\t\t\t\tkey = encodeURIComponent(String(key));\n\t\t\t\tkey = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);\n\t\t\t\tkey = key.replace(/[\\(\\)]/g, escape);\n\n\t\t\t\tvar stringifiedAttributes = '';\n\n\t\t\t\tfor (var attributeName in attributes) {\n\t\t\t\t\tif (!attributes[attributeName]) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\t\t\t\t\tstringifiedAttributes += '; ' + attributeName;\n\t\t\t\t\tif (attributes[attributeName] === true) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\t\t\t\t\tstringifiedAttributes += '=' + attributes[attributeName];\n\t\t\t\t}\n\t\t\t\treturn (document.cookie = key + '=' + value + stringifiedAttributes);\n\t\t\t}\n\n\t\t\t// Read\n\n\t\t\tif (!key) {\n\t\t\t\tresult = {};\n\t\t\t}\n\n\t\t\t// To prevent the for loop in the first place assign an empty array\n\t\t\t// in case there are no cookies at all. Also prevents odd result when\n\t\t\t// calling \"get()\"\n\t\t\tvar cookies = document.cookie ? document.cookie.split('; ') : [];\n\t\t\tvar rdecode = /(%[0-9A-Z]{2})+/g;\n\t\t\tvar i = 0;\n\n\t\t\tfor (; i < cookies.length; i++) {\n\t\t\t\tvar parts = cookies[i].split('=');\n\t\t\t\tvar cookie = parts.slice(1).join('=');\n\n\t\t\t\tif (!this.json && cookie.charAt(0) === '\"') {\n\t\t\t\t\tcookie = cookie.slice(1, -1);\n\t\t\t\t}\n\n\t\t\t\ttry {\n\t\t\t\t\tvar name = parts[0].replace(rdecode, decodeURIComponent);\n\t\t\t\t\tcookie = converter.read ?\n\t\t\t\t\t\tconverter.read(cookie, name) : converter(cookie, name) ||\n\t\t\t\t\t\tcookie.replace(rdecode, decodeURIComponent);\n\n\t\t\t\t\tif (this.json) {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\tcookie = JSON.parse(cookie);\n\t\t\t\t\t\t} catch (e) {}\n\t\t\t\t\t}\n\n\t\t\t\t\tif (key === name) {\n\t\t\t\t\t\tresult = cookie;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\n\t\t\t\t\tif (!key) {\n\t\t\t\t\t\tresult[name] = cookie;\n\t\t\t\t\t}\n\t\t\t\t} catch (e) {}\n\t\t\t}\n\n\t\t\treturn result;\n\t\t}\n\n\t\tapi.set = api;\n\t\tapi.get = function (key) {\n\t\t\treturn api.call(api, key);\n\t\t};\n\t\tapi.getJSON = function () {\n\t\t\treturn api.apply({\n\t\t\t\tjson: true\n\t\t\t}, [].slice.call(arguments));\n\t\t};\n\t\tapi.defaults = {};\n\n\t\tapi.remove = function (key, attributes) {\n\t\t\tapi(key, '', extend(attributes, {\n\t\t\t\texpires: -1\n\t\t\t}));\n\t\t};\n\n\t\tapi.withConverter = init;\n\n\t\treturn api;\n\t}\n\n\treturn init(function () {});\n}));\n\n\n//# sourceURL=webpack:///./node_modules/js-cookie/src/js.cookie.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/**\n * Copyright (c) 2014, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * https://raw.github.com/facebook/regenerator/master/LICENSE file. An\n * additional grant of patent rights can be found in the PATENTS file in\n * the same directory.\n */\n\n!(function(global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  var inModule = typeof module === \"object\";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  runtime.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration. If the Promise is rejected, however, the\n          // result for this iteration will be rejected with the same\n          // reason. Note that rejections of yielded Promises are not\n          // thrown back into the generator function, as is the case\n          // when an awaited Promise is rejected. This difference in\n          // behavior between yield and await is important, because it\n          // allows the consumer to decide what to do with the yielded\n          // rejection (swallow it and continue, manually .throw it back\n          // into the generator, abandon iteration, whatever). With\n          // await, by contrast, there is no opportunity to examine the\n          // rejection reason outside the generator function, so the\n          // only option is to throw it from the await expression, and\n          // let the generator function handle the exception.\n          result.value = unwrapped;\n          resolve(result);\n        }, reject);\n      }\n    }\n\n    if (typeof global.process === \"object\" && global.process.domain) {\n      invoke = global.process.domain.bind(invoke);\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return runtime.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n})(\n  // Among the various tricks for obtaining a reference to the global\n  // object, this seems to be the most reliable technique that does not\n  // use indirect eval (which violates Content Security Policy).\n  typeof global === \"object\" ? global :\n  typeof window === \"object\" ? window :\n  typeof self === \"object\" ? self : this\n);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! exports provided: cognito */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cognito\", function() { return cognito; });\n/*jslint esnext: true*/\nvar cognito = {\n  userPoolId: 'us-east-1_afCANco3u',\n  region: 'us-east-1',\n  clientId: 'ubt9smbir3q2pma5ghhjst0d1'\n};\n\n//# sourceURL=webpack:///./src/js/config.js?");

/***/ }),

/***/ "./src/js/indexSrc.js":
/*!****************************!*\
  !*** ./src/js/indexSrc.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _views_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/base */ \"./src/js/views/base.js\");\n/* harmony import */ var _views_indexView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/indexView */ \"./src/js/views/indexView.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/User */ \"./src/js/models/User.js\");\n/*jslint esnext: true*/\n\n\n\n\n\nvar AmazonCognitoIdentity = __webpack_require__(/*! amazon-cognito-identity-js */ \"./node_modules/amazon-cognito-identity-js/es/index.js\"); // userPool\n// cognitoUser\n// sessionValid\n\n\nvar state = {}; /////////////////////////////////////////\n// Check user state on window load\n/////////////////////////////////////////\n\nvar checkUserState = function checkUserState() {\n  // Instantiate User class\n  state.user = new _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"](); // Get user pool\n\n  state.userPool = state.user.createPool(); // Get current user\n\n  state.cognitoUser = state.userPool.getCurrentUser(); // If cognitouser is not null, get session\n\n  if (state.cognitoUser !== null) {\n    state.sessionValid = state.user.checkSession(state.cognitoUser);\n    _views_indexView__WEBPACK_IMPORTED_MODULE_2__[\"setButtons\"]();\n  } else {\n    // Otherwise, change buttons to login/register\n    _views_indexView__WEBPACK_IMPORTED_MODULE_2__[\"updateButtons\"]();\n  }\n}; /////////////////////////////////////////\n// Sign out user\n/////////////////////////////////////////\n\n\nvar signOut = function signOut() {\n  // Display feedback to user\n  _views_base__WEBPACK_IMPORTED_MODULE_1__[\"elementsHome\"].btnSignOut.innerHTML = \"Signing out\"; // Sign out from Cognito\n\n  if (state.cognitoUser !== null) {\n    state.cognitoUser.signOut();\n  }\n}; /////////////////////////////////////////\n// Set up event listeners\n/////////////////////////////////////////\n\n\nvar init = function init() {\n  window.addEventListener('load', checkUserState);\n  _views_base__WEBPACK_IMPORTED_MODULE_1__[\"elementsHome\"].btnSignOut.addEventListener('click', signOut);\n};\n\ninit();\n\n//# sourceURL=webpack:///./src/js/indexSrc.js?");

/***/ }),

/***/ "./src/js/models/User.js":
/*!*******************************!*\
  !*** ./src/js/models/User.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/js/config.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*jslint esnext: true*/\n\n\nvar AmazonCognitoIdentity = __webpack_require__(/*! amazon-cognito-identity-js */ \"./node_modules/amazon-cognito-identity-js/es/index.js\");\n\nvar API = 'https://cors-anywhere.herokuapp.com/https://26t67eypug.execute-api.us-east-1.amazonaws.com/prod';\n\nvar User =\n/*#__PURE__*/\nfunction () {\n  function User() {\n    _classCallCheck(this, User);\n\n    this.attributes = [];\n  } // Create CognitoUserPool - called on register and login\n\n\n  _createClass(User, [{\n    key: \"createPool\",\n    value: function createPool() {\n      // Get pool data from config\n      var poolData = {\n        UserPoolId: _config__WEBPACK_IMPORTED_MODULE_0__[\"cognito\"].userPoolId,\n        ClientId: _config__WEBPACK_IMPORTED_MODULE_0__[\"cognito\"].clientId\n      }; // Instantiate CognitoUserPool\n\n      return new AmazonCognitoIdentity.CognitoUserPool(poolData);\n    } // Add an attribute to array - called on register\n\n  }, {\n    key: \"addAttribute\",\n    value: function addAttribute(name, value) {\n      // Get data for name attribute\n      var dataName = {\n        Name: name,\n        Value: value\n      }; // Instantiate CognitoUserAttribute\n\n      this.attributes.push(new AmazonCognitoIdentity.CognitoUserAttribute(dataName));\n    } // Create AuthenticationDetails\n\n  }, {\n    key: \"createDetails\",\n    value: function createDetails(email, password) {\n      // Create object to be passed in\n      var authenticationData = {\n        Username: email,\n        Password: password\n      }; // Instantiate AuthenticationDetails\n\n      return new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);\n    } // Create user \n\n  }, {\n    key: \"createUser\",\n    value: function createUser(email, pool) {\n      var userData = {\n        Username: email,\n        Pool: pool\n      };\n      return new AmazonCognitoIdentity.CognitoUser(userData);\n    } // Log user's email in DynamoDB - called on register\n\n  }, {\n    key: \"postUser\",\n    value: function () {\n      var _postUser = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(email) {\n        var body, result, response;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                // Formulate the body of the request\n                body = {\n                  userId: email,\n                  thoughts: []\n                };\n                _context.prev = 1;\n                result = fetch(API, {\n                  method: \"POST\",\n                  headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json'\n                  },\n                  body: JSON.stringify(body)\n                });\n                _context.next = 5;\n                return result;\n\n              case 5:\n                response = _context.sent;\n\n                // Only if response status is okay, log success message\n                if (response.status === 200) {\n                  console.log('Successfully posted user to DynamoDB'); // Else, something went wrong with the API call\n                } else {\n                  console.log(\"Error calling API: \".concat(response.status));\n                }\n\n                _context.next = 13;\n                break;\n\n              case 9:\n                _context.prev = 9;\n                _context.t0 = _context[\"catch\"](1);\n                console.log(\"Error writing to Dynamo\");\n                console.log(\"\".concat(_context.t0));\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[1, 9]]);\n      }));\n\n      function postUser(_x) {\n        return _postUser.apply(this, arguments);\n      }\n\n      return postUser;\n    }()\n  }, {\n    key: \"checkSession\",\n    value: function checkSession(user) {\n      var result = user.getSession(function (err, session) {\n        if (err) {\n          console.log(\"Error getting session: \".concat(err.message));\n          return false;\n        } else if (session) {\n          console.log(\"Session is valid: \".concat(session.isValid()));\n          return true;\n        }\n      });\n\n      if (result) {\n        return true;\n      }\n    }\n  }]);\n\n  return User;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/models/User.js?");

/***/ }),

/***/ "./src/js/views/base.js":
/*!******************************!*\
  !*** ./src/js/views/base.js ***!
  \******************************/
/*! exports provided: pages, elementsAdd, elementsArchive, elementsRegister, elementsLogin, elementsHome, elementsSnoozed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pages\", function() { return pages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementsAdd\", function() { return elementsAdd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementsArchive\", function() { return elementsArchive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementsRegister\", function() { return elementsRegister; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementsLogin\", function() { return elementsLogin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementsHome\", function() { return elementsHome; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementsSnoozed\", function() { return elementsSnoozed; });\n/*jslint esnext: true*/\nvar baseURL = 'https://app.heyhon.co/';\nvar endURL = '';\nvar pages = {\n  snoozed: \"\".concat(baseURL, \"snoozed\").concat(endURL),\n  register: \"\".concat(baseURL, \"register\").concat(endURL),\n  login: \"\".concat(baseURL, \"login\").concat(endURL),\n  add: \"\".concat(baseURL, \"add\").concat(endURL),\n  home: \"\".concat(baseURL),\n  archive: \"\".concat(baseURL, \"archive\").concat(endURL)\n};\nvar elementsAdd = {\n  emotion: document.querySelectorAll('.emotion'),\n  topic: document.querySelectorAll('.topic'),\n  snoozeBtn: document.querySelector('.btn--snooze')\n};\nvar elementsArchive = {\n  thoughtsList: document.querySelector('.thoughts__list'),\n  emptyBox: document.querySelector('.empty-box'),\n  btnBack: document.querySelector('.empty-box__button--back')\n};\nvar elementsRegister = {\n  btnRegister: document.getElementById('btn-register'),\n  inputName: document.getElementById('name'),\n  inputEmail: document.getElementById('email'),\n  inputPassword: document.getElementById('password'),\n  confirmation: document.querySelector('.form__confirmation')\n};\nvar elementsLogin = {\n  loginBtn: document.getElementById('btn-login'),\n  emailInput: document.getElementById('email'),\n  passwordInput: document.getElementById('password')\n};\nvar elementsHome = {\n  btnGradient: document.querySelector('.btn--gradient'),\n  btnShadow: document.querySelector('.btn--shadow'),\n  btnSignOut: document.querySelector('.btn--signout')\n};\nvar elementsSnoozed = {\n  btnBack: document.querySelector('.snoozed__option--back')\n};\n\n//# sourceURL=webpack:///./src/js/views/base.js?");

/***/ }),

/***/ "./src/js/views/indexView.js":
/*!***********************************!*\
  !*** ./src/js/views/indexView.js ***!
  \***********************************/
/*! exports provided: updateButtons, setButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateButtons\", function() { return updateButtons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setButtons\", function() { return setButtons; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n/*jslint esnext: true*/\n /////////////////////////////////////////\n// Check user state on window load\n/////////////////////////////////////////\n// Changes buttons from Add Thought/Archive to Create Account/Log In\n\nvar updateButtons = function updateButtons() {\n  // Update text and href for gradient button\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elementsHome\"].btnGradient.innerHTML = 'Create an Account';\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elementsHome\"].btnGradient.setAttribute('href', _base__WEBPACK_IMPORTED_MODULE_0__[\"pages\"].register); // Update text and href for shadow button\n\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elementsHome\"].btnShadow.innerHTML = 'Log In';\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elementsHome\"].btnShadow.setAttribute('href', _base__WEBPACK_IMPORTED_MODULE_0__[\"pages\"].login); // Hide sign out button\n\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elementsHome\"].btnSignOut.style.display = 'none';\n};\nvar setButtons = function setButtons() {\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elementsHome\"].btnGradient.setAttribute('href', _base__WEBPACK_IMPORTED_MODULE_0__[\"pages\"].add);\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elementsHome\"].btnShadow.setAttribute('href', _base__WEBPACK_IMPORTED_MODULE_0__[\"pages\"].archive);\n};\n\n//# sourceURL=webpack:///./src/js/views/indexView.js?");

/***/ }),

/***/ 4:
/*!*************************************************!*\
  !*** multi babel-polyfill ./src/js/indexSrc.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"./node_modules/babel-polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/js/indexSrc.js */\"./src/js/indexSrc.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./src/js/indexSrc.js?");

/***/ })

/******/ });