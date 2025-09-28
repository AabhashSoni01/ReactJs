import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [remember, setRemember] = useState(false);
  const [savedUsers, setSavedUsers] = useState({});
  const [suggestions, setSuggestions] = useState([]);

  // Load saved users from local storage
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    setSavedUsers(users);
  }, []);

  const Login = (e) => {
    e.preventDefault();
    // simple check
    if (username === "demoUser" && password === "12345") {
      setIsLoggedIn(true);

      if (remember) {
        // user data will be saved in local storage
        const newUsers = { ...savedUsers, [username]: password };
        localStorage.setItem("users", JSON.stringify(newUsers));
        setSavedUsers(newUsers);
      }
    } else {
      alert("Invalid username or password ❌");
    }
  };

  const Logout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setRemember(false);
    setSuggestions([]);
  };

  // suggestions
  const usernameSuggestions = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (value.length > 0) {
      const matches = Object.keys(savedUsers).filter((user) =>
        user.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  // autofill
  const suggestionClick = (user) => {
    setUsername(user);
    setPassword(savedUsers[user]);
    setSuggestions([]);
  };

  return (
    <div className="relative flex justify-center items-center top-0 h-150 w-200 p-2 border-1 border-violet-900 rounded-md">
      <div className="flex h-full w-full rounded-md bg-cyan-50">
        <div className="h-full w-[50%] rounded-l-md rounded-r-4xl bg-[url(https://plus.unsplash.com/premium_vector-1758527875707-79608395bba3?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center"></div>

        <div className="h-full w-[50%] flex flex-col justify-center items-center gap-10 p-5">
          {!isLoggedIn ? (
            <>
              <h2 className="text-black font-bold text-3xl">Welcome</h2>
              <form className="h-55 w-[65%]" onSubmit={Login}>
                <div className="flex flex-col text-left p-2 gap-1 relative">
                  <span className="text-gray-500">Username or Email</span>
                  <input
                    type="text"
                    className="border-1 border-violet-900 rounded-sm p-1 text-slate-700"
                    value={username}
                    onChange={usernameSuggestions}
                    autoComplete="off"
                  />
                  {/* Suggestions dropdown */}
                  {suggestions.length > 0 && (
                    <ul className="absolute top-full left-0 right-0 bg-gray-700 border rounded-md shadow z-10 max-h-40 overflow-y-auto">
                      {suggestions.map((user) => (
                        <li
                          key={user}
                          className="p-2 cursor-pointer hover:bg-gray-700"
                          onClick={() => usernameSuggestions(user)}
                        >
                          {user}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="flex flex-col text-left p-2 gap-1">
                  <span className="text-gray-500">Password</span>
                  <input
                    type="password"
                    className="border-1 border-violet-900 rounded-sm p-1 text-slate-700"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="p-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-950 text-white py-1 rounded"
                  >
                    Login
                  </button>
                </div>
                <div className="flex mx-2">
                  <div className="flex justify-center items-center gap-1">
                    <input
                      type="checkbox"
                      className="bg-transparent"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                    />
                    <span className="text-black text-sm">Remember me</span>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-green-600 font-bold text-2xl">
                ✅ Logged In
              </h2>
              <p className="text-gray-600">Welcome, {username}!</p>
              <button
                className="mt-4 bg-violet-900 text-white px-4 py-2 rounded"
                onClick={Logout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
