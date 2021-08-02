const {videos} = require('../data/videos_db');
const {contactos} = require('../data/contactos_db');

module.exports = {
    index : (req,res) => res.render('index',{
        title : "Comisión Novena",
    }),
    home : (req,res) => {
        return res.render('home')
    },
    about : (req,res) => {
        return res.render('about',{
            row : 'row',
        })
    },
    music : (req,res) => {
        return res.render('music',{
            videos,
            row : 'row',
        })
    },
    contact : (req,res) => {
        return res.render('contact',{
            contactos,
            row : 'row',
        })
    },
}