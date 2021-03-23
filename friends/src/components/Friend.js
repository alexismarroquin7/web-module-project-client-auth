const Friend = ({ friend }) => {

    const { name, age, email } = friend;

    return (
    <>
    <div className="Friend">
        <h4>{name}</h4>
        <p>{age}</p>
        <p>{email}</p>
    </div>
    </>
    );
}
 
export default Friend;