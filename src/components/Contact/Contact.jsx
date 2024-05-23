import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import css from "../Contact/Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  function handleDeleteClick() {
    dispatch(deleteContact(contact.id));
  }
  return (
    <div className={css.container}>
      <li className={css.item} key={contact.id}>
        <p className={css.data}>
          <FaUser />
          {contact.name}
        </p>
        <p className={css.data}>
          <FaPhoneAlt />
          {contact.number}
        </p>
      </li>
      <button className={css.btn} onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
}

//
