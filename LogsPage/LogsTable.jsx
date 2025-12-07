import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import EmptyData from "@/components/common/EmptyData";
import LoadingTable from "@/components/common/LoadingTable";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Eye } from "lucide-react";
import LogsModalDetalis from "@/components/Models/LogsModalDetalis/LogsModalDetalis";

const headers = [
  { key: "branch_renewal_id", label: "رقم تجديد الفرع" },
  { key: "created_at", label: "الوقت والتاريخ" },
  { key: "department_name", label: "القسم" },
  { key: "user_name", label: "اسم المستخدم" },
  { key: "actions", label: "الإجراءات" }, // العمود الجديد للإجراءات
];

export default function LogsTable({ logs, isPending, refetch }) {
  const [page, setPage] = useState(1);
  const limit = 8;

  const [showlogsDetails, setShowLogsDetails] = useState(false);
  const [selectedLog, setSelectedLog] = useState(null);

  const logsData = Array.isArray(logs?.data?.data?.data)
    ? logs?.data?.data?.data
    : [];

  const totalItems = logs?.data?.data?.total ?? 0;
  const perPage = logs?.data?.data?.per_page ?? limit;
  const currentPage = logs?.data?.data?.current_page ?? 1;
  const totalPages = Math.ceil(totalItems / perPage);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    if (refetch) {
      refetch();
    }
  };

  if (isPending) return <LoadingTable />;

  const handelShowLogsDetails = (log) => {
    setSelectedLog(log);
    setShowLogsDetails(true);
  };

  const handleCloseModal = () => {
    setShowLogsDetails(false);
    setSelectedLog(null);
  };

  return (
    <>
      <div className="py-4 space-y-4 mt-4 overflow-x-auto bg-white">
        <div className="overflow-x-auto md:scrollbar-hide">
          <table className="w-full text-center border-collapse min-w-[1200px]">
            <thead className="bg-primary-50 text-neutral-950 text-sm font-normal">
              <tr>
                {headers.map((col) => (
                  <th
                    key={col.key}
                    className="p-3 border border-gray-200 whitespace-nowrap"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-neutral-950 text-sm">
              {logsData.length === 0 ? (
                <tr>
                  <td colSpan={headers.length}>
                    <EmptyData
                      title="لا يوجد أي بيانات!"
                      subtitle="لا توجد بيانات حالياً."
                    />
                  </td>
                </tr>
              ) : (
                logsData.map((row, index) => (
                  <tr
                    key={row.id}
                    className={`border-b hover:bg-gray-50 ${
                      index % 2 !== 0 ? "bg-gray-50" : ""
                    }`}
                  >
                    {headers.map((col) => (
                      <td
                        key={col.key}
                        className="p-3 border border-gray-100 truncate max-w-[150px] md:max-w-[200px]"
                      >
                        {col.key === "actions" ? (
                          <button
                            className="text-neutral-950 cursor-pointer bg-white shadow w-8 h-8 flex items-center justify-center mx-auto p-1 rounded-[8px] hover:text-primary-700 transition"
                            title="عرض التفاصيل"
                            onClick={() => handelShowLogsDetails(row)}
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                        ) : (col.key === "created_at" ||
                            col.key === "updated_at") &&
                          row[col.key] ? (
                          new Date(row[col.key]).toLocaleString("ar-EG", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        ) : (
                          row[col.key]
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-3 bg-neutral-50 rounded-xl flex justify-end px-5 pb-2 py-2">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={cn("cursor-pointer shadow")}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    className={cn(
                      "cursor-pointer bg-transparent shadow-none border-0 text-neutral-950",
                      currentPage === i + 1 && "bg-primary/20 text-neutral-950"
                    )}
                    isActive={currentPage === i + 1}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={cn(
                    "cursor-pointer shadow",
                    currentPage === totalPages
                      ? "bg-neutral-100 hover:bg-neutral-100 text-gray-400 cursor-not-allowed"
                      : ""
                  )}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>

      {showlogsDetails && (
        <LogsModalDetalis
          logsData={logsData}
          handelShowLogsDetails={handleCloseModal}
        />
      )}
    </>
  );
}
