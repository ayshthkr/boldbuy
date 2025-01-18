import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InventoryTable from "./inventory-table";
import AnalyticsCharts from "./analytics-charts";
import ReportsView from "./reports-view";
import { Navbar } from "@/components/derived/navbar";
import { Footer } from "@/components/derived/footer";

export default function DashboardLayout() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-28">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold">Real-Time Inventory Dashboard</h1>

          <Tabs defaultValue="inventory" className="space-y-4">
            <TabsList>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="inventory" className="space-y-4">
              <InventoryTable />
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <AnalyticsCharts />
            </TabsContent>

            <TabsContent value="reports" className="space-y-4">
              <ReportsView />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
}
