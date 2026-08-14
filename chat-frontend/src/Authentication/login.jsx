import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiEnvelope, BiLockAlt, BiMessageSquareDetail, BiLoaderAlt } from "react-icons/bi";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: formData.email,
        password: formData.password,
      });

      const { user, token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
        }
        navigate("/AmazanChat", { replace: true });
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Email ou mot de passe incorrect."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 dark:bg-[#141b29] text-gray-800 dark:text-[#e0e3e9] p-4 transition-colors">
      
      <div className="w-full max-w-md bg-white dark:bg-[#1e2738] rounded-2xl border border-gray-200 dark:border-gray-800/80 shadow-xl p-8 space-y-6">
        
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30 mb-2">
            <BiMessageSquareDetail size={28} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            Bienvenue !
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Connectez-vous pour accéder à vos conversations
          </p>
        </div>

        {error && (
          <div className="p-3 text-xs rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-center animate-shake">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email Input */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-600 dark:text-gray-300 ml-1">
              Adresse Email
            </label>
            <div className="relative flex items-center">
              <BiEnvelope className="absolute left-3.5 text-gray-400 dark:text-gray-500" size={18} />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="exemple@email.com"
                className="w-full bg-slate-50 dark:bg-[#141b29] text-xs text-gray-800 dark:text-white rounded-xl py-3 pl-10 pr-4 border border-gray-200 dark:border-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                Mot de passe
              </label>
            </div>
            <div className="relative flex items-center">
              <BiLockAlt className="absolute left-3.5 text-gray-400 dark:text-gray-500" size={18} />
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-slate-50 dark:bg-[#141b29] text-xs text-gray-800 dark:text-white rounded-xl py-3 pl-10 pr-4 border border-gray-200 dark:border-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-medium text-xs rounded-xl shadow-lg shadow-blue-600/25 cursor-pointer transition-all flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <>
                <BiLoaderAlt size={18} className="animate-spin" />
                <span>Connexion en cours...</span>
              </>
            ) : (
              <span>Se connecter</span>
            )}
          </button>

        </form>

        {/* Footer Link */}
        <div className="text-center pt-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Vous n'avez pas de compte ?{" "}
            <a
              href="/register"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              S'inscrire
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}