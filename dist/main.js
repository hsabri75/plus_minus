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

eval("const funcs = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\nconst index_pars={\n    digits:4,\n    target : '',\n    \n    playbutton: document.getElementById('playbutton'),\n    guessbutton: document.getElementById('guessbutton'),\n\n    hiddentext: document.getElementById('hiddentext'),\n    guesstext: document.getElementById('guesstext'),\n    warningtext: document.getElementById('warningtext'),\n    \n    guesslist: document.getElementById('guesslist'),\n    \n    tadasound: new Audio(\"tada.mp3\")\n}\n\nindex_pars.playbutton.addEventListener('click', playClick);\nindex_pars.guessbutton.addEventListener('click', makeGuess);\n\nfunction playClick(){\n    clearList();        \n    animateRandomNumber(startGame);\n}\n\nfunction clearList(){\n    var child = index_pars.guesslist.lastElementChild    \n    while (child) {\n        index_pars.guesslist.removeChild(child);\n        child = index_pars.guesslist.lastElementChild;\n    }\n}\n\nfunction animateRandomNumber(runAfter){\n    index_pars.hiddentext.style.backgroundColor=\"white\"\n    let myinterval = setInterval(function(){     \n        index_pars.hiddentext.textContent = Math.floor(Math.random() * 9999)\n    },100);\n    setTimeout(function(){\n        clearInterval(myinterval);\n        runAfter();\n    },1000)\n}\n\nfunction startGame(){           \n    index_pars.target=funcs.getRandomNumber();    \n    index_pars.hiddentext.textContent = index_pars.target+\"****\"; \n    setMode(true); \n}\n\nfunction getVisibility( isVis ){\n    return isVis ? 'visible' : 'hidden'\n}\nfunction setMode(isStarted){\n    index_pars.guesstext.style.visibility = getVisibility(isStarted)\n    index_pars.guessbutton.style.visibility = getVisibility(isStarted)\n    if(isStarted){\n        index_pars.guesstext.value=\"\"\n        index_pars.guesstext.focus()\n    }\n}\n\n\nfunction getWarning(txt){\n    return (txt.length!=4) ? \"Guess should have 4 digits\" :\n    (!funcs.isValid(txt)) ? \"Repeating digits not allowed\" :        \n    \"\"\n}\n\nfunction makeGuess(){\n    const txt = index_pars.guesstext.value\n    const warning= getWarning(txt)\n    index_pars.warningtext.textContent =warning\n    if(warning==\"\"){\n        let pm = funcs.getPlusMinus(txt,index_pars.target)\n        const isFound = (pm==\"+ \".repeat(index_pars.digits))\n        showResult(txt, pm)\n        if(isFound){\n            animateSuccess(finishSuccessfull);        \n        }\n    }else{\n        index_pars.guesstext.focus()\n    }\n\n}\n\n\nfunction showResult(txt, pm){\n    const newItem = document.createElement(\"li\")    \n    const tc = document.createTextNode(txt+\" \"+pm)\n    newItem.appendChild(tc)\n    index_pars.guesslist.insertBefore(newItem,null)\n    index_pars.guesstext.value=\"\"\n    index_pars.guesstext.focus()\n}\n\n\n\nfunction finishSuccessfull(){\n    index_pars.hiddentext.style.backgroundColor=\"green\" \n    setMode(false) \n}\n\n\n\n\n\nfunction animateSuccess(runAfter){\n    index_pars.tadasound.play()\n    let digs=0\n    let myinterval = setInterval(function(){     \n        digs++\n        index_pars.hiddentext.textContent = index_pars.target.substring(0,digs)\n    },200);\n    setTimeout(function(){\n        clearInterval(myinterval)\n        runAfter()      \n    },900)\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

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