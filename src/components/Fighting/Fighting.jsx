import s from './fighting.module.scss'

export default function Fighting(props) {
    const {damage} = props;

    return (
        <div className={s.root}>
            {
                damage.num ? <p>You attack!</p> : <p>You missed :(</p>
            }
            <p>{damage.message? damage.message : ""}</p>
            <p>{damage.num? damage.num : ""}</p>
        </div>
    )

}