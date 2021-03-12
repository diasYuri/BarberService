module.exports = (req, res, next) => {
  const { provider } = req.session.user;

  if (provider) {
    return res.redirect("/app/dashboard/provider");
  }

  return next();
};
