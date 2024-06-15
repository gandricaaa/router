import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/productService';

function SingleProductPage() {
	const [loading, isLoading] = useState(false);
	const [singleProduct, setSingleProduct] = useState({});
	const [currentIndexImg, setCurrentIndexImg] = useState(0);
	const { id } = useParams();
	useEffect(() => {
		productService
			.getProduct(id)
			.then((res) => {
				setSingleProduct(res.data);
				isLoading(true);
			})
			.catch((err) => console.log(err));
	}, []);
	function handleImage(index) {
		setCurrentIndexImg(index);
	}
	return (
		<div className='container mx-auto flex items-center justify-center'>
			{loading ? (
				<>
					<div className='w-[50%]'>
						<img src={singleProduct.images[currentIndexImg]} alt='' />
						<div className='flex gap-[10px] items-center'>
							{singleProduct.images?.map((image, index) => {
								return (
									<img
										src={image}
										key={index}
										className={
											currentIndexImg === index
												? 'w-[90px] h-[90px] border border-red-500 cursor-pointer'
												: 'w-[90px] h-[90px] border border-black cursor-pointer'
										}
										onClick={() => handleImage(index)}></img>
								);
							})}
						</div>
					</div>
					<div className='w-[50%] mt-[120px]'>
						<h2>{singleProduct.title}</h2>
						<p>{singleProduct.description}</p>
					</div>
				</>
			) : (
				<h2>Loading...</h2>
			)}
		</div>
	);
}

export default SingleProductPage;
