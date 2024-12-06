import { Appbar } from "./Appbar"
import { LeftSideDrawers } from "./LeftSideDrawers"

export const ProfilePage =()=>{
    return <div className="min-h-screen bg-black text-[#EAE7E7] flex">
    {/* Left Sidebar - Fixed with Icons */}
    <LeftSideDrawers />

    {/* Main Content */}
    <div className="w-5/6 ml-14 mr-80 p-8"> {/* Add margins for fixed sidebars */}
      <Appbar />
      {/* Scrollable Main Section */}
      <div className="bg-[#181717] p-8 rounded-lg  overflow-y-auto">
        {/* Profile Section */}
        <div className="flex items-start justify-between">
          {/* Left Section */}
          <div className="space-y-8 w-2/3">
            {/* Profile Card */}
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full bg-gray-500"></div> {/* Profile Photo */}
              <div>
                <h2 className="text-xl font-semibold">Xyz Abc</h2>
                <p className="text-sm text-gray-400">xyz.email</p>
              </div>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid grid-cols-2 gap-4 justify-between align-middle">
              {/* Strengths Card */}
              <div className="bg-[#272727] rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Your Strengths</h3>
                <ul className="list-disc ml-6 text-sm">
                  <li>JavaScript</li>
                  <li>Teamwork</li>
                  <li>MERN</li>
                </ul>
              </div>
              {/* Weaknesses Card */}
              <div className="bg-[#272727] rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Your Weaknesses</h3>
                <ul className="list-disc ml-6 text-sm">
                  <li>abc.email</li>
                  <li>xyz.email</li>
                </ul>
              </div>
            </div>

            {/* Progress Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
              <div className="flex space-x-8">
                {/* Technical Progress */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#272727] flex items-center justify-center">
                    {/* Circular Graph */}
                    <p className="text-lg font-bold">75%</p>
                  </div>
                  <p className="mt-2 text-sm">Technical</p>
                </div>
                {/* Behavioral Progress */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#272727] flex items-center justify-center">
                    {/* Circular Graph */}
                    <p className="text-lg font-bold">60%</p>
                  </div>
                  <p className="mt-2 text-sm">Behavioral</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                You've improved 20% in communication!
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 bg-[#181717] fixed top-0 right-0 h-full py-8">
            <div className="bg-[#272727] rounded-lg p-6 space-y-4 m-3">
              <h3 className="text-lg font-semibold">Badges</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p>Streak</p>
                  <p>28 Days</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Total Solves</p>
                  <p>28</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}