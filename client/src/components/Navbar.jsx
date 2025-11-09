// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <div>
//       <nav className="flex justify-between items-center mb-6">
//         <NavLink to="/">
//         <div  className="bg-sky-300 ...">
//           <img className="object-fill h-30 w-60 " src="https://i.ibb.co/0cMzXsp/png-clipart-human-resource-management-system-time-and-attendance-service-employees-international-uni.png" />
//         </div>
//         </NavLink>


//         <h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">
//           Employee Management System (CRUD MERN Full Stack)
//         </h2>

//         <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" to="/create">
//           Create Employee
//         </NavLink>
//       </nav>
//     </div>
//   );
// }



import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center mb-6 p-4 bg-white shadow-md rounded-lg">
      {/* Logo (clickable home link) */}
      <NavLink to="/" className="flex items-center space-x-2">
        <img
          src="https://i.ibb.co/0cMzXsp/png-clipart-human-resource-management-system-time-and-attendance-service-employees-international-uni.png"
          alt="EMS Logo"
          className="object-contain h-16 w-40"
        />
      </NavLink>

      {/* Title */}
      <h2 className="text-center md:text-left text-2xl md:text-3xl font-semibold text-slate-800 mt-4 md:mt-0">
        Employee Management System
        <span className="block text-slate-500 text-base md:text-lg">
          (CRUD MERN Full Stack)
        </span>
      </h2>

      {/* Create Button */}
      <NavLink
        to="/create"
        className="mt-4 md:mt-0 inline-flex items-center justify-center text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 border border-slate-300 bg-sky-100 hover:bg-sky-200 text-slate-900 h-10 rounded-md px-4"
      >
        + Create Employee
      </NavLink>
    </nav>
  );
}
