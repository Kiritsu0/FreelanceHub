import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid"; // Importing the uuid library to generate unique IDs for jobs
import { GlobalContext } from "../../context"; // Importing the global context to access the state

function CreateJobs() {
  // Accessing the setCreatedJobsData function from GlobalContext to update the job data
  const { setCreatedJobsData } = useContext(GlobalContext);

  // Initializing formData state to hold the values of the form fields
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    company: "",
    image: "",
    salary: "",
    employmentType: "",
    description: "",
  });

  // handleChange function updates the formData state as the user inputs values
  const handleChange = (e) => {
    const { id, value, files } = e.target;

    // If the "image" field is being updated and a file is selected
    if (id === "image" && files.length > 0) {
      const file = files[0];
      const reader = new FileReader(); // FileReader to convert the image file to a Base64 string

      // Once the file is read, update the formData with the Base64 string
      reader.onloadend = () => {
        setFormData({ ...formData, [id]: reader.result });
      };
      reader.readAsDataURL(file); // Start reading the file as a Data URL (Base64)
    } else {
      // For other fields, simply update the formData state with the input value
      setFormData({ ...formData, [id]: value });
    }
  };

  // Array of field configurations to dynamically generate the form inputs
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
      label: "Salary Range",
      id: "salary",
      type: "number",
      placeholder: "Enter salary in USD",
    },
    {
      label: "Employment Type",
      id: "employmentType",
      type: "text",
      placeholder: "fulltime/parttime/intern/contractor",
    },
    {
      label: "Description",
      id: "description",
      type: "textarea",
      placeholder: "Enter job description",
      colSpan: true, // colSpan indicates this field should span across two columns
    },
  ];

  // handleSubmit function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Create a new job object using the formData and a unique ID
    const newJob = {
      id: uuidv4(),
      title: formData.title,
      location: formData.location,
      company: formData.company,
      image: formData.image,
      salary: formData.salary,
      employmentType: formData.employmentType,
      description: formData.description,
    };

    // Update the job data in the global context
    setCreatedJobsData((prevJobs) => [...prevJobs, newJob]);

    // Clear the form fields after submission by resetting formData
    setFormData({
      title: "",
      location: "",
      company: "",
      image: "",
      salary: "",
      employmentType: "",
      description: "",
    });
  };

  // Return the form UI
  return (
    <div className="mx-5 mb-20">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-[50rem] p-3 dark:bg-blue-800 flex flex-col bg-white rounded-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {fields.map(({ label, id, type, placeholder, colSpan }) => (
            <div
              key={id}
              className={`flex flex-col gap-2 ${
                colSpan ? "md:col-span-2" : ""
              }`}
            >
              <label
                htmlFor={id}
                className="text-2xl font-semibold dark:text-white"
              >
                {label}
              </label>
              {type === "textarea" ? (
                // Render a textarea if the field type is "textarea"
                <textarea
                  id={id}
                  placeholder={placeholder}
                  value={formData[id]}
                  onChange={handleChange}
                  required
                  className="p-2 text-xl bg-slate-300 rounded-md focus:outline-none"
                />
              ) : (
                // Render an input field for other field types
                <input
                  type={type}
                  id={id}
                  placeholder={placeholder}
                  value={type === "file" ? undefined : formData[id]}
                  onChange={handleChange}
                  required
                  className={`p-2 text-xl bg-slate-300 rounded-md focus:outline-none w-full ${
                    type === "file" ? "h-12" : "h-9"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-500 rounded-md mt-5 p-2 font-semibold text-xl hover:bg-blue-600"
        >
          Create Job
        </button>
      </form>
    </div>
  );
}

export default CreateJobs;
