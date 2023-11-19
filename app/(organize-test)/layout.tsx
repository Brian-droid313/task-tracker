import { Medal } from "lucide-react";
import React from "react";

const DummyLayout = ({ children }: {children : React.ReactNode}) => {
    return (
        <div className="bg-orange-300 text-white h-screen">
            {children}
            <Medal/>
        </div>
    )
}

export default DummyLayout;