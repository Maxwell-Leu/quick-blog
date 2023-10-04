//models
const sequelize = require('../config/connection');
const Users = require('../models/user')
//const Posts = require('../models/post')
//const Comments = require('../models/comment')

//import seeds
const userSeeds = require('./userData.json');
const postSeeds = require('./postsData.json');
const commentSeeds = require('./commentsData.json');

const seedDatabase = async () => {
    //sync database
    await sequelize.sync({ force: true });

    //Seeds users
    const usersList = await Users.bulkCreate(userSeeds, {
        individualHooks: true,
        returning: true
    })

/*
    const newPosts = await Posts.bulkCreate(postSeeds, {
        individualHooks: true,
        returning: true
    })

    const newComment = await Comments.bulkCreate(commentSeeds,{
        individualHooks: true,
        returning: true
    })

    const newResponse = await Responses.bulkCreate(responseSeeds,{
        individualHooks: true,
        returning: true
    })
    */
}

seedDatabase();