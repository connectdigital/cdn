(function(){
  console.log("1")
document.write('<div id="-stick-footer-1455632411732" style="  border-top-width: 1px; border-top-style: solid; border-top-color: grey; position: fixed; left: 0px; width: 100%; height: auto; z-index: 346; opacity: 1; bottom: -1px; background: rgba(240, 240, 240, 0.498039);"><a onclick=\'document.body.removeChild( document.getElementById("-stick-footer-1455632411732") )\'  href="#" style="position: absolute;top: 0px;width: 27px;height: 27px;right: 20px;z-index: 999999999;"><img alt="close" src="http://cdn.connect.digital/close.png" style="border: none"></a><div style="padding-top:0px; text-align: center; width: 100%; height:auto; margin: 0px; ">');


   document.MAX_ct0 ='';
   var m3_u = (location.protocol=='https:'?'https://cas.criteo.com/delivery/ajs.php?':'http://cas.criteo.com/delivery/ajs.php?');
   var m3_r = Math.floor(Math.random()*99999999999);
   document.write ("<scr"+"ipt type='text/javascript' src='"+m3_u);
   document.write ("zoneid=376308");document.write("&amp;nodis=1");
   document.write ('&amp;cb=' + m3_r);
   if (document.MAX_used != ',') document.write ("&amp;exclude=" + document.MAX_used);
   document.write (document.charset ? '&amp;charset='+document.charset : (document.characterSet ? '&amp;charset='+document.characterSet : ''));
   document.write ("&amp;loc=" + escape(window.location).substring(0,1600));
   if (document.context) document.write ("&context=" + escape(document.context));
   if ((typeof(document.MAX_ct0) != 'undefined') && (document.MAX_ct0.substring(0,4) == 'http')) {
       document.write ("&amp;ct0=" + escape(document.MAX_ct0));
   }
   if (document.mmm_fo) document.write ("&amp;mmm_fo=1");
   var publisherurl = "%%SITE%%";
   var macro = "%%SI" + "TE%%";
   if (publisherurl !== macro) document.write ("&amp;publisherurl="+publisherurl);
   document.write ("'></scr"+"ipt>");


document.write('<a href="http://connect.digital" style="position: absolute;top: 65px;right: 10px;"><img src="http://cdn.connect.digital/logo.png"></a>');
document.write('</div></div>');

})();
