//React core
import React from 'react';

/**
 * Card component - represents every package and displays 
 * its details and state based on the data props
*/
export default function Card({ data }) {

    const {
        id,
        status,
        eta,
        parcel_id,
        sender,
        verification_required,
        location_id,
        location_name,
        location_coordinate_latitude,
        location_coordinate_longitude,
        location_status_ok,
        user_phone,
        user_name,
        notes,
        last_updated
    } = data;

    /**
     * Takes in an dateArray and returns a string with date
     * in a readable format
     * @param {array} array with date
     * @returns {string} date
     */
    function transformDate(array) {
        const day = JSON.stringify(array[0]);
        const hour = JSON.stringify(array[1]);

        const dayTrimmed = day.substring(3, day.length - 1);
        const hourTrimmed = hour.substring(1, hour.length - 4);

        return dayTrimmed + ' at ' + hourTrimmed;
    }

    //Takes the date from the JSON file and splits it to an array
    const dateArray = JSON.stringify(eta).split('T');
    const date = transformDate(dateArray);

    const lastUpdatedArray = JSON.stringify(eta).split('T');
    const lastUpdated = transformDate(lastUpdatedArray);
    return (
        <article className="card">
            <span>Package id: </span>
            <span className="data">{parcel_id}</span>
            <br />
            <hr />
            <span>Status: </span>
            <span className="data">{status}</span>
            <br />
            <hr />
            <span>User name: </span>
            <span className="data">{user_name}</span>
            <br />
            <hr />
            <span>Estimated time of arrival:</span>
            <br />
            <span className="data">{date}</span>
            <br />
            <hr />
            <span>Sender: </span>
            <span className="data">{sender}</span>
            <br />
            <hr />
            <span>Verification: </span>
            <span className="data">
                {JSON.stringify(verification_required) == "true" ?
                    "required"
                    :
                    "not required"}
            </span>
            <br />
            <hr />
            <span>Location: </span>
            <br/>
            <span className="data">{location_name}</span>
            <br/>
            <span className = "data">
                {location_coordinate_latitude}, {location_coordinate_longitude}
            </span>
            <br/>
            <hr/>
            <span>Notes: </span>
            <br/>
            <span className="data">{notes}</span>
            <br/>
            <hr/>
            <span>Last updated: </span>
            <br/>
            <span className="data">{lastUpdated}</span>
        </article>
    );
}