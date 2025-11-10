import React from "react";

function Education() {
  return (
    <section className="education">
      <h2>Education</h2>
      <table>
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Year</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BS Software Engineering</td>
            <td>University of Engineering and Technology,Taxila</td>
            <td>2023 - 2027</td>
            <td>3.83 CGPA</td>
          </tr>
          <tr>
            <td>Intermediate (Pre-Engineering)</td>
            <td>Punjab Group of Colleges</td>
            <td>2021 - 2023</td>
            <td>A+</td>
          </tr>
          <tr>
            <td>Matriculation (Science)</td>
            <td>ICG F-6/2 Islamabad</td>
            <td>2019 - 2021</td>
            <td>A+</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Education;
