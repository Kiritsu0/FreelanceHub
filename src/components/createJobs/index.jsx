import React, { useState } from "react";

function CreateJobs() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    company: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "image" && files.length > 0) {
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

  const fields = [
    {
      label: "Job Title",
      id: "title",
      type: "text",
      placeholder: "Enter job title",
    },
    {
      label: "Location",
      id: "location",
      type: "text",
      placeholder: "Enter location",
    },
    {
      label: "Company Name",
      id: "company",
      type: "text",
      placeholder: "Enter company name",
    },
    {
      label: "Company Logo",
      id: "image",
      type: "file",
      placeholder: "Upload company logo",
    },
    {
      label: "Description",
      id: "description",
      type: "textarea",
      placeholder: "Enter job description",
      colSpan: true,
    },
  ];

  return (
    <div className="mx-5">
      <form className="mx-auto max-w-[50rem] p-3 dark:bg-green-800 bg-white grid grid-cols-1 md:grid-cols-2 gap-14 rounded-md">
        {fields.map(({ label, id, type, placeholder, colSpan }) => (
          <div
            key={id}
            className={`flex flex-col gap-2 ${colSpan ? "md:col-span-2" : ""}`}
          >
            <label
              htmlFor={id}
              className="text-2xl font-semibold dark:text-white"
            >
              {label}
            </label>
            {type === "textarea" ? (
              <textarea
                id={id}
                placeholder={placeholder}
                value={formData[id]}
                onChange={handleChange}
                className="p-2 text-xl bg-slate-300 rounded-md focus:outline-none"
              />
            ) : (
              <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={type === "file" ? undefined : formData[id]}
                onChange={handleChange}
                className={`p-2 text-xl bg-slate-300 rounded-md focus:outline-none ${
                  type === "file" ? "h-12" : "h-9"
                }`}
              />
            )}
          </div>
        ))}
      </form>
    </div>
  );
}

export default CreateJobs;
