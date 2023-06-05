import { ReactNode, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext<any[]>([]);
export default UserContext;

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useLocalStorage("userData", {});
  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {children}
    </UserContext.Provider>
  );
}
