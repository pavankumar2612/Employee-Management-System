// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// export default function Record() {
//   const [form, setForm] = useState({
//     name: "",
//     position: "",
//     level: "",
//   });
//   const [isNew, setIsNew] = useState(true);
//   const params = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchData() {
//       const id = params.id?.toString() || undefined;
//       if(!id) return;
//       setIsNew(false);
//       const response = await fetch(
//         `http://localhost:5050/record/${params.id.toString()}`
//       );
//       if (!response.ok) {
//         const message = `An error has occurred: ${response.statusText}`;
//         console.error(message);
//         return;
//       }
//       const record = await response.json();
//       if (!record) {
//         console.warn(`Record with id ${id} not found`);
//         navigate("/");
//         return;
//       }
//       setForm(record);
//     }
//     fetchData();
//     return;
//   }, [params.id, navigate]);

//   // These methods will update the state properties.
//   function updateForm(value) {
//     return setForm((prev) => {
//       return { ...prev, ...value };
//     });
//   }

//   // This function will handle the submission.
//   async function onSubmit(e) {
//     e.preventDefault();
//     const person = { ...form };
//     try {
//       let response;
//       if (isNew) {
//         // if we are adding a new record we will POST to /record.
//         response = await fetch("http://localhost:5050/record", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(person),
//         });
//       } else {
//         // if we are updating a record we will PATCH to /record/:id.
//         response = await fetch(`http://localhost:5050/record/${params.id}`, {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(person),
//         });
//       }

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//     } catch (error) {
//       console.error('A problem occurred with your fetch operation: ', error);
//     } finally {
//       setForm({ name: "", position: "", level: "" });
//       navigate("/");
//     }
//   }

//   // This following section will display the form that takes the input from the user.
//   return (
//     <>
//       <h3 className="text-lg font-semibold p-4">Create/Update Employee Record</h3>
//       <form
//         onSubmit={onSubmit}
//         className="border rounded-lg overflow-hidden p-4"
//       >
//         <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-slate-900/10 pb-12 md:grid-cols-2">
//           <div>
//             <h2 className="text-base font-semibold leading-7 text-slate-900">
//               Employee Info
//             </h2>
//             <p className="mt-1 text-sm leading-6 text-slate-600">
//               This information will be displayed publicly so be careful what you
//               share.
//             </p>
//           </div>

//           <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 ">
//             <div className="sm:col-span-4">
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium leading-6 text-slate-900"
//               >
//                 Name
//               </label>
//               <div className="mt-2">
//                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                   <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
//                     placeholder="First Last"
//                     value={form.name}
//                     onChange={(e) => updateForm({ name: e.target.value })}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="sm:col-span-4">
//               <label
//                 htmlFor="position"
//                 className="block text-sm font-medium leading-6 text-slate-900"
//               >
//                 Position
//               </label>
//               <div className="mt-2">
//                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                   <input
//                     type="text"
//                     name="position"
//                     id="position"
//                     className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
//                     placeholder="Developer Advocate"
//                     value={form.position}
//                     onChange={(e) => updateForm({ position: e.target.value })}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div>
//               <fieldset className="mt-4">
//                 <legend className="sr-only">Position Options</legend>
//                 <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
//                   <div className="flex items-center">
//                     <input
//                       id="positionIntern"
//                       name="positionOptions"
//                       type="radio"
//                       value="Intern"
//                       className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-600 cursor-pointer"
//                       checked={form.level === "Intern"}
//                       onChange={(e) => updateForm({ level: e.target.value })}
//                     />
//                     <label
//                       htmlFor="positionIntern"
//                       className="ml-3 block text-sm font-medium leading-6 text-slate-900 mr-4"
//                     >
//                       Intern
//                     </label>
//                     <input
//                       id="positionJunior"
//                       name="positionOptions"
//                       type="radio"
//                       value="Junior"
//                       className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-600 cursor-pointer"
//                       checked={form.level === "Junior"}
//                       onChange={(e) => updateForm({ level: e.target.value })}
//                     />
//                     <label
//                       htmlFor="positionJunior"
//                       className="ml-3 block text-sm font-medium leading-6 text-slate-900 mr-4"
//                     >
//                       Junior
//                     </label>
//                     <input
//                       id="positionSenior"
//                       name="positionOptions"
//                       type="radio"
//                       value="Senior"
//                       className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-600 cursor-pointer"
//                       checked={form.level === "Senior"}
//                       onChange={(e) => updateForm({ level: e.target.value })}
//                     />
//                     <label
//                       htmlFor="positionSenior"
//                       className="ml-3 block text-sm font-medium leading-6 text-slate-900 mr-4"
//                     >
//                       Senior
//                     </label>
//                   </div>
//                 </div>
//               </fieldset>
//             </div>
//           </div>
//         </div>
//         <input
//           type="submit"
//           value="Save Employee Record"
//           className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer mt-4"
//         />
//       </form>
//     </>
//   );
// }



