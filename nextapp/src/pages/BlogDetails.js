import useFetch from "../utils/useFetch";
import Layout from "./layout/layout";
import { useRouter } from "next/router";

const BlogDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log("param" + id);
  const { data, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  console.log(data, error, isPending);
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + data.id, {
      method: "DELETE",
    }).then(() => {
      router.push("/");
    });
  };
  return (
    <Layout>
      <div className="blog-details">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {data && (
          <article>
            <h2>{data.title}</h2>
            <p>presenter par : </p>
            <div>{data.author}</div>
            <div>{data.body}</div>
            <div>
              <p>image de produit :</p>
              <img src={data.image} />
            </div>
            <button onClick={handleClick}>delete</button>
          </article>
        )}
      </div>
    </Layout>
  );
};

export default BlogDetails;
