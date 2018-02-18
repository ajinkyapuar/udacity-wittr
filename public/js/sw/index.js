self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request).then(function (response) {
            if (response.status === 404) {
                // TODO: instead, respond with the gif at
                // /imgs/dr-evil.gif
                // using a network request
                // event.respondWith(
                return fetch('/imgs/dr-evil.gif')
                // );
                // return new Response("Whoops, not found");
            }
            return response;
        }).catch(function () {
            return new Response("Uh oh, that totally failed!");
        })
    );
});