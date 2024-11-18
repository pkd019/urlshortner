const urlRouter = require("express").Router();
const {generateNewShortUrl,getUpdatedurl} = require("../controller/url.contoller")
urlRouter.post(("/"),generateNewShortUrl);
urlRouter.get("/:shorturl",getUpdatedurl);

module.exports = urlRouter;