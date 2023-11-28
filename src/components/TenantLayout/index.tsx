import SidBar from "@components/SidBar";
import { Outlet } from "react-router-dom";

const TenantLayout = () => {
  return (
    <>
      <div className='flex'>
        <SidBar />
        <Outlet />
      </div>
    </>
  );
};

export default TenantLayout;