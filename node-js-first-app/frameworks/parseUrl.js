module.exports = (baseUrl) => (req, res) => {
    const parseUrl = new URL(req.url, baseUrl)
    console.log(parseUrl)

    req.pathname = parseUrl.pathname
}