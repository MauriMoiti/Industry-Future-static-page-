export function footerFacadeYoutube() {
    $("footer").on('click', '.youtube-facade', function() {
        var $this = $(this);
        var videoId = $this.data('video-id');
        var iframeSrc = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';

        // img hidden 
        $this.find('.youtube-thumbnail').hide();

        // Set the src of iframe and display it
        $this.find('iframe').attr('src', iframeSrc).show();
    });
}