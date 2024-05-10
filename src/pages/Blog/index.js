import { Link } from "react-router-dom";
import BlogData from "./blog.json";

const Blog = () => {
  return (
    <section>
      <div className="bg-[#DEDEDE] h-[150px] md:h-[300px] flex items-center justify-center">
        <span className="orkney_medium text-4xl md:text-6xl uppercase">
          Blog
        </span>
      </div>
      <div className="px-5 py-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {BlogData.map((blog) => {
            return (
              <Link to={`${blog.id}`}>
                <div className="p-4" key={blog.id}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={blog.img}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {blog.category}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {blog.title}
                      </h1>
                      <p className="leading-relaxed mb-3 text-justify">
                        {blog.description}
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <p className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
