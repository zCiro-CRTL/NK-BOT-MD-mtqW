/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler=async(a,{conn:e,text:n,command:t})=>{if(!n)return a.reply(`Que desea buscar en Youtube?, Ejemplo de uso: 

${Prefijo+t} cuanto es 1 + 1 :v`);let r;await a.reply(MultiNK.Bsqd(await e.getName(a.sender)));let l=encodeURIComponent(n);try{let s=await fetchJson(`https://latam-api.vercel.app/api/yts?apikey=${MyApiKey}&q=${l}`),i="*[ > ] Resultados en Youtube para:* _"+n+"_\n\n";for(let u of s.resultados)i+=`π Titulo: ${u.titulo}
π§¬ ID: ${u.id}
βοΈ URL: ${u.url}
ποΈ Tipo: ${u.tipo}
πΌοΈ Miniatura: ${u.imagen}
β Duracion: ${u.duracion}
π Descripci\xf3n: ${u.descripcion}
π Fecha de subida: ${u.f_carga}
π Vistas: ${u.vistas}
||
β‘Autor: ${u.autor}
πΊ Canal: ${u.canal}

*ββββββββββ*

`;a.reply(i)}catch(o){a.reply(MultiNK.Error0())}};handler.help=["ytbuscar <texto>"],handler.tags=["busqueda"],handler.command=/^(ytbuscar|ytsearch|yts)$/i;export default handler;
