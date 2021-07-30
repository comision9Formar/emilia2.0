const {videos} = require('../data/videos_db')

module.exports = {
    index : (req,res) => res.render('index',{
        title : "Comisión Novena",
    }),
    home : (req,res) => {
        return res.render('home')
    },
    about : (req,res) => {
        return res.render('about')
    },
    music : (req,res) => {
        return res.render('music',{
            videos,
        })
    },
    contact : (req,res) => {
        return res.render('contact')
    },
}