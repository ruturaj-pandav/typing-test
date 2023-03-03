import React from "react";
import { useState, useEffect } from "react";
export default function InputAndText({
  onSpaceBar,
  typingResults,

  maxwords,
  currentword,
}) {
  const [seconds, setSeconds] = useState(60);
  const [text, settext] = useState([]);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    let text =
      "Life can be strange sometimes as it brings sudden changes that come out of nowhere to shake up our lives and make us ask ourselves if we are ready for the next adventure it has in store for us But without a doubt life is full of joy and surprises that act as small pieces of light that keep us going throughout our day to day even during the more difficult moments When you take a minute to pause and look around you its amazing how much beauty can be seen in a simple moment the sunshine the trees the people that pass by Even if nothing particularly extraordinary happens it doesnt make it any less meaningful because its through these moments our life starts One of the best ways to make the most out of our lives is to appreciate the little things that help us survive through the toughest of times our families our friends our hobbies that remind us how wonderful life can be Even if our lives feel tough and unfair at times its important to keep in mind that life can still be beautiful in any way shape or form We".toLowerCase();
    let array = text
      .split(" ")
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    settext(array);
  }, []);

  const [user, setuser] = useState("");

  return (
    <div className="h-fit  w-full py-8   ">
      <div className="text-white text-4xl my-8 block ">
        {seconds}
        <span className="text-white text-base mx-1"> seconds </span>{" "}
      </div>
      <div>
        <input
          onChange={(e) => {
            setuser(e.target.value);
          }}
          value={user}
          onKeyDown={(e) => {
            if (e.keyCode === 32) {
              onSpaceBar(user, text[currentword]);
              setuser("");
            }
          }}
          autofocus
          className={` border w-2/3 my-6 py-4 px-3 border-gray-200 rounded bg-gray-300 outline-none font-bold text-3xl`}
        />

     
      </div>
      <div className="text-white text-3xl text-cyan-100 border-cyan-100  text-start w-2/3 mx-auto justify p-3 rounded h-fit ">
        {text.slice(0, maxwords).map((word, index) => {
          return (
            <>
              <span
                className={` my-2 ${
                  index < typingResults.length &&
                  (typingResults[index].user === typingResults[index].word
                    ? "text-green-500"
                    : "text-red-500")
                } inline-block mx-2 font-light my-3 ${
                  index === currentword &&
                  "border  px-2  rounded  text-5xl my-3 block font-bold  duration-2000  "
                }`}
              >
                {word}{" "}
              </span>
            </>
          );
        })}
        {/* {text.slice(0 , maxwords)} */}
      </div>
    </div>
  );
}