import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function RecordForm() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
  });
  const [isNew, setIsNew] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  // Fetch record data when editing
  useEffect(() => {
    async function fetchData() {
      const id = params.id?.toString();
      if (!id) return; // If no id, it's a new record
      
      try {
        setIsNew(false);
        const response = await fetch(`/record/${id}`);
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }

        const record = await response.json();
        if (!record) {
          console.warn(`Record with id ${id} not found`);
          navigate("/");
          return;
        }

        setForm({
          name: record.name || "",
          position: record.position || "",
          level: record.level || "",
        });
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchData();
  }, [params.id, navigate]);

  // Update form fields
  function updateForm(value) {
    setForm((prev) => ({ ...prev, ...value }));
  }

  // Handle submit (POST for new, PATCH for edit)
  async function onSubmit(e) {
    e.preventDefault();

    const employeeData = { ...form };

    try {
      const url = isNew
        ? "/record"
        : `/record/${params.id}`;

      const method = isNew ? "POST" : "PATCH";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Optionally show success message
      console.log("Record saved successfully!");

      // Clear form after submission
      setForm({ name: "", position: "", level: "" });

      // Redirect to home after success
      navigate("/");
    } catch (error) {
      console.error("Error saving record:", error);
    }
  }

  return (
    <>
      <h3 className="text-lg font-semibold p-4">
        {isNew ? "Create Employee Record" : "Update Employee Record"}
      </h3>

      <form
        onSubmit={onSubmit}
        className="border rounded-lg overflow-hidden p-4"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-slate-900/10 pb-12 md:grid-cols-2">
          <div>
            <h2 className="text-base font-semibold leading-7 text-slate-900">
              Employee Info
            </h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Please provide accurate employee details.
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8">
            {/* Name Field */}
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full rounded-md border border-slate-300 py-1.5 px-2 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => updateForm({ name: e.target.value })}
                />
              </div>
            </div>

            {/* Position Field */}
            <div className="sm:col-span-4">
              <label
                htmlFor="position"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Position
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="position"
                  id="position"
                  required
                  className="block w-full rounded-md border border-slate-300 py-1.5 px-2 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Software Engineer"
                  value={form.position}
                  onChange={(e) => updateForm({ position: e.target.value })}
                />
              </div>
            </div>

            {/* Level Radio Buttons */}
            <div>
              <fieldset className="mt-4">
                <legend className="sr-only">Level</legend>
                <div className="flex items-center gap-6">
                  {["Intern", "Junior", "Senior"].map((level) => (
                    <label
                      key={level}
                      className="flex items-center gap-2 text-sm font-medium text-slate-900"
                    >
                      <input
                        type="radio"
                        name="level"
                        value={level}
                        checked={form.level === level}
                        onChange={(e) => updateForm({ level: e.target.value })}
                        className="h-4 w-4 border-slate-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      {level}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 inline-flex items-center justify-center whitespace-nowrap text-md font-medium border border-input bg-indigo-50 hover:bg-indigo-100 text-indigo-800 h-9 rounded-md px-4 transition-colors"
        >
          {isNew ? "Save Employee Record" : "Update Employee Record"}
        </button>
      </form>
    </>
  );
}
