import React from 'react'

const posts = usePostsStore((state) => state.posts);

  return (
    <div className="min-h-screen bg-gray-100">
       {/* LinkedIn Header  */}
      <header className="bg-white shadow-sm sticky top-0 z-30 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white font-bold text-2xl w-10 h-10 flex items-center justify-center rounded">
              in
            </div>
            <input
              type="text"
              placeholder="Search"
              className="hidden md:block bg-gray-100 px-4 py-2 rounded w-64 focus:outline-none"
            />
          </div>
          <nav className="flex gap-6">
            <button className="flex flex-col items-center text-gray-600 hover:text-black">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              <span className="text-xs hidden md:block">Home</span>
            </button>
            <button className="flex flex-col items-center text-gray-600 hover:text-black">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              <span className="text-xs hidden md:block">Network</span>
            </button>
            <button className="flex flex-col items-center text-gray-600 hover:text-black">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
              </svg>
              <span className="text-xs hidden md:block">Jobs</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 py-6">
        <CreatePost />
        <div className="border-t-8 border-gray-200 -mx-4 mb-4"></div>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
