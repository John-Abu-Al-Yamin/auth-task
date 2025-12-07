import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";

const AppFrom = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const navigate = useNavigate();
  const { userId } = useParams(); // نفترض إن userId موجود في الروت

  const getCategories = async () => {
    try {
      const response = await fetch("http://localhost:4000/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getSubCategories = async (categoryId) => {
    if (!categoryId) return;
    try {
      const response = await fetch(
        `http://localhost:4000/sub_categories?category_id=${categoryId}`
      );
      const data = await response.json();
      setSubCategories(data);
    } catch (error) {
      console.error("Error fetching sub-categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      getSubCategories(selectedCategory.id);
      setSelectedSubCategory(null);
    } else {
      setSubCategories([]);
    }
  }, [selectedCategory]);

  const handleContinue = () => {
    if (!selectedCategory || !selectedSubCategory) return;
    // Navigate مع تمرير query params
    navigate(
      `/management-form?categoryId=${selectedSubCategory.category_id}&subCategoryId=${selectedSubCategory.id}&userId=${userId}`
    );
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">اختر النشاط</h2>

      <select
        className="w-full p-3 border rounded-lg mb-6"
        value={selectedCategory?.id || ""}
        onChange={(e) => {
          const cat = categories.find(
            (c) => c.id.toString() === e.target.value
          );
          setSelectedCategory(cat);
        }}
      >
        <option value="">اختر نشاطاً</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <div>
          <h3 className="text-lg font-medium mb-3">حدد نوع الرخصة</h3>
          {subCategories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {subCategories.map((sub) => {
                const isSelected = selectedSubCategory?.id === sub.id;
                return (
                  <div
                    key={sub.id}
                    onClick={() => setSelectedSubCategory(sub)}
                    className={`p-4 border-2 rounded-lg text-center cursor-pointer transition
                      ${
                        isSelected
                          ? "bg-blue-100 border-blue-400"
                          : "border-dashed border-gray-300 hover:bg-gray-100"
                      }`}
                  >
                    {sub.name}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500">لا يوجد أنواع رخصة متاحة</p>
          )}
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-end">
        <button
          onClick={handleContinue}
          disabled={!selectedCategory || !selectedSubCategory}
          className={`p-3 rounded-lg w-full sm:w-auto text-white ${
            selectedCategory && selectedSubCategory
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-200 cursor-not-allowed"
          }`}
        >
          استمرار
        </button>
        <button
          onClick={() => {
            setSelectedCategory(null);
            setSelectedSubCategory(null);
          }}
          className="p-3 rounded-lg w-full sm:w-auto bg-gray-200 text-gray-700"
        >
          الغاء
        </button>
      </div>
    </div>
  );
};

export default AppFrom;
