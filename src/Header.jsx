import React from "react";
import MaulundLogo from "./assets/maulund-logo.webp";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center content mt-8">
      <img onClick={() => navigate("/frontpage")} src={MaulundLogo} alt="logo" className="w-40" />
      <div className="flex gap-3">
        <i onClick={() => navigate("/#")} className="fa-solid fa-user text-2xl px-3"></i>
        <i onClick={() => navigate("/#")} className="fa-solid fa-cart-shopping text-2xl px-3"></i>
      </div>
    </header>
  );
};

export default Header;