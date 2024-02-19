/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_application_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/application.js */ \"./src/modules/application.js\");\n/* harmony import */ var _modules_stick_man_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/stick_man.js */ \"./src/modules/stick_man.js\");\n/* harmony import */ var _npc_data_npc_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./npc_data/npc_data.js */ \"./src/npc_data/npc_data.js\");\n/* harmony import */ var _modules_NPC_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/NPC.js */ \"./src/modules/NPC.js\");\n\r\n\r\n//import {interaction} from \"./modules/interaction.js\";\r\n\r\n\r\n\r\nconst { app } = _modules_application_js__WEBPACK_IMPORTED_MODULE_0__.appInfo\r\n\r\n;(0,_modules_application_js__WEBPACK_IMPORTED_MODULE_0__.createApplication)();\r\n(0,_modules_stick_man_js__WEBPACK_IMPORTED_MODULE_1__.draw_stickMan)(app);\r\n\r\nconst npc_1 = Object.create(_modules_NPC_js__WEBPACK_IMPORTED_MODULE_3__.npc);\r\nnpc_1.set_data(_npc_data_npc_data_js__WEBPACK_IMPORTED_MODULE_2__.npc_1_data);\r\n\r\n\r\nconst keys = {};\r\nvar keyPressed = false;\r\n\r\nwindow.addEventListener('keydown', (e) => {\r\n    keys[e.key] = true;\r\n});\r\n\r\nwindow.addEventListener('keyup', (e) => {\r\n    keys[e.key] = false;\r\n    keyPressed = false;\r\n});\r\n\r\napp.ticker.add(() => {\r\n    (0,_modules_stick_man_js__WEBPACK_IMPORTED_MODULE_1__.move_stickMan)();\r\n\r\n    if (keys['Enter'] && !keyPressed) {\r\n        npc_1.draw_interactionBox();\r\n        npc_1.run_interaction();\r\n\r\n        keyPressed = true;\r\n    }\r\n    if (keys['z']) {\r\n        npc_1.INT_clear_all();\r\n        npc_1.NPC_clear_all();\r\n    }\r\n});\n\n//# sourceURL=webpack://fyp_game-development/./src/main.js?");

/***/ }),

