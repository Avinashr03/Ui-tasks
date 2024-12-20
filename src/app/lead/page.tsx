import React from "react";

interface Participant {
  id: number;
  name: string;
  contests: number;
  country: string;
  countryFlag: string;
  logo?: string; // Optional logo for participant
}

const participants: Participant[] = [
  { id: 1, name: "Neal Wu", contests: 51, country: "USA", countryFlag: "/usa.png", logo: "/pro.jpg" },
  { id: 2, name: "灵茶山艾府", contests: 239, country: "China", countryFlag: "/china.png", logo: "/pro.jpg" },
  { id: 3, name: "Joshua Chen", contests: 98, country: "Australia", countryFlag: "/usa.png", logo: "/pro.jpg" },
  { id: 4, name: "何恺", contests: 143, country: "China", countryFlag: "/china.png", logo: "/pro.jpg" },
  { id: 5, name: "小羊肖恩", contests: 103, country: "China", countryFlag: "/china.png", logo: "/pro.jpg"},
  { id: 6, name: "SSerxhs", contests: 55, country: "China", countryFlag: "/china.png", logo: "/pro.jpg" },
];

const GlobalRanking: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6">
      {/* Header Section */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <div>
          <button className="text-gray-500 text-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Contest
          </button>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Global Ranking</h1>
        </div>
        <p className="text-sm text-gray-500">Total Participants: 558,518</p>
      </div>

      {/* Participant List */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg">
        {participants.map((participant, index) => (
          <div
            key={participant.id}
            className={`flex items-center justify-between py-4 px-6 ${
              index !== participants.length - 1 && "border-b border-gray-200"
            }`}
          >
            {/* Rank and Name */}
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-700 mr-4">{participant.id}</span>
              <div className="flex items-center">
                {/* Participant Logo */}
                {participant.logo && (
                  <img
                    src={participant.logo}
                    alt={`${participant.name}'s logo`}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                )}
                <div>
                  <p className="text-base font-medium text-gray-800">{participant.name}</p>
                  <p className="text-sm text-gray-500">{participant.contests} contests attended</p>
                </div>
              </div>
            </div>

            {/* Country Flag */}
            <div>
              <img
                src={participant.countryFlag}
                alt={participant.country}
                className="w-8 h-6 rounded-sm"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalRanking;
