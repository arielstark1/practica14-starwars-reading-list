import React from "react";

const NotFound = () => {
  return (
    <>
      <h1 className=" m-4 p-4 notFound text-light" id="notFound">
      Oh, my dear friend. It looks like this page is not Found (404)
      </h1>
      <div className="card text-white bg-dark text-center m-4 p-3">
        <blockquote className="blockquote mb-0">
          <p className="font-italic">I find your lack of faith disturbing.</p>
          <footer className="blockquote-footer text-white">
            <small>
              <cite>Darth Vader</cite>
            </small>
          </footer>
        </blockquote>
      </div>
    </>
  );
};

export default NotFound;
