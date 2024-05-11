import BlogData from "../blog.json";
import { useParams } from "react-router-dom";

function BlogDetailPage() {
  // Get id from URL and check the id in json and fetch corresponding data into BlogData
  let { id } = useParams();
  let res = BlogData.filter((blog) => {
    return blog.id === parseInt(id);
  });
  let BlogDetail = res[0];
  let BlogContent = BlogDetail.detailPage;
  return (
    <div>
      <main className="p-5 bg-white antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic"></address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4x">
                {BlogDetail.title}
              </h1>
            </header>
            <p className="text-justify">{BlogContent?.para_1}</p>
            <figure>
              <img className="w-1/2 mx-auto mt-4" src={BlogDetail.img} alt="" />
              <figcaption className="text-center italic pb-5">
                {BlogContent?.img_detail}
              </figcaption>
            </figure>
            <p className="text-justify py-2">{BlogContent?.para_2}</p>
            <p className="text-justify py-2">{BlogContent?.para_3}</p>
            <p className="text-justify py-2">{BlogContent?.para_4}</p>
          </article>
        </div>
      </main>
    </div>
  );
}

export default BlogDetailPage;
