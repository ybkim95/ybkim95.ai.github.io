---
# layout: page
# title: a
permalink: /gallery/
---

<!-- Design by foolishdeveloper.com-->
<html lang="en">
<head>
  <title>Jibo's Gallery</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style media="screen">
  body{
    line-height: 1.5;
    font-family: sans-serif;
  }
  *{
    margin:0;
    box-sizing: border-box;
  }
  .container{
    max-width: 1170px;
    margin:auto;
  }
  .row{
    display: flex;
    flex-wrap: wrap;
  }
  img{
    max-width: 100%;
    vertical-align: middle;
  }
  /*.gallery*/
  .gallery{
    width: 100%;
    display: block;
    min-height: 100vh;
    background-color: #FFFFFF;
    padding: 100px 0;
  }
  .gallery .gallery-filter{
    padding: 0 15px;
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
  }
  .gallery .gallery-filter .filter-item{
    color: #000000;
    font-size: 17px;
    border: 2px solid white;
    text-transform: uppercase;
    display: inline-block;
    border-radius: 20px;
    margin-right: 8px;
    cursor: pointer;
    padding: 8px 20px 8px 20px;
    line-height: 1.2;
    transition: all 0.3s ease;
  }
  .gallery .gallery-filter .filter-item.active{
    color: black;
    border-color : white;
    background: #21DACF;
  }
  .gallery .gallery-item{
    width: calc(100% / 3);
    padding: 15px;
  }
  .gallery .gallery-item-inner img{
    width: 100%;
    border: 3px solid #d4dad9;
  }
  .gallery .gallery-item.show{
    animation: fadeIn 0.5s ease;
  }
  @keyframes fadeIn{
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  .gallery .gallery-item.hide{
    display: none;
  }
  /*responsive*/
  @media(max-width: 491px){
    .gallery .gallery-item{
      width: 50%;
    }
  }
  @media(max-width: 467px){
      .gallery .gallery-item{
      width: 100%;
    }
    .gallery .gallery-filter .filter-item{
      margin-bottom: 10px;
    }
  }
  </style>
</head>
<body>

<section class="gallery">
  <div class="container">
    <div class="row">
      <div class="gallery-filter">
        <span class="filter-item active" data-filter="all">all</span>
        <span class="filter-item" data-filter="friends">friends</span>
        <span class="filter-item" data-filter="family">family</span>
        <span class="filter-item" data-filter="home">home</span>
        <span class="filter-item" data-filter="memories">memories</span>
      </div>
    </div>
    <div class="row">
      <!-- gallery item start -->
      <div class="gallery-item home">
        <div class="gallery-item-inner">
          <img src="/assets/img/gallery/home/1.png" alt="home">
        </div>
      </div>
      <!-- gallery item end -->
      <!-- gallery item start -->
      <div class="gallery-item family">
        <div class="gallery-item-inner">
          <img src="/assets/img/gallery/family/1.png" alt="family">
        </div>
      </div>
      <!-- gallery item end -->
      <!-- gallery item start -->
      <div class="gallery-item home">
        <div class="gallery-item-inner">
          <img src="/assets/img/gallery/home/2.png" alt="home">
        </div>
      </div>
      <!-- gallery item end -->
      <!-- gallery item start -->
      <div class="gallery-item family">
        <div class="gallery-item-inner">
          <img src="/assets/img/gallery/family/2.png" alt="family">
        </div>
      </div>
      <!-- gallery item end -->
      <!-- gallery item start -->
      <div class="gallery-item memories">
        <div class="gallery-item-inner">
          <img src="/assets/img/gallery/memories/3.png" alt="memories">
        </div>
      </div>
      <!-- gallery item end -->
            <div class="gallery-item memories">
              <div class="gallery-item-inner">
                <img src="/assets/img/gallery/memories/1.png" alt="memories">
              </div>
            </div>
      <div class="gallery-item memories">
        <div class="gallery-item-inner">
          <img src="/assets/img/gallery/memories/2.png" alt="memories">
        </div>
      </div>
      <div class="gallery-item friends">
        <div class="gallery-item-inner">
          <img src="/assets/img/gallery/friends/1.png" alt="friends">
        </div>
      </div>
      <!-- gallery item start -->
      <div class="gallery-item friends">
        <div class="gallery-item-inner">
          <img src="/assets/img/gallery/friends/2.png" alt="friends">
        </div>
      </div>
      <!-- gallery item end -->
    </div>
  </div>
</section>

<script>
 const filterContainer = document.querySelector(".gallery-filter"),
 galleryItems = document.querySelectorAll(".gallery-item");

 filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains("filter-item")){
     // deactivate existing active 'filter-item'
     filterContainer.querySelector(".active").classList.remove("active");
     // activate new 'filter-item'
     event.target.classList.add("active");
     const filterValue = event.target.getAttribute("data-filter");
     galleryItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'all'){
        item.classList.remove("hide");
         item.classList.add("show");
       }
       else{
        item.classList.remove("show");
        item.classList.add("hide");
       }
     });
   }
 });
</script>
</body>
</html>