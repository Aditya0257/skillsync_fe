import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LeftSideDrawers } from "./LeftSideDrawers";
import { RightSidebar } from "./RightSidebar";
import { Appbar } from "./Appbar";

export const McqQuesPage = () => {
  const [timeLeft, setTimeLeft] = useState(60); // Timer starts at 1 minute
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const location = useLocation();

  // Extract the query parameters
  const queryParams = new URLSearchParams(location.search);
  const encodedQuestion = queryParams.get("question");

  // Decode the question from the URL
  const question = encodedQuestion ? decodeURIComponent(encodedQuestion) : null;

  const options = [
    { id: 1, text: "Amazon S3" },
    { id: 2, text: "AWS Lambda" },
    { id: 3, text: "Amazon EC2" },
    { id: 4, text: "Amazon RDS" },
  ];
  const correctAnswer = 2; // Option ID for "6"
  const explanation =
    "Amazon S3 (Simple Storage Service) can host static websites by storing and serving static files like HTML, CSS, and JavaScript.";

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowFeedback(true); // Automatically show feedback if time runs out
    }
  }, [timeLeft]);

  // Handle option selection
  const handleOptionClick = (id) => {
    setSelectedOption(id);
    setShowFeedback(true);
  };

  return (
    <div className="min-h-screen bg-black text-[#EAE7E7] flex flex-col ">
      {/* Left Sidebar - Just Icons */}
      <LeftSideDrawers />
      

      <div className="flex flex-grow">
       

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
              {/* Timer */}
              <div className="text-sm bg-red-500 text-white px-4 py-1 rounded-full">
                Time Left: {timeLeft}s
              </div>
            </div>
            {/* Question Text */}
            <h1 className="text-lg font-semibold mb-6">{`Ques)`} {question}</h1>
            {/* Options */}
            <div className="space-y-4">
              {options.map((option) => (
                <button
                  key={option.id}
                  className={`block w-full bg-[#272727] px-4 py-2 rounded-lg text-left hover:bg-gray-700 ${
                    selectedOption === option.id
                      ? option.id === correctAnswer
                        ? "bg-green-600"
                        : "bg-red-600"
                      : ""
                  }`}
                  onClick={() => handleOptionClick(option.id)}
                  disabled={showFeedback} // Disable after selection
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Section */}
          {showFeedback && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Feedback</h2>
              <div className="bg-[#272727] rounded-lg p-6">
                {/* Correct Answer */}
                <div className="mb-4 text-sm">
                  <strong>Correct Answer:</strong> {options.find((o) => o.id === correctAnswer)?.text}
                </div>
                {/* Explanation */}
                <p className="text-sm">{explanation}</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar - Fixed */}
        <RightSidebar />
      </div>
    </div>
  );
};