import Navbar from "./components/Navbar";
import Layout from "./layout";
import MainHeading from "./components/Main-heading";
import Features from "./components/Features";
import Content from "./components/Content";
import Homepage from "./components/Homepage";
import Contacts from "./components/Contacts";

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
        <Contacts />
      </Layout>
    </>
  );
}

export default App;
