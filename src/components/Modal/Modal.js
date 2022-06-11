import css from "./Modal.module.css";
import heartbeat from "../../assets/images/heartbeat.png";
import death from "../../assets/images/death.png";
import medicalfile from "../../assets/images/medicalfile.png";

export default function Modal({ setIsOpen, mdetails }) {
  const { TotalConfirmed, TotalDeaths, TotalRecovered, Country } = mdetails;

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <h2 className={css.country_name}>{Country}</h2>
        <ul className={css.modal_list}>
          <li className={css.modal_item}>
            <img src={heartbeat} alt="heartbeat" className={css.image} />
            <p className={css.modal_text}>Total Confirmed</p>
            <p className={css.modal_info}>{TotalConfirmed}</p>
          </li>
          <li className={css.modal_item}>
            <img src={death} alt="death" className={css.image} />
            <p className={css.modal_text}>Total Deaths</p>
            <p className={css.modal_info}>{TotalDeaths}</p>
          </li>
          <li className={css.modal_item}>
            <img src={medicalfile} alt="medicalfile" className={css.image} />
            <p className={css.modal_text}>Total Recovered</p>
            <p className={css.modal_info}>{TotalRecovered}</p>
          </li>
        </ul>
        <button className={css.modal_button} onClick={() => setIsOpen(false)}>
          OK
        </button>
      </div>
    </div>
  );
}
