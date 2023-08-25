import data from '../data.js'


export const ButtonCard = ({ children, id, typeButton, contenido }) => {

    const types = [
        {
            name: 'agregar',
            className: 'button-agregar',
            text: 'Agregar'
        },
        {
            name: 'eliminar',
            className: 'button-eliminar',
            text: 'Eliminar'
        },
        {
            name: 'verMas',
            className: 'button-verMas',
            text: 'Ver Mas'

        },
        {
            name: 'tresPuntos',
            className: 'button-tresPuntos',
            text: '⚪⚪⚪'
        },
        {
            name: 'delante',
            className: 'button-delante',
            text: false
        },
        {
            name: 'atras',
            className: 'button-atras',
            text: false
        }
    ]

    let type = types.find(({ name }) => name === typeButton)
    const className = type.className;

    const agregar = (id) => {
        let newData = data.map(persona => {
            if (persona.id === id) {
                persona.isFriend = true;
            }
        })
    }
    const hadleClick = () => {
        if (contenido) {
            const element = document.getElementsByClassName(contenido)
            console.log(element);
            let scrollPosition = 0;
            if (type.name== 'delante') {
                scrollPosition += 50; // Valor de desplazamiento
                element.style.transform = `translateX(${scrollPosition}px)`;
            } else if (type.name == 'atras') {
                scrollPosition -= 50; // Valor de desplazamiento
                element.style.transform = `translateX(${scrollPosition}px)`;
            }
        }
    }
    return (
        <button className={className} onClick={hadleClick}>
            {type.text ? type.text : children}
        </button>
    )
}