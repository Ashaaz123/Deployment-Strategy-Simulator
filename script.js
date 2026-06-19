function deploy() {

    const dev = document.getElementById("dev");
    const test = document.getElementById("test");
    const prod = document.getElementById("prod");
    const status = document.getElementById("status");

    status.innerHTML = "Deploying to Testing...";

    setTimeout(() => {
        test.innerHTML = dev.innerHTML;
        status.innerHTML = "Testing Successful!";
    }, 2000);

    setTimeout(() => {
        prod.innerHTML = test.innerHTML;
        status.innerHTML = "Deployment Successful 🚀";
    }, 4000);
}