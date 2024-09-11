import React from "react";

function Ex5() {
  function sum(a, b) {
    return a + b;
  }
  return (
    <div style={{ border: "1px dotted #000", padding: "10px" }}>
      tong cua 3 va 4 la: {sum(3, 4)}
    </div>
  );
}

export default Ex5;
