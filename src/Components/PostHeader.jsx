import React from 'react'

function PostHeader() {
  return (
    <div className="flex items-start justify-between mb-3">
      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600"></div>
        <div>
          <h3 className="font-semibold text-gray-900">
            Samuel Amo Adjei <span className="text-blue-600">• 1st</span>
          </h3>
          <p className="text-xs text-gray-600">
            I make cybersecurity practices relatable || Harvard ALP'25 Alumnus
            || Gold...
          </p>
          <p className="text-xs text-gray-500 mt-1">1d • 🌍</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="text-gray-600 hover:text-gray-900">⋯</button>
        <button className="text-gray-600 hover:text-gray-900">✕</button>
      </div>
    </div>
  );
}

export default PostHeader