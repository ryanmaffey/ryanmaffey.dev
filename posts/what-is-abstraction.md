---
title: What is Abstraction?
description: Defining the meaning of "abstraction" in relation to programming with examples of how you're already abstracting without even knowing it!
date: "24/07/2020"
readTime: 7
containsCodeBlocks: true
---

Programmers often use the word "abstraction" when talking about their code but it's not a term new programmers are likely to have come across and understand.

## Dictionary Definition

<blockquote>
    "The act of considering something as a general quality or characteristic, apart from concrete realities, specific objects, or actual instances."
    <footer><cite><a href="https://www.dictionary.com/browse/abstraction" rel="noopener" target="_blank">from dictionary.com</a></cite></footer>
</blockquote>

I don't know about you, but I don't find this definition particularly helpful. Let's try and make it a bit easier to digest.

## My Alternative Definition

<blockquote>
    "Providing a label to a piece of code that accurately describes the purpose and actions of that logic."
</blockquote>

I think that's a bit easier to understand. It's also a bit more specific to our use case: programming.

The first thing you might think to yourself is "That just sounds like the description of a variables, functions, classes, etc."...and you would be right! These can all be forms of abstraction. We'll have a look at each of these a bit later.

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

There are a couple of things to be aware of when thinking about introducing a new abstraction into your code; over-abstraction and the wrong abstraction.

### Over-Abstraction

So abstraction is great, we should use it all the time for everything, right!? Well...not exactly.

It's easy to go overboard and over-abstract in an attempt to make code super generic and re-usable. You end up losing clarity on the feature you're building because you try to make it work for every possible use case and not the one(s) that you've been presented with. It makes it difficult for anyone else to understand what you've done and why.

This topic is a whole article in itself which I hope to write someday.

### The Wrong Abstraction

Creating the wrong abstractions results in code which is difficult to understand and even more difficult to work with.

The common scenario is that you have two pieces of code which are doing similar things in multiple different places and, because you want clean code, you merge them together into a generic method which takes a bunch of arguments to make sure it does the right thing depending on there the method is called.

Abstraction complete. Sounds fine, right? But now one of a few things could happen:

1. New requirement: do something exactly the same in a different place
2. New requirement: do something mostly similar in a different place
3. New requirement: change the way it works for some of the places but not others

Now you might be able to spot some problems:

1. There's no problem here, but in my experience it's not often you'll get asked to do something which is a carbon copy of something else.
2. So you need to modify your abstraction and pass it more arguments so that it'll do what you need it to do in this new case. That's going to make it look messy and confusing as you keep adding things into that method.
3. So you need to modify your abstraction whilst making sure you don't introduce any issues with the other existing code. That's always easier said than done.

So there is an argument here that the logic should not have been abstracted together in the first place, it would have been better to have isolated duplicate code which means it's easy to modify without causing issues with existing code.

It's almost impossible to foresee changes in the future so you can't plan for everything, but just try to ask yourself whether the abstraction makes logical sense - don't just do it to keep your code <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" rel="noopener" target="_blank">DRY</a>.

<br />
<hr />
<br />

**Update (27/07/2020):** I recently came across <a href="https://www.deconstructconf.com/2019/dan-abramov-the-wet-codebase" rel="noopener" target="_blank">The WET Codebase</a>: a talk by <a href="https://twitter.com/dan_abramov" rel="noopener" target="_blank">Dan Abramov</a> via <a href="https://overreacted.io/the-wet-codebase/" rel="noopener" target="_blank">a post on his blog</a>. The talk explains a lot if what I've written above very well with some nice clear visuals; it's worth a watch! Also, if you're a fan of <a href="https://reactjs.org/" rel="noopener" target="_blank">React</a> you'll love the rest of his blog!
