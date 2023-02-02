import BlogList from "./components/BlogList";
import Layout from "./layout/layout";
import useFetch from "../utils/useFetch";
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <Layout>
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="Nos produits !" />}
      </div>
    </Layout>
  );
};

export default Home;
