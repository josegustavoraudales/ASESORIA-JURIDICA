import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Trash2, Edit2, LogOut, BookOpen, Upload, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Material {
  id: string;
  title: string;
  description: string | null;
  type: string;
  price: number;
  file_url: string | null;
  file_name: string | null;
  is_published: boolean;
  created_at: string;
}

const typeLabels: Record<string, string> = {
  curso: "Curso",
  nota: "Nota académica",
  guia: "Guía",
};

const Admin = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ title: "", description: "", type: "nota", price: "0", is_published: true });
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
    fetchMaterials();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) navigate("/auth");
  };

  const fetchMaterials = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;
    
    const { data, error } = await supabase
      .from("academia_materials")
      .select("*")
      .eq("user_id", session.user.id)
      .order("created_at", { ascending: false });
    
    if (!error && data) setMaterials(data);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    let fileUrl = null;
    let fileName = null;

    if (file) {
      const ext = file.name.split(".").pop();
      const path = `${session.user.id}/${Date.now()}.${ext}`;
      const { error: uploadError } = await supabase.storage.from("academia").upload(path, file);
      if (uploadError) {
        toast({ title: "Error al subir archivo", description: uploadError.message, variant: "destructive" });
        setUploading(false);
        return;
      }
      const { data: urlData } = supabase.storage.from("academia").getPublicUrl(path);
      fileUrl = urlData.publicUrl;
      fileName = file.name;
    }

    const materialData = {
      title: form.title.trim(),
      description: form.description.trim() || null,
      type: form.type,
      price: parseFloat(form.price) || 0,
      is_published: form.is_published,
      user_id: session.user.id,
      ...(fileUrl && { file_url: fileUrl, file_name: fileName }),
    };

    if (editingId) {
      const { error } = await supabase.from("academia_materials").update(materialData).eq("id", editingId);
      if (error) {
        toast({ title: "Error", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Material actualizado" });
      }
    } else {
      const { error } = await supabase.from("academia_materials").insert(materialData);
      if (error) {
        toast({ title: "Error", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Material creado" });
      }
    }

    setUploading(false);
    resetForm();
    fetchMaterials();
  };

  const resetForm = () => {
    setForm({ title: "", description: "", type: "nota", price: "0", is_published: true });
    setFile(null);
    setEditingId(null);
    setShowForm(false);
  };

  const startEdit = (m: Material) => {
    setForm({
      title: m.title,
      description: m.description || "",
      type: m.type,
      price: String(m.price),
      is_published: m.is_published,
    });
    setEditingId(m.id);
    setShowForm(true);
  };

  const deleteMaterial = async (id: string) => {
    if (!confirm("¿Eliminar este material?")) return;
    await supabase.from("academia_materials").delete().eq("id", id);
    toast({ title: "Material eliminado" });
    fetchMaterials();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const formatPrice = (price: number) =>
    price === 0 ? "Gratis" : new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(price);

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <BookOpen className="h-7 w-7 text-primary shrink-0" />
            <h1 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Panel de Academia</h1>
          </div>
          <div className="flex gap-2">
            <button onClick={() => { setShowForm(true); setEditingId(null); }} className="bg-primary text-primary-foreground px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90">
              <Plus className="h-4 w-4" /> <span className="hidden sm:inline">Nuevo material</span><span className="sm:hidden">Nuevo</span>
            </button>
            <button onClick={handleLogout} className="border border-border text-muted-foreground px-3 sm:px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-muted">
              <LogOut className="h-4 w-4" /> <span className="hidden sm:inline">Salir</span>
            </button>
          </div>
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-card p-6 rounded-xl shadow-warm mb-8">
            <h2 className="font-serif font-bold text-lg text-foreground mb-4">
              {editingId ? "Editar material" : "Nuevo material"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">Título *</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    required
                    maxLength={200}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Tipo</label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="curso">Curso</option>
                      <option value="nota">Nota académica</option>
                      <option value="guia">Guía</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Precio (COP)</label>
                    <input
                      type="number"
                      value={form.price}
                      onChange={(e) => setForm({ ...form, price: e.target.value })}
                      min="0"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1">Descripción</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={3}
                  maxLength={1000}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex-1">
                  <label className="text-sm font-medium text-foreground block mb-1">Archivo (PDF, DOC, etc.)</label>
                  <label className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-dashed border-border bg-background cursor-pointer hover:bg-muted transition-colors text-sm text-muted-foreground">
                    <Upload className="h-4 w-4" />
                    {file ? file.name : "Seleccionar archivo"}
                    <input type="file" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                  </label>
                </div>
                <div className="flex items-center gap-2 pt-6">
                  <input
                    type="checkbox"
                    id="published"
                    checked={form.is_published}
                    onChange={(e) => setForm({ ...form, is_published: e.target.checked })}
                    className="rounded border-border"
                  />
                  <label htmlFor="published" className="text-sm text-foreground">Publicado</label>
                </div>
              </div>
              <div className="flex gap-2">
                <button type="submit" disabled={uploading} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 disabled:opacity-50">
                  {uploading ? "Guardando..." : editingId ? "Actualizar" : "Crear material"}
                </button>
                <button type="button" onClick={resetForm} className="border border-border text-muted-foreground px-6 py-2.5 rounded-lg text-sm hover:bg-muted">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* List */}
        {loading ? (
          <p className="text-muted-foreground text-center py-12">Cargando...</p>
        ) : materials.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-xl">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">No hay materiales aún. ¡Sube el primero!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {materials.map((m) => (
              <div key={m.id} className="bg-card p-4 md:p-6 rounded-xl shadow-warm flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">{typeLabels[m.type]}</span>
                    {!m.is_published && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-muted text-muted-foreground flex items-center gap-1">
                        <EyeOff className="h-3 w-3" /> Borrador
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif font-bold text-foreground truncate">{m.title}</h3>
                  {m.description && <p className="text-sm text-muted-foreground line-clamp-1">{m.description}</p>}
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span className="font-semibold text-primary">{formatPrice(m.price)}</span>
                    {m.file_name && <span>📎 {m.file_name}</span>}
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => startEdit(m)} className="p-2 rounded-lg border border-border hover:bg-muted transition-colors" title="Editar">
                    <Edit2 className="h-4 w-4 text-foreground" />
                  </button>
                  <button onClick={() => deleteMaterial(m.id)} className="p-2 rounded-lg border border-border hover:bg-destructive/10 transition-colors" title="Eliminar">
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
