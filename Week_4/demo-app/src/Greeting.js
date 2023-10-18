function Greeting(props)
{

    function toggleColor(e)
    {
        const currentClass = e.target.className;

        if (currentClass === "defaultColor")
        {
            e.target.className = "redColor";
        }
        else
        {
            e.target.className = "defaultColor";
        }
    }

    return (
        <h1>Hello World from Greeting! {props.name ? props.name : "Default"}</h1>
    );
}

export default Greeting;