import React from 'react'
import banner2 from '../assets/banner2.png'
import CategoryCard from '../components/CategoryCard';
import data from '../data';

const Women = () => {
  return (
    <div className='mt-20'>
      <div className="banner m-0.5">
        <img src={banner2} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
        {data.women.map((category) => (
          <CategoryCard key={category.name} category={category} section="women" />
        ))}
      </div>
    </div>
  )
}

export default Women
