import { supabase } from "~/postgres/supabaseClient";

// - Navigation
//   - Dashboard
//   - Survey
//     - All Surveys
//     - Create Survey
//   - Archive
//     - Finished Surveys
//   - Profile
//     - My Surveys
//     - My Responses

// before rendering Home react component (works on server side)
export async function loader() {
    const {data} = await supabase().from("destat-table").select("*");
    console.log(data);
    return data;
}

export default function Home() {
    return <div>
        Welcome to the d-stat app
    </div>
}
