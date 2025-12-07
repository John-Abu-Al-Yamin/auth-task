import React from "react";

const InputField = ({ inputs }) => {
  if (!inputs || inputs.length === 0) return null;

  return (
    <div className="mt-4 grid grid-cols-12 gap-4">
      {inputs.map((input) => (
        <div key={input.name} className={input.grid || "col-span-12"}>
          {/* Label */}
          <label className="block text-sm font-medium mb-1">{input.label}</label>

          {/* نوع الحقل */}
          {input.type === "text" && (
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          )}

          {input.type === "date" && (
            <input
              type="date"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          )}

          {input.type === "file" && (
            <input
              type="file"
              className="w-full border rounded-md px-3 py-2 bg-gray-50"
            />
          )}

          {input.type === "select" && (
            <select className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500">
              <option>— اختر —</option>
              {input.options?.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}
    </div>
  );
};

export default InputField;
