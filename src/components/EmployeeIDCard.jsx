
import { useState } from 'react'
import '../assets/css/emp-card.css'
const EmployeeIDCard = () => {

    const [empData, setData] = useState({
        firstName: 'Aman',
        lastName: 'Singh',
        profileImg: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1',
        qualifications: [
            'BTECH'
        ]
    })

    // OR 
    const [firstName, setFirstName] = useState('Aman')
    const [lastName, setLastName] = useState('Singh')
    const [profileImg, setProfileImg] = useState('pic_url')
    const [qualifications, setQualifications] = useState([])
    

    const updateData = (e) => {
        const value = e.target.value;
        console.log(value)

        setFirstName(value)
        // 2 args
        // 1 arg - all props of the object,
        // 2 arg - only the prop you want to update. 
        setData({...empData, firstName: value })

    }

    // OR do it individually
    // const [firstName, setFirstName] = useState(null)

    return (
        <div className="emp-container">
            <div className="emp-card">
                <img
                    src={empData.profileImg}
                    width={250}
                    height={250}
                    alt="img"
                />
                <h3> {firstName} {empData.lastName} </h3>
                <strong>Qualifications </strong>
                <ol>
                    <li> BTECH </li>
                </ol>
            </div>
            <div className="emp-form">
                <input
                    placeholder='Your First Name'
                    onChangeCapture={updateData}
                />

            </div>
        </div>
    )
}

export default EmployeeIDCard
