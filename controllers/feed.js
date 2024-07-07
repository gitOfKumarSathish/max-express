exports.getPosts = (req, res, next) => {
    res.status(200).json({ posts: [{ title: 'First Post', content: 'This is first post' }] });
};

exports.createPost = (req, res, next) => {
    const { title, content } = req.body;
    // create post in db
    res.status(201).json({
        message: 'Content created Successfully',
        post: { id: new Date().toISOString(), title, content }
    });
};