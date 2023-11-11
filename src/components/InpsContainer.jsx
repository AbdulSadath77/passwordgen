export default function InpsContainer({
  password,
  passRef,
  copyToClipboard,
  passLen,
  getPassLength,
  nums,
  setNumState,
  chars,
  setCharState,
}) {
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow md rounded-lg px-4 pt-4 pb-2 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-xl font-semibold mb-3">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passRef}
          />

          <button
            onClick={copyToClipboard}
            type="button"
            className="px-3 text-white font-semibold bg-blue-600"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-wrap gap-x-2 text-sm items-center">
          <input
            type="range"
            min={8}
            max={25}
            value={passLen}
            className="cursor-pointer"
            onChange={getPassLength}
          />
          <label className="mr-2">Length: {passLen}</label>

          <input
            type="checkbox"
            defaultChecked={nums}
            id="numId"
            onChange={setNumState}
          />
          <label htmlFor="numId" className="mr-2">
            Numbers
          </label>

          <input
            type="checkbox"
            defaultChecked={chars}
            id="charsId"
            onChange={setCharState}
          />
          <label htmlFor="charsId" className="mr-2">
            Characters
          </label>
        </div>
        
      </div>
    </>
  );
}