/***/ "./src/modules/NPC.js":
/*!****************************!*\
  !*** ./src/modules/NPC.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   npc: () => (/* binding */ npc)\n/* harmony export */ });\n/* harmony import */ var _interaction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interaction.js */ \"./src/modules/interaction.js\");\n/* harmony import */ var _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/pixi.mjs */ \"./src/libs/pixi.mjs\");\n/* harmony import */ var _text_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text_styles.js */ \"./src/modules/text_styles.js\");\n\r\n\r\n\r\n\r\n_text_styles_js__WEBPACK_IMPORTED_MODULE_2__.textStyle_standard.wordWrapWidth = _interaction_js__WEBPACK_IMPORTED_MODULE_0__.interaction.interactionWidth;\r\n\r\nconst npc = Object.create(_interaction_js__WEBPACK_IMPORTED_MODULE_0__.interaction);\r\n\r\nnpc.sprite_location = \"\";\r\nnpc.set_spriteLocation = function (location) {\r\n    this.sprite_location = location;\r\n    npc.sprite = _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_1__.Sprite.from(this.sprite_location);\r\n}\r\n\r\nnpc.draw_sprite = function () {\r\n    this.sprite.anchor.set(0.5, 0.5);\r\n    this.sprite.position.set(150, 50);\r\n    this.sprite.width = 25;\r\n    this.sprite.height = 60;\r\n    _interaction_js__WEBPACK_IMPORTED_MODULE_0__.interaction.app.stage.addChild(this.sprite);\r\n}\r\n\r\nnpc.data = \"\";\r\n\r\nnpc.set_data = function(data){\r\n    this.data = data;\r\n}\r\n\r\nnpc.button_holder = [];\r\nnpc.answer = \"\";\r\nnpc.question_tracker = 1;\r\nnpc.answer;\r\n\r\nnpc.correct_answer = function () {\r\n    console.log(\"Correct\");\r\n    this.question_tracker++\r\n    this.answer = \"correct\"\r\n    this.NPC_clear_all();\r\n    this.run_interaction();\r\n}\r\nnpc.wrong_answer = function () {\r\n    console.log(\"Wrong\");\r\n    this.question_tracker++\r\n    this.answer = \"wrong\"\r\n    this.NPC_clear_all();\r\n    this.run_interaction();\r\n}\r\n\r\nnpc.create_buttons = function(buttons) {\r\n    this.answer = buttons[0];\r\n\r\n    for (let i = buttons.length - 1; i > 0; i--) {\r\n        const j = Math.floor(Math.random() * (i + 1));\r\n        [buttons[i], buttons[j]] = [buttons[j], buttons[i]];\r\n        \r\n    }\r\n\r\n    for (let i = 0; i < buttons.length; i++) {\r\n        let current_button = new _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_1__.Text(String(i + 1) + \". \" + buttons[i], _text_styles_js__WEBPACK_IMPORTED_MODULE_2__.textStyle_standard);\r\n\r\n        current_button.x = _interaction_js__WEBPACK_IMPORTED_MODULE_0__.interaction.x;\r\n        current_button.y = (i+1) * this.interactionHeight * 0.25;\r\n        current_button.e\r\n        current_button.eventMode = 'static';\r\n        current_button.buttonMode = true;\r\n\r\n        if (buttons[i] === this.answer){\r\n            current_button.on('pointerdown', () => this.correct_answer());\r\n        }\r\n        else{\r\n            current_button.on('pointerdown', () => this.wrong_answer());\r\n        }\r\n        \r\n        this.button_holder.push(current_button);\r\n    }\r\n\r\n    this.display();\r\n}\r\n\r\n\r\nnpc.display = function(){\r\n    for (let i = 0; i < this.button_holder.length; i++) {\r\n        _interaction_js__WEBPACK_IMPORTED_MODULE_0__.interaction.app.stage.addChild(this.button_holder[i]);\r\n    }\r\n}\r\n\r\nnpc.NPC_clear_all = function(){\r\n    for (let i = 0; i < this.button_holder.length; i++) {\r\n        _interaction_js__WEBPACK_IMPORTED_MODULE_0__.interaction.app.stage.removeChild(this.button_holder[i]);\r\n    }\r\n    this.button_holder = [];\r\n}\r\n\r\nnpc.run_interaction = function(){\r\n    let text_string = \"text_\" + String(this.question_tracker);\r\n    let question_string = \"question_\" + String(this.question_tracker);\r\n    _interaction_js__WEBPACK_IMPORTED_MODULE_0__.interaction.draw_text(this.data[text_string], _interaction_js__WEBPACK_IMPORTED_MODULE_0__.interaction.calculate_numScreens(this.data[text_string]));\r\n    this.create_buttons(this.data[question_string]);\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://fyp_game-development/./src/modules/NPC.js?");

/***/ }),

/***/ "./src/modules/application.js":
/*!************************************!*\
  !*** ./src/modules/application.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appInfo: () => (/* binding */ appInfo),\n/* harmony export */   createApplication: () => (/* binding */ createApplication)\n/* harmony export */ });\n/* harmony import */ var _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/pixi.mjs */ \"./src/libs/pixi.mjs\");\n//create pixi application\r\n//import { Application } from \"./pixi.mjs\";\r\n\r\n\r\n\r\nconst windowHeight = window.innerHeight;\r\nconst windowWidth = window.innerWidth;\r\n\r\nconst width = windowWidth * 0.7;\r\nconst aspectRatio = 16/9;\r\nconst height = (1/aspectRatio) * width;\r\nconst app = new _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_0__.Application({ width: width, height: height, backgroundColor: 'green' });\r\n\r\nfunction createApplication(){\r\n    document.body.appendChild(app.view);\r\n}\r\n\r\n\r\nconst textStyle = new _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_0__.TextStyle({\r\n    fontFamily: 'Arial',\r\n    fontSize: 24,\r\n    wordWrap: true,\r\n    align: 'left',\r\n});\r\n\r\nconst appInfo = {\r\n  app: app,\r\n  width: width,\r\n  height: height,\r\n  aspectRatio: aspectRatio,\r\n  textStyle: textStyle,\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://fyp_game-development/./src/modules/application.js?");

