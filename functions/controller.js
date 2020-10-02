const admin = require('firebase-admin');
admin.initializeApp();

exports.getAllBlog = async (req, res) => {
    try {
        const recd = await admin.firestore().collection('users').get();
        let blogPost = [];
        recd.forEach(doc => {
            let blogId = doc.id;
            let data = doc.data();

            blogPost.push({
                blogId,
                data
            });
        })
        res.status(200).send(JSON.stringify(blogPost));
    } catch (error) {
        console.log(error)
    }
}

exports.getOnePost = async (req, res) => {
    try {
        const recd = await admin.firestore().collection('users').doc(req.params.id).get();
    
        let blogPostId = recd.id;
        let  data = recd.data();

        res.status(200).send(JSON.stringify({
            id: blogPostId,
            data
        }));
    } catch (error) {
        console.log(error)
    }

}


exports.postBlog = async (req, res) => {
    try {
       
        const blogPost = {
                title: req.body.title,
                header: req.body.header,
                body: req.body.body,
                footer: req.body.footer 
        }
        await admin.firestore().collection('users').add(blogPost);
        
        res.status(201).send();
    } catch (error) {
        console.log(error)
    }

}






