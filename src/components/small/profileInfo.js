export default function ProfileInfo (props) {
    const interests = ["fantasy", "Sci-Fy", "Horror"];
    return (
        <div className="profileInfo P3" >
            <div>
            <div className="flex profileInfoItem" >
                <h2>Preferred Name</h2>
                <h2>Ximena</h2>
            </div><hr></hr>

            <div className="flex profileInfoItem" >
                <h2>Name</h2>
                <div className="flex">
                    <h2>First</h2>
                    <h2>Last</h2>
                </div>
            </div><hr></hr>

            <div className="flex profileInfoItem" >
                <h2>Mail</h2>
                <h2>Mail</h2>
            </div><hr></hr>
            </div>
                <h2>Bio</h2>
                <p>A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin.</p>
            <div>
            <div>
                <h2>Interests</h2>
                {interests.map((interest)=>
                    <li key={interest} 
                    className="pill"
                    style={{backgroundColor:"#8eaf67"}}>{interest}</li>)}

            </div>

            </div>
        </div>
    )

};