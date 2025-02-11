import "./index.css";

interface UserPrifileProps {
  userName: string;
}

function userNameShort(userName: string): string {
  if (userName.length !== 0) {
    const usernameArray = userName.split(" ");

    if (userName.length > 1) {
      return (
        usernameArray[0][0].toUpperCase() + usernameArray[1][0].toUpperCase()
      );
    }
    return usernameArray[0][0].toUpperCase();
  }

  return "";
}

export default function UserProfile({ userName }: UserPrifileProps) {
  const shorName = userNameShort(userName);

  return (
    <div className="user-profile-wrap">
      <span className="user-name--short">{shorName}</span>
      <span className="user-name">{userName}</span>
    </div>
  );
}
