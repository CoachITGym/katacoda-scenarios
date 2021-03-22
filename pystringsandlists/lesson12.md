# Adding to the list

- A form of modification
- Please note that this *mutates* the actual list itself!

Let’s take this as a starter…

    neighbor_states=["Ohio","Kentucky","Wisconsin","Michigan"]

We forgot Pennsylvania!

Then, we can do this!

    neighbor_states.insert(2,"Pennsylvania")

***Remember this changes the original List---it is not something we can do with Strings***

Similarly, if we did not care about the order of the adding, we could just do this…

Let us reset:

    neighbor_states=["Ohio","Kentucky","Wisconsin","Michigan"]

    neighbor_states.append("Pennsylvania")
