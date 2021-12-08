var previewblock1 = document.getElementById('preview-block-1')
var previewblock2 = document.getElementById('preview-block-2')
var previewblock3 = document.getElementById('preview-block-3')
var previewblock4 = document.getElementById('preview-block-4')
var previewblock5 = document.getElementById('preview-block-5')
var preview1 = document.getElementById('preview-1')
var preview2 = document.getElementById('preview-2')
var preview3 = document.getElementById('preview-3')
var preview4 = document.getElementById('preview-4')
var preview5 = document.getElementById('preview-5')
preview1.addEventListener('mousemove', function(e){
    var x = e.pageX;
    var y = e.pageY;
    var zozozo = window.innerHeight;
    console.log(y);
    previewblock1.style.left = x + "px";
    previewblock1.style.top = y + "px";
});
preview2.addEventListener('mousemove', function(e){
    var x = e.pageX;
    var y = e.pageY;
    previewblock2.style.left = x + "px";
    previewblock2.style.top = y + "px";
});
preview3.addEventListener('mousemove', function(e){
    var x = e.pageX;
    var y = e.pageY;
    previewblock3.style.left = x + "px";
    previewblock3.style.top = y + "px";
});
preview4.addEventListener('mousemove', function(e){
    var x = e.pageX;
    var y = e.pageY;
    previewblock4.style.left = x + "px";
    previewblock4.style.top = y + "px";
});
preview5.addEventListener('mousemove', function(e){
    var x = e.pageX;
    var y = e.pageY;
    previewblock5.style.left = x + "px";
    previewblock5.style.top = y + "px";
});
preview1.addEventListener('mouseover', function(e){
    previewblock1.classList.remove("display-none");
});
preview1.addEventListener('mouseout', function(e){
    previewblock1.classList.add("display-none");
})
preview2.addEventListener('mouseover', function(e){
    previewblock2.classList.remove("display-none");
});
preview2.addEventListener('mouseout', function(e){
    previewblock2.classList.add("display-none");
})
preview3.addEventListener('mouseover', function(e){
    previewblock3.classList.remove("display-none");
});
preview3.addEventListener('mouseout', function(e){
    previewblock3.classList.add("display-none");
})
preview4.addEventListener('mouseover', function(e){
    previewblock4.classList.remove("display-none");
});
preview4.addEventListener('mouseout', function(e){
    previewblock4.classList.add("display-none");
})
preview5.addEventListener('mouseover', function(e){
    previewblock5.classList.remove("display-none");
});
preview5.addEventListener('mouseout', function(e){
    previewblock5.classList.add("display-none");
})