

const Contacto=()=>{
    return(
        <div className="divContact">
            <h2>
                Tell us, how we can help you?
            </h2>
            <image src="" alt=""/>
            <form>
                <label>Email</label>
                <input type="email" placeholder="Enter email..." />
                <label>Description</label>
                <input type="text" placeholder="Enter message"></input> 
            </form>
            <a href="https://github.com/JoseLuisRiquelme/React_Router_one" className="code" target="_blank" rel="noreferrer">Link to code</a>
            <img src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="hands" className="contactPic"/>
        </div>
    )
}

export default Contacto;