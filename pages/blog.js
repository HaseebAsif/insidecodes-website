import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import useFetch from ".././components/hooks/useFetch";

const Blog = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*`
  );
  console.log(data);
  if (!data) return <p>Loading</p>;
  if (error) return <p>Error :(</p>;
  return (
    <React.Fragment>
      <Navbar />

      <div className="blog-column-two-area ptb-100">
        <div className="container">
          <div className="row">
            {data?.map((singleData) => (
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-posts">
                  <Link
                    href={`/blogs/${singleData.id}-${singleData.attributes.Slug}`}
                  >
                    <a>
                      <img
                        src={
                          singleData.attributes.FeaturedImage.data.attributes
                            .url
                        }
                        alt="Image"
                      />
                    </a>
                  </Link>
                  <div className="single-blog-content">
                    <span>{singleData.attributes.Category}</span>

                    <h3>
                      <Link
                        href={`/blogs/${singleData.id}-${singleData.attributes.Slug}`}
                      >
                        <a>{singleData.attributes.Title}</a>
                      </Link>
                    </h3>

                    <p
                      dangerouslySetInnerHTML={{
                        __html: singleData.attributes.Body,
                      }}
                    ></p>

                    <ul className="admin">
                      <li>
                        <a
                          href={`/blogs/${singleData.id}-${singleData.attributes.Slug}`}
                        >
                          <i className="bx bx-user-circle"></i>
                          {singleData.attributes.author.data?.attributes.Name}
                        </a>
                      </li>
                      <li className="float">
                        <i className="bx bx-calendar-alt"></i>
                        {new Date(
                          singleData.attributes.DatePublished
                        ).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </li>
                    </ul>
                    <div className="btn btn-success">
                      <Link
                        className="text-white"
                        href={`/blogs/${singleData.id}-${singleData.attributes.Slug}`}
                      >
                        <p style={{ margin: "0" }}>Read More</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Blog;
