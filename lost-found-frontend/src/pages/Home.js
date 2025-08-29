import React from "react";
import ItemList from "../components/ItemList";


export default function Home() {
return (
<div className="container mt-4">
<h2>Lost & Found — Public</h2>
<p className="text-muted">Browse approved lost & found items below.</p>
<ItemList />
</div>
);
}