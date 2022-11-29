import { FaArrowRight } from "react-icons/fa";

const Blogs = () => {
  return (
    <div>
      <div className="mockup-window border w-11/12 mx-auto bg-base-300 p-5">
        <div className="text-2xl text-center font-semibold mb-4">
          1. Different ways to manage state in react.
        </div>
        <div className="flex mb-4">
          <FaArrowRight className="h-6 w-12"></FaArrowRight>
          <p className="ml-2">
            Every React component has a built-in state. This state is an object
            which stores the property values that belong to a component. State
            is able to keep data from different components in-sync because each
            state update re-renders all relevant components. <br /> The built-in
            way that React provides for setting component states is by using
            setState() and adding “local state” to a class. There are several
            other ways to manage state​s in React, including the use of:
            <ul className="list-disc ml-4">
              <li>Hooks</li>
              <li>React Context API</li>
              <li>Apollo Link State</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="mockup-window border w-11/12 mx-auto bg-base-300 p-5 my-4">
        <div>
          <div className="text-2xl text-center font-semibold mb-4">
            2. How does Prototypical Inheritence work?
          </div>
          <div className="flex mb-4">
            <FaArrowRight className="h-6 w-12"></FaArrowRight>
            <p className="ml-2">
              Every object with its methods and properties contains an internal
              and hidden property known as [[Prototype]]. The Prototypal
              Inheritance is a feature in javascript used to add methods and
              properties in objects. It is a method by which an object can
              inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object.getPrototypeOf and Object.
            </p>
          </div>
        </div>
      </div>
      <div className="mockup-window border w-11/12 mx-auto bg-base-300 p-5">
        <div>
          <div className="text-2xl text-center font-semibold mb-4">
            3. What is Unit Test?
          </div>
          <div className="flex mb-4">
            <FaArrowRight className="h-6 w-12"></FaArrowRight>
            <p className="ml-2">
              Unit Testing is a testing method that tests an individual unit of
              software in isolation. Unit testing for React Apps means testing
              an individual React Component. “Unit testing is a great
              discipline, which can lead to 40% – 80% reductions in bug
              density.” – Eric Elliotte.
            </p>
          </div>
        </div>
      </div>
      <div className="mockup-window border w-11/12 mx-auto bg-base-300 p-5 mt-4">
        <div>
          <div className="text-2xl text-center font-semibold mb-4">
            4. What are the differences among React, Angular and Vue?
          </div>

          <div className="mb-4">
            <p>
              <span className="block mb-2 text-lg text-cyan-500 w-40 font-bold">
                1. What is React?
              </span>
              Facebook released React.js in March 2013 as a JavaScript library.
              Because React just provides one view, it is not appropriate for
              building an MVC architecture: you must solve the model and
              controller yourself. Besides this, there are only advantages and
              lots of advantages. One of the biggest of them is that React.js
              uses a virtual DOM that only compares the previous HTML code
              differences and only loads the different parts. This significantly
              impacts the loading times. In a positive way, of course. With
              React.js, you handle the markup and the logic in the same file,
              which means you can output variables in a view component (JSX).
              React offers a type of mobile solution for applications called
              React-Native.
            </p>
            <p>
              <span className="block mb-2 text-lg">Pros and Cons of React</span>
              <span className="block mb-2 text-lg">Pros:</span>
              <ul className="list-disc ml-4 mb-4">
                <li>Fast loading of new data.</li>
                <li>One file contains both markup and logic (JSX).</li>
                <li>Enables the separation of data and presentation.</li>
                <li>
                  It’s simple to get started and doesn’t take much practice.
                </li>
                <li>
                  As a library, it doesn’t have that many presets, so it’s easy
                  to learn.
                </li>
                <li>
                  Smooth work of the app, even with complex underlying
                  operations or database queries.
                </li>
              </ul>

              <span className="block mb-2 text-lg">Cons:</span>
              <ul className="list-disc ml-4">
                <li>It is just a JavaScript library, not a framework.</li>
                <li>No possibility to implement MVC architecture.</li>
                <li>
                  Frequently insufficient for developing a web app and
                  necessitating the use of other libraries.
                </li>
                <li>
                  Only worth using if web applications need to be highly
                  interactive.
                </li>
              </ul>
            </p>
          </div>

          <div className="mb-4">
            <p>
              <span className="block mb-2 text-lg text-cyan-500 w-40 font-bold">
                2. What is Vue?
              </span>
              Vue.js is a JavaScript-based progressive framework for creating
              single-page applications. It was created with scalability and
              incrementality in mind, as well as ease of integration with other
              view layer frameworks. Vue is built from the bottom up to be
              progressively adaptable, unlike other monolithic frameworks. The
              core library focuses solely on the view layer, and it’s simple to
              use and connect with other libraries or applications. This
              framework’s fast learning angle is almost a trademark. It’s a
              flexible framework that may be used as a library or a full-fledged
              framework for developing large web applications. Vue.js combines
              the useful principles of the Angular and React frameworks and
              presents them in a minimalistic modern style. Web developers use
              Vue.js to create frontend user interfaces for web-based and hybrid
              mobile applications.
            </p>
            <p>
              <span className="block mb-2 mt-4 text-lg">
                Pros and Cons of Vue.js
              </span>
              <span className="block mb-2 text-lg">Pros:</span>
              <ul className="list-disc ml-4 mb-4">
                <li>
                  A list of tools and libraries (Vue.js official CLI,
                  Development Tools, Vue Loader, Vue Router).
                </li>
                <li>Flexibility and simplicity in the utilization.</li>
                <li>Thorough documentation.</li>
                <li>
                  Reusable in the terms of adding numerous reactive components
                  to the existing code.
                </li>
                <li>The possibility of Component-Based Architecture (CBA)</li>
              </ul>

              <span className="block mb-2 text-lg">Cons:</span>
              <ul className="list-disc ml-4">
                <li>Limited community comparing to Angular and React.</li>
                <li>The number of available plugins.</li>
                <li>
                  Language handicaps because a large number of users are
                  non-English speakers.
                </li>
                <li>Overcomplications with flexibility</li>
              </ul>
            </p>
          </div>

          <div className="mb-4">
            <p>
              <span className="block mb-2 text-lg text-cyan-500 w-40 font-bold">
                3. What is Angular?
              </span>
              AngularJS was developed in 2009 by Google. The first version was
              Angular.JS. Angular is currently known as a JavaScript framework.
              Obviously, all significant Google projects have been developed
              with Angular. Angular.js is an MVC framework. A major disadvantage
              of Angular is that it uses a regular DOM, and thus, the entire
              tree structure of the HTML tags is updated, which massively
              impacts the loading time. Angular.js has its Ionic framework for
              mobile applications.
            </p>
            <p>
              <span className="block mb-2 mt-4 text-lg">
                Pros and Cons of Angular
              </span>
              <span className="block mb-2 text-lg">Pros:</span>
              <ul className="list-disc ml-4 mb-4">
                <li>Allows MVC architecture.</li>
                <li>Good maintainability.</li>
                <li>Web applications built with Angular perform very well.</li>
                <li>
                  Projects may now be developed, expanded, and generated more
                  quickly thanks to technologies like the Angular-CLI
                  command-line tool.
                </li>
                <li>
                  Angular provides a basic framework for developing web
                  applications and manages them without additional libraries.
                </li>
                <li>Easy unit and end-to-end testing.</li>
              </ul>

              <span className="block mb-2 text-lg">Cons:</span>
              <ul className="list-disc ml-4">
                <li>Reloads the complete HTML tags tree structure.</li>
                <li>Slow loading time due to the Ionic app.</li>
                <li>
                  Because of the given framework, Angular is relatively stiff
                  and inflexible.
                </li>
                <li>
                  To work with Angular.js, you need a certain training period.
                </li>
                <li>
                  If a user has deactivated JavaScript in the browser, using a
                  JavaScript-based SPA is not possible.
                </li>
                <li>
                  Furthermore, it does not always support outdated or unfamiliar
                  browsers.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
