import { useGetUserQuery } from "../../../api/endpoints/user";

export default function ModalNotAuth() {
  const { isError } = useGetUserQuery("");

  if (isError) {
    return (
      <div className="modal-not-auth">
        <div className="modal-not-auth-conent">
          <div></div>
        </div>
      </div>
    );
  }
}
2;
