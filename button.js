
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;
  i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-80333995-1', 'auto');
  ga('send', 'pageview');



status = 1;

function changeStyle1() {
ga('send', 'event', '1st button', 'A', 'clicked A');
if(status== 1) {
    document.getElementById('button1').style.background = 'Yellow';

    status = 2;
}
else if(status== 2) {
    document.getElementById('button1').style.background = 'lightgreen';
    status = 3;
}
else if(status== 3) {
  document.getElementById('button1').style.background = 'hotpink';
    status = 1;
}

}
function changeStyle2() {
ga('send', 'event', '2nd button', 'B', 'clicked B');
if(status== 1) {
    document.getElementById('button2').style.background = 'cyan';

    status = 2;
}
else if(status== 2) {
    document.getElementById('button2').style.background = 'brown';
    status = 3;
}
else if(status== 3) {
  document.getElementById('button2').style.background = 'tomato';
    status = 1;
}

}
