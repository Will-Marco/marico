import Navbar from "./components/Navbar";
import Layout from "./layout";
import MainHeading from "./components/Main-heading";
import Features from "./components/Features";
import Content from "./components/Content";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <Layout>
        <header>
          <Navbar />
          <MainHeading />
        </header>
        <Features />
        <Content />
        <Homepage />
      </Layout>
    </>
  );
}

export default App;
