import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
