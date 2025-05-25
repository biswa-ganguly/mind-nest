import Header from "./_components/Header"
import Sidebar from "./_components/Sidebar"


function DashboardLayout({children}) {
  return (
    <div>
        <div className="lg:w-64 h-screen fixed ">
            <Sidebar/>
        </div>
        <div className="lg:ml-64 ">
          <Header/>
          <div className="m-4"> 
        {children}
          </div>
        </div>
    </div>
  )
}

export default DashboardLayout