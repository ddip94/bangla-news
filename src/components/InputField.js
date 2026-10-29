export default function InputField({ label, id, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm text-neutral-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2.5 outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
        {...props}
      />
    </div>
  );
}