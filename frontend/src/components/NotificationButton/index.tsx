import icon from '../../assets/img/notification-icon-green.svg'
import './styles.css'

function NotificationButton() {
    return (
        <div className="dsmeta-green-btn">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton
