document.querySelector('#movie-btn').addEventListener('click', loadMovie);
document.querySelector('#movies-btn').addEventListener('click', loadMovies);
const content = document.querySelector('.content');

function loadMovie(e){
 
    //Create xhr object
    const xhr = new XMLHttpRequest();
    //Open movie file
    xhr.open('GET','movie.json',true);
    //Onload
    xhr.onload = function(){     
        if(this.status === 200){
           const movie = JSON.parse(this.responseText); 
            content.classList.remove('container','mx-auto','grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-4','gap-4')
            content.innerHTML = `
            <div style ="background-color: #032e42; opacity: .8;" class="container mx-auto text-gray-200 rounded shadow  p-6 w-4/5 md:w-1/2">
                <h1 class="text-center font-semibold text-4xl mb-4">${movie.title}</h1>
                <div class="overview mb-4">
                    ${movie.overview}
                </div>
                <div class="flex items-center justify-between">
                    <div>
                        <span><i class="fa fa-star text-yellow-400"></i></span>
                        Rating: ${movie.vote_average}
                    </div>
                    <div>
                        Released: ${movie.release_date}
                    </div>
                </div>
              </div>
            `;

        }
    }
    //Send
    xhr.send();
}

//Load Movies
function loadMovies(e){
  
    //Create xhr object
    const xhr = new XMLHttpRequest();
    //Open movie file
    xhr.open('GET','movies.json',true);
    //Onload
    xhr.onload = function(){     
        if(this.status === 200){
            //Clear content
            clearContent();
            //Grab movies 
           const movies = JSON.parse(this.responseText); 
           //Generate content

           let output = '';
             movies.forEach(movie => {
                output += `
                <div style ="background-color: #032e42; opacity: .8;" class="text-gray-200 rounded shadow p-6">
                <h1 class="font-semibold text-xl mb-4">${movie.title}</h1>
                <div class="overview mb-4 ">
                    ${movie.overview.substr(0, 100)+ '....'}
                </div>
                <div class="flex items-center justify-between">
                    <div>
                        <span><i class="fa fa-star text-yellow-400"></i></span>
                        Rating: ${movie.vote_average}
                    </div>
                    <div>
                        Released: ${movie.release_date}
                    </div>
                </div>
              </div>
                `;
             });
        
            content.classList.add('mx-4','grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-2','lg:grid-cols-4','gap-4');

            content.innerHTML = output
            
            
        }
    }
    //Send
    xhr.send();
}

function clearContent()
{
    content.innerHTML = '';
}