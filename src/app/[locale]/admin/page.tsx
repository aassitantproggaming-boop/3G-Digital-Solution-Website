"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
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
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "website",
  });

  const handleAddService = () => {
    if (formData.title && formData.description) {
      setServices([
        ...services,
        {
          id: Date.now(),
          ...formData,
        },
      ]);
      setFormData({ title: "", description: "", category: "website" });
      setShowForm(false);
    }
  };

  const handleDeleteService = (id: number) => {
    setServices(services.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
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
            <h2 className="text-2xl font-bold text-gray-900">Kelola Layanan</h2>
            <button
              onClick={() => setShowForm(!showForm)}
              className="btn-primary flex items-center gap-2"
            >
              <Plus size={20} />
              Tambah Layanan
            </button>
          </div>

          {/* Add Service Form */}
          {showForm && (
            <div className="mb-8 p-6 bg-gray-50 rounded-lg border-2 border-red-200">
              <h3 className="text-xl font-bold mb-4">Tambah Layanan Baru</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Judul Layanan
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
                    Deskripsi
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    rows={4}
                    placeholder="Deskripsikan layanan ini..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kategori
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
                    Simpan Layanan
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    className="btn-secondary flex-1"
                  >
                    Batal
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
                    Judul
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Deskripsi
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Kategori
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {service.title}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {service.description}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                        {service.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-3">
                        <button className="text-blue-600 hover:text-blue-700">
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteService(service.id)}
                          className="text-red-600 hover:text-red-700"
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
        </div>
      </main>
    </div>
  );
}
