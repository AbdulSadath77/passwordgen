import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
import "./index.css";
import InpsContainer from "./components/InpsContainer";

function App() {
  const [passLen, setPassLen] = useState(8);
  const [nums, setNums] = useState(false);
  const [chars, setChars] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (chars) str += "`~!@#$%^&*()_+=[]{}<>,./?:;-|";
    if (nums) str += "0123456789";
    for (let i = 1; i <= passLen; i++)
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    setPassword(pass);
  }, [passLen, nums, chars, setPassword]);

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(
    () => passwordGenerator(),
    [passLen, nums, chars, passwordGenerator]
  );

  const getPassLength = (e) => setPassLen(e.target.value);
  const setNumState = () => setNums((prevVal) => !prevVal);
  const setCharState = () => setChars((prevVal) => !prevVal);

  return (
    <>
      <InpsContainer
        password={password}
        passRef={passRef}
        copyToClipboard={copyToClipboard}
        passLen={passLen}
        getPassLength={getPassLength}
        nums={nums}
        setNumState={setNumState}
        chars={chars}
        setCharState={setCharState}
      />
    </>
  );
}

export default App;
