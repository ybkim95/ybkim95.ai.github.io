---
layout: empty
# title: a
permalink: /gallery/
---

<head>
	<meta charset="utf-8">
	<title>Caption Hover Animations</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Lato:400">
	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,900">
	<style type="text/css">
	body{
		/*height: 10000px;*/
		font-family: "Lato";
		background-color: #ffffff;
		padding:20px 30px;
		margin: 0px;
	}
	h1,h2,h3,h4{
		padding: 0px;
		margin: 0px;
	}
	.caption-style-1{
		list-style-type: none;
		margin: 0px;
		padding: 0px;	
	}
	.caption-style-1 li{
		float: left;
		padding: 0px;
		position: relative;
		overflow: hidden;
	}
	.caption-style-1 li:hover .caption{
		opacity: 1;
	}
	.caption-style-1 img{
		margin: 0px;
		padding: 0px;
		float: left;
		z-index: 4;
	}
	.caption-style-1 .caption{
		cursor: pointer;
		position: absolute;
		opacity: 0;
		-webkit-transition:all 0.45s ease-in-out;
		-moz-transition:all 0.45s ease-in-out;
		-o-transition:all 0.45s ease-in-out;
		-ms-transition:all 0.45s ease-in-out;
		transition:all 0.45s ease-in-out;
	}
	.caption-style-1 .blur{
		background-color: rgba(0,0,0,0.65);
		height: 230px;
		width: 400px;
		z-index: 5;
		position: absolute;
	}
	.caption-style-1 .caption-text h1{
		text-transform: uppercase;
		font-size: 24px;
	}
	.caption-style-1 .caption-text{
		z-index: 10;
		color: #fff;
		position: absolute;
		width: 400px;
		height: 300px;
		text-align: center;
		top:100px;
	}
	/** Nav Menu */
	ul.nav-menu{
		padding: 0px;
		margin: 0px;
		list-style-type: none;
		width: 490px;
		margin: 60px auto;
	}
	ul.nav-menu li{
		display: inline;
		margin-right: 10px;
		padding:10px;
		border: 1px solid #ddd;
	}
	ul.nav-menu li a{
		color: #eee;
		text-decoration: none;
		text-transform: uppercase;
	}
	ul.nav-menu li a:hover, ul.nav-menu li a.active{
		color: #2c3e50;
	} 
	/** content **/
	.content{
		margin-top: 100px;
		margin-left: 100px;
		width: 700px;
	}
	.content h1, .content h2{
		font-family: "Source Sans Pro",sans-serif;
		color: #000000;
		padding: 0px;
		margin: 0px;
		font-weight: normal;
	}
	.content h1{
		font-weight: 900;
		font-size: 64px;
	}
	.content h2{
		font-size:26px;
	}
	.content p{
		color: #000000;
		font-family: "Lato";
		line-height: 28px;
		font-size: 15px;
		padding-top: 50px;
	}
	p.credit{
		padding-top: 20px;
		font-size: 12px;
	}
	p a{
		color: #ecf0f1;
	}
	/** fork icon**/
	.fork{
		position: absolute;
		top:100px;
		left: 10px;
	}
	</style>
</head>

<body>
	<div class="fork">
		<a href='../chatbot'><img src="/assets/img/jibo_menu.gif" width="35%" height="35%" alt=""></a>
	</div>
	<div class="content">
		<h1>JIBO'S GALLERY</h1>
		<!-- <h2>WITH CSS3 TRANSITIONS & TRANSFORMS</h2> -->
		<p>
			While living with Jibo, we shared a lot of memories and these are all saved and classified. This is an example of image captioning while hovering on images, using CSS3 transitions and transform rules. 
		</p>
	</div>
  <br><br>
	<div class="container-a1">
		<ul class="caption-style-1">
			<li>
				<img src="/assets/img/elders/1.png" alt="" height="230px" width="400px">
				<div class="caption">
					<div class="blur"></div>
					<div class="caption-text">
						<h1>2022.03.14 MON</h1>
						<p>Talking with Jibo for the first time.</p>
					</div>
				</div>
			</li>
			<li>
				<img src="/assets/img/elders/2.png" alt="" height="230px" width="400px">
				<div class="caption">
					<div class="blur"></div>
					<div class="caption-text">
						<h1>2022.03.22 TUE</h1>
						<p>Shwowing Jibo to clark.</p>
					</div>
				</div>
			</li>
			<li>
				<img src="/assets/img/elders/3.png" alt="" height="230px" width="400px">
				<div class="caption">
					<div class="blur"></div>
					<div class="caption-text">
						<h1>2022.03.25 FRI</h1>
						<p>Asking few recipes to Jibo</p>
					</div>
				</div>
			</li>
			<li>
				<img src="/assets/img/elders/4.png" alt="" height="230px" width="400px">
				<div class="caption">
					<div class="blur"></div>
					<div class="caption-text">
						<h1>2022.03.26 SAT</h1>
						<p>Went to hospital to meet doctor.</p>
					</div>
				</div>
			</li>
			<li>
				<img src="/assets/img/elders/6.png" alt="" height="230px" width="400px">
				<div class="caption">
					<div class="blur"></div>
					<div class="caption-text">
						<h1>2022.03.31 THU </h1>
						<p>Zoom with my family in Canada.</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</body>