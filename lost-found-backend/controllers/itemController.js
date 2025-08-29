const Item = require("../models/Item");

// Submit new item
exports.createItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json({ message: "Item submitted for approval", item });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fetch approved items
exports.getApprovedItems = async (req, res) => {
  const items = await Item.find({ status: "Approved" });
  res.json(items);
};

// Moderator: fetch pending
exports.getPendingItems = async (req, res) => {
  const items = await Item.find({ status: "Pending" });
  res.json(items);
};

// Approve/Reject
exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const item = await Item.findByIdAndUpdate(id, { status }, { new: true });
  res.json(item);
};

// Claim Item
exports.claimItem = async (req, res) => {
  const { id } = req.params;
  const { claimantId } = req.body;
  const item = await Item.findByIdAndUpdate(id, { status: "Claimed", claimantId }, { new: true });
  console.log(`Notification: Item ${item.title} claimed by User ${claimantId}`);
  res.json(item);
};
