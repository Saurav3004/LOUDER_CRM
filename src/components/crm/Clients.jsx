import React, { useState } from "react";
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
  Calendar,
  PartyPopper,
  DollarSign,
  Ticket,
  BookIcon,
  Activity,
} from "lucide-react";

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClients, setSelectedClients] = useState([]);

  const clients = [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567",
      dateOfBirth: "1992-05-15",
      gender: "Female",
      address: "123 Music Ave, Los Angeles, CA 90210",
      emergencyContact: "+1 (555) 987-6543",
      eventName: "Summer Music Festival 2025",
      eventDate: "2025-07-15",
      ticketType: "VIP",
      quantity: 2,
      totalAmount: 298,
      bookingDate: "2025-06-10",
      paymentMethod: "Credit Card",
      paymentStatus: "completed",
      bookingStatus: "confirmed",
      specialRequests: "Wheelchair accessible seating",
      dietaryRestrictions: "Vegetarian",
      avatar:
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
    },
    {
      id: "2",
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 (555) 234-5678",
      dateOfBirth: "1988-11-22",
      gender: "Male",
      address: "456 Art Blvd, San Francisco, CA 94110",
      emergencyContact: "+1 (555) 876-5432",
      eventName: "Tech Conference 2025",
      eventDate: "2025-08-22",
      ticketType: "Standard",
      quantity: 1,
      totalAmount: 299,
      bookingDate: "2025-06-08",
      paymentMethod: "PayPal",
      paymentStatus: "completed",
      bookingStatus: "confirmed",
      specialRequests: "None",
      dietaryRestrictions: "None",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
    },
    {
      id: "3",
      name: "Emily Davis",
      email: "emily.davis@email.com",
      phone: "+1 (555) 345-6789",
      dateOfBirth: "1995-03-08",
      gender: "Female",
      address: "789 Startup Lane, Austin, TX 73301",
      emergencyContact: "+1 (555) 765-4321",
      eventName: "Food & Wine Festival",
      eventDate: "2025-09-10",
      ticketType: "Premium",
      quantity: 3,
      totalAmount: 195,
      bookingDate: "2025-06-12",
      paymentMethod: "Credit Card",
      paymentStatus: "pending",
      bookingStatus: "pending",
      specialRequests: "Group seating preferred",
      dietaryRestrictions: "Gluten-free, Dairy-free",
      avatar:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
    },
    {
      id: "4",
      name: "Michael Brown",
      email: "michael.brown@email.com",
      phone: "+1 (555) 456-7890",
      dateOfBirth: "1985-07-30",
      gender: "Male",
      address: "321 Comedy St, Chicago, IL 60601",
      emergencyContact: "+1 (555) 654-3210",
      eventName: "Stand-up Comedy Night",
      eventDate: "2025-06-28",
      ticketType: "Standard",
      quantity: 2,
      totalAmount: 90,
      bookingDate: "2025-06-11",
      paymentMethod: "Debit Card",
      paymentStatus: "failed",
      bookingStatus: "cancelled",
      specialRequests: "Front row seats",
      dietaryRestrictions: "None",
      avatar:
        "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
    },
    {
      id: "5",
      name: "Lisa Wilson",
      email: "lisa.wilson@email.com",
      phone: "+1 (555) 567-8901",
      dateOfBirth: "1990-12-12",
      gender: "Female",
      address: "654 Gallery Ave, Los Angeles, CA 90028",
      emergencyContact: "+1 (555) 543-2109",
      eventName: "Art Exhibition Opening",
      eventDate: "2025-07-05",
      ticketType: "Standard",
      quantity: 1,
      totalAmount: 25,
      bookingDate: "2025-06-09",
      paymentMethod: "Credit Card",
      paymentStatus: "completed",
      bookingStatus: "confirmed",
      specialRequests: "Photography permission",
      dietaryRestrictions: "Vegan",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
    },
    {
      id: "6",
      name: "Alex Hales",
      email: "alex.hales@email.com",
      phone: "+1 (555) 877-8971",
      dateOfBirth: "1989-10-12",
      gender: "Male",
      address: "654 Gallery Ave, Los Angeles, CA 90028",
      emergencyContact: "+1 (555) 877-8971",
      eventName: "Art Exhibition Opening",
      eventDate: "2025-07-05",
      ticketType: "Standard",
      quantity: 1,
      totalAmount: 25,
      bookingDate: "2025-06-09",
      paymentMethod: "Credit Card",
      paymentStatus: "completed",
      bookingStatus: "confirmed",
      specialRequests: "Photography permission",
      dietaryRestrictions: "Vegan",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
    },
  ];

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
        : clients.map((client) => client.id)
    );
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-600">
            Manage your users contacts and details.
          </p>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center space-x-2 mt-4 sm:mt-0">
          <Plus className="w-5 h-5" />
          <span>Add User</span>
        </button>
      </div>

      {/* Search Bar */}
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

      {/* Table with horizontal scroll */}
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
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500">
                Users
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500">
                Address
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500">
                DOB
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500">
                Total Amount
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500">
                Event Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500">
                Payment Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500">
                Booking Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredClients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedClients.includes(client.id)}
                    onChange={() => handleSelectClient(client.id)}
                    className="rounded border-gray-300 text-purple-600"
                  />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={client.avatar}
                      alt={client.name}
                      className="w-12 h-12 rounded-full object-cover "
                    />
                    <div>
                      <div className="font-medium text-gray-900">
                        {client.name}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center space-x-1">
                        <Mail className="w-4 h-4" />
                        <span>{client.email}</span>
                      </div>
                      <div className="text-sm text-gray-500 flex items-center space-x-1">
                        <Phone className="w-4 h-4" />
                        <span>{client.phone}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{client.address}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>{client.dateOfBirth}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <span>{client.totalAmount}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <PartyPopper className="w-4 h-4 text-gray-400" />
                    <span>{client.eventName}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-gray-400" />
                    <span>{client.quantity}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    
                   <span
  className={`px-2 py-1 rounded-full text-xs font-medium border
    ${
      client.paymentStatus === "completed"
        ? "text-green-700 bg-green-100 border-green-300"
        : client.paymentStatus === "pending"
        ? "text-yellow-700 bg-yellow-100 border-yellow-300"
        : "text-red-700 bg-red-100 border-red-300"
    }
  `}
>
  {client.paymentStatus}
</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border
    ${
      client.bookingStatus === "confirmed"
        ? "text-green-700 bg-green-100 border-green-300"
        : client.bookingStatus === "pending"
        ? "text-yellow-700 bg-yellow-100 border-yellow-300"
        : "text-red-700 bg-red-100 border-red-300"
    }
  `}
                    >
                      {client.bookingStatus}
                    </span>
                  </div>
                </td>

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
                <td colSpan="5" className="text-center px-6 py-4 text-gray-500">
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
