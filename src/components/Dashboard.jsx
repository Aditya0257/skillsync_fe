import { useEffect, useState } from "react";
import { Appbar } from "./Appbar";
import { RightSidebar } from "./RightSidebar";
import { LeftSideDrawers } from "./LeftSideDrawers";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const [topPicks, setTopPicks] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("OS");
  const [currentLabel, setCurrentLabel] = useState("OS");

  const categories = [
    { id: "os", label: "Operating Systems" },
    { id: "cn", label: "Computer Networks" },
    { id: "oops", label: "OOPs" },
    { id: "cpp", label: "C++" },
    { id: "aws", label: "AWS" },
    { id: "gcloud", label: "Google Cloud" },
    { id: "prisma", label: "Prisma ORM" },
    { id: "java", label: "Java" },
    { id: "mern", label: "MERN" },
    { id: "sql", label: "SQL" },
    { id: "dsa", label: "DSA" },
  ];

  useEffect(() => {
    // Simulate fetching Top Picks
    const fetchTopPicks = async () => {
      const { default: topPicksMcq } = await import(
        `../data_models/topPicks_mcq_ques`
      );

      const topPicksData = Object.values(topPicksMcq).map(
        (item) => item.question
      );
      setTopPicks(topPicksData);
    };

    // Simulate fetching questions for different categories
    const fetchQuestionsByCategory = async () => {
      const data = {};
      for (const category of categories) {
        const { default: mcq } = await import(
          `../data_models/${category.id}_mcq_ques.js`
        );
        data[category.id] = Object.values(mcq).map((item) => item.question);
      }
      setQuestions(data);
    };

    fetchTopPicks();
    fetchQuestionsByCategory();
  }, []);

  // Render questions based on the selected category
  const renderQuestions = () => {
    // console.log(questions)
    if (
      !questions[selectedCategory] ||
      questions[selectedCategory].length === 0
    ) {
      return (
        <div className="text-[#EAE7E7] text-center">
          No questions available for this category.
        </div>
      );
    }

    return questions[selectedCategory]?.map((question, index) => (
      <Link
        to={`/mcq?question=${encodeURIComponent(
          question
        )}&type=${selectedCategory}`} // Pass question as a query parameter
        key={index}
        className=" rounded-lg px-4  shadow-md"
      >
        <div className="bg-[#272727] rounded-lg px-4 py-4 shadow-md">
          Q. {question}
        </div>
      </Link>
    ));
  };

  return (
    <div className="min-h-screen bg-black text-[#EAE7E7] flex">
      {/* Left Sidebar - Just Icons */}
      <LeftSideDrawers />

      {/* Main Content */}
      <div className="w-9/12 p-8 pl-16">
        {/* Header with SkillSync */}
        <Appbar />

        {/* Topic wise section */}
        <div className="mt-8 bg-[#181717] p-6 rounded-lg">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Daily Top Picks</h2>
            <div className="space-y-4">
              {topPicks.map((item, index) => (
                <Link
                  to={`/audio_question?question=${encodeURIComponent(
                    item
                  )}&type=${selectedCategory}`} // Pass question as a query parameter
                  key={index}
                  className=" rounded-lg px-4  shadow-md"
                >
                  <div className="bg-[#272727] rounded-lg px-4 py-4 shadow-md">
                    Q. {item}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* All Questions Section */}
        <div className="mt-8 bg-[#181717] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            {currentLabel} based Questions
          </h2>

          {/* Category Buttons */}
          <div className="my-4 flex flex-wrap gap-x-4 gap-y-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-3 rounded-md ${
                  selectedCategory === category.id
                    ? "bg-[#EAE7E7] text-black"
                    : "bg-[#272727] text-[#EAE7E7]"
                }`}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentLabel(category.label);
                }}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div>
            <div className="space-y-4">{renderQuestions()}</div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
};
