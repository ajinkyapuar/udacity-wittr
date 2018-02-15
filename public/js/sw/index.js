self.addEventListener('fetch', function (event) {
    // console.log("Fetch");
    // console.log(event.request);
    event.respondWith(
        new Response("Hello World!"), {
            headers: {
                'foo': 'bar'
            }
        }
    );
});