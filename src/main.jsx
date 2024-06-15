import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import FeatuersPage from './pages/FeautersPage.jsx';
import SingleProductPage from './pages/SingleProductPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/Features',
				element: <FeatuersPage />,
			},
			{
				path: '/SingleProduct/:id',
				element: <SingleProductPage />,
			},
			{
				path: '/About',
				element: <AboutPage />,
			},
			{
				path: '/products',
				element: <ProductsPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
