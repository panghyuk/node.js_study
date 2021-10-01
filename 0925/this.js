console.log(this); //global X
console.log(this === module.exports)

function a() {
    console.log(this === global);
}

a();