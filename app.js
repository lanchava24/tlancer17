function getValue(){
    let capacity = document.getElementById(`capacity`).value;
    let startYear = document.getElementById(`startYear`).value;
    let endYear = document.getElementById(`endYear`).value;
    let carCity = document.getElementById(`carCity`).value;

    const _baseUrl1 = `https://rentcar.webwide.ge/api/Car/filter?capacity=`;
    const _baseUrl2 = `&startYear=`;
    const _baseUrl3 = `&endYear=`;
    const _baseUrl4 = `&city=`;
    const _paramsUrl = `&pageIndex=1&pageSize=10`;
    const _formedUrl = `${_baseUrl1}${capacity}${_baseUrl2}${startYear}${_baseUrl3}${endYear}${_baseUrl4}${carCity}${_paramsUrl}`;

    fetch(_formedUrl, {
        method: `GET`,
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        
        data.data.forEach((car) =>  {
            document.write(`<h2>${car.brand} ${car.model} ${car.year}</h2>`)
            document.write (`<img src="${car.imageUrl1}">`)
        })
    })

}
