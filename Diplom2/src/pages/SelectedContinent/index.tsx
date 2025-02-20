import { useParams } from "react-router";

export default function SelectedContinent() {
  const { continentId } = useParams();

  return <div className="selected-continent">{continentId}</div>;
}
