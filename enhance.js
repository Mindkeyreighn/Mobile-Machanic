(()=>{const d=document,q=s=>d.querySelectorAll(s),$=i=>d.getElementById(i),
fine=matchMedia('(hover:hover)').matches,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
d.documentElement.classList.add('js');
const sel='.service-card,.locations article,.review-grid blockquote,.contact-card,.big-call';
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.2});
q(sel).forEach(el=>{el.classList.add('shine');io.observe(el);
if(fine&&!rm)el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.setProperty('--mx',e.clientX-r.left+'px');el.style.setProperty('--my',e.clientY-r.top+'px')})});
const pin=q('.route i')[0];
if(pin){const u=()=>{const p=scrollY/Math.max(1,d.documentElement.scrollHeight-innerHeight);pin.style.transform='translateY('+p*(innerHeight-260)+'px)'};addEventListener('scroll',u,{passive:true});u()}
const t=$('triage'),btns=q('.service-card');
btns.forEach(b=>b.addEventListener('click',()=>{const on=b.classList.contains('on');
btns.forEach(x=>{x.classList.remove('on');x.setAttribute('aria-expanded','false')});
if(on){t.hidden=true;return}
b.classList.add('on');b.setAttribute('aria-expanded','true');
$('tt').textContent=b.dataset.t;
$('tc').innerHTML=b.dataset.c.split('|').map(s=>'<li>'+s+'</li>').join('');
$('tsms').href='sms:+13178539043?&body='+encodeURIComponent('Hi, I need a mobile mechanic. Problem: '+b.dataset.t+'. Vehicle: ');
t.hidden=false;t.scrollIntoView({behavior:rm?'auto':'smooth',block:'nearest'})}));
q('.hs').forEach(h=>h.addEventListener('click',()=>btns[h.dataset.go].click()));
})();