/***/ }),

/***/ "./src/modules/interaction.js":
/*!************************************!*\
  !*** ./src/modules/interaction.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   interaction: () => (/* binding */ interaction)\n/* harmony export */ });\n/* harmony import */ var _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/pixi.mjs */ \"./src/libs/pixi.mjs\");\n/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application.js */ \"./src/modules/application.js\");\n\r\n\r\n\r\n\r\nconst interaction = Object.create(_application_js__WEBPACK_IMPORTED_MODULE_1__.appInfo);\r\n\r\ninteraction.interactionWidth = _application_js__WEBPACK_IMPORTED_MODULE_1__.appInfo.width * 0.9;\r\ninteraction.interactionHeight = _application_js__WEBPACK_IMPORTED_MODULE_1__.appInfo.height * 0.4;\r\n\r\ninteraction.x = (_application_js__WEBPACK_IMPORTED_MODULE_1__.appInfo.app.screen.width - interaction.interactionWidth) / 2;\r\ninteraction.y = _application_js__WEBPACK_IMPORTED_MODULE_1__.appInfo.app.screen.height - (_application_js__WEBPACK_IMPORTED_MODULE_1__.appInfo.app.screen.height * 0.05) - interaction.interactionHeight;\r\n\r\ninteraction.textStyle = new _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_0__.TextStyle({\r\n    fontFamily: 'Arial',\r\n    fontSize: 24,\r\n    wordWrap: true,\r\n    wordWrapWidth: interaction.interactionWidth - 10,\r\n    align: 'left',\r\n});\r\n\r\ninteraction.interactionBox = new _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_0__.Graphics();\r\ninteraction.displayText = new _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_0__.Text(\"\", interaction.textStyle);\r\ninteraction.rightArrow = _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_0__.Sprite.from(\"../src/assets/right-arrow.png\");\r\ninteraction.leftArrow = _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_0__.Sprite.from(\"../src/assets/left-arrow.png\");\r\ninteraction.pageTracker = new _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_0__.Text(\"\", interaction.textStyle);\r\n\r\ninteraction.screenCount = 1;\r\n\r\n\r\ninteraction.draw_interactionBox = function() {\r\n    this.interactionBox.beginFill('gray', 1);\r\n    this.interactionBox.drawRect(this.x, this.y, this.interactionWidth, this.interactionHeight);\r\n    this.interactionBox.endFill();\r\n\r\n    this.app.stage.addChild(this.interactionBox);\r\n};\r\n\r\ninteraction.calculate_numScreens = function(NPC_text){\r\n    let formatted_text = new _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_0__.Text(NPC_text, interaction.textStyle);\r\n\r\n    let textArea = formatted_text.height * formatted_text.width;\r\n\r\n    let interactionArea = (this.interactionHeight - (_application_js__WEBPACK_IMPORTED_MODULE_1__.appInfo.height * 0.15)) * this.interactionWidth;\r\n    let numScreens = Math.ceil(textArea/interactionArea);\r\n\r\n    return numScreens;\r\n\r\n};\r\n\r\ninteraction.draw_text = function(NPC_text, numScreens) {\r\n    this.displayText.position.set(this.x + 10, this.y + 5);\r\n\r\n    //let pageTracker_text = \"1/\" + String(numScreens);\r\n    this.pageTracker.anchor.set(0.5,0.5);\r\n    this.pageTracker.position.set(this.width/2, this.y + (this.y * 0.6));\r\n\r\n    let splitText = [];\r\n\r\n    if (numScreens > 1){\r\n        let splitCounter = 0;\r\n        for (let i = 0; i < numScreens; i++){\r\n            splitCounter = NPC_text.length/numScreens * i;\r\n            splitText.push(NPC_text.slice(splitCounter, splitCounter+(NPC_text.length/numScreens)));\r\n        }\r\n\r\n        let displayCounter = 0;\r\n        this.displayText.text = splitText[displayCounter];\r\n        this.app.stage.addChild(this.displayText);\r\n\r\n        this.pageTracker.text = String(displayCounter + 1) + \"/\" + String(numScreens);\r\n        interaction.app.stage.addChild(this.pageTracker);\r\n\r\n        function increase_displayCounter(){\r\n            if (displayCounter < splitText.length - 1){\r\n                displayCounter++;\r\n                interaction.displayText.text = splitText[displayCounter];\r\n                interaction.pageTracker.text = String(displayCounter + 1) + \"/\" + String(numScreens);\r\n            }\r\n        }\r\n        function decrease_displayCounter(){\r\n            if (displayCounter > 0){\r\n                displayCounter--;\r\n                interaction.displayText.text = splitText[displayCounter];\r\n                interaction.pageTracker.text = String(displayCounter + 1) + \"/\" + String(numScreens);\r\n            }\r\n        }\r\n\r\n        //set up the right arrow\r\n        this.rightArrow.position.set(this.app.screen.width - (this.app.screen.width * .1), this.y + (this.y * 0.55));\r\n        this.rightArrow.width = 50;\r\n        this.rightArrow.height = 50;\r\n    \r\n        this.rightArrow.eventMode = 'static';\r\n        this.rightArrow.buttonMode = true;\r\n\r\n        this.rightArrow.on('pointerdown', increase_displayCounter);\r\n        this.app.stage.addChild(this.rightArrow);\r\n\r\n        //set up the left arrow\r\n        this.leftArrow.position.set(this.app.screen.width * .1, this.y + (this.y * 0.55));\r\n        this.leftArrow.width = 50;\r\n        this.leftArrow.height = 50;\r\n    \r\n        this.leftArrow.eventMode = 'static';\r\n        this.leftArrow.buttonMode = true;\r\n\r\n        this.leftArrow.on('pointerdown', decrease_displayCounter);\r\n        this.app.stage.addChild(this.leftArrow);\r\n    }\r\n    else{\r\n        this.displayText.text = NPC_text;\r\n        this.app.stage.addChild(this.displayText);\r\n\r\n        this.pageTracker.text = \"1/1\";\r\n    }\r\n};\r\n\r\ninteraction.draw_nextArrow = function(){\r\n    this.rightArrow.position.set(this.app.screen.width * 0.2 - 70, this.y + (this.y * 0.6));\r\n    this.rightArrow.width = 50;\r\n    this.rightArrow.height = 50;\r\n\r\n    this.rightArrow.eventMode = 'static';\r\n    this.rightArrow.buttonMode = true;\r\n\r\n    this.rightArrow.on('pointerdown', function(){this.screenCount++});\r\n};\r\n\r\ninteraction.INT_clear_all = function () {\r\n    this.app.stage.removeChild(this.interactionBox);\r\n    this.app.stage.removeChild(this.displayText);\r\n    this.app.stage.removeChild(this.rightArrow);\r\n    this.app.stage.removeChild(this.leftArrow);\r\n    this.app.stage.removeChild(this.pageTracker);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://fyp_game-development/./src/modules/interaction.js?");

