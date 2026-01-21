import React from 'react'

function MediaButtons() {
  return (
    <div className="flex items-center justify-around pt-2 border-t border-gray-200">
      <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition">
        <Video className="w-5 h-5 text-orange-600" />
        <span className="text-gray-700 font-medium">Video</span>
      </button>

      <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition">
        <Image className="w-5 h-5 text-blue-600" />
        <span className="text-gray-700 font-medium">Photo</span>
      </button>

      <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition">
        <FileText className="w-5 h-5 text-red-600" />
        <span className="text-gray-700 font-medium">Write article</span>
      </button>
    </div>
  );
}

export default MediaButtons