TypeScript Setup Notes: tsc, tsconfig, src and dist
Nov 15, 2026 · @vindhyachal prasad
TypeScript runs through three pieces: tsconfig.json holds the rules, tsc compiles the .ts files in src into .js files in dist, and the browser loads only dist.
Summary
Item	What it is	When you use it
tsc --init	Creates tsconfig.json, the compiler's settings file	Once per project
tsc	Compiles every .ts file in src to .js in dist, then stops	Before a final check or a deploy
tsc -w	Same compile, but stays running and recompiles on every save	While you are coding
src folder	Your TypeScript source files (rootDir)	You write and edit here
dist folder	Compiled JavaScript output (outDir), created by tsc	The browser loads from here; never edit it
tsc --init
tsc --init creates tsconfig.json in the folder where you run it. Without this file, plain tsc only prints its help text and compiles nothing, which is what happened in your first terminal screenshot. Run it once from the TypeScript-Practice folder:
tsc --init
These are the settings that matter for your browser project:
Setting	Recommended value	Why
rootDir	"./src"	Where tsc reads your .ts files
outDir	"./dist"	Where tsc writes .js files; it creates the folder itself
module	"esnext"	Keeps import and export, which browsers understand. nodenext caused your export error
moduleResolution	"bundler"	Pairs correctly with esnext
target	"esnext"	Which JavaScript version to produce
lib	["esnext", "dom"]	Gives you document, window and console types
sourceMap	true	Lets DevTools show your .ts file for debugging
declaration and declarationMap	false	.d.ts files are only needed when publishing a library
noUncheckedIndexedAccess	false while learning	arr[i] becomes number | undefined, which caused your LargestElement errors
strict	true	Turns on strict type checking
tsc and tsc -w
With tsconfig.json in place, tsc needs no file name: it reads the config, compiles everything under src, writes the result to dist and exits.
tsc
tsc -w (watch mode) does the same first compile, then keeps running. Every time you save a .ts file it recompiles only what changed, so you never run the command by hand again.
tsc -w
In your screenshot the terminal showed "Starting compilation in watch mode" and "Found 0 errors. Watching for file changes." That means watch mode is healthy. Leave that terminal open while you work. If it shows "Found 3 errors", fix the red lines in the file it names; dist still updates for files that compile.
Press Ctrl + C in that terminal to stop watch mode.
src and dist
Keep source and output in separate folders so compiled files never mix with the files you edit.
TypeScript-Practice/
  src/                  you write .ts files here (rootDir)
    employee.ts
    Task1.ts
    StudentService.ts
  dist/                 tsc creates this folder and the .js files (outDir)
    employee.js
    employee.js.map     from sourceMap: true
    Task1.js
  index.html            loads ./dist/*.js
  tsconfig.json         created by tsc --init
•	src: you create it yourself, because tsc needs somewhere to read from. Every .ts file must live inside it.
•	dist: you do not create it. tsc makes it on the first compile. Never edit files in it, because the next compile overwrites them.
•	Flow: edit src/Task1.ts, save, tsc -w writes dist/Task1.js, and the browser loads dist/Task1.js.
•	Old files: .ts files left outside src (arrays.ts, datatypes.ts, functions.ts, object.ts, variables.ts) are ignored by tsc because of rootDir. Move them into src and delete their old .js copies.
index.html
Browsers read only JavaScript, so index.html points at dist, never src. Any file that uses import or export must load with type="module", otherwise the console shows "Cannot use import statement outside a module".
<script type="module" src="./dist/employee.js"></script>
<script type="module" src="./dist/Task1.js"></script>
•	Path: ./dist/... is correct only if index.html sits beside dist. Your page is in TypeScript-Practice but Live Server was started from Excercise, so you used ./TypeScript-Practice/dist/.... Either keep that, or open TypeScript-Practice as the VS Code folder.
•	Server: modules do not work from file://. Open the page with the Live Server extension (127.0.0.1:5500).
•	Debugging: press F12. The Network tab shows a 404 for a wrong path, and the Console tab shows your console.log output.
Fixes for your project
I checked the files you pasted (employee, Task1, Task2, StudentService, ReverseString, LargestElement, PrimeNumber, Frequency). The class code is fine. These items need attention:
1.	StudentService import is wrong. import { Student } from "./Student" fails in the browser (404, no .js), and Student is only an interface, so verbatimModuleSyntax also wants a type import. Use:
import type { Student } from "./Student.js";
2.	Old script tags. The five plain <script> lines for variables.js, datatypes.js, arrays.js, functions.js and object.js point at the old files outside src. Remove them once those files are moved into src (and add export {}; at the top of each so their variable names do not clash).
3.	Eight module scripts are fine. Each file runs once and prints to the Console. A shared main.ts that imports the others would let you load one script instead of eight, but it is optional.
4.	noUncheckedIndexedAccess. Your LargestElement and Frequency code already handles undefined correctly (?? 0, !== undefined), so it passes either way. Keep that style; it is good TypeScript.
5.	Same-name variables. result, result1 and result2 do not clash, because moduleDetection: "force" in your tsconfig treats every file as its own module. Do not remove that setting.

