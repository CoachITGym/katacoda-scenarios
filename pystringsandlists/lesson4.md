# Positional property of a string
OK I made that property name up, but it helps show what a string is
We will talk about strings more when we work with Lists

##### For now, let us understand that a string is a series of characters, and each has a position


    print(strExample[0])
    print (strExample[2]) #gives you the third character.... 
    print(strExample[3]) #ha, space is a character too!!!

Given that it has positions, We can now yank stuff out of the string like so:

    print(strExample[2:6])

Or, leave the last second part blank to get everything...

    print(strExample[2:])

And, first part blank to get everything from the beginning and end...

    print(strExample[:5])

**This method  of cutting a string is called as slicing a string in programming**

And -- of course a string has a length
So try this: 

    strExample="Who am I"
    print(len(strExample))

 This, tells me how long this string is 