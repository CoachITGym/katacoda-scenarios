# Finding and Replacing
##### it is important to find stuff in a string....
Let us start with this:

    strCheck= "how about counting the number of times a character occurs in the string?"

*How about counting the number of times a character occurs in the above string?*


`print(strCheck.count("ou"))` 

What did I do here? I called the print method, with the results of the strCheck.count("ou")!

#### Remember::: Evaluation is from Right to left

***Remember the positional qualities of a string?***
With that in mind, you can return the position of a character, or set of characters on the string

    print(strCheck.find("ou"))

What if many of them were there, and you want just the last one?

    print(strCheck.rfind('s'))

    Remember, just a find would give you this:

print(strCheck.find('s'))

So, we are good with finding stuff--how about replacing them with something else? 
There is a method for that too!!!

    newStr= strExample.replace("an example","a full example")
    
    print(newStr)

***Remember though! since you are modifying the string, you have assign it to another variable!***
