import React from 'react'

const NoBgWhitebtn = ({ type, btnvalue, onClick }) => {
  return (
    <button
        type={type}
        className='
            cursor-pointer
            font-semibold
            bg-transparent
            rounded-full
            py-2 px-4
            border-2
            border-white 
            duration-500
            hover:bg-white
            hover:text-gray-500
        '
        onClick={onClick}
    >
        {btnvalue}
    </button>
  )
}

export default NoBgWhitebtn