import { useState } from "react"




export default function UserItem() {
   const [close, setClose] = useState(true)

   function show () {
    setClose(false)
   }
  return (
    <div>

      
        <>
          <section onClick={show}
            className="fixed inset-0 bg-transparent z-40"

          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border rounded-lg shadow-xl z-50 p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              
              <button

                className="text-gray-500 hover:text-gray-700 text-2xl"
                onClick={() => {setClose(!close)}}
              >
                ×
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"

                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"

                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"

                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </>
      
    </div>


  )
}
