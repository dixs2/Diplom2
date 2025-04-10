import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  useRadioGroup,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./index.scss";
import { useChangeUserMutation, User } from "../../api/endpoints/user";
import { DataCountry } from "../CardCountry/type";
import { useSelectShowAddModal } from "../../store/selectors";
import { useDispatch } from "react-redux";
import { hideAddModal } from "../../store/addModal";
import { useForm } from "react-hook-form";
import ImageUpload from "../ImageUploader";

export function getUserKey(
  continet: string
):
  | "myAfrica"
  | "myAsia"
  | "myAustralia"
  | "myEurope"
  | "myNorthAmerica"
  | "mySouthAmerica" {
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

interface CreateCountryFormProps {
  account: User;
}

export default function CreateCountryForm({ account }: CreateCountryFormProps) {
  const [continet, setContinent] = useState<string>("");
  const [user, setUser] = useState<User>(account);
  const [formValue, setFormValue] = useState<DataCountry>({
    id: "",
    title: "",
    description: "",
    photo: "",
    isFavorite: false,
    continent: continet,
  });
  const [changeUser] = useChangeUserMutation();
  const isOpenAddModal = useSelectShowAddModal();
  const dispath = useDispatch();

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setContinent(event.target.value as string);
    let id = getLastIdCountry(user, event.target.value);
    setFormValue((prev: any) => ({
      ...prev,
      id: id,
      continent: event.target.value as string,
    }));
  };

  const handleChange =
    (key: keyof DataCountry) => (event: { target: { value: any } }) => {
      setFormValue((prev: any) => ({ ...prev, [key]: event?.target?.value }));
    };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    let key = getUserKey(continet);
    setUser((prev: any) => {
      const updatedUser = {
        ...prev,
        [key]: [...prev[key], formValue],
      };
      debugger;
      changeUser(updatedUser);
      return updatedUser;
    });
  };

  return isOpenAddModal ? (
    <form
      name="createCountry"
      className="create-contry-modal-form"
      onSubmit={onSubmit}
    >
      <div className="create-contry-modal-content">
        <button
          className="create-contry-modal-close"
          onClick={() => {
            dispath(hideAddModal());
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h3 className="create-contry-modal-main-title">
          Add a new country to your World Map
        </h3>
        <div className="create-contry-modal-main-content">
          <div className="create-contry-modal-head">
            <div className="create-contry-modal-head-left">
              <div className="create-contry-modal-select">
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={continet}
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
            </div>
            <div className="create-contry-modal-head-right">
              <div className="create-contry-modal-photo">
                <label className="create-contry-modal-label">URL Photo</label>
                <input
                  type="text"
                  className="create-contry-modal-input"
                  onChange={handleChange("photo")}
                  required
                />
              </div>
              <div className="create-contry-modal-title">
                <label className="create-contry-modal-label">
                  Title Country
                </label>
                <input
                  type="text"
                  className="create-contry-modal-input"
                  onChange={handleChange("title")}
                />
              </div>
            </div>
          </div>
          <div className="create-contry-modal-description">
            <label className="create-contry-modal-label">Description</label>
            <textarea
              className="create-contry-modal-textarea"
              onChange={handleChange("description")}
            ></textarea>
          </div>
        </div>
        <button type="submit" className="create-contry-modal-add">
          Add a new County
        </button>
      </div>
    </form>
  ) : null;
}
