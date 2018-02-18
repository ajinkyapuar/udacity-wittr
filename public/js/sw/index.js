self.addEventListener('fetch', function (event) {
    // TODO: respond to all requests with an html response
    // containing an element with class="a-winner-is-me".
    // Ensure the Content-Type of the response is "text/html"
    // console.log(event.request);
    if (event.request.url.endsWith('.jpg')) {
        event.respondWith(
            fetch('/imgs/dr-evil.gif')
        );
    }
    // event.respondWith(
    //     new Response('<p class="a-winner-is-me">Hello</p>', {
    //         headers: {
    //             'Content-Type': 'text/html'
    //         }
    //     })
    // );
});