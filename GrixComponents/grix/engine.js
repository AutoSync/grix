
class Tag{
    constructor(name, props){
        this.name = name
        this.props = props == undefined ? '' : this.buildProp(props) 
        this.children = ''
    }

    Children(child){
        if(child != undefined)
        {
            this.children = child
        }
    }

    addProp(properties, value){
        this.props += `${properties}='${value}'`
    }
    buildProp(prop){

        let attributes = ''
        if(Array.isArray(prop))
        {
            p = ` ${prop.name}="${prop.value}"`
            let i = 0
            for(let pp in prop)
            {
               if(i != 0)
               {
                attributes += ` ${pp.name}='${pp.value}'`
               }
            }
        }
        else
        {
            attributes = `${prop.name}='${prop.value}'`
        }

        return attributes


    }

    className(name){
        this.props += this.buildProp({name: 'class', value: name})
    }
    identify(name){
        this.props += this.buildProp({name: 'id', value: name})
    }

    render(){
        return `<${this.name} ${this.props}> ${this.children} </${this.name}>`
    }

}

class Style{
    constructor(){
        this.name = ''
        this.background = ''
        this.color = ''
        this.code = ''
    }
    setStyle(styles){
        for(const style in styles){
            if(style == 'backgroundColor')
                this.code += `background-color: ${styles[style]}; \n`
        }
    }
    setName(new_name){
        this.name = new_name
    }
    setClassName(new_name){
        this.name = `.${new_name}`
    }
    Background(value){
        this.background = `background: ${value}; `
    }
    Color(value){
        this.color = `color: ${value}; `
    }
    renderGlobal(){
        let s
        s += this.background
        s += this.color
  
        this.code = `${this.name}{\n${s}\n}`
        return this.code
    }

    render(){
        let s
        s += this.background
        s += this.color
  
        this.code = s
        return this.code
    }
}

class GlobalStyle{
    constructor(){
        this.css = ''
    }

    AddStyle(styles){

        let code = ''
        for(const style in styles )
        {
            //Size
            if(style == 'width')
                code += `\twidth: ${styles.width};\n`
            if(style == 'height')
                code += `\theight: ${styles.height};\n`
            if(style == 'boxSizing')
                code += `\tbox-sizing: ${styles.boxSizing};\n`
            //Layout
            if(style == 'margin')
                code += `\tmargin: ${styles.margin};\n`
            if(style == 'padding')
                code += `\tpadding: ${styles.padding};\n`


            //Colors
            if(style == 'background')
                code += `\tbackground: ${styles.background};\n`
            if(style == 'backgroundColor')
                code += `\tbackground-color: ${styles.backgroundColor};\n`
            if(style == 'color')
                code += `\tcolor: ${styles.color};\n`

            if(style == 'fontFamily')
                code += `\tfont-family: ${styles.fontFamily};\n`
            if(style == 'fontWeight')
                code += `\tfont-weight: ${styles.fontWeight};\n`

                
        }


        let styleSheet = `${styles.name}{\n${code}}\n\n`
        this.css += styleSheet
    }
    render(){
        return this.css
    }
}

const Html = (html) => {

    let Tag = ''
    let props = ''
    let children = ''

    for(h in html){

        if(h == 'name')
            Tag = html[h]
        if(h == 'className')
            props += `class="${html.className}" `

        if(h == 'children'){
            if(Array.isArray(html.children))
            {
                for(hc in html.children)
                {
                    children += '\n\t' + Html(html.children[hc])
                }
            }
            else
            {
                children = Html(html.chilren[hc])
            }
        }

        if(h == "text")
            children = html.text

        if(h == 'title')
            children = html.title

        if(h == 'link'){
            if(html.link != undefined)
                props += `href="${html.link}" `
        }
            

        if(h == 'placeholder')
            props += `placeholder="${html.placeholder}" `

        if(h == 'type')
            props += `type="${html.type}" `


    }

    let autoclose = Tag == 'input' || Tag == 'link' ? true : false

    if(autoclose)
        return `<${Tag}${props == '' ? '' : ' ' + props}/>\n`
    else
        return `<${Tag}${props == '' ? '' : ' ' + props}>${children}</${Tag}>\n`
}


module.exports = {GlobalStyle, Html}