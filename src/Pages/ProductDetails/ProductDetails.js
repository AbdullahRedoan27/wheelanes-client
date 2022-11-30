import React, { useContext, useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import ContactModal from "../ContactModal/ContactModal";

const ProductDetails = () => {
  const product = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reporter, setReporter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState(false);

  useEffect(() => {
    if(user?.email){
      fetch(`https://4wheelanes-server.vercel.app/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReporter(data);
      });
    }
  }, [user]);

  const handleReport = () => {
    const proceed = window.confirm(
      "Are you sure to report to the admin about this product?"
    );

    const reportedProduct = {
      product,
      reporterName: reporter?.name,
      reporterEmail: reporter?.email,
      reporterRole: reporter?.role,
    };

    if (proceed) {
      setLoading(true);
      fetch("https://4wheelanes-server.vercel.app/reportProduct", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reportedProduct),
      })
        .then((data) => {
          console.log(data)
          setLoading(false);
        })
        .catch((err) => {
          console.error(err)
          setLoading(false);
        });
    }
  };
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <PhotoProvider>
          <PhotoView src={product?.image}>
            <img
              className="m-0 mx-auto rounded-xl"
              src={product?.image}
              alt="Car"
            />
          </PhotoView>
        </PhotoProvider>

        <h2 className=" mt-4 text-center">
          <span className="font-semibold text-2xl">{product?.carName}</span>
          <br />
          <span className="">{product?.category}</span>
        </h2>
        <div>
          <p className="font-semibold">Seller :</p>
          <div className="flex items-center gap-3">
            <img
              className="w-8 rounded-full"
              src={product?.sellerImage}
              alt=""
            />
            <p>
              {product?.sellername}
              <br />
              <span className="text-xs">{product?.sellerEmail}</span>
            </p>
          </div>
          <p className="my-2">Description: {product?.carDetails}</p>
        </div>
        <p>Location: {product?.location}</p>
        <p>
          {product?.usingPeriod === "less than a year" && (
            <>
              {product?.usingPeriodSecondary}{" "}
              {product?.usingPeriodSecondaryUnit} used
            </>
          )}
          {product?.usingPeriod === "more than 10 years" && (
            <>{product?.usingPeriodSecondary} years used</>
          )}
          {product?.usingPeriod !== "less than a year" && (
            <>
              {product?.usingPeriod}{" "}
              {product?.usingPeriod === 1 ? "year" : "years"} used
            </>
          )}
        </p>
        <p className="font-semibold text-lg">
          Original Price: <span>{product?.originalPrice}$</span>
        </p>
        <p className="font-semibold text-lg">
          Resale Price: <span>{product?.resalePrice}$</span>
        </p>
      </div>
      {user?.uid ? 
        <>
        <label onClick={() => setContact(product)} htmlFor="contactModal" className="btn btn-primary mx-auto mt-4 mr-4">Contact Seller</label>
        <Link className="btn btn-error ml-4" onClick={handleReport}>Report To Admin</Link>
        </>
        :
        <p className="text-warning">Please log in to contact the seller.</p>
      }
      {
        contact &&
        <ContactModal
          product={product}
        ></ContactModal>
      }
    </div>
  );
};

export default ProductDetails;
