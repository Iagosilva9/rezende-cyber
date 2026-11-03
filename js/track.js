(function(){
  var AW='AW-18420968270';
  // Preencher com o rotulo da conversao criada no Google Ads (formato: AbCdEfGhIjK). Enquanto vazio, so registra o evento.
  var CONV_LABEL='';
  var KEY='rc_consent';
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments);}
  window.gtag=gtag;
  var saved=null;
  try{saved=localStorage.getItem(KEY);}catch(e){}
  function grant(v){
    gtag('consent','update',{ad_storage:v,analytics_storage:v,ad_user_data:v,ad_personalization:v});
  }
  gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});
  if(saved==='granted'){grant('granted');}
  gtag('js',new Date());
  gtag('config',AW);
  var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+AW;
  document.head.appendChild(s);

  function banner(){
    if(saved||document.getElementById('cookie-aviso'))return;
    var d=document.createElement('div');
    d.id='cookie-aviso';d.setAttribute('role','dialog');d.setAttribute('aria-label','Aviso de cookies');
    d.innerHTML='<p>Usamos cookies para medir visitas e a eficácia dos anúncios. Você pode aceitar ou recusar. Veja a <a href="/privacidade/">política de privacidade</a>.</p><div><button type="button" data-v="granted">Aceitar</button><button type="button" data-v="denied" class="sec">Recusar</button></div>';
    d.addEventListener('click',function(e){
      var v=e.target.getAttribute&&e.target.getAttribute('data-v');
      if(!v)return;
      try{localStorage.setItem(KEY,v);}catch(x){}
      grant(v);d.remove();
    });
    document.body.appendChild(d);
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',banner);}else{banner();}

  function conv(tipo,el){
    gtag('event','contato_'+tipo,{event_category:'contato',page_path:location.pathname});
    if(CONV_LABEL){gtag('event','conversion',{send_to:AW+'/'+CONV_LABEL});}
  }
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a');
    if(a){
      var h=a.getAttribute('href')||'';
      if(h.indexOf('wa.me')>-1){conv('whatsapp',a);}
      else if(h.indexOf('tel:')===0){conv('telefone',a);}
    }
    var b=e.target.closest&&e.target.closest('#form button[type=submit]');
    if(b){conv('formulario',b);}
  },true);
})();
