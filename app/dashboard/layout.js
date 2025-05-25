import Sidebar from "./_components/Sidebar"


function DashboardLayout({children}) {
  return (
    <div>
        <div className="lg:w-64 h-screen fixed ">
            <Sidebar/>
        </div>
        <div className="lg:ml-64 ">
        {children}
        </div>
    </div>
  )
}

export default DashboardLayout