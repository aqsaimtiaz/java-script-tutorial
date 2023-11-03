/*

Javascript execution context

whenever a js code is executed, 2 context are created:
1. Global execution context, refers by this. in browser, this refers to window object but in node its empty
2. function execution context

phases:
1. memory creation: only memory allocation
2. execution phase

each time a function is called, a new sandbox for it would be created following the same phases of memory creation
and execution, and gets deleted once done




*/