var parent = new Promise((resolve, reject) => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then(Raw => {
            return Raw.json();
        })
        .then(Response => {
            if (Response.Year === 2017) { 
                resolve();
            } else {
                reject();
            }
        })
});
parent
    .then(() => {
        console.log("red button");
    })
    .catch(() => {
        console.log("green button");
    });
