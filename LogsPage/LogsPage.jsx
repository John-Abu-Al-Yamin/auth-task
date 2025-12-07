import FiltersBarTable from "@/components/dashboard/LicenseDetails/FiltersBarTable";
import LogsTable from "@/components/dashboard/LicenseDetails/LogsTable";
import { useGetLogs } from "@/hooks/Actions/logsModal/useLogs";
import { useParams } from "react-router-dom";

const LogsPage = () => {
  const { renewalId } = useParams();

  const { data: logs, isPending } = useGetLogs(renewalId);

  return (
    <div className="p-2">
      <div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className=""
      >
        <FiltersBarTable />
        <LogsTable logs={logs} isPending={isPending} />
      </div>
    </div>
  );
};

export default LogsPage;
