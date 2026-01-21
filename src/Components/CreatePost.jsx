import React from 'react'

const CreatePost = () => {
  const [showModal, setShowModal] = useState(false);
  const [postContent, setPostContent] = useState("");
  const currentUser = useUserStore((state) => state.currentUser);
  const addPost = usePostsStore((state) => state.addPost);

  const handleCreatePost = () => {
    if (postContent.trim()) {
      addPost({
        author: currentUser,
        content: postContent,
        image: null,
      });
      setPostContent("");
      setShowModal(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow mb-4 p-4 border border-gray-200">
        <div className="flex gap-3">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-12 h-12 rounded-full"
          />
          <button
            onClick={() => setShowModal(true)}
            className="flex-1 border border-gray-300 rounded-full px-4 py-3 text-left text-gray-600 hover:bg-gray-50 transition"
          >
            Start a post
          </button>
        </div>
        <div className="flex justify-around mt-3 pt-3 border-t border-gray-200">
          <button className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 text-blue-600 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
            Photo
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 text-green-600 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z"
                clipRule="evenodd"
              />
            </svg>
            Video
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 text-amber-600 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            Event
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 text-red-600 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Article
          </button>
        </div>
      </div>

      {/* Create Post Modal */}
      {showModal && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowModal(false)}
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl z-50 w-full max-w-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Create a post</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:bg-gray-100 p-2 rounded-full"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{currentUser.name}</h3>
                  <button className="text-sm px-3 py-1 border border-gray-300 rounded-full flex items-center gap-1 hover:bg-gray-100">
                    🌍 Anyone
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="What do you want to talk about?"
                className="w-full min-h-40 p-4 text-lg focus:outline-none resize-none"
                autoFocus
              />

              <div className="flex justify-end mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={handleCreatePost}
                  disabled={!postContent.trim()}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    postContent.trim()
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CreatePost