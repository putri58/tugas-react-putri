import { createRoot } from "react-dom/client";
import './tailwind.css'
import TourismAdmin from "./TourismAdmin"; 
import TourismGuest from "./TourismGuest";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <TourismAdmin/>
            <TourismGues t/>
        </div>
    )