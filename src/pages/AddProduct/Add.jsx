

const Add = () => {

    const handelAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const data = {name , photo}
        console.log(data);
        fetch("http://localhost:5000/brand" , {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data))

        form.reset();
    };

    return (
        <form onSubmit={handelAdd}>
            <input  className=" bg-slate-200" type="text" name="name" id="" /> <br />
            <input  className=" bg-slate-200" type="text" name="photo" id="" /> <br />
            <input type="submit" value="submit" />
        </form>
    );
};

export default Add;