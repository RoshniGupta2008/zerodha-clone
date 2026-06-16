import React, { useState, useEffect } from "react";
import { getAllHoldings } from "../services/api";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Summary = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    getAllHoldings().then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const totalInvestment = allHoldings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty, 0
  );
  const currentValue = allHoldings.reduce(
    (sum, stock) => sum + stock.price * stock.qty, 0
  );
  const pnl = currentValue - totalInvestment;

  const data = {
    labels: ["Total Investment", "Current Value"],
    datasets: [
      {
        label: "Portfolio (₹)",
        data: [totalInvestment.toFixed(2), currentValue.toFixed(2)],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          pnl >= 0 ? "rgba(75, 192, 92, 0.6)" : "rgba(255, 99, 132, 0.6)",
        ],
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Portfolio Overview",
      },
    },
  };

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span><p>Equity</p></span>
        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />
          <div className="second">
            <p>Margins used <span>0</span></p>
            <p>Opening balance <span>3.74k</span></p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span><p>Holdings ({allHoldings.length})</p></span>
        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              {pnl.toFixed(2)} <small>{((pnl / totalInvestment) * 100).toFixed(2)}%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />
          <div className="second">
            <p>Current Value <span>₹{currentValue.toFixed(2)}</span></p>
            <p>Investment <span>₹{totalInvestment.toFixed(2)}</span></p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div style={{ padding: "1rem" }}>
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default Summary;