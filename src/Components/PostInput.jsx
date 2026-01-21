import React from 'react'

function PostInput() {
  const { postContent, setPostContent } = usePostStore();

  return (
    <div className="flex gap-3 mb-4">
      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
        JO
      </div>
      <input
        type="text"
        placeholder="Start a post"
        className="flex-1 px-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
    </div>
  );
}

export default PostInput