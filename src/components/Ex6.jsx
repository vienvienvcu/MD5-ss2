import React from "react";

function Ex6() {
  const currentDate = new Date();
  // Gọi phương thức toLocaleTimeString để lấy thời gian theo định dạng địa phương
  const localTimeString = currentDate.toLocaleTimeString();
  console.log(localTimeString);

  return <div>hello gy! bay gio la : {localTimeString}</div>;
}

export default Ex6;
