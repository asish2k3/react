import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">

<h2><label>Name</label> <br /> </h2>
      <input
        type="name"
        placeholder="name"
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })

        }
      />

      <h2><label>phone</label> <br /> </h2>
      <input
        type="number"
        placeholder="Phone"
        value={formData.phone}
        onChange={(event) =>
          setFormData({ ...formData, phone: event.target.value })       
        
        }
      />
      <h2><label>email</label> <br /> </h2>
      <input
        type="email"
        placeholder="email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
    </div>
  );
}

export default SignUpInfo;
