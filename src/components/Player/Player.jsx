import styles from './player.module.scss'

export default function Player(props) {
    const {playerHealth, attack} = props;


    return (
        <div className={styles.root}>
            <div>
                <button onClick={attack}>player!</button>
                <label htmlFor='player-hp'>:HP {playerHealth}
                </label>
                <meter id='player-hp'
                    min="0" max="100"
                    optimum="100" high="67" low="33"
                    value={playerHealth}>{playerHealth}/100
                </meter>
            </div>
        </div>
    )

}