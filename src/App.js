import Navbar from "./components/navbar";
import Main from "./components/main";
import Shop from "./components/shop";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";

// React router dependencies
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import { AllProducts } from "./components/all-products";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Navbar />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <AllComponents />,
			},
			{
				path: "/shop",
				element: <AllProducts />,
			},
		],
	},
]);

export default function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

function AllComponents() {
	return (
		<>
			<Main />
			<Shop />
			<Testimonials />
			<Footer />
		</>
	);
}
