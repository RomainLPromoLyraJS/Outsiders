const adminMW = (req, res, next) => {
    
    if (!req.session.user) {
        return response.redirect('/login');
    }
    
    if (req.session.user.role === 'admin') {
        return next();
    }
    
    res.render('401');
}

module.exports = adminMW;