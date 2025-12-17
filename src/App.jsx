import { useState, useEffect } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { X } from "lucide-react";
import StopActivityRequest from "./components/pdf/StopActivityRequest";
import PdfInvoice from "./components/pdf/PdfInvovice";
import AddActivityRequest from "./components/pdf/AddActivityRequest";
import MedicalFacilityLicenseRequest from "./components/pdf/MedicalFacilityLicenseRequest";
import ApplicationRenewal from "./components/pdf/ApplicationRenewal";
import Bdftest from "./components/pdf/Bdftest";
import BusinessLicensePdf from "./components/pdf/BusinessLicensePdf";
import LicenseCashDeposit from "./components/pdf/LicenseCashDeposit/LicenseCashDeposit";
import ExtractingLicenseWorkStreet from "./components/pdf/Extracting/ExtractingLicenseWorkStreet";
import ExtractingLicenseWork from "./components/pdf/Extracting/ExtractingLicenseWork";
import ExtractingLicenseculture from "./components/pdf/Extracting/ExtractingLicenseculture";
import ExtractingLicenseHealth from "./components/pdf/Extracting/ExtractingLicenseHealth";
import MedicalLicenseRequest from "./components/pdf/MedicalLicenseRequest";
import ExtractingLicenseTourism from "./components/pdf/Extracting/ExtractingLicenseTourism";

const App = () => {
  const [showPdf, setShowPdf] = useState(false);
  const [formNumber, setFormNumber] = useState(null);

  useEffect(() => {
    if (showPdf) {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .then((data) => {
          setFormNumber(data.id);
        })
        .catch((err) => {
          console.error("Error fetching form number:", err);
          setFormNumber("N/A");
        });
    }
  }, [showPdf]);

  return (
    <div className="p-6">
      <button
        onClick={() => setShowPdf(true)}
        className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        عرض الاستمارة
      </button>

      {showPdf && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          onClick={() => setShowPdf(false)}
        >
          <div
            className="w-4/5 h-4/5 bg-white p-5 rounded-lg shadow-lg flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                onClick={() => setShowPdf(false)}
                className="text-white bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 mt-2">
              <PDFViewer className="w-full h-full">
                <ExtractingLicenseTourism    />
              </PDFViewer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
