async function onclicked(){
    let userData= await fetch("http://localhost:4000/list");
    console.log(userData);
}