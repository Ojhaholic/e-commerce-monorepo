import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price, oldPrice = 999 }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className='text-gray-700 cursor-pointer'
      to={`/product/${id}`}
    >
      <div className='overflow-hidden'>
        <img
          className='hover:scale-110 transition ease-in-out'
          src={image[0]}
          alt={name}
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      
      <div className='flex items-center gap-2'>
        <p className='text-sm font-medium'>
          {currency}{price}
        </p>
        <p className='text-gray-400 line-through text-xs'>
          {currency}{oldPrice}
        </p>
      </div>
    </Link>
  )
}

export default ProductItem
