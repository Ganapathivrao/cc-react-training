function List({ info }){
return (
    <>
        <ul>
        {info.map(function (details) {
         return(
            <li>
                <span>{details.first}</span>
                <span>{details.last}</span>
                <span>{details.age}</span>
                <span>{details.gender}</span>
            </li>
            );
            })}
         </ul>
    </>
);
}
export default List;