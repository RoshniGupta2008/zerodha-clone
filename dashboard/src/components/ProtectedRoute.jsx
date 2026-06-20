import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const ProtectedRoute = ({ children }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const urlToken = urlParams.get("token");

      if (urlToken) {
        localStorage.setItem("token", urlToken);
        window.history.replaceState({}, document.title, "/");
      }

      const localToken = localStorage.getItem("token");

      if (!localToken) {
        window.location.href = import.meta.env.VITE_FRONTEND_URL;
        return;
      }

      try {
        const { data } = await axios.post(
          `${API_URL}/auth/`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localToken}`,
            },
          }
        );

        if (data.status) {
          setIsVerified(true);
        } else {
          window.location.href = import.meta.env.VITE_FRONTEND_URL;
        }
      } catch (err) {
        window.location.href = import.meta.env.VITE_FRONTEND_URL;
      }
      setLoading(false);
    };

    verifyToken();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <p>Loading...</p>
      </div>
    );
  }

  return isVerified ? children : null;
};

export default ProtectedRoute;