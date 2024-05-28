const express = require("express");
const mongoose = require("mongoose");
const router = express.Router()


const jwt = require("jsonwebtoken");
// const requireLogin = require("../middleWares/requireLogin");
const LOGO = mongoose.model("LOGO")
const BRAND = mongoose.model("BRAND")
const SOCIALMEDIAGRAPHICS = mongoose.model("SOCIALMEDIAGRAPHICS")
const UIDESIGN = mongoose.model("UIDESIGN")
const PRESENTATION = mongoose.model("PRESENTATION")
const CREATIVE = mongoose.model("CREATIVE")




// ======================================================================================================================
//for LOGO
router.post('/createLogo' ,  (req,res) => {
    const {name , desc , pic , link} = req.body;
    if(!name || !desc ||!pic || !link) {
        console.log(name,desc,pic)
        return res.status(422).json({error : "Please add all the fields"})
    }

    // console.log(req.merchant)
    // return res.json(req.merchant)


    const logo = new LOGO({
        name,
        desc,
        pic:pic,
        link,
    })

    logo.save().then((result) => {
        return res.json({logo : result})

    }).catch( err => console.log(err))
    // res.json('Item added')
})
router.get("/allLogo" , (req,res) => {
    // console.log(req.merchant._id)
    LOGO.find()
    .then(myposts => {
        res.json(myposts)
    })
})
router.delete("/deleteLogo/:logoid" , async(req , res) => {
    const logoId = req.params.logoid;

    LOGO.findOne({_id : req.params.logoid}).populate("_id")
    .then((logo) => {
        logo.deleteOne().then(result => {
            return res.json({message : "Logo Deleted"})
        })
        .catch((err) => {
            console.log("error")
        })
    })
})

// ======================================================================================================================
//for brand Identity
router.post('/createbrand' ,  (req,res) => {
    const {name , desc , pic , link} = req.body;
    if(!name || !desc ||!pic || !link) {
        console.log(name,desc,pic)
        return res.status(422).json({error : "Please add all the fields"})
    }

    // console.log(req.merchant)
    // return res.json(req.merchant)


    const brand = new BRAND({
        name,
        desc,
        pic:pic,
        link,
    })

    brand.save().then((result) => {
        return res.json({brand : result})

    }).catch( err => console.log(err))
})
router.get("/allbrand" , (req,res) => {
    // console.log(req.merchant._id)
    BRAND.find()
    .then(myposts => {
        res.json(myposts)
    })
})
router.delete("/deleteBrand/:brandid" , async(req , res) => {
    const logoId = req.params.logoid;

    BRAND.findOne({_id : req.params.brandid}).populate("_id")
    .then((brand) => {
        brand.deleteOne().then(result => {
            return res.json({message : "Brand Deleted"})
        })
        .catch((err) => {
            console.log("error")
        })
    })
})

// ======================================================================================================================
//for Social media Graphics

router.post('/creategraphics' ,  (req,res) => {
    const {name , desc , pic , link} = req.body;
    if(!name || !desc ||!pic || !link) {
        console.log(name,desc,pic)
        return res.status(422).json({error : "Please add all the fields"})
    }

    // console.log(req.merchant)
    // return res.json(req.merchant)


    const graphics = new SOCIALMEDIAGRAPHICS({
        name,
        desc,
        pic:pic,
        link,
    })

    graphics.save().then((result) => {
        return res.json({graphics : result})

    }).catch( err => console.log(err))
})

router.get("/allgraphics" , (req,res) => {
    // console.log(req.merchant._id)
    SOCIALMEDIAGRAPHICS.find()
    .then(myposts => {
        res.json(myposts)
    })
})

router.delete("/deleteGraphics/:graphicsid" , async(req , res) => {
    const logoId = req.params.logoid;

    SOCIALMEDIAGRAPHICS.findOne({_id : req.params.graphicsid}).populate("_id")
    .then((brand) => {
        brand.deleteOne().then(result => {
            return res.json({message : "Graphics Deleted"})
        })
        .catch((err) => {
            console.log("error")
        })
    })
})


// ======================================================================================================================

router.post('/createuidesign' ,  (req,res) => {
    const {name , desc , pic , link} = req.body;
    if(!name || !desc ||!pic || !link) {
        console.log(name,desc,pic)
        return res.status(422).json({error : "Please add all the fields"})
    }

    // console.log(req.merchant)
    // return res.json(req.merchant)


    const graphics = new UIDESIGN({
        name,
        desc,
        pic:pic,
        link,
    })

    graphics.save().then((result) => {
        return res.json({message : result})

    }).catch( err => console.log(err))
})

router.get("/alldesign" , (req,res) => {
    // console.log(req.merchant._id)
    UIDESIGN.find()
    .then(myposts => {
        res.json(myposts)
    })
})

router.delete("/deleteDesign/:designid" , async(req , res) => {
    const logoId = req.params.logoid;

    UIDESIGN.findOne({_id : req.params.designid}).populate("_id")
    .then((brand) => {
        brand.deleteOne().then(result => {
            return res.json({message : "Design Deleted"})
        })
        .catch((err) => {
            console.log("error")
        })
    })
})


// ======================================================================================================================

router.post('/createpresentation' ,  (req,res) => {
    const {name , desc , pic , link} = req.body;
    if(!name || !desc ||!pic || !link) {
        console.log(name,desc,pic)
        return res.status(422).json({error : "Please add all the fields"})
    }

    // console.log(req.merchant)
    // return res.json(req.merchant)


    const graphics = new PRESENTATION({
        name,
        desc,
        pic:pic,
        link,
    })

    graphics.save().then((result) => {
        return res.json({message : result})

    }).catch( err => console.log(err))
})

router.get("/allpresentation" , (req,res) => {
    // console.log(req.merchant._id)
    PRESENTATION.find()
    .then(myposts => {
        res.json(myposts)
    })
})

router.delete("/deletePresentation/:presentationid" , async(req , res) => {
    const logoId = req.params.logoid;

    PRESENTATION.findOne({_id : req.params.designid}).populate("_id")
    .then((brand) => {
        brand.deleteOne().then(result => {
            return res.json({message : "Presentation Deleted"})
        })
        .catch((err) => {
            console.log("error")
        })
    })
})

// ======================================================================================================================

router.post('/createlistening' ,  (req,res) => {
    const {name , desc , pic , link} = req.body;
    if(!name || !desc ||!pic || !link) {
        console.log(name,desc,pic)
        return res.status(422).json({error : "Please add all the fields"})
    }

    // console.log(req.merchant)
    // return res.json(req.merchant)


    const graphics = new CREATIVE({
        name,
        desc,
        pic:pic,
        link,
    })

    graphics.save().then((result) => {
        return res.json({message : result})

    }).catch( err => console.log(err))
})

router.get("/alllistening" , (req,res) => {
    // console.log(req.merchant._id)
    CREATIVE.find()
    .then(myposts => {
        res.json(myposts)
    })
})

router.delete("/deletelistening/:listeningid" , async(req , res) => {
    const logoId = req.params.logoid;

    CREATIVE.findOne({_id : req.params.listeningid}).populate("_id")
    .then((brand) => {
        brand.deleteOne().then(result => {
            return res.json({message : "Creative listening Deleted"})
        })
        .catch((err) => {
            console.log("error")
        })
    })
})








module.exports = router;