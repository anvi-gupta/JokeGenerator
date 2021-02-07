const button=document.getElementById("button");
const joke=document.getElementById("jokeContent");
const punchline=document.getElementById("joke");

button.onclick=()=>{
  axios.get('https://official-joke-api.appspot.com/random_joke')
  .then(function(response){
    button.textContent="Next";
    punchline.textContent="";
    joke.textContent=response.data.setup;
    setTimeout(function(){
      punchline.textContent=response.data.punchline;
    },1500);
  })
  .catch(function(error){
    console.log(error);
  })
}
