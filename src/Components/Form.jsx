import { useState } from "react"
import UserItem from "./UserItem"




const Form = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className='flex justify-center '>

      {showModal && <UserItem />}

      <div className='bg-white rounded border-1 border-gray-200 w-3xl p-4 flex items-center space-x-4'>
        <div>
          <img src="" alt="" className='rounded-full h-15 w-15 border-1' />
        </div>
        <div>
          <input onClick={() => {setShowModal(true) }} type="text" name="" id="" placeholder='Start a post' className='rounded-3xl w-160 p-3 border border-gray-600 focus:ring-indigo-500' />
        </div>
      </div>

    </section>
  )
}
export default Form