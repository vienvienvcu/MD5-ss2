import React from "react";
const course = ["Java", "HTML", "CSS", "PHP", "Python"];
function Ex4() {
  return (
    <div>
      <h1>danh sach khoa hoc</h1>
      <ul>
        {course.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ex4;
