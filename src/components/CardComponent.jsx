import React from 'react';
import { Link } from 'react-router-dom';
function CardComponent({ product }) {
	return (
		<div className='w-[300px] bg-white border border-gray-200 rounded-lg shadow'>
			<img
				src={product.thumbnail}
				alt=''
				className='w-[300px] h-[200px] object-cover'
			/>
			<div className='p-5 flex flex-col items-center justify-center gap-[15px]'>
				<h2 className='text-red-500 font-extrabold'>
					{product.title}
				</h2>
				<h3 className='text-green-500 font-extralight'>
					${product.price}
				</h3>
				<p className='text-blue-300'>{product.description}</p>
				<Link
					to={`/SingleProduct/${product.id}`}
					className='text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-center px-[20px] py-[10px]'>
					View Details
				</Link>
			</div>
		</div>
	);
}

export default CardComponent;
