import React from "react";

const BlogData = [
  {
    id: 1,
    title: "Blog Post 1",
    content: "This is the content of Blog Post 1.",
    slug: "blog-post-1",
  },
  {
    id: 2,
    title: "Blog Post 2",
    content: "This is the content of Blog Post 2.",
    slug: "blog-post-2",
  },
  {
    id: 3,
    title: "Blog Post 3",
    content: "This is the content of Blog Post 3.",
    slug: "blog-post-3",
  },
];

const Blogs = () => {
  return (
    <div>
      {BlogData.map((blog) => {
        return (
          <div key={blog.id}>
            <h2>
              <a href={`/blogs/${blog.slug}`}>{blog.title}</a>
            </h2>
            <p>{blog.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
