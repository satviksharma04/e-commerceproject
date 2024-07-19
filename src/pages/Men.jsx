import React from 'react'
import banner1 from '../assets/banner1.png'
import data from '../data';
import CategoryCard from '../components/CategoryCard';

const Men = () => {
  return (
    <div className='mt-20'>
      <div className="banner m-0.5">
        <img src={banner1} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 py-2 px-4">
        {data.men.map((category) => (
          <CategoryCard key={category.name} category={category} section="men" />
        ))}
      </div>
    </div>
  )
}

export default Men
