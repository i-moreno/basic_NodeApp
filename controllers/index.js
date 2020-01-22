// Separate handler logic from router logic

exports.homeGreeting =  function(req, res, next) {
  res.render('index', { title: 'Welcome to Express', subtitle: 'Backend Cornerstone' });
}