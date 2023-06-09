const router = require("express").Router();
const data = require ('../data/phones.json')

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", (req, res, next) => {
  res.json(data);
});

router.get("/phones/:id", (req, res, next) => {
  const id = parseInt(req.params.id)
  const phoneDets = data.filter((eachPhone)=>{
    return eachPhone.id === id
  })
  res.json(phoneDets);
});

module.exports = router;
