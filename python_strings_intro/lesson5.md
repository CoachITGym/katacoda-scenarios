## Formatting
Up until now we have been just printing stuff without any formatting. 

****Let us look at this....****

    txtToFormat= "The {item} costs ${price:.2f}"
    print(txtToFormat.format(item="Orange", price=1))

From the above, we can see that the way to format is to use the method `format()` which is available to any string. 
Then, you would do this:

     stringToFormat.format(value1, value2)

Here, the you can specify which variable you are replacing, and how you want it to look. 

*The placeholders, in above are item and price, and they can do some fun things...*

Let us check this out....

    txtToFormat="The Earth is estimated to be about {:,} years old"
    print(txtToFormat.format(4530000000))

Let us look at this:

    x=5
    y=7
    print(x/y)

#now lets print it as a percentage

    print("{:%}".format(x/y))

Now, How about this? without worrying about what the answer is, let us let python print if something is a  -ve or +ve number...

    x= 7-4-3+2+5-3*2+2-8
    y=7*2/3-5+2-3+2
    
    print("{:+}".format(x))
    print("{:+}".format(y))

