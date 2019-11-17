# General Q & A
### 1. error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.

>Ans: When people compile a single file by tsc file name, the tsconfig.json doesn't apply, which the file will be compile with default es3 standard. tsconfig file only apply when the project which is being configured is compiled. To solve the error, compile the file with specific target. eg. tsc filename -t es5


### 2. To bundle multiple ts files into one js file

> Ans: tsc --outfile `[bundlefilename.js] [tsfile1] [tsfile2] [tsfile3]`
>eg: tsc --outfile app.js dashboard.ts login.ts landing.ts
>this will output an app.js which can be insert into the html file , and this app.js is a bundle js file that contains all the ts files.
####OR 
>we can import the namespace into one file by using ///`<reference path="[filepath]">` then compile that single file. 

