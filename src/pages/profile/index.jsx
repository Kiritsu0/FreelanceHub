import { GlobalContext } from "../../context";
import { useContext, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

const Profile = () => {
  const { userName, setUserName, email, setEmail, password, setPassword, profileImage, setProfileImage } = useContext(GlobalContext);

  // Consolidated state for form data
  const [formData, setFormData] = useState({
    name: userName,
    email: email,
    password: password,
    profileImage: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "profileImage" && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, [id]: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  // Handle form submission for each field
  const handleSave = (field) => {
    if (field === "name") setUserName(formData.name);
    if (field === "email") setEmail(formData.email);
    if (field === "password") setPassword(formData.password);
    if (field === "profileImage") setProfileImage(formData.profileImage);
  };

  return (
    <div className="">
      <div className="w-96 mx-auto flex items-center justify-between mt-5 p-3 text-center bg-green-900">
        {profileImage ? (
          <img src={profileImage} alt="Profile" className="rounded-full w-20" />
        ) : (
          <FaUser className="bg-gray-200 rounded-full p-1 text-5xl lg:text-6xl" />
        )}
        <h1 className="font-semibold text-3xl capitalize text-white">{userName}</h1>
      </div>

      {/* Form Fields */}
      <div className="max-w-96 mx-auto bg-green-800 p-5">
        {[
          { label: "Username", id: "name", type: "text", placeholder: "Enter your Name", minLength: 3, maxLength: 15 },
          { label: "Email", id: "email", type: "email", placeholder: "Enter your Email", minLength: 5, maxLength: 50 },
          { label: "Password", id: "password", type: "password", placeholder: "Enter your Password", minLength: 6, maxLength: 20 },
          { label: "Profile Image", id: "profileImage", type: "file", placeholder: "Upload your Image" }
        ].map(({ label, id, type, placeholder, minLength, maxLength }, index) => (
          <form key={id} className="flex flex-col gap-1 ml-5 mb-8">
            <label htmlFor={id} className="flex items-center gap-2 justify-between mb-3 cursor-pointer">
              <h2 className="text-2xl font-semibold text-white">{label}</h2>
              <BiEdit className="text-2xl text-green-500" />
            </label>
            <div className="flex justify-between gap-3" style={{flexDirection: type === "file" ? "column" : ""}}>
              <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={type === "file" ? undefined : formData[id]}
                onChange={handleChange}
                minLength={minLength}
                maxLength={maxLength}
                className="rounded-md px-3 py-1 placeholder-slate-400 outline-none"
              />
              <button type="submit" onClick={() => handleSave(id)} className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">
                Save
              </button>
            </div>
            {index < 3 && <hr className="my-5" />}
          </form>
        ))}
      </div>
    </div>
  );
};

export default Profile;
