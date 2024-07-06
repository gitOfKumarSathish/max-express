function render404Page(req, res, next) {
    // return res.status(404).render('404', { pageTitle: 'Page Not Found' });
    res.status(404).send('404 Page Not Found');
};


exports.render404Page = render404Page;