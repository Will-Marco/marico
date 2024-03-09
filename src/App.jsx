import Navbar from "./components/Navbar";
import Layout from "./layout";
import MainHeading from "./components/Main-heading";

function App() {
  return (
    <Layout>
      <header>
        <Navbar />
        <MainHeading />
      </header>
    </Layout>
  );
}

export default App;
