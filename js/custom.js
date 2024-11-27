
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);


  function createYouTubeEmbed(videoId, elementId) {
    const container = document.getElementById(elementId);
    const fullscreenContainer = document.getElementById('fullscreen-video');
    const closeButton = document.getElementById('close-video');
    
    // Create thumbnail image
    const thumbnailImg = document.createElement('img');
    thumbnailImg.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    thumbnailImg.alt = 'YouTube Video Thumbnail';
    thumbnailImg.className = 'video-thumbnail';
    
    // Create play button
    const playButton = document.createElement('div');
    playButton.className = 'play-button';
    
    // Create wrapper for thumbnail and play button
    const thumbnailWrapper = document.createElement('div');
    thumbnailWrapper.appendChild(thumbnailImg);
    thumbnailWrapper.appendChild(playButton);
    
    // Add click event to open fullscreen video
    thumbnailWrapper.addEventListener('click', () => {
        const videoFrame = document.createElement('iframe');
        videoFrame.width = '100%';
        videoFrame.height = '100%';
        videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;
        videoFrame.frameBorder = '0';
        videoFrame.allowFullscreen = true;
        
        // Clear previous content and add new video
        fullscreenContainer.innerHTML = ''; // Clear previous content
        fullscreenContainer.appendChild(closeButton);
        fullscreenContainer.appendChild(videoFrame);
        
        // Show fullscreen video
        fullscreenContainer.style.display = 'block';
        closeButton.style.display = 'block';
    });
    
    // Close video functionality
    closeButton.addEventListener('click', () => {
        fullscreenContainer.style.display = 'none';
        closeButton.style.display = 'none';
        fullscreenContainer.innerHTML = ''; // Clear video
    });
    
    // Add to container
    container.appendChild(thumbnailWrapper);
}

// Extract video ID from the provided YouTube link
function extractYouTubeID(url) {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
}

// Use the provided YouTube link
const videoURL = 'https://youtu.be/xXMENclldzY?si=vIurlzSSOkOaYdFD';
const videoId = extractYouTubeID(videoURL);

const videoURL1 = 'https://youtu.be/KJxF6FzaF4I?si=NPahjyJOAEUt-44j';
const videoId1 = extractYouTubeID(videoURL1);

const videoURL2 = 'https://youtu.be/MxFyKEwLcVc?si=m_woIGxIzBayxFUr';
const videoId2 = extractYouTubeID(videoURL2);

if (videoId) {
    createYouTubeEmbed(videoId, 'video-container');
} else {
    console.error('Invalid YouTube URL');
}

if (videoId1) {
  createYouTubeEmbed(videoId1, 'video-container1');
} else {
  console.error('Invalid YouTube URL');
}

if (videoId2) {
  createYouTubeEmbed(videoId2, 'video-container2');
} else {
  console.error('Invalid YouTube URL');
}