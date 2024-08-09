import Navbar from "./components/navbar";
import Main from "./components/main";
import Shop from "./components/shop";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import DataFunction from "./components/data";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Main />
			<Shop />
			<Testimonials />
			<Footer />
			{/* <DataFunction /> */}
		</div>
	);
}

export default App;
