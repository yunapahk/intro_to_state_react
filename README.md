# Intro to State

<img src="https://i.imgur.com/KRmlOo1.png" width=500/>

## Framing

Think of `state` this way: **How are you feeling right now?**

- Are you happy?
- Are you frustrated with the several hours learning even more React?
- What can be said that would make you happy?

The answer to any one of those questions has a direct impact on your `state` of mind.  A `happy` state will be reflected in your smile, tone of voice, being nice to others in return. An `unhappy` state will have the opposite effect.

As with all human beings our `state` of mind can change on the fly which is almost always reflected in our facial expressions or actions. Applications also have a `state` which is reflected in the UI presented to the user.

Therefore updating an applications `state` is our control mechanism for how we update the UI.

<!-- <img src="https://i.imgur.com/O0OwmJx.png" width=400px/> -->


## Intro To State

The point trying to be made is that what you see on the page is the current version of the applications `state`. Any changes to `state` will then be reflected in the UI.

One important thing to note is that any changes to state will cause the Component to `re-render`.This is essentially how the UI is updated. 

This is a very important concept to keep in mind as a `re-render` can also initiate additional function calls, something we will discuss as part of Reacts `lifecycle methods`.


### Rules Of State
:oncoming_police_car: - Here are the rules we need to follow when working with state. 

- State is assigned using the `useState` 
- The State value can be assigned any data type
- The State value is never updated directly but only using its corresponding `setState` function
- The state value must always be overwritten with a new value 


### Working With State

So updating state will, most often, require the user to interact with the application. Hence, the user performs some action, like clicking a button, and the component responds by `doing a thing` and then updating `state`.

### A Simple Counter Component

Here is an example of a `Counter` Component which will do the following:

-  provide the user 2 buttons to increment or decrement
- display the initial and update value as it changes 

#### Spin Up A New React Project

Create a new React Project `npx create-react-app intro_to_state`

#### Creating The Counter Component

<hr>

#### <g-emoji class="g-emoji" alias="alarm_clock" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/23f0.png">⏰</g-emoji> Activity - 3min

Since you already have experience creating Components take a minute to perform the following activity.

**Counter Component**

- Create a new file in `src` called `Counter.js`
- Import `React`
- Create the Component
- Return the following HTML:

```js
<>
    <span>Current Count: 0</span>
    <section>
        <button>+</button>
        <button>-</button>
    </section>
</>
```

- Export the Component

**App Component**

- Import the Component into `App.js`
- Replace all the html inside of `className="App"` with the `Counter` Component.

```js
<div className='App'>
	<Counter />
</div>
```

Once your done React should render the following:

<img src="https://i.imgur.com/fBEOYU0.png" width=300/>

Copy/paste the following css to `styles.css`

<details>
<summary>CSS</summary>


```css
.App {
	font-family: sans-serif;
	text-align: center;
	width: 160px;
	margin: auto;
	display: flex;
	flex-direction: column;
}

section {
	display: flex;
}

button {
	flex: 1;
}

span {
	font-size: 20px;
}
```

</details>

<br>


Update should look like:

<img src="https://i.imgur.com/jTh9SU2.png" width=200/>

<hr>

### useState Hook

In order to add state to the `Counter` Component we will first need to import the `useState` Hook from `React`. `useState` is one of the 3 Basic Hooks as per the Official React Doc.

#### Hooks

Hooks were introduced in `React Version 16.8`. Before hooks, all state needed to be placed within a `Class` component. 

Hooks introduce state management to `Functional` components, using a simpler and more flexible API and let you split one component into smaller functions based on what pieces were needed.

<hr>

#### <g-emoji class="g-emoji" alias="alarm_clock" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/23f0.png">⏰</g-emoji> Activity - 2min

Since we will be working with `Hooks` solely in this class let's take a minute to review the following React Docs:

- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html) - all the available Hooks

<hr>


### Importing useState

Now it's time to import `useState` into the Counter Component.

The react library that is imported in every Component has a `key` called `useState` that we elicit from `react` and store in a variable of the same name.  

If we take a moment to console log `React` in the Counter Component: 

```js
import React from 'react';
console.log('this is React', React)
```

We would see everything it has to offer include `useState`

<img src="https://i.imgur.com/soVHfMl.png" width=500/>


Since we are familiar with `Object Destructuring` use it to elicit the value of this key and store in a variable simultaneously. 



```js
import React, { useState } from 'react';
```

Just so that we get a better idea of what `useState` actually is let's add a console log.

```js
const Counter = () => {
  console.log('useState - ', useState)
  // ...rest of code
}
```

The output should look like the following:

<img src="https://i.imgur.com/IZFNnbg.png" width=400/>
<br><br>

It appears that `useState` is a function that takes in in `initialState`, calls a supporting function and returns `dispatcher.useState()`. 

