import React from "react";

//after the fat arrow, there is a parenthesis because instead of braces because the parenthesis is returning a single value whereas the curly braces can execute multiple lines of code and we need to specify what the function should return.

//using parenthesis (we can totally remove the parenthesis, it will still work!)
//we used this because the function consisted of only one expression
/*
const App = () => (
  <div>
    <p>Hello World</p>
  </div>
);
*/

//using curly braces
//Part: Rendering Dynamic Content - {} can be used in JSX to add JS expressions (and it strictly only allows expressions, no multiline code or statements).
/*
const App = () => {
const now = new Date()
const a = 10
const b = 20
return (<div>
    <p>Hello World, it is now {now.toString()}</p>
    <p>{a} + {b} is {a+b}</p>
  </div>)
};
*/
//We recommend naming props from the component’s own point of view rather than the context in which it is being used.
//Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be extracted to a separate component.

//React is pretty flexible but it has a single strict rule:
// !  All React components must act like pure functions with respect to their props. (https://en.wikipedia.org/wiki/Pure_function)

const Hello = (props) => {
  //props are read only, we cannot modify them. i.e. this cant be done
  //props.name = 'Rahul'
  //this is the case because when the user defines the props in the component they are using, that definition will be over-ruled over here rendering the definition when using useless.
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  );
};

const App = () => {
  let name = "Doctor"
  let age = 55
  return (
    //Note that the content of a React component (usually) needs to contain one root element.
    //!if we dont want extra divs, we can use fragments to replace the div tag, its just an empty tag.
    //*Fragments can have keys if explicitly used using React.Fragment -- https://reactjs.org/docs/fragments.html#keyed-fragments
    <>
      <h1>Greetings</h1>
      <Hello name="Peter" age="23"/>
      <Hello name={name} age={age} />
    </>
  );
};

export default App;
