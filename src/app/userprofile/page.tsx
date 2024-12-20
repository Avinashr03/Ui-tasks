'use client';

import React from "react";
import { useSearchParams } from "next/navigation";

// Utility for merging class names
function cn(...inputs: string[]) {
    return inputs.filter(Boolean).join(" ");
}

// Component Definition
const UserProfile: React.FC = () => {
    const searchParams = useSearchParams(); // Retrieve query parameters
    const username = searchParams.get('username') || "Guest"; // Fallback to "Guest" if no username

    const badges = [
        { id: 1, src: "/badge.png", label: "7 Days" },
        { id: 2, src: "/badge.png", label: "30 Days" },
        { id: 3, src: "/badge.png", label: "50 Days" },
        { id: 4, label: "365 Days Badge", isRecent: true }, // No image for this badge
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
            {/* Profile Section */}
            <div className="max-w-md w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <div className="flex items-center p-4">
                    {/* Profile Image */}
                    <img
                        src="/pro.jpg"
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className=" flex justify-between">
                    <div className="ml-4">
                        <h3 className="text-lg font-bold text-gray-800">{username}</h3>
                        <p className="text-sm text-gray-500">@{username.toLowerCase()}</p>
                        <div className="flex items-center mt-1">
                            <span className="text-sm font-medium text-yellow-500">🏆</span>
                            <span className="text-sm text-gray-500 ml-1">Rank 64,546</span>
                        </div>
                    </div>
                    <div className=" ml-48">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    </div>
                    </div>
                   
                   

                </div>
                {/* Edit Profile Button */}
                <div className="px-4 pb-4">
                    <button className="w-full py-2 text-sm font-semibold text-green-600 bg-green-100 hover:bg-green-200 rounded-lg">
                        Edit Profile
                    </button>
                </div>
                {/* Footer Section */}
                <div className="flex items-center px-4 py-3 text-gray-500 border-t border-gray-200">
                    {/* Location Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 2C8.134 2 5 5.134 5 9c0 6.268 6.268 11 6.268 11S17 15.268 17 9c0-3.866-3.134-7-5-7zM12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                        />
                    </svg>
                    {/* Location Text */}
                    <p className="ml-2 text-sm">India</p>
                </div>
            </div>

            {/* Badges Section */}
            <div className="mt-6 max-w-md w-full bg-white rounded-lg shadow-md p-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">Badges</h2>
                        <p>4</p>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                    {badges.slice(0, 3).map((badge) => (
                        <div
                            key={badge.id}
                            className={cn(
                                "flex items-center justify-center w-16 h-16 ml-10",
                                "bg-gray-100 rounded-full transition-transform transform hover:scale-110"
                            )}
                        >
                            {/* Render image if it exists; otherwise, show the label */}
                            {badge.src ? (
                                <img
                                    src={badge.src}
                                    alt={badge.label}
                                    className="w-12 h-12 object-cover"
                                />
                            ) : (
                                <span className="text-xs font-medium text-gray-800">
                                    {badge.label}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
                {badges.find((badge) => badge.isRecent) && (
                    <div className="mt-6">
                        <p className="text-sm text-gray-600">Most Recent Badge</p>
                        <div className="flex items-center mt-2">
                            {/* Show label instead of image for the 365 Days badge */}
                            <span className="text-gray-800 font-medium">
                                {badges.find((badge) => badge.isRecent)?.label}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
