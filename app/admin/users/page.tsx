"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Pencil, Trash2, Plus } from "lucide-react"

type User = {
  id: number
  name: string
  email: string
  role: string
}

const initialUsers: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Teacher" },
  { id: 3, name: "Samuel Okello", email: "samuel@example.com", role: "Staff" },
]

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [showAdd, setShowAdd] = useState(false)
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" })

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.role) return
    setUsers([
      ...users,
      { id: Date.now(), ...newUser }
    ])
    setNewUser({ name: "", email: "", role: "" })
    setShowAdd(false)
  }

  const handleDelete = (id: number) => {
    setUsers(users.filter(u => u.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto py-12">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Users Management</CardTitle>
          <Button onClick={() => setShowAdd(true)} className="bg-blue-700 text-white hover:bg-blue-800">
            <Plus className="w-4 h-4 mr-2" /> Add User
          </Button>
        </CardHeader>
        <CardContent>
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">Name</th>
                <th className="py-2 text-left">Email</th>
                <th className="py-2 text-left">Role</th>
                <th className="py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border-b hover:bg-blue-50">
                  <td className="py-2">{user.name}</td>
                  <td className="py-2">{user.email}</td>
                  <td className="py-2">{user.role}</td>
                  <td className="py-2 text-right space-x-2">
                    <Button size="icon" variant="ghost">
                      <Pencil className="w-4 h-4 text-blue-700" />
                    </Button>
                    <Button size="icon" variant="ghost" onClick={() => handleDelete(user.id)}>
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Add User Modal */}
          {showAdd && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg">
                <h2 className="text-xl font-bold mb-4">Add New User</h2>
                <div className="space-y-4">
                  <Input
                    placeholder="Name"
                    value={newUser.name}
                    onChange={e => setNewUser({ ...newUser, name: e.target.value })}
                  />
                  <Input
                    placeholder="Email"
                    value={newUser.email}
                    onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                  />
                  <Input
                    placeholder="Role"
                    value={newUser.role}
                    onChange={e => setNewUser({ ...newUser, role: e.target.value })}
                  />
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setShowAdd(false)}>Cancel</Button>
                    <Button className="bg-blue-700 text-white hover:bg-blue-800" onClick={handleAddUser}>Add</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}