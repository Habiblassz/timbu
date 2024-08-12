import Navbar from "./components/navbar";
import Main from "./components/main";
import Shop from "./components/shop";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
// import "bootstrap/dist/css/bootstrap.min.css";
// import NavbarComponent from "./components/navbar-page";
// import DataFunction from "./components/data";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Main />
			<Shop />
			<Testimonials />
			<Footer />
			{/* <NavbarComponent /> */}
			{/* <DataFunction /> */}
		</div>
	);
}

export default App;
