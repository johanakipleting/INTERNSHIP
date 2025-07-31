"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Pencil, Trash2, Plus } from "lucide-react"

type Academic = {
  id: number
  subject: string
  teacher: string
  classLevel: string
}

const initialAcademics: Academic[] = [
  { id: 1, subject: "Mathematics", teacher: "Mr. John Doe", classLevel: "Primary 7" },
  { id: 2, subject: "English", teacher: "Ms. Jane Smith", classLevel: "Primary 6" },
  { id: 3, subject: "Science", teacher: "Mr. Samuel Okello", classLevel: "Primary 5" },
]

export default function AcademicsManagement() {
  const [academics, setAcademics] = useState<Academic[]>(initialAcademics)
  const [showAdd, setShowAdd] = useState(false)
  const [newAcademic, setNewAcademic] = useState({ subject: "", teacher: "", classLevel: "" })

  const handleAddAcademic = () => {
    if (!newAcademic.subject || !newAcademic.teacher || !newAcademic.classLevel) return
    setAcademics([
      ...academics,
      { id: Date.now(), ...newAcademic }
    ])
    setNewAcademic({ subject: "", teacher: "", classLevel: "" })
    setShowAdd(false)
  }

  const handleDelete = (id: number) => {
    setAcademics(academics.filter(a => a.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto py-12">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Academics Management</CardTitle>
          <Button onClick={() => setShowAdd(true)} className="bg-blue-700 text-white hover:bg-blue-800">
            <Plus className="w-4 h-4 mr-2" /> Add Subject
          </Button>
        </CardHeader>
        <CardContent>
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">Subject</th>
                <th className="py-2 text-left">Teacher</th>
                <th className="py-2 text-left">Class Level</th>
                <th className="py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {academics.map(academic => (
                <tr key={academic.id} className="border-b hover:bg-blue-50">
                  <td className="py-2">{academic.subject}</td>
                  <td className="py-2">{academic.teacher}</td>
                  <td className="py-2">{academic.classLevel}</td>
                  <td className="py-2 text-right space-x-2">
                    <Button size="icon" variant="ghost">
                      <Pencil className="w-4 h-4 text-blue-700" />
                    </Button>
                    <Button size="icon" variant="ghost" onClick={() => handleDelete(academic.id)}>
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Add Academic Modal */}
          {showAdd && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg">
                <h2 className="text-xl font-bold mb-4">Add New Subject</h2>
                <div className="space-y-4">
                  <Input
                    placeholder="Subject"
                    value={newAcademic.subject}
                    onChange={e => setNewAcademic({ ...newAcademic, subject: e.target.value })}
                  />
                  <Input
                    placeholder="Teacher"
                    value={newAcademic.teacher}
                    onChange={e => setNewAcademic({ ...newAcademic, teacher: e.target.value })}
                  />
                  <Input
                    placeholder="Class Level"
                    value={newAcademic.classLevel}
                    onChange={e => setNewAcademic({ ...newAcademic, classLevel: e.target.value })}
                  />
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setShowAdd(false)}>Cancel</Button>
                    <Button className="bg-blue-700 text-white hover:bg-blue-800" onClick={handleAddAcademic}>Add</Button>
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