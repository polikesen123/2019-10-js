var ff = XMLHttpRequest();
ff.open('get','./data.json',true);
ff.onreadystatechange = function(){
    if(ff.readyState==4&&ff.status ==200){
        data = JSON.parse(ff.response)
    }
}