import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { MouseEventHandler, useEffect, useState } from "react";
import "./index.scss";
import {
  useChangeUserMutation,
  useGetUserQuery,
  User,
} from "../../api/endpoints/user";
import { DataCountry } from "../CardCountry/type";
import { useSelectShowAddModal } from "../../store/selectors";
import { useDispatch } from "react-redux";
import { hideAddModal } from "../../store/addModal";

function getUserKey(continet: string): keyof User {
  switch (continet) {
    case "Africa":
      return "myAfrica";
    case "Asia":
      return "myAsia";
    case "Australia":
      return "myAustralia";
    case "Europe":
      return "myEurope";
    case "NorthAmerica":
      return "myNorthAmerica";
    case "SouthAmerica":
      return "mySouthAmerica";
    default:
      return "myAfrica";
  }
}

export function getLastIdCountry(user: User, continet: string) {
  let id = "1";
  switch (continet) {
    case "Africa":
      if (user.myAfrica.length) {
        id = String(Number(user.myAfrica[user.myAfrica.length - 1].id) + 1);
      }
      break;
    case "Asia":
      if (user.myAsia.length) {
        id = String(Number(user.myAsia[user.myAsia.length - 1].id) + 1);
      }
      break;
    case "Australia":
      if (user.myAustralia.length) {
        id = String(
          Number(user.myAustralia[user.myAustralia.length - 1].id) + 1
        );
      }
      break;
    case "Europe":
      if (user.myEurope.length) {
        id = String(Number(user.myEurope[user.myEurope.length - 1].id) + 1);
      }
      break;
    case "NorthAmerica":
      if (user.myNorthAmerica.length) {
        id = String(
          Number(user.myNorthAmerica[user.myNorthAmerica.length - 1].id) + 1
        );
      }
      break;
    case "SouthAmerica":
      if (user.mySouthAmerica.length) {
        id = String(
          Number(user.mySouthAmerica[user.mySouthAmerica.length - 1].id) + 1
        );
      }
      break;
  }

  return id;
}

interface NewCountryFormProps {
  account: User;
}

export default function NewCountryForm({ account }: NewCountryFormProps) {
  const [continet, setContinent] = useState<string>("");
  const [user, setUser] = useState<User>(account);
  const [formValue, setFormValue] = useState<DataCountry>({
    id: "",
    title: "",
    description: "",
    photo:
      "https://i.pinimg.com/474x/14/7c/27/147c27851365bb3fef2a871b248c7252.jpg",
    isFavorite: false,
    continent: "",
  });
  const [changeUser] = useChangeUserMutation();
  const isOpenAddModal = useSelectShowAddModal();
  const dispath = useDispatch();

  const handleChange =
    (key: keyof DataCountry) => (event: { target: { value: any } }) => {
      setFormValue((prev: any) => ({ ...prev, [key]: event?.target?.value }));
    };

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setContinent(event.target.value as string);
    let id = getLastIdCountry(user, event.target.value);
    setFormValue((prev: any) => ({ ...prev, id: id, continent: continet }));
  };

  const onSubmit = () => {
    let key = getUserKey(continet);
    setUser((prev: any) => {
      return {
        ...prev,
        [key]: [...prev[key], formValue],
      };
    });
    changeUser(user);
  };

  return isOpenAddModal ? (
    <form name="newCountry" className="new-contry-form">
      <div className="new-contry-form-content">
        <button
          className="new-contry-form-close"
          onClick={() => {
            dispath(hideAddModal());
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h3 className="new-contry-form-modal-title">
          Add a new country to your World Map
        </h3>
        <div className="new-contry-form-photo"></div>
        <div className="new-contry-form-text">
          <div className="new-contry-form-select">
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={continet}
                label="Continent"
                onChange={handleChangeSelect}
                required
              >
                <MenuItem value="Africa">Africa</MenuItem>
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="NorthAmerica">NorthAmerica</MenuItem>
                <MenuItem value="SouthAmerica">SouthAmerica</MenuItem>
              </Select>
            </FormControl>
          </div>
          <input
            type="text"
            className="new-contry-form-title"
            onChange={handleChange("title")}
            required
          />
          <textarea
            name="description"
            placeholder="Add Description"
            className="new-contry-form-description"
            onChange={handleChange("description")}
          ></textarea>
        </div>
        <button
          type="submit"
          className="new-contry-form-add"
          onClick={onSubmit}
        >
          Add a new County
        </button>
      </div>
    </form>
  ) : null;
}
