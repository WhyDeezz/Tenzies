export default function Grid(props)
{
    return(
        <button className="grid" onClick={props.roll}>{props.number}</button>
    )
}