import { getInputs, getCustomInputs } from "./baseInputs";



export const formConfig = {
  // ---------------------- LICENSE ----------------------
  license: {
    general_info: {
      name: "بيانات عامة",
      inputs: getInputs([
        "application_number",
        "customer_name",
        "application_image",
        "commercial_registration_image",
      ]),
    },

    attachments: {
      name: "المرفقات",
      inputs: getInputs(["application_image", "commercial_registration_image"]),
    },
  },

  // ---------------------- PROPERTY ----------------------
  property: {
    property_info: {
      name: "بيانات العقار",
      inputs: getInputs([
        "rent_start_date",
        "rent_end_date",
        "rent_value",
        "currency_id",
      ]),
    },

    contract_info: {
      name: "بيانات العقد",
      inputs: getInputs(["rent_start_date", "rent_end_date"]),
    },
  },

  // ---------------------- ADDITIONAL ----------------------
  additional: {
    additional_info: {
      name: "بيانات إضافية",
      inputs: getInputs(["address", "employee_number", "panel_type_id"]),
    },
  },

  // ---------------------- TOURISM ----------------------
  tourism: {
    tourism_info: {
      name: "بيانات السياحة",
      inputs: getInputs([
        "tourism_start_date",
        "tourism_end_date",
        "tourism_value",
        "currency_id",
      ]),
    },

    attachments: {
      name: "مرفقات السياحة",
      inputs: getInputs(["tourism_value", "currency_id"]),
    },
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
