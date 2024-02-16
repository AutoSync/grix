const Doc = require("../grix/engine")


const Logo = {
    name: 'h1',
    className: 'title',
    text: 'Minha Rota Motos'
}

const motos = {
    name: 'a',
    className: 'menu-item',
    title: 'Motos',
    link: '/catalogo-motos',
}

const ultimas_notiticias = {
    name: 'a',
    className: 'menu-item',
    title: 'Ultimas',
    link: '/ultimas',
}

const Menu = {
    name: 'ul',
    className: 'main-menu',
    children: [Logo, motos, ultimas_notiticias]
}

const searchBox = {
    name: 'input',
    className: 'search-box',
    placeholder: 'buscar motos ex yahama MT-03 ou so MT-03',
    type: 'text'
}

const MainMenu = {
    name: 'div',
    className: 'header',
    children: [Menu, searchBox]
}

const Home = Doc.Html(MainMenu)


function Main() {
    return Home
}

module.exports = Main
