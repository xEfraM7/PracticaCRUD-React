
interface Props {
  label: string;
  inputProps: object;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const TextField = ({ label, inputProps, onChange, value }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-base text-gray-800">{label}</label>
      <input
        className="bg-gray-200 py-2 px-3 border-2 outline-none"
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
