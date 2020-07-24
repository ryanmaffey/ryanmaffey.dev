---
title: What is Abstraction?
description: Defining the meaning of "abstraction" in relation to programming with examples of how you're already abstracting without even knowing it!
date: "24/07/2020"
readTime: 6
containsCodeBlocks: true
---

Programmers often use the word "abstraction" when talking about their code but it's not a term new programmers are likely to have come across and understand.

## Dictionary Definition

<blockquote>
    "The act of considering something as a general quality or characteristic, apart from concrete realities, specific objects, or actual instances."
    <footer><cite><a href="https://www.dictionary.com/browse/abstraction" rel="noopener" target="_blank">from dictionary.com</a></cite></footer>
</blockquote>

I don't know about you, but I don't find this definition particularly helpful. Let's try and make it a bit easier to digest.

## My Definition

<blockquote>
    Providing a label to a piece of code that accurately describes the purpose and actions of that logic.
</blockquote>

I think that's a bit easier to understand. It's also a bit more specific to our use case: programming.

The first thing you might think to yourself is "That just sounds like the description of a variables, functions, classes, etc."...and you would be right! These are all forms of abstraction. We'll have a look at each of these a bit later.

## Why Do We Want/Need to Abstract Anything?

Breaking-up code into smaller chunks (abstractions) helps us write clean code which is easy to read.

### Focusing on What We Care About

Abstraction helps us focus on results; we don't have to worry about _how_ something is done, we only care about getting the result.

### Readable Code

We reduce complexity by placing logic behind layered abstractions. This means at the top-level we only see the top-level abstractions, which ultimately makes the code much easier to read. You should be able to see what I mean when we look at some examples.

### Reusable Code

Once code has been abstracted we can use it throughout a project again and again. It means that we only have to write the code once instead of repeating ourselves which has a lot of benefits (which is a topic for another time).

## Examples

I'm going to use "making a BLT sandwich" as a contrived example.

### Variables

We have a bunch of variables containing a bunch of values, like this:

```ts
const breadState = "buttered";
const baconState = "raw";
const lettuceState = "washed";
const tomatoState = "washed";
```

We can see all of the states of all the necessary ingredients for our sandwich. Now we want to know whether we can assemble it:

```ts
const isReadyToAssemble =
    breadState === "buttered" &&
    baconState === "cooked" &&
    lettuceState === "washed" &&
    tomatoState === "sliced";
```

_isReadyToAssemble_ is an abstraction. Referring back to my earlier definition, _isReadyToAssemble_ is the **label** which describes of whether all of ingredients are ready for sandwich assembly. Now, further down in our code, we don't have to concern ourselves with _how_ we know it's ready, we just know that _isReadyToAssemble_ will tell us; that's the beauty of abstraction - overlaying more complex logic with a simple label.

If it helps you can relate this to the real-life equivalent situation. Which of the following questions are you more likely to ask?

1. "Is the bread buttered and the bacon cooked and the lettuce washed and the tomato sliced for me to assemble the sandwich?"
2. "Are all of the ingredients ready for me to assemble the sandwich?"

My guess is that you're a bit more in-line with number 2. So you see, you abstract everyday without even realising!

```ts
if (isReadyToAssemble) {
    const sandwich = assembleBltSandwich(ingredients);
}
```

And this leads us nicely on to our next example...

### Functions

Similar to variables but containing more complex logic.

We can use _assembleBltSandwich()_ as our example here. We know that we can call this function and it will return us an assembled sandwich. All of the logic describing _how_ the sandwich is made is hidden away inside that function.

We could imagine that the contents of _assembleBltSandwich()_ looks something like this:

```ts
function assembleBltSandwich(ingredients) {
    return layBreadButterSideUp(ingredients.bread.sliceOne)
        .then(() => addMayo(ingredients.mayo))
        .then(() => addBacon(ingredients.bacon))
        .then(() => addTomato(ingredients.tomato)) // <-- Tip: never let the tomato touch the bread, it makes it soggy and horrible
        .then(() => addLettuce(ingredients.lettuce))
        .then(() => addMayo(ingredients.mayo))
        .then(() => layBreadButterSideDown(ingredients.bread.sliceTwo));
}
```

Here we can once again see that some of the logic is abstracted further into functions like _addBacon()_. The result is layer upon layer of abstraction, with the bottom layers doing the heavy logic and the top layers basically just acting as labelled wrappers to make things easier.

### Classes

I won't go too in-depth with this because I think you're getting the idea by now. You can abstract details and actions of a sandwich into a _BltSandwich_ class like so:

```ts
class BltSandwich extends Sandwich { // <-- You don't have to worry about what's in the base Sandwich class for this example.
    public ingredients;

    constructor(ingredients) {
        super(ingredients)
    }

    public prepare() {
        ...

        return this;
    }

    public assemble() {
        ...

        return this;
    }
}
```

This is a further abstraction on top of everything we've already covered. So when we want to prepare and assemble a sandwich now, all we have to do is this:

```ts
const ingredients = {
    bread,
    butter,
    bacon,
    lettuce,
    tomato,
    mayo,
};

const sandwich = new BltSandwich(ingredients).prepare().assemble();
```

All of the logic is nicely contained inside the class' public methods and we can just enjoy our lovely sandwich.

## Abstract with Caution!

There are a couple of things to be aware of when thinking about introducing a new abstraction into your code; over-abstraction and thw wrong abstraction.

More on this coming soon...

<!-- ### Over-Abstraction

So abstraction is great, we should use it all the time for everything, right!? Well...not exactly.

Sometimes it's easy to take things too far. Lets take a really basic example:

```ts
function increment(num: number) {
    return number + 1;
}
```

There is no point in this abstraction. It doesn't bring any benefit over just using _+ 1_ as and where you need it. However, this particular example doesn't do any harm, so it's not the end of the world to do something like this.

TODO: come up with a good example of this...

The problems come when you're working on a feature and you want to make it as generic and flexible as possible. You try to make sure every piece of code is reusable in some way so that it could be helpful in the future. Sounds great, right!? Well now you've just got a bunch of generic functions which don't look like they go together all being used collectively to make your feature work. You en up with:

-   a loss of the declarative value you had in the first version
-   more function code in v2 than v1 for the same result
-   more code to call the functions in v2 than in v1 for the same result

### The Wrong Abstraction

This has to be one of the biggest causes of confusing code which ends up being difficult to work with and can ultimately seriously detriment the state of your codebase.

TODO: come up with a good example of this... -->