/***/ }),

/***/ "./src/modules/stick_man.js":
/*!**********************************!*\
  !*** ./src/modules/stick_man.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   draw_stickMan: () => (/* binding */ draw_stickMan),\n/* harmony export */   move_stickMan: () => (/* binding */ move_stickMan)\n/* harmony export */ });\n/* harmony import */ var _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/pixi.mjs */ \"./src/libs/pixi.mjs\");\n/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application.js */ \"./src/modules/application.js\");\n\r\n\r\n\r\nconst sprite_stickMan = _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_0__.Sprite.from('../src/assets/stick-man.png');\r\n\r\nconst app = _application_js__WEBPACK_IMPORTED_MODULE_1__.appInfo.app\r\n\r\nconst keys = {};\r\nwindow.addEventListener('keydown', (e) => {\r\n    keys[e.key] = true;\r\n});\r\n\r\nwindow.addEventListener('keyup', (e) => {\r\n    keys[e.key] = false;\r\n});\r\n\r\nfunction draw_stickMan(app) {\r\n    sprite_stickMan.anchor.set(0.5, 0.5);\r\n    sprite_stickMan.position.set(app.screen.width / 2, app.screen.height / 2);\r\n    sprite_stickMan.width = 25;\r\n    sprite_stickMan.height = 60;\r\n    app.stage.addChild(sprite_stickMan);\r\n}\r\n\r\n\r\nfunction move_stickMan(){\r\n    if (sprite_stickMan.x > app.screen.width){\r\n        sprite_stickMan.x = 0;\r\n    }\r\n    if (sprite_stickMan.x < 0){\r\n        sprite_stickMan.x = app.screen.width;\r\n    }\r\n    if (sprite_stickMan.y > app.screen.height){\r\n        sprite_stickMan.y = 0;\r\n    }\r\n    if (sprite_stickMan.y < 0){\r\n        sprite_stickMan.y = app.screen.height;\r\n    }\r\n\r\n    if (keys['ArrowUp']) {\r\n        sprite_stickMan.y -= 5;\r\n    }\r\n    if (keys['ArrowDown']) {\r\n        sprite_stickMan.y += 5;\r\n    }\r\n    if (keys['ArrowLeft']) {\r\n        sprite_stickMan.x -= 5;\r\n    }\r\n    if (keys['ArrowRight']) {\r\n        sprite_stickMan.x += 5;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://fyp_game-development/./src/modules/stick_man.js?");

