import { useLocation } from "react-router-dom";
import { Appbar } from "./Appbar";
import { LeftSideDrawers } from "./LeftSideDrawers";

export const AudioQuesPage = () => {



    const location = useLocation();

  // Extract the query parameters
  const queryParams = new URLSearchParams(location.search);
  const encodedQuestion = queryParams.get("question");

  // Decode the question from the URL
  const question = encodedQuestion ? decodeURIComponent(encodedQuestion) : null;
  return (
    <div className="min-h-screen bg-black text-[#EAE7E7] flex">
      {/* Left Sidebar - Fixed */}
      <LeftSideDrawers />

      {/* Main Content - Scrollable */}
      <div className="w-5/6 ml-14 mr-80 p-8 overflow-y-auto">

      <Appbar />
        {/* Top Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {/* Difficulty Level */}
            <div className="bg-[#272727] text-sm rounded-full px-4 py-1 w-20 text-center">
              Medium
            </div>
            {/* Companies Section */}
            <div className="text-sm text-gray-400">Companies: XYZ</div>
          </div>
          {/* Question Text */}
          <h1 className="text-lg font-semibold mb-6">
            {`Ques) `} {question}
          </h1>
          {/* Audio Record Button */}
          <button className="bg-[#272727] text-white px-6 py-2 rounded-lg">
            🎤 Record Answer
          </button>
        </div>

        {/* Recorded Audio */}
        <div className="bg-[#272727] p-4 rounded-lg mb-8">
          {/* Placeholder for Audio Waveform */}
          <div className="h-12 bg-gray-500 rounded-lg"></div>
        </div>

        {/* Feedback Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Feedback</h2>
          <div className="bg-[#272727] rounded-lg p-6">
            {/* Progress Bars */}
            <div className="mb-6">
              <div className="flex justify-between text-sm">
                <span>Confidence</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-lg">
                <div className="bg-green-500 h-2 rounded-lg w-4/5"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span>Correctness</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-lg">
                <div className="bg-green-500 h-2 rounded-lg w-9/10"></div>
              </div>
            </div>
            {/* Feedback Card */}
            <div className="mt-6 text-sm">
              <p>
                Your answer was on the right track, especially when you
                mentioned switching to a priority-based scheduling algorithm to
                handle urgent tasks. However, you missed discussing how
                preemption plays a key role in ensuring that high-priority tasks
                interrupt lower-priority ones in real-time systems.
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2">
                <li>
                  Priority Preemptive Scheduling algorithm would allow critical
                  processes (like heart rate monitoring) to take over the CPU
                  immediately, ensuring minimal delay.
                </li>
                <li>
                  Algorithms like Rate Monotonic or Earliest Deadline First
                  (EDF) are specifically designed for real-time systems.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Fixed */}
      <div className="w-80 bg-[#181717] fixed top-0 right-0 h-full py-8 px-4">
        {/* Notes Section */}
        <div className="bg-[#272727] rounded-lg p-6 h-full">
          <h3 className="text-lg font-semibold mb-4">Your Note</h3>
          <textarea
            className="w-full h-4/5 bg-transparent border border-gray-600 rounded-lg p-4 text-sm resize-none"
            placeholder="Write your notes here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};
