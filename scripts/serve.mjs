import { createServer } from 'node:http';
import { readFileSync, statSync } from 'node:fs';
import { resolve, extname } from 'node:path';
const root = resolve('dist');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.xml':'application/xml','.txt':'text/plain','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg'};
createServer((req,res)=>{
  try {
    const url = new URL(req.url,'http://localhost');
    if (/^\/pt-PT\/?$/.test(url.pathname)) { res.writeHead(301,{Location:'/pt/'+url.search}); return res.end(); }
    if (/^\/privacy\/?$/.test(url.pathname)) { res.writeHead(302,{Location:'/en/#privacy'}); return res.end(); }
    let path = resolve(root,'.'+decodeURIComponent(url.pathname));
    if (!path.startsWith(root+'/') && path!==root) throw new Error('Invalid path');
    if (statSync(path).isDirectory()) {
      if (!url.pathname.endsWith('/')) { res.writeHead(301,{Location:url.pathname+'/'+url.search}); return res.end(); }
      path=resolve(path,'index.html');
    }
    res.writeHead(200,{'Content-Type':types[extname(path)] || 'application/octet-stream'});res.end(readFileSync(path));
  } catch {
    res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(readFileSync(resolve(root,'404.html')));
  }
}).listen(Number(process.env.PORT || 4173),'127.0.0.1',()=>console.log('Preview: http://127.0.0.1:'+ (process.env.PORT || 4173)));
