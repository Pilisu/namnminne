self.addEventListener("install",e=>{
 e.waitUntil(
  caches.open("namnminne").then(c=>c.addAll(["./"]))
 )
});
