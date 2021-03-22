# Organizing lists!

Let us reset!

    neighbor_states= ['Ohio', 'Kentucky', 'Pennsylvania', 'Michigan']

These are not in alphabetical order…

Now,

    print(sorted(neighbor_states))

*yields ['Kentucky', 'Michigan', 'Ohio', 'Pennsylvania']*

But now,

    print(neighbor_states)

 *yields ['Ohio', 'Kentucky', 'Pennsylvania', 'Michigan']*

##### Uh oh? What happened? It changed temporarily #####

This will fix that…

    neighbor_states.sort()

Now,

    print(neighbor_states)

*yields ['Kentucky', 'Michigan', 'Ohio', 'Pennsylvania']*

If we don’t like this order we can reverse it :)

    neighbor_states.reverse()

*Now we have: ['Pennsylvania', 'Ohio', 'Michigan', 'Kentucky']*
