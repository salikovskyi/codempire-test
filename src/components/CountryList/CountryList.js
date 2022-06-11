import css from "./CountryList.module.css";
import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";

export default function CountryList({ name }) {
  const [countries, setCountries] = useState([]);
  const [details, setDetails] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const getCountries = () => {
    fetch(`https://api.covid19api.com/summary`)
      .then((response) => response.json())
      .then((response) => {
        setCountries(response.Countries);
      });
  };

  useEffect(() => {
    getCountries();
  }, []);

  const filter = countries.filter((country) =>
    country.Country.toLowerCase().includes(name)
  );

  console.log();
  return (
    <div className={` container ${css.country_list_section}`}>
      <div className={css.country_list_header}>
        <p className={` ${css.top_number} ${css.title}`}>№</p>
        <p className={` ${css.top_country} ${css.title}`}>Country</p>
        <p className={`${css.title}`}>Total Confirmed</p>
      </div>
      <ul className={css.country_list}>
        {filter.map((item, index) => {
          return (
            <li
              className={css.country_item}
              key={index}
              onClick={() => {
                setIsOpen(true);
                setDetails(item);
              }}
            >
              <p className={`${css.country_number} ${css.country_info}`}>
                {index + 1}
              </p>
              <p className={`${css.country_name} ${css.country_info}`}>
                {item.Country}
              </p>
              <p className={`${css.country_confirmed} ${css.country_info}`}>
                {item.TotalConfirmed}
              </p>
            </li>
          );
        })}
      </ul>
      {isOpen && <Modal mdetails={details} setIsOpen={setIsOpen} />}{" "}
    </div>
  );
}
