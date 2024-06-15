import { useEffect, useState } from 'react';
import productService from '../services/productService';
import CardComponent from '../components/CardComponent';

function ProductsPage() {
	const [allProduct, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		productService
			.getAllProducts()
			.then((res) => {
				setProducts(res.data.products);
				setIsLoading(true);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='container mx-auto mt-[120px]'>
			<h1 className='mb-[20px] text-center text-gray-700 text-[42px] font-extrabold'>
				Products Page
			</h1>
			<div className='flex flex-wrap justify-between gap-[20px]'>
				{isLoading ? (
					allProduct.map((product) => (
						<CardComponent
							key={product.id}
							product={product}></CardComponent>
					))
				) : (
					<h2>Loading...</h2>
				)}
			</div>
		</div>
	);
}

export default ProductsPage;
