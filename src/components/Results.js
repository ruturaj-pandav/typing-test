import React, { useEffect, useState } from "react";
export default function Results({ typingResults, restart }) {
  const [wpm, setwpm] = useState(0);
  const [accuracy, setaccuracy] = useState(0);
  const [totalwords, settotalwords] = useState(0);
  const [correctwords, setcorrectwords] = useState(0);

  useEffect(() => {
    if (typingResults.length > 0) {
      console.log(
        "these are the typing Results that we are going to display here ... ",
        typingResults
      );
   
      let cw = 0;
      let tw = 0;
      typingResults.map((content, i) => {
        tw = tw +1
        if (content.word === content.user) {
          cw = cw + 1;
        }
      });
      settotalwords(tw);
      setwpm(cw);
      setcorrectwords(cw);
      console.log("totalword: ", tw);
      console.log("correctwords: ", cw);
      setaccuracy(
        ((tw - (tw - cw)) / tw) * 100
      );
      console.log("more length");
    } else {
      settotalwords(0);
    }
  }, []);
  return (
    <div className="text-white">
      <span className="block my-8 text-4xl ">Results</span>
      <div className=" grid  grid-cols-4 ">
        <div className="grid ">
          <span className="text-3xl block my-1 mx-8">Total words</span>
          <span className="text-3xl block my-1 mx-8">{totalwords}</span>
        </div>
        <div className="grid ">
          <span className="text-3xl block my-1 mx-8">Incorrect Words</span>
          <span className="text-3xl block my-1 mx-8">
            {totalwords - correctwords}{" "}
          </span>
        </div>
        <div className="grid ">
          <span className="text-3xl block my-1 mx-8">WPM</span>
          <span className="text-3xl block my-1 mx-8">{wpm} </span>
        </div>
        <div className="grid ">
          <span className="text-3xl block my-1 mx-8">Accuracy</span>
          <span className="text-3xl block my-1 mx-8">
            {Math.round(accuracy, 2)} %
          </span>
        </div>
      </div>
      <div>
        <span className="text-3xl block  mt-12 uppercase font-bold  mb-4 ">
          Incorrect Words
        </span>
        {typingResults.map((content, index) => {
          if (content.user !== content.word) {
            return (
              <div className="  flex justify-between  ">
                <span className="block text-2xl  my-3 text-green-500   ">
                  {content.word}
                </span>
                <span className="block text-2xl  my-3 text-red-500   ">
                  {content.user}
                </span>
              </div>
            );
          }
        })}
      </div>

      <button
        className="bg-red-500 text-white rounded py-1 px-12  hover:bg-red-600 hover:text-gray-50 my-8"
        onClick={() => {
          restart();
        }}
      >
        Restart
      </button>
    </div>
  );
}
