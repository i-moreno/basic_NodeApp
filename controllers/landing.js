// Separate handler logic from router logic

exports.get_landing =  function(req, res, next) {
  res.render('landing', { title: 'Welcome to Express', subtitle: 'Backend Cornerstone' });
}

exports.get_lead =  function(req, res, next) {
  console.log('--> Lead Email:', req.body.lead_email);
  res.redirect('/');
}