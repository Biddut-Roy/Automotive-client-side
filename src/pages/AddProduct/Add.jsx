

const Add = () => {

    const handelAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const data = {name , photo , details}
        console.log(data);
        fetch("http://localhost:5000/top3" , {
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
            <input  className=" bg-slate-200" type="text" name="photo" id=""  placeholder=" img"/> <br />
            <textarea name="details" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="submit" />
        </form>
    );
};

export default Add;