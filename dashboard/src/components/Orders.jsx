import React, { useState, useEffect } from "react";

import { getAllOrders } from "../services/api";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllOrders()
      .then((res) => {
        setAllOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Orders load nahi hue, thoda wait karo!");
        setLoading(false);
      });
  }, []);

  if (loading) return <h3 style={{ padding: "2rem" }}>Loading...</h3>;
  if (error) return <h3 style={{ padding: "2rem", color: "red" }}>{error}</h3>;

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
            {allOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td style={{ color: order.mode === "BUY" ? "green" : "red" }}>
                  {order.mode}
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;