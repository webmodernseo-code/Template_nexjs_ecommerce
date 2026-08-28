"use client";

import { useEffect, useState } from "react";
import HeaderSearch from "./header-search";
import MainMenu from "./main-menu";
import MobileMenu from "./mobile-menu";
import NavbarTop from "./navbar-top";
import MobileSidebar from "../drawer/mobile-sidebar";
import CartDrawer from "../drawer/cart-drawer";
import LoginDrawer from "../drawer/login-drawer";
import RegisterDrawer from "../drawer/register-drawer";
import ForgetPasswordDrawer from "../drawer/forget-password-drawer";
import SetPasswordDrawer from "../drawer/set-password";
import OtpDrawer from "../drawer/otp-drawer";
import QuickViewDrawer from "../drawer/quick-view-drawer";
import { useQuickView } from "@/context/quick-view-context";

type DrawerKey =
  | "sidebar"
  | "cart"
  | "login"
  | "register"
  | "forgotPassword"
  | "setPassword"
  | "otp"
  | null;

export default function Navbar() {
  const [activeDrawer, setActiveDrawer] = useState<DrawerKey>(null);

  const open = (key: DrawerKey) => setActiveDrawer(key);
  const close = () => setActiveDrawer(null);
  const { isOpen, closeQuickView } = useQuickView();

  // Lock body scroll when any drawer is open
  useEffect(() => {
    document.body.style.overflow = activeDrawer || isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeDrawer, isOpen]);

  const is = (key: DrawerKey) => activeDrawer === key;

  return (
    <>
      <header>
        <NavbarTop />
        <HeaderSearch
          onOpenCart={() => open("cart")}
          onOpenLogin={() => open("login")}
          onOpenRegister={() => open("register")}
          onOpenForgotPassword={() => open("forgotPassword")}
          onOpenSetPassword={() => open("setPassword")}
          onOpenOtp={() => open("otp")}
        />
        <MainMenu />
        <MobileMenu
          onOpenSidebar={() => open("sidebar")}
          onOpenCart={() => open("cart")}
        />
      </header>

      {/* Backdrop */}
      {activeDrawer && (
        <div className="fixed inset-0 bg-black/40 z-90" onClick={close} />
      )}

      {/* All drawers */}
      <MobileSidebar
        isOpen={is("sidebar")}
        onClose={close}
        onOpenLogin={() => open("login")}
        onOpenRegister={() => open("register")}
      />
      <CartDrawer isOpen={is("cart")} onClose={close} />
      <LoginDrawer
        isOpen={is("login")}
        onClose={close}
        onOpenRegister={() => open("register")}
        onOpenForgotPassword={() => open("forgotPassword")}
      />
      <RegisterDrawer
        isOpen={is("register")}
        onClose={close}
        onOpenLogin={() => open("login")}
      />
      <ForgetPasswordDrawer isOpen={is("forgotPassword")} onClose={close} />
      <SetPasswordDrawer isOpen={is("setPassword")} onClose={close} />
      <OtpDrawer isOpen={is("otp")} onClose={close} />
      <QuickViewDrawer isOpen={isOpen} onClose={closeQuickView} />
    </>
  );
}
