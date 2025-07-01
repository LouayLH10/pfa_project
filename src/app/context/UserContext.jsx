"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import jwt_decode from "jwt-decode";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const decodeToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (!token) return null;

    try {
      const decoded = jwt_decode(token);
      const user = decoded.user;

      return {
        userId: user.id,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        bio: user.bio,
        photo: user.photo ,
        role: user.role || "student", 
      };
    } catch (error) {
      console.error("Token invalide ou expiré", error);
      return null;
    }
  }, []);

  useEffect(() => {
    setUserInfo(decodeToken());
  }, [decodeToken]);

  useEffect(() => {
    const handleStorageChange = () => {
      setUserInfo(decodeToken());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [decodeToken]);

  const refreshUserInfo = () => {
    setUserInfo(decodeToken());
  };

  return (
    <UserContext.Provider value={{ userInfo, refreshUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
