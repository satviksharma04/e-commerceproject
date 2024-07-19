import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ category, section }) => {
  return (
    <div className='p-4 border rounded-lg  shadow-md bg-sky-200 hover:bg-sky-400 '>
      <img src={category.image} alt={category.name} className='w-full object-cover rounded-md' />
      <Link to={`/${section}/${category.name}`} className='mt-2 inline-block px-4 py-2 w-36 text-center text-white bg-blue-600 hover:bg-blue-800 rounded-md'>View {category.name}</Link>
    </div>
  )
}

export default CategoryCard
