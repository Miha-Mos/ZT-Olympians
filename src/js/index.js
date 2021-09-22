let nextIcon = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><g><path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333z"/><path d="M228.418,134.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L289.83,256l-91.582,91.582c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17L228.418,134.248z"/></g></g></g><g></g><g></g><g></g><g></g><g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g><g></g></svg>';
let prevIcon = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><g><path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333z"/><path d="M313.752,134.248c-8.331-8.331-21.839-8.331-30.17,0L176.915,240.915c-8.331,8.331-8.331,21.839,0,30.17l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17L222.17,256l91.582-91.582C322.083,156.087,322.083,142.58,313.752,134.248z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g><g></g><g></g><g></g></svg>';

let screenWidth = $(window).width();

if(screenWidth <= 650){
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:1,
            margin:20,
            mouseDrag:false,
            nav:true,
            dots:false,
            navElement: 'div',
            navText:[
            prevIcon,
            nextIcon
            ]
        });
    });
}else if(screenWidth <= 768){
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:3,
            margin:20,
            mouseDrag:false,
            nav:true,
            dots:false,
            navElement: 'div',
            navText:[
            prevIcon,
            nextIcon
            ]
        });
    });
}else{
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:4,
            margin:20,
            mouseDrag:false,
            nav:true,
            dots:false,
            navElement: 'div',
            navText:[
            prevIcon,
            nextIcon
            ]
        });
    });
}