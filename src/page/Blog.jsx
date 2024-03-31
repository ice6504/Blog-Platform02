import { Link } from "react-router-dom";
import CardBlog from "../components/Card/CardBlog";

function Blog() {
  return (
    <div className="min-h-screen">
      <header>
        <img
          className="w-full h-96 object-cover sm:h-[30rem]"
          src="https://loremflickr.com/cache/resized/65535_53431558497_80642664bc_z_640_480_nofilter.jpg"
          alt=""
        />
      </header>
      <main className="container mx-auto pt-5 px-5 lg:px-16">
        <div className="grid sm:grid-cols-4 gap-2 pb-5">
          <article className="p-4 sm:col-span-3 text-xl">
            <h1 className="text-7xl font-bold text-primary">Topic</h1>
            <div className="py-4 flex items-center gap-2 max-sm:flex-col max-sm:items-start">
              <div className="flex items-center gap-2">
                <i className="fa-regular fa-clock"></i>
                <span>Posted On 29 March 2024</span>
              </div>
              <Link to="/author" className="flex items-center gap-2">
                <div className="avatar">
                  <div className="w-7 rounded-full">
                    <img src="https://loremflickr.com/cache/resized/65535_53453809970_07bb2ddf87_c_640_480_nofilter.jpg" />
                  </div>
                </div>
                <span className="font-medium text-lg text-secondary">
                  Author name
                </span>
              </Link>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, enim quos, ipsa quibusdam ad quidem, consequatur nemo
              illo molestiae ipsum fugit sed explicabo natus labore! Velit cum,
              aperiam, quaerat ipsa vel deleniti quam fuga distinctio nisi nulla
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, enim quos, ipsa quibusdam ad quidem, consequatur nemo
              illo molestiae ipsum fugit sed explicabo natus labore! Velit cum,
              aperiam, quaerat ipsa vel deleniti quam fuga distinctio nisi nulla
            </p>
            <br />
            <h3 className="text-3xl py-2">Heading</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, enim quos, ipsa quibusdam ad quidem, consequatur nemo
              illo molestiae ipsum fugit sed explicabo natus labore! Velit cum,
              aperiam, quaerat ipsa vel deleniti quam fuga distinctio nisi nulla
            </p>
            <figure className="my-4">
              <img
                className="w-full h-96 object-cover"
                src="https://loremflickr.com/cache/resized/65535_53315817375_8df48d424b_z_640_480_nofilter.jpg"
                alt=""
              />
            </figure>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, enim quos, ipsa quibusdam ad quidem, consequatur nemo
              illo molestiae ipsum fugit sed explicabo natus labore! Velit cum,
              aperiam, quaerat ipsa vel deleniti quam fuga distinctio nisi nulla
            </p>
          </article>
          {/* Most Popular */}
          <div className="sm:col-span-1 sm:pt-16">
            <h2 className="text-4xl text-primary font-medium  md:text-2xl lg:text-3xl xl:text-4xl">
              Most Popular
            </h2>
            <div className="divider divider-primary"></div>
            <div className="grid gap-4">
              <CardBlog />
              <CardBlog />
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-primary text-base-100 py-8 px-4 sm:px-10">
        <h3 className="text-4xl font-medium">COMMENT</h3>
        <div className="flex justify-center items-center gap-2 p-4">
          <i className="fa-solid fa-user fa-2xl mr-3"></i>
          <input
            type="text"
            placeholder="แสดงความคิดเห็น"
            className="w-full h-10 bg-transparent outline-none text-white border-b-2 border-[#7e8081]"
          />
          <div className="btn btn-ghost btn-no">
            <i className="fa-solid fa-location-arrow fa-2xl"></i>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Blog;
