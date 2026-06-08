"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Plus, Edit2, Trash2, LogOut } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
}

export default function AdminDashboard() {
  const params = useParams();
  const locale = params.locale as string;
  const router = useRouter();
  
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      title: "Pembuatan Website",
      description: "Website modern dan responsif",
      category: "website",
    },
    {
      id: 2,
      title: "Pengembangan Game",
      description: "Game berkualitas tinggi",
      category: "game",
    },
    {
      id: 3,
      title: "Video Editing",
      description: "Editing video profesional",
      category: "video",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "website",
  });

  const handleAddService = () => {
    if (formData.title && formData.description) {
      if (editingId) {
        setServices(
          services.map((s) =>
            s.id === editingId ? { ...s, ...formData } : s
          )
        );
        setEditingId(null);
      } else {
        setServices([
          ...services,
          {
            id: Date.now(),
            ...formData,
          },
        ]);
      }
      setFormData({ title: "", description: "", category: "website" });
      setShowForm(false);
    }
  };

  const handleEditService = (service: Service) => {
    setFormData({
      title: service.title,
      description: service.description,
      category: service.category,
    });
    setEditingId(service.id);
    setShowForm(true);
  };

  const handleDeleteService = (id: number) => {
    setServices(services.filter((s) => s.id !== id));
  };

  const handleLogout = () => {
    router.push(`/${locale}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 text-sm mt-1">3G Digital Solution</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold bg-red-50 px-4 py-2 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Services Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Manage Services</h2>
            <button
              onClick={() => {
                setShowForm(!showForm);
                setEditingId(null);
                setFormData({ title: "", description: "", category: "website" });
              }}
              className="btn-primary flex items-center gap-2"
            >
              <Plus size={20} />
              Add Service
            </button>
          </div>

          {/* Add/Edit Service Form */}
          {showForm && (
            <div className="mb-8 p-6 bg-gray-50 rounded-lg border-2 border-red-200">
              <h3 className="text-xl font-bold mb-4">
                {editingId ? "Edit Service" : "Add New Service"}
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Contoh: Desain UI/UX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    rows={4}
                    placeholder="Describe this service..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="website">Website</option>
                    <option value="game">Game</option>
                    <option value="video">Video</option>
                  </select>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={handleAddService}
                    className="btn-primary flex-1"
                  >
                    {editingId ? "Update Service" : "Save Service"}
                  </button>
                  <button
                    onClick={() => {
                      setShowForm(false);
                      setEditingId(null);
                      setFormData({ title: "", description: "", category: "website" });
                    }}
                    className="btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Services List */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {service.title}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {service.description.substring(0, 50)}...
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                        {service.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleEditService(service)}
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteService(service.id)}
                          className="text-red-600 hover:text-red-700 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {services.length === 0 && !showForm && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">No services yet</p>
              <button
                onClick={() => setShowForm(true)}
                className="btn-primary"
              >
                Add First Service
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
