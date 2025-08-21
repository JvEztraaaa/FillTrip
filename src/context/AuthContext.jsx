import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On first load: try localStorage, then confirm with backend session
  useEffect(() => {
    (async () => {
      const saved = localStorage.getItem("filltrip_user");
      if (saved) {
        try {
          setCurrentUser(JSON.parse(saved));
        } catch {
          localStorage.removeItem("filltrip_user");
        }
      }

      // Confirm session with PHP (optional but recommended)
      try {
        const res = await fetch("/filltrip-db/me.php", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (data?.success && data.user) {
          setCurrentUser(data.user);
          localStorage.setItem("filltrip_user", JSON.stringify(data.user));
        } else if (!saved) {
          setCurrentUser(null);
        }
      } catch {
        
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // SIGNUP -> calls PHP signup; does NOT auto-login
  const signup = async (userData) => {
    try {
      const res = await fetch("/filltrip-db/signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        return { success: false, error: data.error || "Signup failed" };
      }
      return { success: true };
    } catch (e) {
      return { success: false, error: e.message || "Network error" };
    }
  };

  // LOGIN -> email + password only
  const login = async ({ email, password }) => {
    try {
      const res = await fetch("/filltrip-db/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // send/receive PHPSESSID cookie
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        return { success: false, error: data.error || "Invalid email or password" };
      }
      localStorage.setItem("filltrip_user", JSON.stringify(data.user));
      setCurrentUser(data.user);
      return { success: true, user: data.user };
    } catch (e) {
      return { success: false, error: e.message || "Network error" };
    }
  };

  // LOGOUT
  const logout = async () => {
    try {
      await fetch("/filltrip-db/logout.php", {
        method: "POST",
        credentials: "include",
      });
    } catch {}
    localStorage.removeItem("filltrip_user");
    setCurrentUser(null);
  };

  const value = { currentUser, signup, login, logout, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
