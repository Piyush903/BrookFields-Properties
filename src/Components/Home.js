// import React from "react";
// import ReactFlow, { Controls, MarkerType } from "reactflow";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from "../assests/Logo.svg";
// import {
//   faHome,
//   faList,
//   faCalendar,
//   faFileAlt,
//   faBell,
//   faUser,
//   faQuestionCircle,
//   faCog,
//   faSearch,
//   faBuilding,
// } from "@fortawesome/free-solid-svg-icons"; // Import Font Awesome icons
// import "reactflow/dist/style.css"; // Import necessary React Flow styles

// // Custom Card, CardHeader, and CardContent components
// const Card = ({ children, className }) => (
//   <div
//     className={`bg-white rounded-lg shadow-lg border ${className}`}
//     style={{
//       width: "200px",
//       height: "100px",
//       padding: "10px",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//     }}
//   >
//     {children}
//   </div>
// );

// const CardHeader = ({ children, className }) => (
//   <div
//     className={`flex justify-center items-center ${className}`}
//     style={{ marginBottom: "5px" }}
//   >
//     {children}
//   </div>
// );

// const CardContent = ({ children, className }) => (
//   <div
//     className={`text-center ${className}`}
//     style={{ fontSize: "14px", lineHeight: "1.5" }}
//   >
//     {children}
//   </div>
// );

// const CustomNode = ({ data }) => (
//   <Card className="w-48 border border-gray-300 shadow-md">
//     <CardHeader>
//       {data.type === "company" ? (
//         <FontAwesomeIcon icon={faBuilding} size="2x" />
//       ) : (
//         <FontAwesomeIcon icon={faUser} size="2x" />
//       )}
//     </CardHeader>
//     <CardContent>
//       <p className="font-semibold">{data.label}</p>
//       <p className="text-sm text-gray-600">{data.role}</p>
//     </CardContent>
//   </Card>
// );

// const initialNodes = [
//   {
//     id: "1",
//     type: "custom",
//     position: { x: 300, y: 0 },
//     data: { label: "Brookfield Properties", type: "company", role: "Company" },
//   },
//   {
//     id: "2",
//     type: "custom",
//     position: { x: 150, y: 200 },
//     data: { label: "John Doe", type: "person", role: "CEO" },
//   },
//   {
//     id: "3",
//     type: "custom",
//     position: { x: 450, y: 200 },
//     data: { label: "Jane Smith", type: "person", role: "CFO" },
//   },
//   {
//     id: "4",
//     type: "custom",
//     position: { x: 0, y: 400 },
//     data: { label: "Alice Johnson", type: "person", role: "Manager" },
//   },
//   {
//     id: "5",
//     type: "custom",
//     position: { x: 300, y: 400 },
//     data: { label: "Bob Brown", type: "person", role: "Manager" },
//   },
//   {
//     id: "6",
//     type: "custom",
//     position: { x: 600, y: 400 },
//     data: { label: "Charlie White", type: "person", role: "Manager" },
//   },
// ];

// const initialEdges = [
//   {
//     id: "e1-2",
//     source: "1",
//     target: "2",
//     markerEnd: {
//       type: MarkerType.Arrow,
//     },
//   },
//   {
//     id: "e1-3",
//     source: "1",
//     target: "3",
//     markerEnd: {
//       type: MarkerType.Arrow,
//     },
//   },
//   {
//     id: "e2-4",
//     source: "2",
//     target: "4",
//     markerEnd: {
//       type: MarkerType.Arrow,
//     },
//   },
//   {
//     id: "e2-5",
//     source: "2",
//     target: "5",
//     markerEnd: {
//       type: MarkerType.Arrow,
//     },
//   },
//   {
//     id: "e3-6",
//     source: "3",
//     target: "6",
//     markerEnd: {
//       type: MarkerType.Arrow,
//     },
//   },
// ];

// const nodeTypes = {
//   custom: CustomNode,
// };

