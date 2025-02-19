import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import TableData from "../components/TableData";
import Dropper from "../../public/Dropper.png"

const IssueBookPage: React.FC = () => {
  return (
    <div style={{ display: "flex", fontFamily: 'Josefin Sans, sans-serif' }}>
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <div
          style={{
            padding: "0 24px",
            fontFamily: "Josefin Sans, sans-serif",
          }}
        >
          {/* Top Row: Left Title/Subtitle, Right TIA Box */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "16px",
            }}
          >
            {/* Left Side */}
            <div>
              <h1 style={{ marginTop: 10, fontWeight: 700 }}>Issue Book</h1>
              <p style={{ color: "#808080", marginTop: 10, fontWeight: 500, fontSize:'18px' }}>Tanvir Chauhan</p>
            </div>

            {/* Right Side (TIA Box) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: 55,
                width: 143,
                marginRight:15,
                marginTop: '10px',
                border: "1px solid #1E40AF",
                borderRadius: 10,
                padding: "5px 10px 5px 8px",
              }}
            >
              <img
                src="http://thakureducation.org/images/logo.png"
                alt="logo"
                style={{ width: "45px", height: "45px" }}
              />
              <div
                style={{
                  width: "1px",
                  height: "24px",
                  backgroundColor: "#1F2937",
                  marginLeft: '15px' 
                }}
              />
              <span style={{ color: "#1E40AF", fontWeight: 600, fontSize: '16px', marginLeft: '15px', marginTop: '4px'}}>TIA</span>
              <img src={Dropper} alt="Dropdown" style={{marginLeft: 10, height: 10}} />
            </div>
          </div>

          {/* Table Section */}
          <div style={{ marginTop: "20px" }}>
            <TableData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueBookPage;
