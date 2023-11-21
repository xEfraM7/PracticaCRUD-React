
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ButtonComponent = ({ onClick, children }:any) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-indigo-600 
        text-white py-2 px-6 my-10 
        rounded hover:bg-indigo-700"
      >
        {children}
      </button>
    </>
  );
};
