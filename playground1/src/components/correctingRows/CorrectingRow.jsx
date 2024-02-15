
// eslint-disable-next-line react/prop-types
export default function CorrectingRow({ correctPlace, correctColor }) {
  return (
    <div className="w-full h-full flex flex-col gap-8 justify-center items-center border-2 border-gray-400 rounded-xl">
      {new Array(12).fill().map((x, i) => (
        <div className="w-full h-20 flex justify-around" key={i}>
          <div className="w-[90%] h-full flex justify-center items-center gap-10">
            <p className="text-2xl">
              <span className="text-4xl text-green-500">+</span> {correctPlace}
            </p>
            <p className="text-2xl">
              <span className="text-4xl text-red-500">x</span> {correctColor}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