We won't get into the underlying code here but one thing to to highlight is the keyword `dispatcher`. 

We will revisit this concept later when we cover the `useReducer` hook as it uses a similar naming convention of `dispatch` for corresponding `setState` function.

<hr>

#### useState Rules and Best Practices

Take a moment to once again review the `rules` of `useState` and include some best practices as well. 

:oncoming_police_car: - Rules 

- the State value is never updated directly
- the State value is only updated using it's corresponding `setState` function
- the state value must always be overwritten with a new value 

:star: - Best Practices

- Use `Array Destructuring` when initializing the state variables
- Name the initial state based on what it contains
- Use the same name for the function but precede it with the word `set`
- Use a the callback function version of useState if you need to reference the previous version of state
- Give thought as to what needs to be in state and how that state should be organized and structured
- Always use `...spread` operator to copy object and array values to the new state

<hr>

#### Creating An Instance Of State

With `useState` imported it's time to create an instance of state. To do this we will call `useState()` and pass it an initial starting value of `0`.

:star: Name the initial state based on what it contains. 

```js
const countState = useState(0);
```

Once again let's add a console log and see what it returns.

```js
const countState = useState(0);
console.log('countState -', countState);
```

We should see the following:

<img src="https://i.imgur.com/0SIS9qZ.png" width=300/>

So it appears `countState` is set to an array that contains the following elements:

- 0 - the initial state value we defined
- a `function` - which will be used to update state.

One way to create 2 new variables based on the array would be to manually elicit their values using standard array bracket notation. 


In keeping with best practices we will name the initial state variable `count` as it will be used it to increment/decrement a starting value essentially keep `count`.

:star:  Use the same name for the function but precede it with the word `set`

 Of course, the corresponding function that will be used to update state should be called `setCount`.

:star: Use the same name for the function but precede it with `set`

```js
const count = countState[0];
const setCount = countState[1];
```

#### Array Destructuring 

:star: 
A more convenient way of doing this is using ES6 [Array Destructuring](https://javascript.info/destructuring-assignment). 

Array Destructuring elicits the values from the array based on their position  and stores them in variables. 


```js
const [count, setCount] = useState(0);
```

### Using State

Now that our initial value is been assigned to the `count` variable let's update the JSX to use that value instead of a current hard coded value of 0. 

As stated before, JSX requires that all JavaScript be surrounded in curly braces.


```js
return (
  <div>
    <span>Current Count: {count}</span>
    ... rest of code
  </div>
);
```

### Updating State

With our state value in place it's time to provide some functionality to the buttons and allow the user a means to interact with the app and update state.

In the case of our Counter the only way to update  `count` is to call the `setCount` function and pass it a new value. 

:oncoming_police_car: Always use the `setState` function to update state

There are 2 ways to perform this action:

```js
// grab the current version of state
setCount(count + 1);

// OR

// use a callback function and pass the previous version of state
setCount((prevState) => prevState + 1);
```
In the second example the setter function takes in an callback function that is passed the previous value of state and returns a new value altogether. 

The argument in this example is called `prevState` by convention but it can be named anything you want. 

There are scenarios when the callback function version is required such as when state is being updated within the callbacks of either a `setTimeout()` or `setInterval()`.  Since that isn't the case here we will use the first example to update state. 


#### Adding an onClick Event

In order to allow the user to interact with the buttons we will need to add an event listener.

React event listeners are an additional topic we will revisit again in future lessons. They are essentially `synthetic events` based on the real underlying JS events and perform the same operations as before.  Events you might have worked with before are: 

- click => onClick
- submit => onSubmit
- change => onChange
- mouseover => onMouseOver


For now we will add an `onClick` event listener that calls `setCount` to update state.

Also, as with plain JavaScript or jQuery we will use an anonymous callback to pause the execution until the click event has occurred.

```js
  return (
    <div>
      <span>Current Count: {count}</span>
      <section>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </section>
    </div>
  )
```

If we test out the app we should see that the count value will change based on user input. 

<hr >


### Event Handlers

Working with React certainly requires that we write code in very specific and opinionated ways which is why it's considered a `Framework`.  That is a good thing in that we can quickly examine code and expect some consistency in how it is written.

But some React code is written solely based on the adoption of the community at large.  One such pattern is the naming convention when creating `event handler` functions.  The convention is to precede their name with word `handle`.

Let's give that a try by creating the following supporting functions:

- `handleIncrement`
- `handleDecrement`

```js
const handleIncrement = () => {};

const handleDecrement = () => {};
```

Now let's move the `setState` function calls into their corresponding `handler` functions and update the `onClick` to reflect this refactor. 

```js
const handleIncrement = () => {
	setCount(count + 1);
};

const handleDecrement = () => {
	setCount(count - 1);
};
