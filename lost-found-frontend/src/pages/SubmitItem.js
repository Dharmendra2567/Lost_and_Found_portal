import React from "react";
import ItemForm from "../components/ItemForm";


export default function SubmitItem() {
return (
<div className="container mt-4">
<h2>Submit an Item</h2>
<p className="text-muted">Report a lost or found item. Submissions go into moderator review.</p>
<ItemForm />
</div>
);
}