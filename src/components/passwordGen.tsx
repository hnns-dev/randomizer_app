import { useState } from "react";

export default function () {
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);
  const [includeSpecialChars, setIncludeSpecialChars] =
    useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [passwordLength, setPasswordLength] = useState<number>(15);
  const [password, setPassword] = useState<string>("");

  const generatePassword = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const lowercase: string = "abcdefghijklmnopqrstuvwxyz";
    const uppercase: string = lowercase.toUpperCase();
    const numbers: string = "1234567890";
    const specialChars: string = '!"§$%&/()=?+#-.;_<>@€';

    const chars: string =
      lowercase +
      (includeUppercase ? uppercase : "") +
      (includeNumbers ? numbers : "") +
      (includeSpecialChars ? specialChars : "");
    let pw: string = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      pw += chars[randomIndex];
    }

    setPassword(pw);
  };
  const copyPasswordToClipboard = () => {};

  return (
    <form
      onSubmit={generatePassword}
      className="w-4/5 bg-red_300/80 rounded-xl shadow-lg p-10 mt-10 flex flex-col lg:flex-row items-center justify-center gap-5"
    >
      <div className="font-main text-red_900">
        <label htmlFor="include-uppercase">
          Include Uppercase Letters:
          <input
            // style later
            // className=" appearance-none w-3 h-3 rounded-sm border border-red_800 bg-red_200"
            type="checkbox"
            id="include-uppercase"
            name="include-uppercase"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
        </label>
        <label htmlFor="include-special-chars">
          Include Special Letters:
          <input
            type="checkbox"
            id="include-special-chars"
            name="include-special-chars"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
        </label>
        <label htmlFor="include-numbers">
          Include Numbers:
          <input
            type="checkbox"
            id="include-numbers"
            name="include-numbers"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
        </label>
        <label>
          Password Length:
          <input
            type="range"
            name="pw-range"
            id="pw-range"
            min="4"
            max="35"
            value={passwordLength}
            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
          />
          <p>{passwordLength}</p>
        </label>
      </div>
      <div className="font-headline text-2xl text-red_800 bg-red_300 p-5 rounded-lg w-full">
        {password}
      </div>
      <div className="w-full flex gap-4 justify-center">
        <button
          className="bg-gold hover:scale-105 transform text-red_900 text-xl font-headline py-2 px-4 rounded-lg"
          type="submit"
        >
          Generate Password
        </button>
        <button
          className="bg-gold hover:scale-105 transform text-red_900 text-xl font-headline py-2 px-4 rounded-lg"
          type="button"
          onClick={copyPasswordToClipboard}
        >
          Copy Password
        </button>
      </div>
    </form>
  );
}
