import { useContext } from "react";
import UserContext from "../contexts/UserProvider";

export default function useToken() {
  const [userData] = useContext(UserContext);
  return userData.token;
}