import { useState } from "react";
import "./App.css";
import Sidebar, { SidebarItem } from "./components/SideBar";
import { LayoutDashboard } from "lucide-react";
import { FileText, Receipt, Truck, Inbox, Mail } from "lucide-react";
import Stat_card from './components/Stat_card'
import Data_table_state from './context/DataTableState';
import DataTable from "./components/DataTable";
import DeliveryPage from "./components/DeliveryPage";
import DeliveryPageState from "./context/DeliveryPageState";

function App() {

  const arr = [1, 2, 3, 4];

  return (
    <DeliveryPageState>
    <Data_table_state>
      <main className="w-full flex ">
        <Sidebar>
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
          <SidebarItem icon={<Truck size={20} />} text="Delivery" />
          <SidebarItem icon={<Inbox size={20} />} text="Requests" />
          <SidebarItem icon={<Receipt size={20} />} text="Bill" />
        </Sidebar>

        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3vh'}}>
          {/* <div className="main">
            {
              arr.map((item) => {
                return <Stat_card />
              })
            }
          </div>
          <DataTable/> */}
          <DeliveryPage />
        </div>
      </main>
    </Data_table_state>
    </DeliveryPageState>
  );
}

export default App;
