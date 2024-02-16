const Doc = require("../grix/engine")

const Style = new Doc.GlobalStyle()


Style.AddStyle({
    name: '.header',
    backgroundColor: 'white',
    width: '100%',
    height: '10vh'
})

Style.AddStyle({
    name: 'body',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundColor: 'whitesmoke'
})

Style.AddStyle({
    name: '.title',
    color: 'red'
})


function style(){
    return Style.render()
}

module.exports = style
