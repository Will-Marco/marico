import Navbar from "./components/Navbar";
import Layout from "./layout";
import MainHeading from "./components/Main-heading";
import Features from "./components/Features";

function App() {
  return (
    <Layout>
      <header>
        <Navbar />
        <MainHeading />
        <Features />
      </header>
    </Layout>
  );
}

export default App;
