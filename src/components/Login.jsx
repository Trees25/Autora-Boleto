import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    setTimeout(() => {
      if (email === "demo@gmail.com" && password === "demo123") {
        // Guardamos el estado de sesión localmente para la demo
        localStorage.setItem("demo_session", "activa");

        // Redirigimos a la página principal / dashboard
        window.location.href = "/";
      } else {
        setError("Credenciales incorrectas. Verificá tu email y contraseña.");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border-t-4 border-t-yellow-600">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            AUTORA <span className="text-yellow-600">Boleto</span>
          </h2>
          <p className="text-gray-500 mt-2">Acceso al sistema de gestión</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="focus-visible:ring-yellow-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="focus-visible:ring-yellow-600"
            />
          </div>

          {error && (
            <p className="text-yellow-600 text-sm font-medium">{error}</p>
          )}

          {/* Mensaje de ayuda para la demo */}
          <div className="bg-blue-50 text-blue-800 text-xs p-3 rounded border border-blue-200 text-center">
            <strong>Datos Demo:</strong> demo@gmail.com / demo123
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2"
          >
            {loading ? "Ingresando..." : "Iniciar Sesión"}
          </Button>
        </form>
      </div>
    </div>
  );
}
