import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { formConfig } from "../config/formConfig";
import InputField from "../InputField/InputField";

const Tabs = () => {
  const [searchParams] = useSearchParams();

  const categoryMap = {
    1: "license",
    2: "property",
    3: "additional",
    4: "tourism",
  };

  const categoryKey = categoryMap[searchParams.get("categoryId")];
  const categoryTabs = formConfig[categoryKey];

  const [activeTab, setActiveTab] = useState(
    categoryTabs ? Object.keys(categoryTabs)[0] : null
  );

  console.log(categoryTabs);
  if (!categoryTabs) {
    return <p className="text-red-500">لا توجد Tabs لهذه الفئة</p>;
  }

  return (
    <div className="w-full mt-4">
      {/* ---------- TABS HEADER ---------- */}
      <div className="flex justify-center gap-2 border-b border-gray-300 pb-2">
        {Object.keys(categoryTabs).map((tabId) => {
          const isActive = activeTab === tabId;

          return (
            <button
              key={tabId}
              onClick={() => setActiveTab(tabId)}
              className={`
                px-4 py-2 rounded-t-md font-medium transition-all 
                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
              `}
            >
              {categoryTabs[tabId].name}
            </button>
          );
        })}
      </div>


      {/* INPUTS */}
      <InputField inputs={categoryTabs[activeTab].inputs} />

      <div className="flex gap-2 items-center mt-12">
        <button className="">ارسال</button>
        <button className="">الغاء </button>
      </div>
    </div>
  );
};

export default Tabs;
