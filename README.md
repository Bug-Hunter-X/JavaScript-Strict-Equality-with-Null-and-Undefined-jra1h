# JavaScript Strict Equality with Null and Undefined

This repository demonstrates a common subtle bug in JavaScript related to the strict equality operator (===) and the handling of null and undefined values.

The file `bug.js` contains the buggy code.  The file `bugSolution.js` provides a corrected version.

The bug arises from the fact that the strict equality operator (===) does not consider null and undefined to be equivalent.  The solution addresses this by explicitly checking for both null and undefined using loose equality (==).