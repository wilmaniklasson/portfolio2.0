import { createHashRouter } from 'react-router-dom'
import Svenska from '../Svenska.jsx';
import English from '../English';
import Root from './Root.jsx'

const router = createHashRouter([
	{
		
		path: "/",

		element: <Root />,

		children: [
			{
                path: '/',
                element: <Svenska />
            },
			{
                path: '/en',
                element: <English />
            },
			

		]
	},
	
]);

export { router }