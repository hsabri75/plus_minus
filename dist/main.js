/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((module) => {

eval("\nconst digits=4;\n\nfunction getRandomNumber(){\n    let rawNums=[0,1,2,3,4,5,6,7,8,9];\n    let res = \"\";\n    for(let i=0;i<digits;i++){\n        const pos = 10-i;\n        const randomNumber = Math.floor(Math.random() * pos); \n        res = rawNums[randomNumber] + res;\n        rawNums[randomNumber] = rawNums[pos-1];\n    }\n    return res;\n}\n\nfunction isValid(num) {\n    console.log(num);\n    for(let i=0;i<num.length;i++){\n        if(!/\\d/.test(num[i])){\n            console.log(\"not number\");\n            return false;\n        }else{\n            for(let j=0; j<i;j++){\n                if(num[i]==num[j]){\n                    console.log(\"repeating\");\n                    return false;\n                }\n            }\n        }\n    }\n    return true;\n}\n\nfunction getPlusMinus(num, target){\n    let pl=0;\n    let mn=0;\n    for(let i=0;i<num.length;i++){\n        if(num[i]==target[i]){\n            pl++;\n        }else{\n            for(let j=0;j<num.length;j++){               \n                if(num[i]==target[j]){\n                    mn++\n                }              \n            } \n        }\n    }\n    return \"+ \".repeat(pl)+\"- \".repeat(mn);\n}\n\nconst funcs= {isValid, getRandomNumber, getPlusMinus}\n\nmodule.exports= funcs;\n\n//export {funcs};\n\n//# sourceURL=webpack:///./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const funcs = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n//import funcs from './functions.js';\n\nconst digits=4;\nconst hidden= document.getElementById('hidden');\nconst playbtn= document.getElementById('playbutton');\nplaybtn.addEventListener('click', animateRandomNumber);\nconst guessbtn= document.getElementById('guessbutton');\nguessbtn.addEventListener('click', makeGuess);\n\nconst guess = document.getElementById('guess')\nconst list = document.getElementById('guesslist')\n\nlet target;\n\n\nfunction makeGuess(){\n    const txt = guess.value\n    let pm = funcs.getPlusMinus(txt,target)\n    const isFound = (pm==\"+ \".repeat(digits))\n    if(isFound){\n        showResult(target, \"+ + + + \")\n        foundAnimation()\n    }else{\n        showResult(txt, pm)\n    }\n}\n\nfunction showResult(txt, pm){\n    const newItem = document.createElement(\"li\")    \n    const tc = document.createTextNode(txt+\" \"+pm)\n    newItem.appendChild(tc)\n    list.insertBefore(newItem,null)\n    console.log(list)\n    guess.value=\"\"\n    //guessInput()\n    guess.focus()\n\n}\n\nfunction startGame(){\n    target=funcs.getRandomNumber();    \n    hidden.textContent = target+\"****\";  \n}\n\n\n\nfunction animateRandomNumber(){\n    //hidden.style.backgroundColor = 'bisque'\n    let myinterval = setInterval(function(){     \n        hidden.textContent = Math.floor(Math.random() * 9999);\n    },100);\n    setTimeout(function(){\n        clearInterval(myinterval);\n        hidden.textContent = \"****\";\n        startGame();\n    },1000)\n\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;