/***/ }),

/***/ "./src/modules/text_styles.js":
/*!************************************!*\
  !*** ./src/modules/text_styles.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   textStyle_standard: () => (/* binding */ textStyle_standard)\n/* harmony export */ });\n/* harmony import */ var _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/pixi.mjs */ \"./src/libs/pixi.mjs\");\n\r\n\r\nconst textStyle_standard = new _libs_pixi_mjs__WEBPACK_IMPORTED_MODULE_0__.TextStyle({\r\n    fontFamily: 'Arial',\r\n    fontSize: 24,\r\n    wordWrap: true,\r\n    align: 'left',\r\n});\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://fyp_game-development/./src/modules/text_styles.js?");

/***/ }),

/***/ "./src/npc_data/npc_data.js":
/*!**********************************!*\
  !*** ./src/npc_data/npc_data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   npc_1_data: () => (/* binding */ npc_1_data)\n/* harmony export */ });\nconst npc_1_data = {\r\n    \"num_questions\" : 2,\r\n    \"text_1\" : \"As you know, AI’s are often trained using large data sets. Often, with millions of different data points being passed into the AI’s algorithm. The AI will then mathematically interpret this data, and look for patterns. Let’s look at an example of how this works. In Year— we saw that as ice cream sales rose, so did the occurrence of shark attacks. Imagine you are an AI, and were trained based on this information. Your job is to predict the likelihood of a shark attack. At the same time the local ice cream shop releases a new flavor, and ice cream sales spike. What might you predict regarding shark attacks?\",\r\n    \"question_1\" : [\"Shark attacks will increase.\", \"Shark attacks will decrease.\", \"There will be no change in shark attacks.\"],\r\n    \"question_1_Correct\" : \"That's Correct\",\r\n    \"question_1_Incorrect\" : \"That is Wrong\",\r\n\r\n    \"text_2\" : \"Due to the limited data on which the AI was trained, it would expect shark attacks to increase. However, we know that the increase in shark attacks was not caused by the change in ice cream sales. Based on this, what ethical concerns does this raise for AI?\",\r\n    \"question_2\" : [\"They can easily be misled by the data they are trained on.\", \"AI’s are good at making accurate predictions, regardless of the quality of the training data.\", \"The data used to train AI’s is not an ethical concern, the accuracy of AI is not an ethical issue.\"],\r\n    \"question_2_Correct\" : \"That's Correct\",\r\n    \"question_2_Incorrect\" : \"That is Wrong\",\r\n}\r\n\r\n\n\n//# sourceURL=webpack://fyp_game-development/./src/npc_data/npc_data.js?");

/***/ }),

/***/ "./src/libs/pixi.mjs":
/*!***************************!*\
  !*** ./src/libs/pixi.mjs ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;