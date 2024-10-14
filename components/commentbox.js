import React from "react";

const Commentbox = () => {
  return (
    <>
      <div className="comment-box">
        <p className="uppercase text-2xl text-textColor font-bold">comments</p>
        <div>
            <form action="">
          <textarea
            id="comment"
            rows="6"
            className="p-4 my-10 w-full text-sm text-textColor border-0 focus:ring-0 focus:outline-none bg-background2  rounded-2xl"></textarea>

          <button
            type="submit"
            className="p-2 text-background text-center bg-btn1 w-full rounded-3xl "
          >
            SEND
          </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Commentbox;
