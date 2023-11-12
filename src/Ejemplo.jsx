const fauna = {
    name: `flamenco`,
    place: `mar Chuiquita `,
    number: 1
}

const paisaje = {
    name: `balcon`,
    place: `catamarca `,
    number: 2
}

const retrato = {
    name: `abuela`,
    place: ` españa `,
    number: 3
}

const galeria = [flamenco, balcon, abuela]

const lugarFoto = galeria.find (function(lugar){
    return lugar.type=== `catamarca`
})

console.log (lugarFoto.name)