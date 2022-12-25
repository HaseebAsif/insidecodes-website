import React from "react";
import Link from "next/link";
import useFetch from ".././hooks/useFetch";

const PriceTable = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pricings?populate=*`
  );
  console.log(data);
  if (!data) return <p>Loading</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="pricing-area dark-bg pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Security Packages</span>
          <h2 className="text-white">
            We have different types of pricing plans
          </h2>
        </div>

        <div className="row">
          {data &&
            data
              .sort(
                (a, b) =>
                  parseFloat(a.attributes.Price) -
                  parseFloat(b.attributes.Price)
              )
              .map((singleData) => (
                <div className="col-lg-3 col-md-6">
                  <div className="single-pricing overly-one">
                    <div className="overly-two">
                      <div className="pricing-title">
                        <h3>{singleData.attributes.Title}</h3>
                        <h2>{singleData.attributes.Price}</h2>
                        <span>/ Per month</span>
                      </div>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: singleData.attributes.Description,
                        }}
                      ></div>

                      <Link href="/">
                        <a className="default-btn">
                          <span>Register Now</span>
                        </a>
                      </Link>

                      <div className="pricing-shape">
                        <img src="/images/pricing-shape.png" alt="Image" />
                      </div>

                      <div className="pricing-shape-2">
                        <img src="/images/pricing-shape-2.png" alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>

      <div className="pricing-shape shape-three">
        <img src="/images/pricing-right-shape.png" alt="Image" />
      </div>
    </div>
  );
};

export default PriceTable;