// const Dashboard = () => {
//   return (
//     <div className="h-screen flex flex-col">
//       {/* Navbar */}
//       <header className="bg-white shadow border-b-2 border-blue-300">
//         <div className="max-w-7xl mx-auto flex justify-between items-center p-2">
//           {" "}
//           {/* Reduced padding from p-4 to p-2 */}
//           {/* Logo Section */}
//           <div className="flex items-center">
//             <img src={logo} alt="Logo" className="w-32 mr-2" />
//           </div>
//           <div className="relative">
//             <input
//               type="search"
//               placeholder="Search..."
//               className="px-2 py-1 border border-gray-300 rounded-lg focus:outline-none"
//             />
//             <FontAwesomeIcon
//               icon={faSearch}
//               size="lg"
//               className="absolute right-2 top-1/2 transform -translate-y-1/2"
//             />
//           </div>
//           {/* Icons on the right */}
//           <div className="flex items-center space-x-4">
//             <a href="#" className="text-gray-800">
//               <FontAwesomeIcon icon={faBell} size="lg" />
//             </a>
//             <a href="#" className="text-gray-800">
//               <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
//             </a>
//             <a href="#" className="text-gray-800">
//               <FontAwesomeIcon icon={faCog} size="lg" />
//             </a>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <nav className="bg-white shadow">
//           <div className="max-w-7xl mx-auto flex justify-between items-center p-2">
//             {" "}
//             {/* Reduced padding here as well */}
//             <a
//               href="#"
//               className="relative px-4 py-1 text-gray-800 hover:text-blue-600 focus:text-blue-600 transition-colors duration-200"
//             >
//               Home
//               <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-600 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
//             </a>
//             <a
//               href="#"
//               className="relative px-4 py-1 text-gray-800 hover:text-blue-600 focus:text-blue-600 transition-colors duration-200"
//             >
//               Leads
//               <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-600 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
//             </a>
//             <a
//               href="#"
//               className="relative px-4 py-1 text-gray-800 hover:text-blue-600 focus:text-blue-600 transition-colors duration-200"
//             >
//               Accounts
//               <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-600 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
//             </a>
//             <a
//               href="#"
//               className="relative px-4 py-1 text-gray-800 hover:text-blue-600 focus:text-blue-600 transition-colors duration-200"
//             >
//               Calendar
//               <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-600 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
//             </a>
//             <a
//               href="#"
//               className="relative px-4 py-1 text-gray-800 hover:text-blue-600 focus:text-blue-600 transition-colors duration-200"
//             >
//               Invoices
//               <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-600 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
//             </a>
//           </div>
//         </nav>
//       </header>

