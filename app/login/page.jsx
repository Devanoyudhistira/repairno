import { login } from "@/action/auth";
import Formcomponent from "@/components/formcomponent";
import Navbar from "@/components/navbar";

export default function Page() {
    return (
        <main className="w-screen h-full  overflow-hidden flex flex-col " >
            <Navbar singlepage={true} addcontext={"login sebagai admin"} />
            <div className="h-full w-full flex flex-col items-center py-20" >
                <Formcomponent actionlogin={login} />
            </div>
        </main>
    )
}