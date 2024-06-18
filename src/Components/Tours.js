import Card from './Card'

function Tours({tours, removeTour})
{
return(

    <div className='container'>
        <div className='title'>
            <h2>Plan with Us</h2>
        </div>
        <div className='cards'>
            {
                tours.map( (tour) => {
                    // here this will work properly but will show warning at console because no key is passed in map function.. so we will pass key to remove this warning as key={tours.id} ....if an object has no unique key in it so we pass key={index} although writing {index} is not a good practise 
                        return <Card key={tour.id} {...tour} removeTour ={removeTour} ></Card>
                    } )
            }
        </div>
    </div>

 );
}

export default Tours;