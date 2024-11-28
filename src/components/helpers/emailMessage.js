export const emailMessage = (data) => {
    console.log(data.date)
    const output = `
            <p><b>Type: ${data.type}</b></p> 

            <p><b>Client: </b></p>  
            <p>Email ${data.email}, Phone ${data.phone}${data.name ? `, Name ${data.name}` : ''}</p> 

            <p><b>Date/Time:</b> 
            <p> On ${data.date}, at ${data.time}${data.duration ? `, For ${data.duration}`: ''}</p>

            <p><b>Pick up address:</b></p> 
            <p> ${data.pick_up_address}</p> 

            <p><b>Drop-off address:</b> <br/></p> 
            <p> ${data.drop_off_address}</p> 

            <p><b>Passengers:</b> ${data.passengers}</p> 
            <p><b>Luggage:</b> ${data.luggage}</p>

            ${
                !data.stops ?
                ""
                :
                `
                <div style="margin-top: 20px">
                    ${
                    Object.entries(data.stops).map((stop, index) => {
                        return `
                            <p><b>Stop Nr ${index + 1}.<b/></p> 
                            <p>Stop in: ${stop[1].stop_in}</p> 
                            <p>Duration: ${stop[1].duration}</p> 
                            <p>Time: ${stop[1].time}</p> 
                        `
                        })
                    }
                </div>
                `
               
            }
        `;
    return output
}