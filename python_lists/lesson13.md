# Removing items

So, where did we land?

    print(neighbor_states)

*Gives us: ['Ohio', 'Kentucky', 'Wisconsin', 'Michigan', 'Pennsylvania']*

Wait! Wisconsin is not a state neighboring Ohio- so how do we remove it?

How about this?

    removed_state= neighbor_states.pop(2)
    print("{rs} was removed".format(rs=removed_state))

`pop()` without an index will remove the last element…

Let us reset!

    neighbor_states= ['Ohio', 'Kentucky', 'Pennsylvania', 'Wisconsin', 'Michigan']

What if we just want to delete the state and not care about it?
del() will do the job! Like: 

    del(neighbor_states[3])
