<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="description" content="my name sume">
    <meta name="author" content="nhan pro">
    <meta name="country" content="viet nam">
    <meta name="viewort" content="width=device-width, initial-sacale=1">
    <title>nhan nguyen sume</title>
    <style>
       #menu_text{
           background-color: #1884;
           text-align: center;
           padding: 80px;
           margin: 0;
}
       nav {
           background-color: #333;
           overflow: hidden;
       }
        nav a{
            color: white;
            padding: 14px 20px;
            display: block;
            text-align: center;
            text-decoration: none;
        }
        nav a:hover{
            background-color: #DDD;
            color: black;
        }

.menu-left{
    float: left;
}

.menu-right{
    float: right;
}

#left_side{
    flex: 30%;
    padding: 10px 20px;
    background-color: #f1f1f1;
}

#right_side{
    flex: 70%;
    padding: 10px 20px;
}

#flex-contaison {
    flex-wrap:  nowrap;
    display: flex;
}


footer {
    background-color: black;
    text-align: center;
    color: white;
}

footer > a{
    color: white;
}

table{
    border-collapse: collapse;
    
}
table td,table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
.wife_title{
    font-size: 10px;
}
.wife_text {
    text-align: center;
    float: left;
    width: 33%;
}
.wife_img {
    width: 90px;
    height: 90px;
}
.Wife_container {
    display: flex;
    flex-wrap: wrap;
}

@media(max-width: 400px) {
    #left_side {
        flex: 100%;
    }
    #right_side {
        flex: 100%;
    }
    #flex-contaison {
        flex-wrap: wrap;
    }
    .wife_text{
        flex: 50%;
 }
}
    </style>
</head>
<body>
    <h1 id="menu_text">my reasum</h1>
    <nav>
        <a href="#contact" class="menu-left">contact informatin</a>
        <a href="#education" class="menu-left">education</a>
        <a href="#social" class="menu-left">social media
        </a>
        <a href="#schedule" class="menu-right">Schedule</a>
    </nav>
  <div id="flex-contaison">
      
    <div id="left_side">
        <img src="assest/xie.jpg" alt="Myphoto" width="100" height="100">
        <img src="assest/ai.jpg" alt="Myphoto" width="100" height="100">
        <img src="assest/nhan.jpg" alt="my photo" width="100" height="100">
        <h2 id="contact">Contact Information</h2>
        <p><em>i live in viet nam</em></p>
        <ul>
             <li><strong>full name :</strong>nhan</li>
              <li><strong>country:</strong>viet nam</li>
        </ul>
        <h2 id="education">Education</h2>
        <ol>
           <li>nhan dep trai</li>
           <li>Code ngu vl</li>
           <li>Code oc cho</li>
        </ol>
    <h2 id="schedule">Schedule</h2>
    <table>
         <tr>
            <th>Thu</th>
            <td colspan="2">tiet</td>
            <td>b1</td>
            <td>b2</td>
        </tr>
        <tr>
            <th rowspan="2">Monday</th>
            <td>
                1
            </td>
            <td>anh</td>
            <td>hoa</td>
            <td>10</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Anh</td>
            <td>Dia</td>
            <td>10</td>
            </tr>
    </table>
        <h2 id="social">social media</h2>
    <p>facebok :<a href="https://facebook.com/nguyenthanhnhan">nguyen thanh nhan</a></p>
    </div>
    
 <div id="right_side">
   </div>
    <h2>My Wife</h2>
    <div id="Wife_container">
        <div class="wife_text">
            <img class="wife_img"src="assest/nhoanh.jpg">
            <div class="wife_title">NHi</div>
            <div class="wife_desr">jekkenenneekkejenebenekwiwbebtjrebbskeeije</div>
        </div>
        <div class="wife_text">
            <img class="wife_img"src="assest/nhiii.jpg">
             <div class="wife_title">NHi</div>
            <div class="wife_desr">jekkenenneekkejenebenekwiwbebtjrebbskeeije</div>
        </div>
        <div class="wife_text">
            <img class="wife_img"src="assest/thu.jpg">
             <div class="wife_title">NHi</div>
            <div class="wife_desr">jekkenenneekkejenebenekwiwbebtjrebbskeeije</div>
        </div>
        <div class="wife_text">
            <img class="wife_img"src="assest/miku.jpg">
            <div class="wife_title">NHi</div>
            <div class="wife_desr">jekkenenneekkejenebenekwiwbebtjrebbskeeije</div>
        </div>
        <div class="wife_text">
              <img class="wife_img"src="assest/ai.jpg">
              <div class="wife_title">NHi</div>
              <div class="wife_desr">jekkenenneekkejenebenekwiwbebtjrebbskeeije</div>
        </div>
        <div class="wife_text">
            <img class="wife_img"src="assest/hh.jpg">
            <div class="wife_title">NHi</div>
             <div class="wife_desr">jekkenenneekkejenebenekwiwbebtjrebbskeeije</div>
            
        </div>
    </div>
    </div>
</div>
    <footer>
        created by nhan<a href="mailto:nhanyader@gmail.com">Send email</a>
    </footer>
</body>
</html>
