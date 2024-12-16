import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import {
  CircleUserRound,
  House,
  ListOrdered,
  LogOut,
  MoveHorizontal,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import { MouseEventHandler, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { UserService } from "../../services/user.service";
import { removeToken } from "../../utils/helpers/token";

export default function Sidebar() {
  let a;
  const value = localStorage.getItem("isActiveSidebar");
  if (!value) {
    a = false;
  } else {
    a = JSON.parse(value);
  }

  const [isActiveSidebar, setIsActiveSidebar] = useState<boolean>(a);
  const state = useSelector<RootState>((state) => state.user);

  useEffect(() => {
    const value = localStorage.getItem("isActiveSidebar");
    if (!value) {
      return;
    }
    setIsActiveSidebar(JSON.parse(value));
  }, [isActiveSidebar]);

  function menuTurn() {
    setIsActiveSidebar(!isActiveSidebar);
    localStorage.setItem("isActiveSidebar", JSON.stringify(!isActiveSidebar));
  }

  const logout = async () => {
    await UserService.logout();
    removeToken();
    document.location.href = '/'
  }
  return (
    <>
      <div
        className={cn(styles["genjutsu"], {
          [styles["sidebar-inactive"]]: isActiveSidebar,
        })}
      ></div>
      <div
        className={cn(styles["sidebar"], {
          [styles["sidebar-inactive"]]: isActiveSidebar,
        })}
      >
        <div className={styles["sidebar__wrapper"]}>
          <div className={styles["head-logo"]}>
            <div className={styles["logo"]}>
              <img src="/logo.svg" alt="" />
            </div>
            <p>GameShop</p>
          </div>
          <div className={styles["menu"]}>
            {state.user ? (<button className={styles["menu__logout"]} onClick={logout}>
              <div
                className={cn(styles["menu__item"])}
              >
                <div className={styles["menu-icon"]}>
                  <LogOut className={styles["icon"]} />
                </div>
                <p>Выход</p>
              </div>
            </button>) : (
              <NavLink to="/auth/login" className={styles["menu__href"]}>
                {({ isActive }) => (
                  <div
                    className={cn(styles["menu__item"], {
                      [styles["active"]]: isActive,
                    })}
                  >
                    <div className={styles["menu-icon"]}>
                      <CircleUserRound className={styles["icon"]} />
                    </div>
                    <p>Вход</p>
                  </div>
                )}
              </NavLink>
            )}
            <div className={styles["line"]}></div>
            <NavLink to="/" className={styles["menu__href"]}>
              {({ isActive }) => (
                <div
                  className={cn(styles["menu__item"], {
                    [styles["active"]]: isActive,
                  })}
                >
                  <div className={styles["menu-icon"]}>
                    <House className={styles["icon"]} />
                  </div>
                  <p>Главная</p>
                </div>
              )}
            </NavLink>
            <NavLink to="/products" className={styles["menu__href"]}>
              {({ isActive }) => (
                <div
                  className={cn(styles["menu__item"], {
                    [styles["active"]]: isActive,
                  })}
                >
                  <div className={styles["menu-icon"]}>
                    <ShoppingCart className={styles["icon"]} />
                  </div>
                  <p>Каталог</p>
                </div>
              )}
            </NavLink>
            <NavLink to="/cart" className={styles["menu__href"]}>
              {({isActive}) => (
                <div className={cn(styles["menu__item"], {
                  [styles['active']]: isActive
                })}>
                  <div className={styles["menu-icon"]}>
                    <ShoppingBasket className={styles["icon"]} />
                  </div>
                  <p>Корзина</p>
                </div>
              )}
            </NavLink>
            <NavLink to="/orders" className={styles["menu__href"]}>
              {({isActive}) => (
                <div className={cn(styles["menu__item"], {
                  [styles['active']]: isActive
                })}>
                  <div className={styles["menu-icon"]}>
                    <ListOrdered className={styles["icon"]} />
                  </div>
                  <p>Мои заказы</p>
                </div>
              )}
            </NavLink>
          </div>
        </div>
        <div className={styles["turn"]} onClick={menuTurn}>
          <MoveHorizontal className={styles["turn-button"]} />
        </div>
      </div>
    </>
  );
}
