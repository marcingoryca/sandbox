/*Promise.resolve()
.then(() => alert('code initiated'))
.then(() => alert('code ended'));*/

function loadScript(src, callback)
{   
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.body.append(script);
}

loadScript('fetch2.js', script => {
    hello();

    loadScript('fetch2.js', function () {
        smile();
    });
});

