import React from "react";

const BuyerContactModal = ({ buyer }) => {
  return (
    <td>
      <input type="checkbox" id="buyerContactModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-center text-semibold text-lg">
            Buyers Contact Information
          </h3>
          <div className="py-4">
            <h2>
              Email: <span className="font-semibold">{buyer?.buyerEmail}</span>
            </h2>
            <h2>
              Phone Number:{" "} 
              <span className="font-semibold">{buyer?.buyerNumber}</span>
            </h2>
            <h2>
              Buyer wants to meet at <span className="font-semibold">{buyer?.buyerLocation}</span>
            </h2>
          </div>
          <div className="modal-action">
            <label htmlFor="buyerContactModal" className="btn">
              Ok
            </label>
          </div>
        </div>
      </div>
    </td>
  );
};

export default BuyerContactModal;
