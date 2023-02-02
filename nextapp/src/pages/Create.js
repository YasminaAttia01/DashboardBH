import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "./layout/layout";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("EcoSol");
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new product added");
      setIsPending(false);
      router.push("/");
    });
  };

  return (
    <Layout>
      <div className="Create">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCgg26--EMViC2U5RdP-kwR0eGtDkXjeA5dw&usqp=CAU" />
        <h2>Add a New Product</h2>
        <form onSubmit={handleSubmit}>
          <label> le type de produit:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>description de produit</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>presenter par :</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="EcoSia">EcoSia</option>
            <option value="EcoSol">EcoSol Tunisie</option>
            <option value="Esoco">Esoco</option>
            <option value="ECOS">ECOS</option>
            <option value="GoSolor">GO Solor</option>
          </select>
          {!isPending && <button> ajouter un produit</button>}
          {isPending && <button disabled> Adding produit...</button>}
        </form>
      </div>
    </Layout>
  );
};

export default Create;
