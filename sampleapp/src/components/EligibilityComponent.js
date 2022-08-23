// function EligibleForDrivingLicense()
// {
//     return <h1>You are Eligible for Driving License</h1>
// }
const EligibleForDrivingLicense = () =>{
    return <h1>You are Eligible for Driving License</h1>
}
function CheckEligibility(props){
    return(
        <>
        <h1>Eligibility Form</h1>
        <p>{props.age>18 && <EligibleForDrivingLicense/>}</p>
        </>
    )
    // if(props.age>18){
    //     return <EligibleForDrivingLicense/>
    // }
    // return null;
}
export default CheckEligibility