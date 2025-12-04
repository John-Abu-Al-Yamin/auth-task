import { baseInputs, getInputs, getCustomInputs } from "./baseInputs";

export const formConfig = {
  license: {
    name: "بيانات الرخصة",
    inputs: getInputs([
      "application_number",
      "customer_name",
      "application_image",
      "commercial_registration_image", // لو عايز تضيف السجل التجاري هنا
    ]),
  },

  property: {
    name: "بيانات العقار",
    inputs: getInputs([
      "rent_start_date",
      "rent_end_date",
      "rent_value",
      "currency_id", // لو عايز تضيف العملة
    ]),
  },

  additional: {
    name: "بيانات إضافية",
    inputs: getInputs([
      "address",
      "employee_number",
      "panel_type_id", // لو عايز تضيف نوع اللوحة
    ]),
  },
};

export const addTabToCategory = (
  categoryName,
  tabId,
  tabName,
  inputNames,
  overrides = {}
) => {
  if (!formConfig[categoryName]) {
    formConfig[categoryName] = {};
  }

  let inputs;

  if (Object.keys(overrides).length > 0) {
    const inputConfigs = inputNames.map((inputName) => ({
      name: inputName,
      override: overrides[inputName] || {},
    }));
    inputs = getCustomInputs(inputConfigs);
  } else {
    inputs = getInputs(inputNames);
  }

  formConfig[categoryName][tabId] = {
    name: tabName,
    inputs: inputs,
  };
};
