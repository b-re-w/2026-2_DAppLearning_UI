import { supabase } from "~/postgres/supabase-client";

// before rendering Dashboard react component (works on server side)
export async function loader() {
    const {data} = await supabase().from("destat-table").select("*");
    console.log(data);
    return data;
}

export default function Dashboard() {
    return <div>
        Welcome to the d-stat app
    </div>
}
