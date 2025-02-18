import React from "react";
import Home from "../../public/HomeIcon.png";
import AddTab from "../../public/AddTab.png";


const Navbar: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 64,
        display: "flex",
        borderBottom: "1px solid #d9d9d9",
        padding: "0 24px",
        backgroundColor: "#fff",
        fontFamily: "Josefin Sans, sans-serif",
      }}
    >
      <img src={Home} alt="Home Icon" style={{ width: 20, height: 20, marginTop: 11, marginRight: 14 }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#EDF1FF",
          borderRadius: 4,
          padding: "0 12px",
          height: 40,
          gap: 8,
        }}
      >
        <span
          style={{
            color: "#1E40AF",
            fontSize: 16,
            fontWeight: 500,
          }}
        >
          Academic operations
        </span>
      </div>
      <img src={AddTab} alt="AddTab Icon" style={{ width: 52, height: 40 }} />
     
    </div>
  );
};

export default Navbar;
