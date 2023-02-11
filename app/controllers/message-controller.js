const Post = require('../db/models/post')

class postController{
    cretePost(req,res){
        
        const mail = req.body.email
        if(! mail.includes("@")){

            res.sendStatus(400)
            return;
        }
        const post = new Post({
            name : req.body.name,
            telephone : req.body.telephone,
            email : req.body.email,
            topic : req.body.topic,
            description : req.body.description
        })
        try{
            post.save()
            res.sendStatus(200)
        }catch(err){
            res.status(400).json(err)
        }
        
    }
}

module.exports = new postController();