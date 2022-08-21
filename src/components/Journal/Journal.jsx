// this will be a record of the player's "kills"

export default function Journal(props) {
    const {journal} = props;
    const haveRecords = journal.length > 0? true : false;

    // journal is an array of all monsters killed

    return (
        <div>
            <h2>Journal</h2>
            {!haveRecords && <p>Go and fight some enemies! When you have, they will be recorded here.</p>}
            {
                journal.map((entry, index) => {
                    return (
                        <h3 key={index}>{entry.name}</h3>
                    )
                })
            }
        </div>
    )

}