function checkClassname(str) {
    let regexp=/^[CAP]+([0-9]{4})+([G-M]$)/;
    return regexp.test(str);
}
console.log(checkClassname("C0318G"));
console.log(checkClassname("P0323A"));