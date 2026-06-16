const create = (Model) => async (req, res) => {
  const result = await Model.create(req.body);

  // Returning successfull response
  return res.status(200).json({
    success: true,
    result,
    message: "Successfully Created the document in Model ",
  });
};

export default create;
