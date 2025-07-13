import React from "react";

const HolyGrail = () => {
  return (
    <div>
      {/* header */}
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          backgroundColor: "lightblue",
        }}
      >
        header
      </header>
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr",
        }}
      >
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "20%",
            backgroundColor: "#e0e0e0",
            padding: "10px",
          }}
        >
          sidebar
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            backgroundColor: "#e0e0e0",
            padding: "10px",
            borderLeft: "1px solid #000000",
          }}
        >
          content
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "20%",
            backgroundColor: "#e0e0e0",
            padding: "10px",
            borderLeft: "1px solid #000000",
          }}
        >
      news section
        </div> */}

        <div
          style={{
            backgroundColor: "#e0e0e0",
            padding: "10px",
            borderLeft: "1px solid #000000",
          }}
        >
          sidebar
        </div>
        <div
          style={{
            backgroundColor: "lightpink",
            padding: "10px",
            borderLeft: "1px solid #000000",
          }}
        >
          content
        </div>
        <div
          style={{
            backgroundColor: "#e0e0e0",
            padding: "10px",
            borderLeft: "1px solid lightgreen",
            height: "200px",
          }}
        >
          sidebar
        </div>
      </main>
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          backgroundColor: "lightgreen",
        }}
      >
        footer
      </footer>
    </div>
  );
};

export default HolyGrail;
