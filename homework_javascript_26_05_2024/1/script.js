class Good {
    constructor(name, price, color, width) {
        this.name = name
        this.price = price
        this.color = color
        this.width = width
    }

    create() {

        let element = document.createElement('div')


        element.textContent = `${this.name} - $${this.price}`


        element.style.backgroundColor = this.color
        element.style.border = `${this.width} solid black`
        element.style.padding = '10px';
        element.style.marginBottom = '10px';

        let container = document.getElementById('goods_container')
        container.appendChild(element)
    }
}


let good1 = new Good('Shoes', 49.99, 'blue', '2px')
let good2 = new Good('Watch', 129.99, 'silver', '3px')

good1.create()
good2.create()
