

async function asd(){
    let form = await fetch('./data/form-test-1.json')
    let data = await form.json()
    data.fields.forEach(item => {
        const label = document.createElement('input');
        if(item.attrs.type === 'text'){

            for (const [key, value] of Object.entries(item.attrs)) {
                label.setAttribute(key, value)
                label.setAttribute('placeholder',item.label)
                document.getElementById('root').append(label)
            }


        }
    });
    data.buttons.forEach(item=>{
        const button = document.createElement('button')
        button.innerHTML = item
        document.getElementById('but').append(button)
    })
    let title = document.createElement('h1')
    title.innerHTML = data.title
    document.getElementById('title').append(title)


}
asd()

async function abc() {
    let form = await fetch('./data/form-test-2.json')
    let data = await form.json()

    data.fields.forEach(item => {
        if(item.attrs.type === 'text'){
            const label = document.createElement('input');
            for (const [key, value] of Object.entries(item.attrs)) {
                label.setAttribute(key, value)
                label.setAttribute('placeholder',item.label)
                document.getElementById('root2').append(label)
            }
        }
        else if(item.attrs.type === 'radio'){


            item.attrs.variants.map((item,key) =>{
                const radio = document.createElement('input')
                const label = document.createElement('label')
                radio.setAttribute("type","radio")
                radio.setAttribute('id',key)
                label.setAttribute('for',key)
                label.innerHTML = item.label
                document.getElementById('what').append(label)
                document.getElementById('what').append(radio)

            })

        }
        else if(item.attrs.type === 'textarea'){
            const textarea = document.createElement('textarea');

            for (const [key, value] of Object.entries(item.attrs)) {
                textarea.setAttribute(key, value)
                textarea.setAttribute('placeholder',item.label)
                document.getElementById('texta').append(textarea)
            }
        }
    });

    data.buttons.forEach(item=>{
        const button = document.createElement('button')
        button.innerHTML = item
        document.getElementById('but2').append(button)
    })
    let desriptions = document.createElement('p')
    desriptions.innerHTML = data.description
    document.getElementById('descrip').append(desriptions)
    let title = document.createElement('h1')
    title.innerHTML = data.title
    document.getElementById('title2').append(title)

}
abc()



async function glo(){
    let form = await fetch('./data/form-test-3.json')
    let data = await form.json()
    let desriptions = document.createElement('p')
    desriptions.innerHTML = data.description
    document.getElementById('descrip2').append(desriptions)

    let title = document.createElement('h1')
    title.innerHTML = data.title
    document.getElementById('title3').append(title)
    data.fields.forEach(item => {

        if(item.attrs.type === 'select'){
            let select = document.createElement('select')
            item.attrs.variants.map((item,key) =>{
                    let options = document.createElement('option')
                    options.setAttribute('value',item.value)
                    options.innerHTML = item.label
                    select.appendChild(options)
                    console.log(select)
                    document.getElementById('hello').append(select)
            })

        }
        else if(item.attrs.type === 'textarea'){
            const textarea = document.createElement('textarea');

            for (const [key, value] of Object.entries(item.attrs)) {
                textarea.setAttribute(key, value)
                textarea.setAttribute('placeholder',item.label)
                document.getElementById('textar').append(textarea)
            }
        }

        else if(item.attrs.type === 'checkbox'){


            item.attrs.variants.map((item,key) =>{
                const radio = document.createElement('input')
                const label = document.createElement('label')
                radio.setAttribute("type","checkbox")
                radio.setAttribute('id',key)
                label.setAttribute('for',key)
                label.innerHTML = item.label
                document.getElementById('check').append(label)
                document.getElementById('check').append(radio)

            })

        }
    });
    data.buttons.forEach(item=>{
        const button = document.createElement('button')
        button.innerHTML = item
        document.getElementById('butt3').append(button)
    })
}
glo()