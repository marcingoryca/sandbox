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

loadScript('js/code.js', script => {
    hello();

    loadScript('js/code.js', function () {
        smile();
    });
});

