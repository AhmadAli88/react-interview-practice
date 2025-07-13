import React from "react";

const ProgressBar = () => {
  const [progressValue, setProgressValue] = React.useState(0);
  const [isButtonClick, setIsButtonClick] = React.useState(false);

  const handleProgress = () => {
    setIsButtonClick(true);
    console.log("Progress button clicked");

    const progressSteps = [25, 50, 75, 100];
    let index = 0;

    const interval = setInterval(() => {
      if (index < progressSteps.length) {
        setProgressValue(progressSteps[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1000); // updates every 1 second
  };

  return (
    <div>
      <button onClick={handleProgress}>Start Progress</button>
      <div
        style={{
          width: "100%",
          backgroundColor: "#e0e0e0",
          borderRadius: "5px",
          height: "20px",
          marginTop: "10px",
        }}
      >
        {isButtonClick && (
          <div
            style={{
              width: `${progressValue}%`,
              height: "100%",
              backgroundColor: "blue",
              borderRadius: "5px",
              transition: "width 0.5s ease-in-out",
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
