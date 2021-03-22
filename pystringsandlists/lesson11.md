# Lists vs Strings

In Python, *Strings are immutable*---when you make changes to a string, you actually have to create a new string, whereas in a List you can change an item at a particular position in the List -so, *Lists are mutable*.

So,

    body_parts=[“head”, “arms”,”legs”, “fingers”, “toes”]

Can become

    body_parts=[“head”, “hands”,”feet”, “fingers”, “toes”]

By doing this:

    body_parts[1]=”hands”
    
    body_parts[2]=”feet”

***In the case of strings, we would have to use a new string:***

    body_parts_new =body_parts.replace("arms,legs","hands,feet")