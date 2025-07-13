import React from "react";

const Accordian = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "50%",
          marginTop: "10px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px 5px 0px 0px",
          cursor: "pointer",
          animation: "fadeIn 0.5s ease-in-out",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>What is MTD</div>
        {!isOpen ? <div>+</div> : <div>-</div>}
      </div>
      <div>
        {isOpen && (
          <div
            style={{
              textAlign: "start",
              border: "1px solid #ccc",
              borderRadius: "0px 0px 5px 5px",
              width: "50%",
              padding: "10px",
              animation: "fadeIn 0.5s ease-in-out",
            }}
          >
            This is content
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
