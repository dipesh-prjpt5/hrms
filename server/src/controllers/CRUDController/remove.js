const remove = (Model) => async (req, res) => {
  const result = await Model.findByIdAndDelete(req.params.id);
  if (!result) {
    return res.status(404).json({
      success: false,
      message: "Document not found in Model",
    });
  } else {
    return res.status(200).json({
      success: true,
      result,
      message: "Successfully Deleted the document in Model",
    });
  }
};

export default remove;