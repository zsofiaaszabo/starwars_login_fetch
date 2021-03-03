import { useState } from "react";

//LocalStorage- bent maradok bejelentkezés után, új ablakban is
//SessionStorage- megnyitva az új ablakot, ki leszek jelentkeztetve

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };
  return {
    setToken: saveToken,
    token,
  };
}
