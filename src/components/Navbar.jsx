import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useScrollUp from "../hooks/useScrollUp";

// Styles import:
import styles from "../styles/comp-styles/navbar.module.scss";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [clicked, setClicked] = useState(false);

  let menuRef = useRef();
  const { scrollUp } = useScrollUp();

  useEffect(() => {
    if (window.scrollY >= 120) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, [scroll]);

  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setReveal(false);
        setClicked(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  });

  const toggleMenu = () => {
    setReveal((prev) => !prev);
    setClicked((prev) => !prev);
  };

  return (
    <nav className={styles.Nav_Bar}>
      <div className={styles.Nav_Wrapper}>
        <div className={styles.Right_Side}>
          <Link to={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.941 17.963c.23-1.879-.98-3.077-4.175-4.097c-1.548-.528-2.277-1.22-2.26-2.171c.065-1.056 1.048-1.825 2.352-1.85a5.29 5.29 0 0 1 2.883.89c.116.072.197.06.263-.04c.09-.144.315-.493.39-.62c.051-.08.061-.186-.068-.28c-.185-.137-.704-.415-.983-.532a6.47 6.47 0 0 0-2.511-.514c-1.91.008-3.413 1.215-3.54 2.826c-.081 1.163.495 2.107 1.73 2.827c.263.152 1.68.716 2.244.892c1.774.552 2.695 1.542 2.478 2.697c-.197 1.047-1.299 1.724-2.818 1.744c-1.203-.046-2.287-.537-3.127-1.19l-.141-.11c-.104-.08-.218-.075-.287.03c-.05.077-.376.547-.458.67c-.077.108-.035.168.045.234c.35.293.817.613 1.134.775a6.71 6.71 0 0 0 2.829.727a4.905 4.905 0 0 0 2.075-.354c1.095-.465 1.803-1.394 1.945-2.554zM12 1.401c-2.068 0-3.754 1.95-3.833 4.39h7.665C15.751 3.35 14.066 1.4 12 1.4zm7.851 22.598l-.08.001l-15.784-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195l-.707-15.526a.459.459 0 0 1 .45-.494h4.975C6.845 2.568 9.16 0 12 0c2.838 0 5.153 2.569 5.275 5.79h4.968a.459.459 0 0 1 .458.483l-.773 15.588l-.007.131c-.094 1.094-.979 1.977-2.07 2.006z"
              />
            </svg>
          </Link>

          <ul className={styles.Dropdown_Container}>
            <li className={styles.Dropdown_Item}>
              <Link to="/" className={styles.Dropdown_Link}>
                Home
              </Link>
            </li>
            <li className={styles.Dropdown_Item}>
              <Link to="men" className={styles.Dropdown_Link}>
                Men
              </Link>
            </li>
            <li className={styles.Dropdown_Item}>
              <Link to="women" className={styles.Dropdown_Link}>
                Women
              </Link>
            </li>
            <li className={styles.Dropdown_Item}>
              <Link to="jewelry" className={styles.Dropdown_Link}>
                Jewelry
              </Link>
            </li>
            <li className={styles.Dropdown_Item}>
              <Link to="electronics" className={styles.Dropdown_Link}>
                Electronics
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.Left_Side}>
          <div className={styles.Input_Wrapper}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Find a creator"
              className={styles.Nav_Input}
            />
          </div>

          <Link to="#" className={styles.Login_Link}>
            Log In
          </Link>

          <div className={styles.Patreon_Button}>
            <p className={styles.Button_Text}>Create On Patreon</p>
          </div>

          <ShoppingCartOutlinedIcon sx={{ color: "black" }} />

          <div className={styles.Icon_Wrapper}>
            <MenuIcon />
          </div>
        </div>
      </div>

      <div className={styles.Responsive_Input_Wraper}>
        <SearchIcon />
        <input
          placeholder="Find a creator"
          type="text"
          className={styles.Responsive_Input}
        />
      </div>
    </nav>
  );
};

export default Navbar;
