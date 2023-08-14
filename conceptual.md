### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
 React is a front-end framework. It's used to build applications and makes it eaier to view components
- What is Babel?
Babel is part of JSX and a standalone library. 
- What is JSX?
JSX is Javascript syntax extension. JSX is like HTML embedded in JS. 
- How is a Component created in React?
 By using functions and can also use arrow syntax.   
- What are some difference between state and props?
Props are for configuring components. Props can go from the parent to the child. State
is used to manage the component. 
- What does "downward data flow" refer to in React?
Parent components with simpler child components
- What is a controlled component?
A component where every state mutation will have an associated handler function. Which will be easier to modify and update. 
- What is an uncontrolled component?
If react is not in control of form state. 
- What is the purpose of the `key` prop when rendering a list of components?
Key props are IDs for each element. It uniquely identifies items amonng siblings. 
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Array index will not run in the right order. Map is recommended 
- Describe useEffect.  What use cases is it used for in React components?
useEffect comes with react as a built in hook and creates an effect. 
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef returns a mutable object. the initial value is current, passed in to the hook and returns equal value. 
- When would you use a ref? When wouldn't you use one?
To access a DOM element for an API. useRef cannot be used to make changes. 
- What is a custom hook in React? When would you want to write one?
A custom hook is a js function that uses built in hooks. A custom hook would normally be created to toggle a state and if we want to repeat this. 
