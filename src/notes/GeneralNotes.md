# General Q & A
### 1. error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.

#### Ans:<br />
When people compile a single file by tsc file name, the tsconfig.json doesn't apply, which the file will be compile with default es3 standard. tsconfig file only apply when the project which is being configured is compiled. To solve the error, compile the file with specific target. eg. **tsc filename -t es5**


### 2. To bundle multiple ts files into one js file

#### Ans:<br />
**tsc --outfile**  *`[bundlefilename.js] [tsfile1] [tsfile2] [tsfile3]`* <br />
eg: **tsc --outfile** *app.js dashboard.ts login.ts landing.ts* <br />
this will output an app.js which can be insert into the html file , and this app.js is a bundle js file that contains all the ts files. <br />
OR <br />
we can import the namespace into one file by using  *///`<reference path="[filepath]">` then compile that single file.*

### 3. error : circle.ts:1:1 - error TS6131: Cannot compile modules using option 'outFile' unless the '--module' flag is 'amd' or 'system'.

#### Ans:<br />
This error refers to how TypeScript should compile this to Javascript because native javascript doesn't support modules (import/export syntax etc.) The compiled js file we try to 'require' the file, which will not work for modules. This syntax will not work in the browser (as browser doesnt understand es6), therefore we need a module loader to translate it into es5. Adding SystemJs into the project can solve the issue.