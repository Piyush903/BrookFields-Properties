import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSync,
  faFileInvoice,
  faBell,
  faQuestionCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assests/Logo.svg"; // Make sure to import your logo

const SiteIssueManagement = () => {
  const navItems = ["Home", "Request", "Accounts", "Calendar", "Invoices"];
  const [activeTab, setActiveTab] = useState("Request");

  const initialIssues = [
    {
      id: 1,
      itemPoints:
        "Building 6AB,&,8AB will be implemented with ADA compliance. 8B & 6A",
      siteLevel: "8B & 6A",
      importance: "Medium",
      actionBy: "Brookfield",
      issueReported: "2022-05-01",
      status: "WIP",
      targetCompletion: "2023-06-30",
      comments: "WIP, for both 6A & 8B audit planned by 27th May 23.",
    },
  ];

  const [issues, setIssues] = useState(initialIssues);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    itemPoints: "",
    siteLevel: "",
    importance: "",
    actionBy: "",
    issueReported: "",
    status: "",
    targetCompletion: "",
    comments: "",
  });

  const handleNewIssue = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      itemPoints: "",
      siteLevel: "",
      importance: "",
      actionBy: "",
      issueReported: "",
      status: "",
      targetCompletion: "",
      comments: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIssues([...issues, { ...formData, id: Date.now() }]);
    handleCloseModal();
  };

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
      <main className="flex-grow bg-gray-50 p-4 overflow-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faFileInvoice}
                  className="text-green-500 text-2xl mr-2"
                />
                <h2 className="text-lg font-semibold text-gray-700">
                  Requests ({issues.length})
                </h2>
                <span className="ml-2 text-sm text-gray-500">
                  • Filtered by Status • Updated a few seconds ago
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded">
                  <FontAwesomeIcon icon={faCog} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <FontAwesomeIcon icon={faSync} className="text-gray-600" />
                </button>
                <button
                  onClick={handleNewIssue}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-3 rounded"
                >
                  New
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">
                    <input type="checkbox" className="mr-2" />
                    Item Points
                  </th>
                  <th className="px-6 py-3">Site Level</th>
                  <th className="px-6 py-3">Importance</th>
                  <th className="px-6 py-3">Action By</th>
                  <th className="px-6 py-3">Issue Reported</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Target Completion</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {issues.map((issue) => (
                  <tr
                    key={issue.id}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-medium">
                      <input type="checkbox" className="mr-2" />
                      {issue.itemPoints}
                    </td>
                    <td className="px-6 py-4">{issue.siteLevel}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium
                        ${
                          issue.importance === "High"
                            ? "bg-red-100 text-red-800"
                            : issue.importance === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {issue.importance}
                      </span>
                    </td>
                    <td className="px-6 py-4">{issue.actionBy}</td>
                    <td className="px-6 py-4">{issue.issueReported}</td>
                    <td className="px-6 py-4">{issue.status}</td>
                    <td className="px-6 py-4">{issue.targetCompletion}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-500 hover:text-gray-700">
                        ▼
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t text-center">
            <button className="text-blue-500 hover:text-blue-600 font-medium">
              View All
            </button>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">
            <h2 className="text-xl font-bold mb-4">New Site Issue</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="itemPoints"
                  >
                    Item Points discussed
                  </label>
                  <input
                    type="text"
                    id="itemPoints"
                    name="itemPoints"
                    value={formData.itemPoints}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="siteLevel"
                  >
                    Site Level
                  </label>
                  <input
                    type="text"
                    id="siteLevel"
                    name="siteLevel"
                    value={formData.siteLevel}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="importance"
                  >
                    Importance
                  </label>
                  <select
                    id="importance"
                    name="importance"
                    value={formData.importance}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select Importance</option>
                    <option value="High">High (Red)</option>
                    <option value="Medium">Medium (Amber)</option>
                    <option value="Low">Low (Green)</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="actionBy"
                  >
                    Action By
                  </label>
                  <select
                    id="actionBy"
                    name="actionBy"
                    value={formData.actionBy}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select Action By</option>
                    <option value="MS">MS</option>
                    <option value="Landlord">Landlord</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="issueReported"
                  >
                    Issue Reported
                  </label>
                  <input
                    type="date"
                    id="issueReported"
                    name="issueReported"
                    value={formData.issueReported}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="status"
                  >
                    Status
                  </label>
                  <input
                    type="text"
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="targetCompletion"
                  >
                    Target for Completion
                  </label>
                  <input
                    type="date"
                    id="targetCompletion"
                    name="targetCompletion"
                    value={formData.targetCompletion}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="comments"
                >
                  Comments and Updates
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="3"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <footer className="bg-white text-center py-4 shadow">
        <p className="text-gray-600">
          © 2024 Brookfield Properties. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default SiteIssueManagement;
