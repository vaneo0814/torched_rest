import React from 'react';

function Safety() {
    return (
        <div className="genBackground">
            <div className="safetyImg">
                <img className="covidImg" src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/09/Waiter_Patron_Food_Mask_1296x728-header-1296x729.jpg?w=1155&h=2268" width="800" alt="safetyServer" />
            </div>
            <div className="safetyContent">
                <h1 className="safetyHeader">
                    Safety First
                </h1>
                <p className="safetyInfo">
                    The world has changed. Our number one priority is keeping our guests and staff safe. We abide by the standards set forth by the CDC, WHO, and NYC government. Below are just a few of the precautions we’re implementing to ensure everyone’s wellbeing.
                </p>
            </div>
            <div className="row checklistContainer">
                <div className="col">
                    <h4 className="headerCheckList">
                        Social Distancing
                    </h4>
                    <p className="safetyCheckList">
                        We are no longer seating guests at communal tables. Each party will be seated separately, at least six feet from the next.
                </p>

                </div>
                <div className="col">
                    <h4 className="headerCheckList">
                        Health Checks
                    </h4>
                    <p className="safetyCheckList">
                        Every person (staff + guests) entering our space will have their temperature taken on arrival and will need to sign a health waiver indicating they are free of all COVID symptoms.
                </p>

                </div>
                <div className="col">
                    <h4 className="headerCheckList">
                        Safety Equipment
                    </h4>
                    <p className="safetyCheckList">
                        As required by city and state guidelines, all guests will be required to wear a mask at all times except when seated at their table. Staff will be wearing masks and gloves at all times.
                </p>
                </div>
                <div className="col">
                    <h4 className="headerCheckList">
                        Enhanced Cleaning
                    </h4>
                    <p className="safetyCheckList">
                        In addition to our pre-existing cleaning protocol, we have consulted with experts to make additional enhancements. This includes food sanitation, frequent disinfecting of high-touch surfaces, and providing each guest with hand sanitizer.
                </p>
                </div>

            </div>

        </div>
    )
}
export default Safety;