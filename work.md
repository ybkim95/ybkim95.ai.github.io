---
layout: page
title: PROJECTS
permalink: /work/
---

<style type="text/css">
    body {
    padding: 20px;
    font-family: sans-serif;
    background: #f2f2f2;
    }
    img {
    width: 100%; /* need to overwrite inline dimensions */
    height: auto;
    }
    h2 {
    margin-bottom: .5em;
    }
    .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1em;
    }
    
    .location-listing {
    position: relative;
    }

    .location-image {
    line-height: 0;
    overflow: hidden;
    }

    .location-image img {
    filter: blur(1px);
    transition: filter 0.3s ease-in;
    transform: scale(1.1);
    }

    .location-title {
    font-size: 1.5em;
    font-weight: bold;
    text-decoration: none;
    z-index: 1;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 1;
    transition: opacity .3s;
    background: rgba(90,0,10,0.25);
    color: white;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .location-listing:hover .location-title {
    opacity: 0;
    }

    .location-listing:hover .video {
      opacity: 1;
    }

    .overlay {
      position: absolute;
      font-size: 1.5em;
      font-weight: bold;
      text-decoration: none;
      height: 100%;
      width: 100%;
      top:0;
      left:0;
      z-index:2;
      align-self: center;
      color: "rgb(255,0,0)";
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .video {
      font-size: 1.1em;
      font-weight: bold;
      text-decoration: none;
      z-index: 3;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      opacity: 0.8;
      transition: opacity .3s;
      background: rgba(90,0,10, 1.0);
      /* color: white; */
      overflow: hidden;

      display: flex;
      align-items: center;
      /* justify-content: center; */
    }


    .overlay:hover {
      opacity: 0;
    }

    .location-listing:hover .location-image img {
    filter: blur(0px);
    }

    @media (hover: none) { 
      .location-title {
          opacity: 0;
      }
      .location-image img {
          filter: blur(2px);
      }
    }
</style>

<div class="child-page-listing">
  <div class="grid-container">
  <article id="3685" class="location-listing">
      <a class="location-title" href="/chatbot/">
          Chatbot Service </a>
      <div class="location-image">
        <a href="/genara/">
            <img width="300" height="70" src="/assets/img/chatbot.png" alt="">          
          </a>
      </div>
    </article>
    <article id="3688" class="location-listing">
      <a class="location-title" href="/rfusion/">
          Pick & Place with UR5          </a>
      <div class="location-image">
        <a href="/rfusion/">
            <img width="200" height="169" src="/assets/img/rfusion4.png" alt="london">  </a>
      </div>
    </article>
      <article id="3700" class="location-listing">
      <a class="location-title" href="/minerl/">
          MineRL          </a>
      <div class="location-image">
        <a href="/minerl/">
            <img width="300" height="169" src="/assets/img/minerl.jpg" alt="paris">          
          </a>
      </div>
    </article>
    <article id="3694" class="location-listing">
      <a class="location-title" href="/dori/">
          Elder-care Robot          </a>
      <div class="location-image">
        <a href="/dori/">
            <img width="300" height="169" src="/assets/img/DORI.png" alt="cape town">  </a>
      </div>
    </article>
    <article id="3685" class="location-listing">
      <a class="location-title" href="/roborts/">
          RoboMaster AI Challenge           </a>
      <div class="location-image">
        <a href="/roborts/">
            <img width="300" height="169" src="/assets/img/roborts_original.png" alt="san francisco">    </a>
      </div>
    </article>
    <article id="3700" class="location-listing">
      <a class="location-title" href="/odmgpf/">
          ODMG-PF          </a>
      <div class="location-image">
        <a href="/odmgpf/">
            <img width="300" height="169" src="/assets/img/odmgpf.jpg" alt="paris">          
          </a>
      </div>
    </article>
    <article id="3703" class="location-listing">
      <a class="location-title" href="/ddpg/">
          Self-driving Car in V-REP  </a>
      <div class="location-image">
        <a href="/ddpg/">
          <img width="300" height="70" src="/assets/img/ddpg.png" alt="paris">          
        </a>
      </div>
    </article>
    <article id="3705" class="location-listing">
      <a class="location-title" href="/genara/">
          Folding Robot  </a>
      <div class="location-image">
        <a href="/genara/">
            <img width="300" height="70" src="/assets/img/genara.png" alt="paris">          
          </a>
      </div>
    </article>
  </div>
</div>

<script>
  const video = document.querySelector("video");

  function startPreview() {
    video.muted = true;
    video.currentTime = 1;
    video.playbackRate = 0.5;
    video.play();
  }

  function stopPreview() {
    video.currentTime = 0;
    video.playbackRate = 1;
    video.pause();
  }

  let previewTimeout = null;

  video.addEventListener("mouseenter", () => {
    startPreview();
    previewTimeout = setTimeout(stopPreview, 4000);
  });

  video.addEventListener("mouseleave", () => {
    clearTimeout(previewTimeout);
    previewTimeout = null;
    stopPreview();
  });

  video.addEventListener("click", () => {
    window.location = '/genara/';
  });

</script>