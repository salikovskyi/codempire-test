import css from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import React from "react";

export default function Header({ onChange }) {
  const onChangeSearchValue = (e) => {
    onChange(e.target.value.toLowerCase());
  };

  return (
    <div className={`container ${css.header}`}>
      <div className={css.logo}>
        <img src={logo} alt="" />
        <p className={css.logo_text}>Statistic</p>
      </div>
      <div className="country_search">
        <input
          type="text"
          placeholder="Search..."
          className={css.input}
          onChange={onChangeSearchValue}
        />
        <svg
          width="30"
          height="30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={css.svg}
        >
          <path
            d="m29.59 25.94-5.842-5.842a1.405 1.405 0 0 0-.996-.41h-.955a12.128 12.128 0 0 0 2.578-7.5C24.375 5.455 18.92 0 12.187 0 5.455 0 0 5.455 0 12.188c0 6.732 5.455 12.187 12.188 12.187 2.83 0 5.431-.96 7.5-2.578v.955c0 .375.146.732.41.996l5.841 5.842a1.4 1.4 0 0 0 1.987 0l1.658-1.658c.55-.551.55-1.442.006-1.992Zm-17.402-6.253a7.496 7.496 0 0 1-7.5-7.5c0-4.142 3.351-7.5 7.5-7.5 4.142 0 7.5 3.352 7.5 7.5 0 4.143-3.352 7.5-7.5 7.5Z"
            fill="#666"
          />
        </svg>
      </div>
    </div>
  );
}
