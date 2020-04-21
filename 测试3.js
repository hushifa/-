"ui";
ui.layout(
    <vertical>
    <input hint="请输入设备码" id="sr"/>
    <button text="复制激活码" id="mm"/>
    </vertical>
     )
    
    
ui.mm.click(function(){
    var we=ui.sr.getText()
    //用户界面的sr里的获取文本
    var m = md5(3*we)
    var mm=md5(m)
    var mmm=mm.substring(mm.indexOf(),mm.indexOf()+14);
    dialogs.build({ 
title: "激活码为:", 
content: mmm, 
positive: "复制", 
negative: "了解", 
}).on("positive", ()=>{ 
alert("复制成功")
         setClip(mmm)
}).on("negative", ()=>{ 

toast("OK👌")
 
}).show();
    })
    
function md5(string) {
    let res = java.math.BigInteger(1, java.security.MessageDigest.getInstance("MD5").digest(java.lang.String(string).getBytes())).toString(32);
    while (res.length < 16) res = "0" + res;
    return res;
}
