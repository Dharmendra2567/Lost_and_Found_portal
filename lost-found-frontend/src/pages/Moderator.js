import React from "react";
import ModeratorDashboard from "../components/ModeratorDashboard";


export default function Moderator() {
return (
<div className="container mt-4">
<h2>Moderator Dashboard</h2>
<p className="text-muted">Approve or reject incoming item reports.</p>
<ModeratorDashboard />
</div>
);
}