import React from 'react'

const useUserStore = create((set) => ({
  currentUser: {
    name: "Jack Elorm Okrah",
    title: "System Engineer | Full-Stack Web Developer in Training",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack",
  },
}));

// Post Component
const Post = ({ post }) => {
  const { toggleLike, addComment, sharePost } = usePostsStore();
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState("");
  const currentUser = useUserStore((state) => state.currentUser);

  const handleLike = () => {
    toggleLike(post.id);
  };

  const handleComment = () => {
    if (commentText.trim()) {
      addComment(post.id);
      setCommentText("");
      setShowCommentBox(false);
    }
  };

  const handleShare = () => {
    sharePost(post.id);
  };

  return (
    <div className="bg-white rounded-lg shadow mb-4 border border-gray-200">
      {/* Post Header */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 hover:text-blue-600 hover:underline cursor-pointer">
              {post.author.name}
            </h3>
            <p className="text-sm text-gray-600">{post.author.title}</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              {post.timestamp} • 🌍
            </p>
          </div>
          <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        <p className="text-gray-800 whitespace-pre-line">{post.content}</p>
      </div>

      {/* Post Image */}
      {post.image && (
        <div className="w-full">
          <img
            src={post.image}
            alt="Post content"
            className="w-full object-cover max-h-96"
          />
        </div>
      )}

      {/* Engagement Stats */}
      <div className="px-4 py-2 flex items-center justify-between text-sm text-gray-600 border-b border-gray-200">
        <div className="flex items-center gap-1">
          <div className="flex -space-x-1">
            <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
              👍
            </span>
            <span className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
              ❤️
            </span>
            <span className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">
              💡
            </span>
          </div>
          <span className="hover:text-blue-600 hover:underline cursor-pointer ml-1">
            {post.likes}
          </span>
        </div>
        <div className="flex gap-3">
          <span className="hover:text-blue-600 hover:underline cursor-pointer">
            {post.comments} comments
          </span>
          <span className="hover:text-blue-600 hover:underline cursor-pointer">
            {post.shares} shares
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-2 py-1 flex items-center justify-around">
        <button
          onClick={handleLike}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded hover:bg-gray-100 transition ${
            post.liked ? "text-blue-600 font-semibold" : "text-gray-600"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill={post.liked ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          Like
        </button>
        <button
          onClick={() => setShowCommentBox(!showCommentBox)}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded hover:bg-gray-100 text-gray-600 transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Comment
        </button>
        <button
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded hover:bg-gray-100 text-gray-600 transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          Share
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded hover:bg-gray-100 text-gray-600 transition">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          Send
        </button>
      </div>

      {/* Comment Box */}
      {showCommentBox && (
        <div className="px-4 pb-4 border-t border-gray-200 pt-3">
          <div className="flex gap-2">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Add a comment..."
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-gray-500"
                onKeyPress={(e) => e.key === "Enter" && handleComment()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default useUserStore