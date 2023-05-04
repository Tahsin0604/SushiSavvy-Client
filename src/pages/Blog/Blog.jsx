import React from "react";

const Blog = () => {
  return (
    <div className="container-custom py-12">
      <h1 className="text-5xl font-bold text-slate-600 text-center mb-12">
        Blog
      </h1>
      <div>
        <div>
          <h1 className="text-xl text-slate-700 font-semibold">
            1. Tell us the differences between uncontrolled and controlled
            components.
          </h1>
          <p className="text-lg font-semibold py-2">
            <small>
              Uncontrolled components manage their own state, while controlled
              components have their state managed by a parent component through
              props. Controlled components provide more control and flexibility
              but require more setup, while uncontrolled components are simpler
              and more lightweight.
            </small>
          </p>
        </div>
        <div className="mt-6">
          <h1 className="text-xl text-slate-700 font-semibold">
            2. How to validate React props using PropTypes
          </h1>
          <p className="text-lg font-semibold py-2">
            <small>
              propTypes is used for props validation. By defining PropTypes for
              a component, we can catch potential errors and ensure that the
              props are of the expected types.To use PropTypes, we need to
              import it, define propTypes for our component, and then access the
              props as usual in our component.
            </small>
          </p>
        </div>
        <div className="mt-6">
          <h1 className="text-xl text-slate-700 font-semibold">
            3. Tell us the difference between nodejs and express js.
          </h1>
          <p className="text-lg font-semibold flex flex-col py-2">
            <small>
              Node.js is a platform for building server-side event-driven i/o
              application using javascript.
            </small>
            <small>
              Express.js is a framework based on node.js for building
              web-application using principles and approaches of node.js
            </small>
          </p>
        </div>
        <div>
          <h1 className="text-xl text-slate-700 font-semibold mt-6">
            4. What is a custom hook, and why will you create a custom hook?
          </h1>
          <p className="text-lg font-semibold py-2">
            <small>
              A custom hook is a special JavaScript function whose name starts
              with 'use'. It is a mechanism to reuse other hooks. We use custom
              hook when we have to repeat same code pattern in multiple
              components.
            </small>
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <button>Convert to Pdf</button>
      </div>
    </div>
  );
};

export default Blog;
