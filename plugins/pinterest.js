/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import*as e from"fs";let handler=async(a,{conn:t,text:r,args:s})=>{if(!s[0])return a.reply("Que desea buscar en pinterest?");let i=await t.getName(a.sender),n=encodeURIComponent(r),l=a.reply(MultiNK.Bsqd(i));await l;try{let p=await fetchJson(`https://latam-api.vercel.app/api/pinterest?apikey=${MyApiKey}&q=${n}`);if(!p.imagen)return a.reply("[ ! ] Sin resultados");t.sendMessage(a.chat,{image:{url:p.imagen},caption:`*[ PINTEREST-CHAN ] ✓*
*~> Resultado para* : _${r}_`,mentions:[a.sender]},{quoted:{key:{fromMe:!1,participant:"0@s.whatsapp.net",remoteJid:"51995386439-1604595598@g.us"},message:{orderMessage:{itemCount:737,status:200,thumbnail:e.readFileSync("./multimedia/imagenes/mylogo.jpg"),surface:200,message:`${i} => ${r}`,orderTitle:"Matt_M",sellerJid:"0@s.whatsapp.net"}}}})}catch(d){a.reply(MultiNK.Error0())}};handler.help=["pinterest"].map(e=>e+" <busqueda>"),handler.tags=["busqueda"],handler.command=/^(pinterest)$/i,handler.limit=!0;export default handler;
