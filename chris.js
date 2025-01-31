// fetchData();

async function fetchData() {
    try{
        
        const dogName1 = document.getElementById("dogName").value.toLowerCase();
        const response = await fetch(`https://dog.ceo/api/breed/${dogName1}/images/random`);

        if(!response.ok){
            throw new Error("Could not get the Image!");
        }

        const data = await response.json();
        const dogImg = data.message;
        const imgElement = document.getElementById('dogImage');

        imgElement.src = dogImg;
        imgElement.style.display = 'block';

    }
    catch(error){
        console.error(error);
    }
}