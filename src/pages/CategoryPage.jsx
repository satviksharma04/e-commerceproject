import React from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import data from '../data';

const CategoryPage = () => {

    const { section, categoryName } = useParams();
    const category = data[section].find((cat) => cat.name === categoryName);

    if(!category){
        return <div>Category not found</div>
    }
    
    return (
        <div className='mt-12 md:mt-16'>
            <div className="container mx-auto p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.products.map((product) => (
                        <ProductCard key={product.id} product={product} section={section} category={categoryName} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryPage
