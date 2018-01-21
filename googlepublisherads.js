var ads1=1/5;
var ads2=4/5;
var a=document.getElementById(&quot;post1<data:post.id/>&quot;);
var b=document.getElementById(&quot;post2<data:post.id/>&quot;);
var c=document.getElementById(&quot;post3<data:post.id/>&quot;);
var html=b.innerHTML;
var n=html.length;
var t=html.substr(0,n*ads1);
var i=t.lastIndexOf(&quot;&lt;br&gt;&quot;);
var t2=html.substr(0,n*ads2);
var i2=t2.lastIndexOf(&quot;&lt;br&gt;&quot;);
if(i&gt;0 &amp;&amp; i2&gt;0){
a.innerHTML=html.substr(0,i);
b.innerHTML=html.substr(i+4,i2);
c.innerHTML=html.substr(i2+4);