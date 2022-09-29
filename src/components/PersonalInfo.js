import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <h2><label>location</label></h2>
      <input
        type="text"
        placeholder="location"
        value={formData.location}
        onChange={(e) => {
          setFormData({ ...formData, location: e.target.value });
        }}
      />
      <h2><label>age</label>  </h2>
      <input
        type="text"
        placeholder="age"
        value={formData.age}
        onChange={(e) => {
          setFormData({ ...formData, age: e.target.value });
        }}
      />
      <h2><label>jobtitle</label> </h2>
      <input
        type="text"
        placeholder="jobtitle"
        value={formData.jobtitle}
        onChange={(e) => {
          setFormData({ ...formData, jobtitle: e.target.value });
        }}
      />
    </div>
  );
}

export default PersonalInfo;
