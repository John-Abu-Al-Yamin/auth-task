// ملف baseInputs.js
export const baseInputs = {
  // === بيانات الرخصة ===
  application_number: {
    name: "application_number",
    label: "رقم الاستمارة",
    type: "text",
    required: true,
    grid: "md:col-span-6",
  },
  customer_name: {
    name: "customer_name",
    label: "إسم المكلف",
    type: "text",
    required: true,
    grid: "md:col-span-6",
  },
  application_image: {
    name: "application_image",
    label: "صورة الطلب",
    type: "file",
    required: true,
    grid: "md:col-span-6",
  },
  commercial_registration_image: {
    name: "commercial_registration_image",
    label: "السجل التجاري",
    type: "file",
    required: true,
    grid: "md:col-span-6",
  },

  // === بيانات العقار ===
  rent_start_date: {
    name: "rent_start_date",
    label: "بداية الإيجار",
    type: "date",
    required: true,
    grid: "md:col-span-6",
  },
  rent_end_date: {
    name: "rent_end_date",
    label: "نهاية الإيجار",
    type: "date",
    required: true,
    grid: "md:col-span-6",
  },
  rent_value: {
    name: "rent_value",
    label: "قيمة الإيجار",
    type: "text",
    required: true,
    grid: "md:col-span-6",
  },
  currency_id: {
    name: "currency_id",
    label: "العملة",
    type: "select",
    options: [
      { id: 1, name: "ريال يمني" },
      { id: 2, name: "جنيه مصري" },
    ],
    required: true,
    grid: "md:col-span-6",
  },

  // === بيانات إضافية ===
  address: {
    name: "address",
    label: "العنوان",
    type: "text",
    required: true,
    grid: "md:col-span-6",
  },
  employee_number: {
    name: "employee_number",
    label: "عدد العاملين",
    type: "text",
    required: true,
    grid: "md:col-span-6",
  },
  panel_type_id: {
    name: "panel_type_id",
    label: "نوع اللوحة",
    type: "select",
    options: [
      { id: 1, name: "مضيئة" },
      { id: 2, name: "غير مضيئة" },
    ],
    required: true,
    grid: "md:col-span-6",
  },



  // === بيانات سياحة ===
  tourism_start_date: {
    name: "tourism_start_date",
    label: "بداية السياحة",
    type: "date",
    required: true,
    grid: "md:col-span-6",
  },
  tourism_end_date: {
    name: "tourism_end_date",
    label: "نهاية السياحة",
    type: "date",
    required: true,
    grid: "md:col-span-6",
  },
  tourism_value: {
    name: "tourism_value",
    label: "قيمة السياحة",
    type: "text",
    required: true,
    grid: "md:col-span-6",
  },
};


export const getInputs = (inputNames) => {
  return inputNames.map((inputName) => ({
    ...baseInputs[inputName],
  }));
};

export const getCustomInputs = (inputConfigs) => {
  return inputConfigs.map((config) => ({
    ...baseInputs[config.name],
    ...config.override,
  }));
};
