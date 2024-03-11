import Navbar from "./components/Navbar";
import Layout from "./layout";
import MainHeading from "./components/Main-heading";
import Features from "./components/Features";
import Content from "./components/Content";

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
      </Layout>
    </>
  );
}

export default App;
