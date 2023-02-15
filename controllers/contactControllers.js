//@desc Get all contacts
//@route Get /api/contacts
//@access public
const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all contact" });
});

//@desc Create new contact
//@route Post /api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
  const { name, username, phone } = req.body;
  if (!username || !name || !phone) {
    res.status(400);
    throw new Error("Every field is mandatory");
  }
  // console.log("req body is:", req.body);
  res.status(200).json({ message: "Create new contact" });
});

//@desc get a contact
//@route Get /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//@desc Update contact
//@route Put /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc Delete contact
//@route Delete /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};

//Da54jM4kcEPjwrsp
