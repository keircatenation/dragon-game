import styles from './enemy.module.scss'
import Dragon from '../Dragon/Dragon'
import { useEffect } from 'react/cjs/react.production.min';

export default function Enemy(props) {
    const {enemyHealth} = props;

    return (
        <div className={styles.root}>
            <div>
                <label htmlFor='enemy-hp'>HP: {enemyHealth}
                </label>
                <meter id='enemy-hp'
                    min="0" max="100"
                    optimum="100" high="67" low="33"
                    value={enemyHealth}>{enemyHealth}/100
                </meter>
                <div>
                    <Dragon/>
                </div>
            </div>
        </div>
    )

}