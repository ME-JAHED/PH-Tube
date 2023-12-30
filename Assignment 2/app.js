const sortByview=()=>
{
    fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then((res)=>res.json())
    .then((data) => {
        const sortedData = data.data.sort((a, b) => {
            const viewsA = parseFloat(a.others.views.replace("K")) * 1000;
            const viewsB = parseFloat(b.others.views.replace("K")) * 1000;
            return viewsB - viewsA;
        });

        displayData(sortedData);
    });
    
};
const allData=()=>
{
    fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then((res)=>res.json())
    .then((data)=>displayData(data.data));
    
};
const musicData=()=>
{
    fetch(`https://openapi.programming-hero.com/api/videos/category/${1001}`)
    .then((res)=>res.json())
    .then((data)=>displayData(data.data));
};
const comedyData=()=>
{
    fetch(`https://openapi.programming-hero.com/api/videos/category/${1003}`)
    .then((res)=>res.json())
    .then((data)=>displayData(data.data));
};
const verifySign = (verified) => 
{
    return verified ? '<i class="bi bi-patch-check-fill text-primary"></i>' : '';
};
const drawingData=()=>
{
    fetch(`https://openapi.programming-hero.com/api/videos/category/${1005}`)
    .then((res)=>res.json())
    .then((data)=>displayData(data.data));
};
const displayData=(data)=>
{
    const contentBox= document.getElementById("content-box");
    contentBox.innerHTML = '';
    if(data.length==0)
    {
        contentBox.innerHTML= `<div class="no-con">
        <img class="no-img" src="./Logos/icon.png" alt="picture">
        
        <h1>Sorry, There is no content</h1>
        </div>
        `
    }
    else
    {
        
        data.forEach( (data)=> {
        console.log(data);
        const card=document.createElement("div");
        card.classList.add("video-box")
        card.innerHTML=`
        <img class="thum-img" src="${data.thumbnail}" alt="">
        <h5 class="mt-2">${data.title}</h5>
        <div class="profile-title">
        
        <img class="pro-img" src="${data.authors[0].profile_picture}" alt="">
        
        <h6 >${data.authors[0].profile_name}</h6>
        ${verifySign(data.authors[0].verified)}
        </div>
        <h6 class="mt-3">${data.others.views} views</h6>`;

    contentBox.appendChild(card);
        
    });
    }
};

allData();