import { UserCard } from "./components/UserCard";
import "./styles.css";
import { userAllUsers } from "./hooks/useAllUsers";

export default function App() {

  const { getUsers, userProfies, loading, error } = userAllUsers();

  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red"}}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfies.map((user) => (
          <UserCard key={user.id} user={user}/>
          ))}
        </>
      )}

      
    </div>
  );
}
