# Function Expressions

In JavaScript, functions can also be declared as an expression. 

**What is an expression?**

An expression in JavaScript is anything that evaluates to a single value and is assigned to a single variable. 

So:
`var x=5`
And,
`var x= 2x+y` 

Are both expressions.

In JavaScript, we can take this one step forward. Since a function is a single object, it can also be assigned to a single variable. Thus! this is also a valid expression!

`var x= function({return 2})`

This has huge implications on hoisting-especially with the coming of let and const. 

For this, we are going to examine the files in the step2 folder, in the editor. 
