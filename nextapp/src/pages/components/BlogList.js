import { useEffect } from "react";
import Link from "next/link";

const BlogList = ({ blogs, title }) => {
  useEffect(() => {
    console.log(blogs);
  }, []);
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link href={`/BlogDetails?id=${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>presenter par:</p>
            <div>{blog.author}</div>
            <img src={blog.image} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
