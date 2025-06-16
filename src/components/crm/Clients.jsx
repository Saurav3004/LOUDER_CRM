import React, { useEffect, useState } from "react";
import {
  Plus,
  Search,
  Mail,
  Phone,
  MapPin,
  Eye,
  Edit,
  Trash2,
  MoreVertical,
  Download,
} from "lucide-react";
import { handleFileUpload } from "../../../utils/upload";
import { fetchClients } from "../../../utils/fetchClient";



const Clients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClients, setSelectedClients] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    
    fetchClients(setClients);
  }, []);

  

  const handleSelectClient = (clientId) => {
    setSelectedClients((prev) =>
      prev.includes(clientId)
        ? prev.filter((id) => id !== clientId)
        : [...prev, clientId]
    );
  };

  const handleSelectAll = () => {
    setSelectedClients(
      selectedClients.length === clients.length
        ? []
        : clients.map((client) => client._id)
    );
  };

  const filteredClients = clients.filter((client) =>
    `${client.firstName || ""} ${client.lastName || ""}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-3 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-600">
            Manage your users contacts and details.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Add User</span>
          </button>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={(e) => handleFileUpload(e, () => fetchClients(setClients))}
            className="hidden"
            id="excel-upload"
          />
          <label
            htmlFor="excel-upload"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center space-x-2 cursor-pointer"
          >
            <span className="flex items-center justify-center gap-2">
              Import <Download size={15} />
            </span>
          </label>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative w-full sm:w-80">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
        <table className="min-w-[1200px] w-full table-auto">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedClients.length === clients.length}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300 text-purple-600"
                />
              </th>
              {[
                "Users",
                "Email",
                "Mobile",
                "Registration Number",
                "DOB",
                "Purchase Amount",
                "Purchased On",
                "Ticket Type",
                "Tickets Count",
                "Session",
                "Funds Status",
                "Re Enter Email",
                "Checked In",
                "Gender",
                "Status",
                "Price",
                "Tracking Code",
                "Discount Code",
                "Actions",
              ].map((heading) => (
                <th
                  key={heading}
                  className="px-6 py-3 text-left text-sm font-semibold text-gray-500"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredClients.map((client) => (
              <tr key={client._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedClients.includes(client._id)}
                    onChange={() => handleSelectClient(client._id)}
                    className="rounded border-gray-300 text-purple-600"
                  />
                </td>

                {/* User Column */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <span className="font-medium text-gray-600 dark:text-gray-300">
                        {client.firstName[0]}
                        {client.lastName[0]}
                      </span>
                    </div>

                    <div>
                      <div className="font-medium text-gray-900">
                        {client.firstName} {client.lastName}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center space-x-1">
                        <Mail className="w-4 h-4" />
                        <span>{client.email}</span>
                      </div>
                      <div className="text-sm text-gray-500 flex items-center space-x-1">
                        <Phone className="w-4 h-4" />
                        <span>{client.mobile}</span>
                      </div>
                    </div>
                  </div>
                </td>

                {/* Other Fields */}
                {[
                  client.email,
                  client.mobile,
                  client.regNumber,
                  client.dob,
                  client.purchaseAmount,
                  client.purchasedOn,
                  client.ticketType,
                  client.ticketsCount,
                  client.session,
                  client.fundsStatus,
                  client.reEnterEmail,
                  client.checkedIn,
                  client.gender,
                  client.status,
                  client.price,
                  client.trackingCode,
                  client.discountCode,
                ].map((field, idx) => (
                  <td key={idx} className="px-6 py-4 text-sm text-gray-700">
                    {field || "-"}
                  </td>
                ))}

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button title="View">
                      <Eye className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                    </button>
                    <button title="Edit">
                      <Edit className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                    </button>
                    <button title="Delete">
                      <Trash2 className="w-5 h-5 text-red-500 hover:text-red-700" />
                    </button>
                    <button title="More">
                      <MoreVertical className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredClients.length === 0 && (
              <tr>
                <td
                  colSpan="16"
                  className="text-center px-6 py-4 text-gray-500"
                >
                  No clients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clients;
