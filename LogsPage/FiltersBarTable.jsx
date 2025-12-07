import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarDays, X } from "lucide-react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const FiltersBarTable = () => {
  const [filters, setFilters] = useState({
    actionType: "",
    dateRange: { from: null, to: null },
  });

  const logValue = (label, value) => {
    console.log(`${label}:`, value);
  };

  const handleDateChange = (key, date) => {
    setFilters((prev) => ({
      ...prev,
      dateRange: { ...prev.dateRange, [key]: date },
    }));
    logValue(
      `تاريخ ${key === "from" ? "من" : "إلى"}`,
      format(date, "dd/MM/yyyy")
    );
  };

  const navgatie = useNavigate();

  return (
    <div>
      <header className="h-8 flex items-center justify-between text-neutral-950 text-lg mb-6 ">
        <h3>سجل الأنشطة</h3>
        <button onClick={() => navgatie(-1)}>
          <div  className="h-7 w-7 cursor-pointer rounded-full flex items-center justify-center bg-neutral-200">
            <X className="w-4 h-4 font-extrabold border border-neutral-950 rounded-full" />
          </div>
        </button>
      </header>

      {/* <div className="flex flex-col sm:flex-row sm:items-end sm:justify-end gap-4 w-full">
        <div className="flex flex-col gap-y-2 min-w-0">
          <p className="text-neutral-950 text-sm font-normal">نوع الإجراء</p>
          <Select
            dir="rtl"
            onValueChange={(val) => {
              setFilters((prev) => ({ ...prev, actionType: val }));
              logValue("نوع الإجراء", val);
            }}
          >
            <SelectTrigger className="w-auto sm:w-[140px] md:w-40 lg:w-[180px] xl:w-[200px] rounded-[8px] border-0 bg-neutral-100 text-gray-700 py-3 px-3 text-sm">
              <SelectValue placeholder="الكل" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="update">تحديث بيانات</SelectItem>
                <SelectItem value="add-branch">إضافة فرع جديد</SelectItem>
                <SelectItem value="add-store">إضافة سجل تجاري</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-y-2 min-w-0">
          <p className="text-neutral-950 text-sm font-normal">من</p>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="w-auto sm:w-[140px] md:w-40 lg:w-[180px] xl:w-[200px] flex items-center justify-between rounded-[8px] border-0 bg-neutral-100 text-gray-700 py-2 px-3 text-sm"
              >
                <span>
                  {filters.dateRange.from
                    ? format(filters.dateRange.from, "dd/MM/yyyy")
                    : "اختر التاريخ"}
                </span>
                <CalendarDays className="text-gray-500" size={18} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-auto" align="start">
              <Calendar
                mode="single"
                selected={filters.dateRange.from}
                onSelect={(date) => handleDateChange("from", date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col gap-y-2 min-w-0">
          <p className="text-neutral-950 text-sm font-normal">إلى</p>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="w-auto sm:w-[140px] md:w-40 lg:w-[180px] xl:w-[200px] flex items-center justify-between rounded-[8px] border-0 bg-neutral-100 text-gray-700 py-2 px-3 text-sm"
              >
                <span>
                  {filters.dateRange.to
                    ? format(filters.dateRange.to, "dd/MM/yyyy")
                    : "اختر التاريخ"}
                </span>
                <CalendarDays className="text-gray-500" size={18} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-auto" align="start">
              <Calendar
                mode="single"
                selected={filters.dateRange.to}
                onSelect={(date) => handleDateChange("to", date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div> */}


    </div>
  );
};

export default FiltersBarTable;