//       {/* Main content */}
//       <main className="flex-grow bg-white-50">
//         <div className="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
//           <div className="px-4 py-4 sm:px-0">
//             <div className="border border-gray-300 rounded-lg h-96">
//               <ReactFlow
//                 nodes={initialNodes}
//                 edges={initialEdges}
//                 nodeTypes={nodeTypes}
//                 fitView
//                 style={{ width: "100%", height: "500px" }}
//                 panOnDrag={false} // Disables dragging to move the view
//                 nodesDraggable={false} // Prevents nodes from being dragged
//                 zoomOnScroll={true} // Allows zooming with scroll
//                 zoomOnPinch={true} // Allows zooming with pinch gestures (trackpad, touch)
//               >
//                 <Controls showInteractive={false} style={{ left: 10 }} />{" "}
//                 {/* Zoom controls */}
//               </ReactFlow>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer (optional) */}
//   <footer className="bg-white text-center py-4 shadow">
//     <p className="text-gray-600">
//       © 2024 Brookfield Properties. All rights reserved.
//     </p>
//   </footer>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState } from "react";
import ReactFlow, { Controls, MarkerType, Handle } from "reactflow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assests/Logo.svg";
import {
  faHome,
  faList,
  faCalendar,
  faFileAlt,
  faBell,
  faUser,
  faQuestionCircle,
  faCog,
  faSearch,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons"; // Import Font Awesome icons
import "reactflow/dist/style.css"; // Import necessary React Flow styles
import { Link } from "react-router-dom";

// Custom Card, CardHeader, and CardContent components
const Card = ({ children, className }) => (
  <div
    className={`bg-white rounded-lg shadow-lg border ${className}`}
    style={{
      width: "320px",
      height: "150px",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className }) => (
  <div
    className={`flex flex-col justify-center items-center ${className}`}
    style={{ marginBottom: "5px" }}
  >
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div
    className={`text-center ${className}`}
    style={{ fontSize: "14px", lineHeight: "1.5" }}
  >
    {children}
  </div>
);

const CustomNode = ({ data }) => (
  <Card className="border border-gray-300 shadow-md p-2">
    {/* Render the top handle for chief and person types, not for company */}
    {(data.type === "chief" || data.type === "person") && (
      <Handle type="target" position="top" />
    )}

    {/* Icon container with square dark blue background */}

    {data.type === "company" ? (
      <div className="flex flex-col items-center">
        <div className="p2 mr-3">
          <FontAwesomeIcon icon={faBuilding} size="2x" color="blue" />
        </div>
        <div className="flex-1">
          <CardHeader>
            <p className="font-semibold">{data.label}</p>
            <p className="text-sm text-gray-600">{data.role}</p>
          </CardHeader>
          {/* Additional details for user and chief */}
          {(data.type === "chief" || data.type === "person") && (
            <CardContent className="text-sm text-gray-600">
              <p>{data.email}</p>
              <p>{data.mobile}</p>
            </CardContent>
          )}
        </div>
      </div>
    ) : (
      <div className="flex items-start">
        <div className="bg-slate-200 rounded-md p-3 mr-3">
          <FontAwesomeIcon icon={faUser} size="2x" color="white" />
        </div>
        <div className="flex-1">
          <CardHeader>
            <p className="font-semibold">{data.label}</p>
            <p className="text-sm text-gray-600">{data.role}</p>
          </CardHeader>
          {/* Additional details for user and chief */}
          {(data.type === "chief" || data.type === "person") && (
            <CardContent className="text-sm text-gray-600">
              <p>{data.email}</p>
              <p>{data.mobile}</p>
            </CardContent>
          )}
        </div>
      </div>
    )}

    {/* Render the bottom handle for company and chief types */}
    {(data.type === "company" || data.type === "chief") && (
      <Handle type="source" position="bottom" />
    )}
  </Card>
);

const initialNodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 300, y: 0 },
    data: {
      label: "Brookfield Properties",
      type: "company",
      role: "Company",
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 100, y: 200 },
    data: {
      label: "John Doe",
      type: "chief",
      role: "CEO",
      email: "john.doe@brookfieldproperties.com",
      mobile: "+1234567890",
    },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 500, y: 200 },
    data: {
      label: "Jane Smith",
      type: "chief",
      role: "CFO",
      email: "jane.smith@brookfieldproperties.com",
      mobile: "+0987654321",
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: -100, y: 400 },
    data: {
      label: "Alice Johnson",
      type: "person",
      role: "Manager",
      email: "alice.johnson@brookfieldproperties.com",
      mobile: "+1122334455",
    },
  },
  {
    id: "5",
    type: "custom",
    position: { x: 350, y: 400 },
    data: {
      label: "Bob Brown",
      type: "person",
      role: "Manager",
      email: "bob.brown@brookfieldproperties.com",
      mobile: "+2233445566",
    },
  },
  {
    id: "6",
    type: "custom",
    position: { x: 750, y: 400 },
    data: {
      label: "Charlie White",
      type: "person",
      role: "Manager",
      email: "charlie.white@brookfieldproperties.com",
      mobile: "+3344556677",
    },
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: "e2-5",
    source: "2",
    target: "5",
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: "e3-6",
    source: "3",
    target: "6",
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
];

const nodeTypes = {
  custom: CustomNode,
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = ["Home", "Request", "Accounts", "Calendar", "Invoices"];
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow border-b-2 border-blue-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-2">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-32 mr-2" />
          </div>
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="px-2 py-1 border border-gray-300 rounded-lg focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            />
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-800">
              <FontAwesomeIcon icon={faBell} size="lg" />
            </a>
            <a href="#" className="text-gray-800">
              <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
            </a>
            <a href="#" className="text-gray-800">
              <FontAwesomeIcon icon={faCog} size="lg" />
            </a>
          </div>
        </div>

        <nav className="bg-white">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                onClick={() => setActiveTab(item)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200
              ${
                activeTab === item
                  ? "text-blue-600 bg-blue-100"
                  : "text-gray-800 hover:text-blue-600 hover:bg-blue-50"
              }`}
              >
                {activeTab === item && (
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-blue-300"></span>
                )}
                {item}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow bg-white-50">
        <div className="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
          <div className="px-4 py-4 sm:px-0">
            <div className="border border-gray-300 rounded-lg h-96">
              <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                nodeTypes={nodeTypes}
                fitView
                style={{ width: "100%", height: "500px" }}
                panOnDrag={false} // Disables dragging to move the view
                panOnScroll={false} // Disables panning with scroll
              >
                <Controls />
              </ReactFlow>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white text-center py-4 shadow">
        <p className="text-gray-600">
          © 2024 Brookfield Properties. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
